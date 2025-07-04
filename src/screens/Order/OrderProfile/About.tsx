interface PriceItem {
  _id: string;
  title: string;
  amount: number;
  isMonthly?: boolean;
}

interface PartnerDetails {
  name: string;
  phone: string;
  avatar: string;
}

interface WarehouseDetail {
  name: string;
  address: string;
  city: string;
  pincode: string;
  areaSqFt: number;
  images: string[];
  price: PriceItem[];
  partnerDetails: PartnerDetails;
}

interface Order {
  WarehouseDetail: WarehouseDetail;
  partnerDetails: PartnerDetails;
  // Add any other fields used in this component if needed
}

interface AboutProps {
  orderData: Order;
}

export const About = ({ orderData }: AboutProps) => {
  if (!orderData || !orderData.WarehouseDetail) {
    return null; // or show a fallback message/loading state
  }

  const warehouse = orderData.WarehouseDetail;

  return (
    <div className="my-20">
      <h2 className="text-xl font-semibold mb-4">
        About Location’s Neighborhood
      </h2>
      <p className="text-gray-600 mb-4">
        Our warehouses are located in prime neighborhoods, offering easy access
        to key transportation routes and regional hubs. With a focus on
        convenience and business growth, these areas provide the ideal
        environment for both short and long-term storage solutions.
      </p>

      <div className="flex flex-col gap-3">
        {warehouse.price.map((item: PriceItem) => (
          <div
            key={item._id}
            className="p-3 border items-center justify-center flex border-gray-300 rounded-full text-sm text-gray-600"
          >
            {item.title}: Rs. {item.amount}
            {item.isMonthly && "/month"}
          </div>
        ))}
      </div>
    </div>
  );
};
