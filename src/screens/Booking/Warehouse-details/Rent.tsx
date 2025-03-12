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

  // Function to handle rent button click
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

  // Function to decrement month count
  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Function to increment month count
  const handleIncrement = () => {
    if (count < 12) {
      setCount(count + 1);
    }
  };

  // Function to navigate to the order details page
  const handleWarehouseClick = (orderId: string) => {
    navigate(
      `/warehouse-profile/${warehouseData._id}/ProductBuyPage/${orderId}`
    );
  };

  return (
    <>
      {/* Rent Section */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg">
        <div className="flex justify-between items-center">
          {/* Display Monthly Rent Amount */}
          <div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faIndianRupee} />
              <p className="text-xl font-normal">
                {warehouseData.monthlyAmount}/month
              </p>
            </div>
            <p className="text-sm text-gray-600 underline">
              Payment estimation
            </p>
          </div>

          {/* Month Selection Buttons */}
          <div className="flex items-center space-x-2 p-2 rounded-lg w-fit">
            <button
              onClick={handleDecrement}
              className="px-3 py-1 bg-white text-black rounded-lg border"
            >
              -
            </button>
            <span className="text-lg font-semibold w-32 text-center">
              Month : {count}
            </span>
            <button
              onClick={handleIncrement}
              className="px-3 py-1 bg-white text-black rounded-lg border"
            >
              +
            </button>
          </div>

          {/* Rent Button */}
          <button
            className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium"
            onClick={handleRent}
            disabled={loading}
          >
            {loading ? <ClipLoader color="#ffffff" size={20} /> : "Rent"}
          </button>
        </div>
      </div>
    </>
  );
};
