import WHNavbar from "@/components/common/WHNavbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiService } from "@/components/APIService/ApiService";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
// import { useNavigate } from "react-router-dom";
// Define interfaces for data structures
interface PriceDetail {
  title: string;
  amount: number;
  isMonthly: boolean;
  _id: string;
}

interface WarehouseDetail {
  name: string;
  address: string;
  city: string;
  pincode: number;
  state: string;
  country: string;
  areaSqFt: string;
  price: PriceDetail[];
}

interface OrderData {
  duration: number;
  startDate: string;
  endDate: string;
  WarehouseDetail: WarehouseDetail;
  totalPrice: number;
  monthlyAmount: number;
  totalDiscount: number;
}

// Declare Razorpay globally
declare global {
  interface Window {
    Razorpay: any;
  }
}

// Load Razorpay script dynamically
const loadRazorpayScript = () => {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = (error) => reject(error);
    document.body.appendChild(script);
  });
};

// Payment function to handle Razorpay integration
const payment = async (orderId: string, monthlyAmount: number) => {
  try {
    if (!orderId) {
      console.error("Order ID is missing.");
      return;
    }

    // Fetch order details
    const orderDetail = await apiService.get<{
      data: { order: any; payment: any };
    }>(`/order/deatil/${orderId}`, {
      withCredentials: true,
    });

    const order = orderDetail.data?.order?.order;
    const transaction = orderDetail.data?.order?.transaction;

    if (!order || !transaction) {
      console.error("Order or transaction details are missing.");
      return;
    }

    if (!transaction.razorpayOrderId) {
      console.error("Payment not initiated. Razorpay Order ID is missing.");
      return;
    }

    // Check if Razorpay is available
    if (!window.Razorpay) {
      console.error("Razorpay SDK not loaded.");
      return;
    }
    console.log(monthlyAmount);
    // Razorpay payment options
    const options = {
      key: "rzp_test_u4a2EVKlaHtY6X",
      amount: monthlyAmount * 100, // Convert to paise
      currency: "INR",
      name: "BookMyWarehouse",
      image: "https://bookmywarehouse.co/logo1.png",
      description: "Payment for warehouse purchase",
      order_id: transaction.razorpayOrderId, // Razorpay Order ID
      handler: function (response: any) {
        verifyPayment(
          response.razorpay_payment_id,
          response.razorpay_order_id,
          response.razorpay_signature,
          orderId
        );
      },
      prefill: {
        name: order.customerDetails?.name || "",
        email: order.customerDetails?.email || "",
        contact: order.customerDetails?.phone || "",
      },
      notes: {
        address: order.WarehouseDetail?.address || "N/A",
      },
    };

    // Open Razorpay checkout
    const razorpay = new window.Razorpay(options);
    console.log("Razorpay options:", options);
    razorpay.open();
  } catch (error) {
    console.error("Error initiating payment:", error);
  }
};

// Verify payment after successful transaction
const verifyPayment = async (
  razorpayPaymentId: string,
  razorpayOrderId: string,
  razorpaySignature: string,
  orderId: string
) => {
  try {
    const response = await apiService.post("/transaction/verify", {
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    });
    console.log("Payment verified:", response);
    window.location.href = `/order-info/${orderId}`;
  } catch (error) {
    console.error("Error verifying payment:", error);
  }
};

