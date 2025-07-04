import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "./iconMap";

interface Facility {
  name: string;
  icon: string;
  _id: string;
}

interface WarehouseDetail {
  name: string;
  address: string;
  city: string;
  pincode: string;
  areaSqFt: number;
  images: string[];
  facility: Facility[];
}

interface Order {
  WarehouseDetail: WarehouseDetail;
}

interface FacilitiesProps {
  orderData: Order; // Now it's just the plain order
}

export const Facilities = ({ orderData }: FacilitiesProps) => {
  if (!orderData?.WarehouseDetail) {
    return <p className="text-gray-500">No warehouse details available</p>;
  }

  const warehouse = orderData.WarehouseDetail;
  const facilities = warehouse.facility || [];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-xl font-semibold">Warehouse Facilities</h2>
      </div>
      <div className="flex flex-col gap-3">
        {facilities.length > 0 ? (
          facilities.map(({ name, icon, _id }) => (
            <div key={_id} className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={iconMap[icon] || iconMap["faQuestionCircle"]}
                className="text-gray-700 border-gray-800 border p-2 rounded-lg"
              />
              <span className="text-gray-800">{name}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No facilities available</p>
        )}
      </div>
    </div>
  );
};
