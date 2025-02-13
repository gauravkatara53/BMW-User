import React from "react";

interface RentalOrder {
  orderId: string;
  customerName: string;
  rentalStartDate: string;
  rentalEndDate: string;
  status: string;
  imageUrl: string;
  address: string;
}

const calculateDaysLeft = (endDate: string) => {
  const today = new Date();
  const end = new Date(endDate);
  const diffTime = end.getTime() - today.getTime();
  return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
};

const RentalOrderCard: React.FC<{ order: RentalOrder }> = ({ order }) => {
  const daysLeft = calculateDaysLeft(order.rentalEndDate);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={order.imageUrl}
        alt={order.customerName}
        className="w-16 h-16 rounded"
      />
      <h3 className="text-lg font-semibold">{order.customerName}</h3>
      <p className="text-sm text-gray-600">
        Booking: {order.rentalStartDate} - {order.rentalEndDate}
      </p>
      <p className="text-sm text-gray-600">Days Left: {daysLeft} days</p>
      <p className="text-sm text-gray-600">Address: {order.address}</p>
      <button className="mt-2 bg-indigo-600 text-white px-4 py-2 rounded">
        View
      </button>
    </div>
  );
};

export default RentalOrderCard;
