import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "./iconMap"; // Import iconMap

interface Facility {
  name: string;
  value: string;
  icon: string; // Now icon is a string (matching API response)
}
interface WarehouseDetail {
  name: string;
  address: string;
  city: string;
  pincode: string;
  areaSqFt: number;
  images: string[];
  nearestFacility: Facility[];
}

interface Order {
  WarehouseDetail: WarehouseDetail;
}
interface NearestProps {
  orderData: {
    order: Order;
  };
}

export const Nearest = ({ orderData }: NearestProps) => {
  const warehouse = orderData.order.WarehouseDetail;
  const nearestFacility = warehouse?.nearestFacility || [];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Nearest Public Facilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {nearestFacility.length > 0 ? (
          nearestFacility.map((facility, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={iconMap[facility.icon] || iconMap["faQuestionCircle"]} // Use fallback icon if not found
                  className="text-gray-700 border-gray-800 border p-2 rounded-lg"
                />
                <span className="text-gray-800">
                  {facility.name} - {facility.value}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No nearby public facilities available</p>
        )}
      </div>
    </div>
  );
};
