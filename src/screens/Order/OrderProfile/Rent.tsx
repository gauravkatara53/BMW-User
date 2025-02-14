import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpAZ, faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { apiService } from "@/components/APIService/ApiService";

declare global {
  interface Window {
    Razorpay: any;
  }
}

// Load Razorpay script dynamically
const loadRazorpayScript = () => {
  return new Promise<void>((resolve, reject) => {
    if (window.Razorpay) return resolve(); // Avoid duplicate script loading

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    document.body.appendChild(script);
  });
};

interface RentProps {
  orderData: any;
}

export const Rent = ({ orderData }: RentProps) => {
  const Order = orderData?.order;
  const [loading, setLoading] = useState(false);

  // Find the first unpaid month
  const unpaidMonth = Order?.monthlyPayment?.find(
    (payment: any) => payment.paymentStatus === "Unpaid"
  );

  useEffect(() => {
    loadRazorpayScript();
  }, []);

  // Function to initiate rent payment
  const handleRent = async () => {
    if (!Order || !unpaidMonth) {
      console.error("No unpaid rent found");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Create Razorpay Order via Backend
      const response = await apiService.post<{
        data: { updatedOrder: any; razorpayOrder: any; transaction: any };
      }>(`/transaction/montly/rent/${Order._id}`, {});

      const { updatedOrder, razorpayOrder, transaction } = response.data;

      if (!updatedOrder?.monthlyAmount) {
        console.error(
          "Error: monthlyAmount is missing in API response",
          updatedOrder
        );
        return;
      }

      // Step 2: Configure Razorpay Payment Modal
      const options = {
        key: "rzp_test_u4a2EVKlaHtY6X",
        amount: updatedOrder.monthlyAmount * 100, // Convert to paise
        currency: "INR",
        name: "BookMyWarehouse",
        image: "https://bookmywarehouse.co/logo1.png",
        description: `Payment for ${unpaidMonth.month} rent`,
        order_id: razorpayOrder.id, // Razorpay Order ID from backend
        handler: async function (response: any) {
          await verifyPayment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          );
        },
        prefill: {
          name: Order.customerDetails?.name || "",
          email: Order.customerDetails?.email || "",
          contact: Order.customerDetails?.phone || "",
        },
        notes: {
          address: Order.WarehouseDetail?.address || "N/A",
        },
      };

      // Step 3: Open Razorpay Checkout
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to verify Razorpay payment after success
  const verifyPayment = async (
    razorpayPaymentId: string,
    razorpayOrderId: string,
    razorpaySignature: string
  ) => {
    try {
      const response = await apiService.post("/transaction/verify/rent", {
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
      });

      console.log("Payment verified:", response);
    } catch (error) {
      console.error("Error verifying payment:", error);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Display Monthly Rent Amount */}
        <div>
          {unpaidMonth ? (
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faIndianRupee} />
              <p className="text-xl font-normal">{unpaidMonth.amount}</p>
            </div>
          ) : (
            <p className="text-xl font-normal"></p>
          )}

          {unpaidMonth?.month && (
            <p className="text-sm text-gray-600 underline">
              {unpaidMonth.month} Month
            </p>
          )}
        </div>

        {/* Rent Button */}
        {unpaidMonth?.month && (
          <button
            className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium disabled:opacity-50"
            onClick={handleRent}
            disabled={loading}
          >
            {loading ? "Processing..." : "Pay"}
          </button>
        )}
      </div>
    </div>
  );
};
