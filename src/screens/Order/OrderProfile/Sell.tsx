import { useEffect } from "react";
import { apiService } from "@/components/APIService/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";

declare global {
  interface Window {
    Razorpay: any;
  }
}

interface SellProps {
  warehouseData: WarehouseData;
}

interface WarehouseData {
  _id: string;
  totalPrice: number;
}

// interface OrderResponse {
//   razorpayOrderId: string;
//   amount: number;
//   currency: string;
// }

const loadRazorpayScript = () => {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    document.body.appendChild(script);
  });
};

const createOrder = async (warehouseId: string, duration?: number) => {
  try {
    // Sending a request to create an order
    const response = await apiService.post<{
      data: { order: any; payment: any };
    }>(
      `/order/create/${warehouseId}`,
      {
        duration,
      },
      {
        withCredentials: true,
      }
    );

    // Check if response contains data and the razorpayOrderId
    const order = response.data?.order;
    const payment = response.data?.payment;

    console.log("Order response:", response); // Log the complete response for debugging

    // Check if Razorpay is loaded and the order data is available
    if (window.Razorpay && payment?.razorpayOrderId) {
      const options = {
        key: "rzp_test_u4a2EVKlaHtY6X", // Your Razorpay key
        amount: order.totalPrice, // Convert to paise (subunits of INR)
        currency: "INR", // Ensure currency is INR
        name: "BookMyWarehouse",
        image: "https://bookmywarehouse.co/logo1.png",
        description: "Payment for warehouse purchase",
        order_id: payment.razorpayOrderId, // Use razorpayOrderId from payment object
        handler: function (response: any) {
          verifyPayment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          );
        },
        prefill: {
          name: order.customerDetails.name,
          email: order.customerDetails.email,
          contact: order.customerDetails.phone, // Can update with actual contact info
        },
        notes: {
          address: "customer address",
        },
      };

      console.log("Razorpay options:", options); // Log the Razorpay options for debugging

      // Open Razorpay checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } else {
      console.error("Razorpay is not loaded or order data is missing.");
    }
  } catch (error) {
    console.error("Error creating order:", error);
  }
};

const verifyPayment = async (
  razorpayPaymentId: string,
  razorpayOrderId: string,
  razorpaySignature: string
) => {
  try {
    const response = await apiService.post("/transaction/verify", {
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    });
    console.log("Payment verified:", response);
  } catch (error) {
    console.error("Error verifying payment:", error);
  }
};

export const Sell = ({ warehouseData }: SellProps) => {
  useEffect(() => {
    // Load Razorpay script dynamically when the component mounts
    loadRazorpayScript().catch((error) => {
      console.error("Error loading Razorpay script:", error);
    });
  }, []);

  const handleBuy = () => {
    // Trigger the order creation process
    createOrder(warehouseData._id); // You can add duration if it's for rental
  };

  return (
    <>
      {/* Rent Section */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faIndianRupee} />
              <p className="text-xl font-normal">{warehouseData.totalPrice}</p>
            </div>

            <p className="text-sm text-gray-600 underline">
              Payment estimation
            </p>
          </div>
          <button
            className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium"
            onClick={handleBuy}
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
};
