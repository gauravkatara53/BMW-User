import { useEffect, useState } from "react";
import { apiService } from "@/components/APIService/ApiService";
import WHNavbar from "@/components/common/WHNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa"; // Import calendar icon

interface RentalOrder {
  _id: string;
  orderId: string;
  customerName: string;
  startDate: string;
  endDate: string;
  status: string;
  imageUrl: string;
  address: string;
  paymentDay: number;
  duration: number;
  WarehouseDetail: {
    name: string;
    address: string;
    thumbnail: string;
    city: string;
    state: string;
  };
}

const RentalOrder = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<RentalOrder[]>([]);
  // const [allOrders, setAllOrders] = useState<RentalOrder[]>([]); // Store all orders
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  useEffect(() => {
    const fetchRentalOrders = async () => {
      setIsLoading(true);
      setError(null); // Reset error state before fetching

      try {
        const params = new URLSearchParams({
          sortOrder: "desc",
          rentOrSell: "Rent",
        });

        if (searchTerm) {
          params.append("searchTerm", searchTerm);
        }
        if (startDate) {
          params.append("startDate", startDate.toISOString());
        }
        if (endDate) {
          params.append("endDate", endDate.toISOString());
        }

        const response = await apiService.get<{
          data: { orders: RentalOrder[] };
        }>(`/order/all/orders?${params.toString()}`);

        if (response?.data?.orders && Array.isArray(response.data.orders)) {
          if (response.data.orders.length === 0) {
            setError("No rental orders found for the given search criteria.");
            setOrders([]);
          } else {
            setOrders(response.data.orders);
          }
        } else {
          setError("Failed to fetch rental orders. Please try again later.");
          setOrders([]);
        }
      } catch (error) {
        setError(
          "An error occurred while fetching rental orders. Please try again."
        );
        setOrders([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRentalOrders();
  }, [searchTerm, startDate, endDate]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const handleOrderClick = (orderId: string) => {
    if (orderId) {
      navigate(`/order-info/${orderId}`);
    } else {
      alert("Partner document ID is missing.");
    }
  };

  return (
    <>
      <WHNavbar dark />

      <div className="container mx-auto px-4 py-8 mt-20">
        <div className="flex justify-between items-center mb-8">
          <div className="text-2xl font-semibold">My Rental Orders</div>
        </div>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by customer name or order ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg p-2 flex-grow mr-2 "
          />
          <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              placeholderText="Start Date"
              className="border rounded-lg p-2 "
            />
            <FaCalendarAlt className="absolute top-3 right-2 text-gray-500 " />
          </div>
          <div className="relative mx-2">
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate || undefined}
              placeholderText="End Date"
              className="border rounded-lg  p-2"
            />
            <FaCalendarAlt className="absolute top-3 right-2 text-gray-500" />
          </div>
        </div>

        {isLoading ? (
          <div className="flex min-w-full justify-center items-center">
            <ClipLoader color="blue" size={50} />
          </div>
        ) : error ? (
          <div className="text-red-500 flex min-w-full justify-center items-center">
            {error}
          </div>
        ) : orders.length === 0 ? (
          <div className="text-gray-500 flex min-w-full justify-center items-center">
            No data to show
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {orders.map((order) => (
              <div
                key={order._id}
                onClick={() => handleOrderClick(order._id)}
                className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 cursor-pointer"
              >
                <div className="relative h-48">
                  <img
                    src={order.WarehouseDetail.thumbnail}
                    alt={order.customerName}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-[#7055ef] text-white text-xs font-bold px-2 py-1 rounded">
                    Rental
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-4">
                    <div className="flex justify-between text-lg font-semibold text-gray-500">
                      <span>{order.orderId}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold mb-2">
                      <span>{order.WarehouseDetail.name}</span>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">
                    <div className="flex justify-between mb-2 bg-gray-100 p-2 rounded-lg">
                      <span className="font-medium">Start Date:</span>
                      <span>{formatDate(order.startDate)}</span>
                    </div>
                    <div className="flex justify-between mb-2 bg-gray-100 p-4 rounded-lg">
                      <span className="font-medium">End Date:</span>
                      <span>{formatDate(order.endDate)}</span>
                    </div>
                    <div className="flex justify-between mb-2 bg-gray-100 p-4 rounded-lg">
                      <span className="font-medium">Duration:</span>
                      <span>{order.duration} Month</span>
                    </div>
                    <div className="flex justify-between bg-gray-100 p-4 mb-2 rounded-lg">
                      <span className="font-medium">Payment:</span>
                      <span
                        className={order.paymentDay <= 5 ? "text-red-500" : ""}
                      >
                        {order.paymentDay} Days Left
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mb-4 bg-gray-100 p-4 rounded-lg">
                    <span className="font-medium">Address:</span>
                    <span className="text-right">
                      {order.WarehouseDetail?.address},{" "}
                      {order.WarehouseDetail?.city},{" "}
                      {order.WarehouseDetail?.state}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button className="w-full bg-[#7055ef] text-white py-2 rounded-lg font-bold">
                      View
                    </button>
                    {order.paymentDay <= 5 && (
                      <button className="w-full bg-green-500 text-white py-2 rounded-lg font-bold">
                        Pay
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default RentalOrder;
