import {
  faHouse,
  faMapMarkerAlt,
  faPhone,
  faStar,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface PaymentCycle {
  month: string;
  amount: number;
  paymentStatus: "Paid" | "Unpaid" | "Processing";
}

interface PaymentCycleModalProps {
  paymentCycles: PaymentCycle[];
  onClose: () => void;
}

interface WarehouseDetail {
  name: string;
  address: string;
  city: string;
  pincode: string;
  areaSqFt: number;
  images: string[];
  rentOrSell: string;
}

interface Order {
  WarehouseDetail: WarehouseDetail;
  partnerDetails: {
    name: string;
    phone: string;
    avatar: string;
  };

  monthlyPayment: PaymentCycle[];
  duration: number;
}
interface Order {
  transaction: {
    paymentStatus: string;
  };
}

interface Transaction {
  paymentStatus: string;
}

interface HeroProps {
  orderData: {
    order: Order;
    transaction: Transaction;
  };
}

export const Hero = ({ orderData }: HeroProps) => {
  const order = orderData.order;
  const warehouse = order.WarehouseDetail;
  const partner = order.partnerDetails;
  const transaction = orderData.transaction;
  console.log(transaction);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paymentCycleModalOpen, setPaymentCycleModalOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? warehouse.images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === warehouse.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  function handleCallClick(): void {
    window.location.href = `tel:${partner.phone}`;
  }

  const completedPayments = order.monthlyPayment.filter(
    (payment) => payment.paymentStatus === "Paid"
  ).length;
  const totalPayments = order.duration;

  const PaymentCycleModal: React.FC<PaymentCycleModalProps> = ({
    paymentCycles,
    onClose,
  }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-lg p-6 rounded-lg relative">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-500"
            onClick={onClose}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <h2 className="text-lg font-semibold mb-4">Payment Cycles</h2>
          <div className="grid grid-cols-1 gap-4">
            {paymentCycles.map((cycle, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 p-3 rounded-md"
              >
                <div>
                  <p className="font-semibold">{cycle.month}</p>
                </div>
                <div className="text-center">
                  <p className="font-medium">₹{cycle.amount}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`text-sm ${
                      cycle.paymentStatus === "Paid"
                        ? "text-green-500"
                        : cycle.paymentStatus === "Processing"
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                  >
                    {cycle.paymentStatus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-[400px] rounded-lg overflow-hidden mb-8">
      <div className="w-full md:w-1/2 h-full relative">
        <img
          src={warehouse.images[currentIndex]}
          alt="Warehouse"
          className="object-cover w-full h-full rounded-lg"
        />
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
      <div className="-mt-18 w-full md:w-1/2 flex flex-col justify-center p-6 text-black">
        <h1 className="text-2xl font-semibold mb-4">{warehouse.name}</h1>
        <div className="grid grid-cols-2 gap-y-2 gap-x-6 mb-6">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
            <span className="text-gray-700">4.8 (73 reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-400" />
            <span className="text-gray-700 ">{`${warehouse.address}, ${warehouse.city}, ${warehouse.pincode}`}</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} className="text-gray-400" />
            <span className="text-gray-700">{warehouse.areaSqFt} m²</span>
          </div>
        </div>
        <div className="flex mt-10 justify-between items-center gap-4 mb-4 p-3 rounded-xl ">
          {warehouse.rentOrSell === "Rent" ? (
            <div className="flex justify-between items-center w-full text-gray-600 bg-gray-100 p-4 rounded-xl shadow-md">
              <span className="font-medium">
                {completedPayments}/{totalPayments} Payments Completed
              </span>
              <button
                className="text-white bg-gradient-to-br from-purple-600 to-indigo-600 px-4 py-2 rounded-xl shadow-lg hover:opacity-90 transition"
                onClick={() => setPaymentCycleModalOpen(true)}
              >
                View Payment Cycles
              </button>
            </div>
          ) : (
            <div
              className={`flex justify-between text-white px-4 py-2 rounded-xl shadow-md ${
                transaction.paymentStatus === "Completed"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              <span className="">Payment : </span>
              <span>{transaction.paymentStatus}</span>
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={partner.avatar}
              alt="Owner"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-normal">{partner.name}</p>
              <p className="text-gray-600 text-sm">Property owner</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div
              className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer"
              onClick={handleCallClick}
            >
              <FontAwesomeIcon icon={faPhone} className="text-gray-700" />
            </div>
          </div>
        </div>
      </div>

      {paymentCycleModalOpen && (
        <PaymentCycleModal
          paymentCycles={order.monthlyPayment}
          onClose={() => setPaymentCycleModalOpen(false)}
        />
      )}
    </div>
  );
};
