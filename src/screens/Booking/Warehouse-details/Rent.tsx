import { useState } from "react";
import { apiService } from "@/components/APIService/ApiService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
declare global {
  interface Window {
    Razorpay: any;
  }
}

interface RentProps {
  warehouseData: WarehouseData;
}

interface WarehouseData {
  _id: string;
  monthlyAmount: number;
}

// Function to create an order and return the order ID
const createOrder = async (warehouseId: string, duration?: number) => {
  try {
    const response = await apiService.post<{
      data: { order: { _id: string }; payment: any };
    }>(`/order/create/${warehouseId}`, { duration }, { withCredentials: true });

    console.log("Order response:", response);

    // Extract orderId correctly
    return response.data.order._id;
  } catch (error) {
    console.error("Error creating order:", error);
    return null;
  }
};

export const Rent = ({ warehouseData }: RentProps) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleRent = async () => {
    setLoading(true);
    const orderId = await createOrder(warehouseData._id, count);
    if (orderId) {
      handleWarehouseClick(orderId);
    } else {
      alert("Failed to create order. Please try again.");
    }
    setLoading(false);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    if (count < 12) {
      setCount(count + 1);
    }
  };

  const handleWarehouseClick = (orderId: string) => {
    navigate(
      `/warehouse-profile/${warehouseData._id}/ProductBuyPage/${orderId}`
    );
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 w-full bg-white p-2 md:p-4 shadow-lg">
        <div className="flex flex-wrap justify-between items-center gap-2 md:gap-4">
          {/* Rent Amount */}
          <div className="flex flex-col items-center md:items-start text-sm md:text-base">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faIndianRupee}
                className="text-xs md:text-sm"
              />
              <p className="font-medium">{warehouseData.monthlyAmount}/month</p>
            </div>
            <p className="text-xs text-gray-600 underline">
              Payment estimation
            </p>
          </div>

          {/* Month Selection */}
          <div className="flex items-center space-x-1 md:space-x-2 p-1 rounded-lg w-full md:w-fit justify-center">
            <button
              onClick={handleDecrement}
              className="px-2 py-1 md:px-3 md:py-1 bg-white text-black rounded-lg border text-xs md:text-sm"
            >
              -
            </button>
            <span className="text-sm md:text-lg font-semibold w-24 text-center">
              {count} Month
            </span>
            <button
              onClick={handleIncrement}
              className="px-2 py-1 md:px-3 md:py-1 bg-white text-black rounded-lg border text-xs md:text-sm"
            >
              +
            </button>
          </div>

          {/* Rent Button */}
          <button
            className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium text-sm md:text-base w-full md:w-auto"
            onClick={handleRent}
            disabled={loading}
          >
            {loading ? <ClipLoader color="#ffffff" size={18} /> : "Rent"}
          </button>
        </div>
      </div>
    </>
  );
};
