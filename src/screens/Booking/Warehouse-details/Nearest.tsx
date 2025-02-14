import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconMap from "./iconMap"; // Import iconMap

interface Facility {
  name: string;
  value: string;
  icon: string; // Now icon is a string (matching API response)
}

interface NearestProps {
  warehouseData: { nearestFacility?: Facility[] };
}

export const Nearest = ({ warehouseData }: NearestProps) => {
  const nearestFacility = warehouseData?.nearestFacility || [];
  console.log(warehouseData.nearestFacility);
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Nearest Public Facilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {nearestFacility.length > 0 ? (
          nearestFacility.map(({ name, value, icon }, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={iconMap[icon] || iconMap["faQuestionCircle"]} // Use fallback icon if not found
                  className="text-gray-700 border-gray-800 border p-2 rounded-lg"
                />
                <span className="text-gray-800">
                  {name} - {value}
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