// Main component for the product buy page
export const ProductBuyPage = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchedOrderData, setFetchedOrderData] = useState<OrderData | null>(
    null
  );
  // const navigate = useNavigate();

  // Fetch order data on component mount
  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        setIsLoading(true);
        const response = await apiService.get<{
          data: { order: { order: OrderData } };
        }>(`/order/deatil/${orderId}`);

        setFetchedOrderData(response.data.order.order);
      } catch (error) {
        setError("Failed to fetch order data");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (orderId) {
      fetchOrderData();
    }
  }, [orderId]);

  // Format date using dayjs
  const formatDate = (date: string) => dayjs(date).format("DD MMM YYYY");

  // Load Razorpay script on component mount
  useEffect(() => {
    loadRazorpayScript().catch((error) => {
      console.error("Error loading Razorpay script:", error);
    });
  }, []);

  // Handle rent button click
  const handleRent = () => {
    if (orderId && fetchedOrderData?.monthlyAmount) {
      payment(orderId, fetchedOrderData.monthlyAmount);
    }
  };

  return (
    <>
      <WHNavbar dark />
      {isLoading ? (
        <div className="flex items-center justify-center h-[300px]">
          <ClipLoader size={50} color="#6b46c1" />
        </div>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="w-full max-w-[1100px] h-auto mt-20 mx-auto relative bg-white overflow-hidden p-6">
          {/* Product Details Section */}
          <div className="w-full h-auto p-6 mt-6 bg-white rounded-[10px] shadow-[0px_24px_96px_0px_rgba(67,67,67,0.15)] flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-[200px] h-auto rounded-tl-[10px] rounded-bl-[10px] overflow-hidden">
              <img
                className="w-full h-full rounded-[13.50px]"
                src="https://images.ctfassets.net/ksxncq3aj87t/1dD7ZLyLxS4OuprJPfGCVK/8c31e984a8bf346d0b66ff9342f62604/warehouse_setup_1.png?w=892&h=595&q=50&fm=png"
                alt="Warehouse"
              />
            </div>
            <div className="flex flex-col gap-4 flex-grow">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 bg-[#ffbf75] rounded-full" />
                  <div>
                    <span className="text-[#1a1e25] text-xs font-normal leading-3">
                      4.8
                    </span>
                    <span className="text-[#7d7f88] text-xs font-normal leading-3">
                      (73)
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="text-[#1a1e25] text-lg font-semibold leading-tight">
                    {fetchedOrderData?.WarehouseDetail.name}
                  </div>
                  <div className="text-[#7d7f88] text-sm font-normal leading-[16.90px] tracking-tight">
                    {fetchedOrderData?.WarehouseDetail.address},{" "}
                    {fetchedOrderData?.WarehouseDetail.city},{" "}
                    {fetchedOrderData?.WarehouseDetail.pincode},{" "}
                    {fetchedOrderData?.WarehouseDetail.state},{" "}
                    {fetchedOrderData?.WarehouseDetail.country},{" "}
                  </div>
                </div>
              </div>
              <div className="text-[#1a1e25] text-xl font-semibold leading-normal tracking-tight">
                <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                {fetchedOrderData?.monthlyAmount}{" "}
                <span className="text-[#7d7f88] text-sm">/ month</span>
              </div>
            </div>
          </div>

          {/* Input Details Section */}
          <div className="w-full h-auto mt-6 flex flex-col md:flex-row gap-6">
            {/* Policies Section */}
            <div className="w-[500px] h-auto p-6  rounded-[10px] ">
              <div className="bg-[#fdfdfd] shadow-[0px_24px_96px_0px_rgba(67,67,67,0.15)] p-4 mb-2 rounded-[10px] -mt-4">
                <div className="flex justify-between items-center">
                  <div className="text-black text-xl font-semibold leading-relaxed tracking-tight">
                    Your input details
                  </div>
                </div>
                <div className="flex flex-col gap-6 mt-4">
                  <div className="flex flex-col gap-2">
                    <div className="text-[#1a1e25] text-base font-semibold leading-none tracking-tight">
                      Duration : {fetchedOrderData?.duration} Month
                    </div>
                    <div className="text-[#7d7f88] text-lg font-normal leading-[18px] tracking-tight">
                      {formatDate(fetchedOrderData?.startDate || "")} -{" "}
                      {formatDate(fetchedOrderData?.endDate || "")}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="text-[#1a1e25] text-base font-semibold leading-none tracking-tight">
                      Area
                    </div>
                    <div className="text-[#7d7f88] text-lg font-normal leading-[18px] tracking-tight">
                      {fetchedOrderData?.WarehouseDetail?.areaSqFt} m²
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[200px] mt-4 md:w-1/2 h-auto p-6 bg-[#fdfdfd] rounded-[10px] shadow-[0px_24px_96px_0px_rgba(67,67,67,0.15)]">
                <div className="flex justify-between items-center">
                  <div className="whitespace-nowrap text-black text-xl font-semibold leading-relaxed tracking-tight">
                    Read other policies
                  </div>
                </div>
              </div>
            </div>
            {/* Price Details Section */}
            <div className="w-full md:w-1/2 h-auto p-6 bg-[#fdfdfd] rounded-[10px] shadow-[0px_24px_96px_0px_rgba(67,67,67,0.15)]">
              <div className="flex justify-between items-center">
                <div className="text-black text-xl font-semibold leading-relaxed tracking-tight">
                  Price details
                </div>
                <div className="text-right text-[#907afc] text-sm font-medium leading-[14px] tracking-tight">
                  More info
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-4">
                {fetchedOrderData?.WarehouseDetail.price.map((priceItem) => (
                  <div key={priceItem._id} className="flex justify-between">
                    <div className="text-[#7d7f88] text-base font-normal leading-tight tracking-tight">
                      {priceItem.title}
                    </div>
                    <div className="text-[#1a1e25] text-base font-normal leading-tight tracking-tight">
                      <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                      {priceItem.amount}
                      {priceItem.isMonthly && " / month"}
                    </div>
                  </div>
                ))}
                <div className="flex justify-between">
                  <div className="text-[#1a1e25] text-base font-semibold leading-tight tracking-tight">
                    Total Discount
                  </div>
                  <div className="text-right text-green-500 text-base font-semibold leading-tight tracking-tight">
                    - <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                    {fetchedOrderData?.totalDiscount}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[#1a1e25] text-base font-semibold leading-tight tracking-tight">
                    Total price
                  </div>
                  <div className="text-right text-[#907afc] text-base font-semibold leading-tight tracking-tight">
                    <FontAwesomeIcon icon={faIndianRupeeSign} />{" "}
                    {fetchedOrderData?.totalPrice}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Place Booking Request Button */}
          <div className="w-full flex justify-center mt-6" onClick={handleRent}>
            <div className="w-full max-w-xl h-14 bg-gradient-to-br from-[#907afc] to-[#6246ea] rounded-[54px] flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity px-4">
              <span className="text-[#fdfdfd] text-lg font-semibold mr-2">
                Place booking with
              </span>
              <div className="flex items-center text-white text-xl font-semibold tracking-tight">
                <FontAwesomeIcon icon={faIndianRupeeSign} className="mr-1" />
                {fetchedOrderData?.monthlyAmount}
                <span className="text-white text-sm ml-1">/ month</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
