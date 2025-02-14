import {
  faParking,
  faUtensils,
  faWifi,
  faToilet,
  faSnowflake,
  faShieldAlt,
  faTruck,
  faCouch,
  faChargingStation,
  faUsers,
  faBoxes,
  faFireExtinguisher,
  faFan,
  faLightbulb,
  faHospital,
  faHotel,
  faBowlFood,
  faBank,
  faMoneyBill,
  faTrain,
  faRestroom,
} from "@fortawesome/free-solid-svg-icons";

const iconMap: Record<string, any> = {
  wifi: faWifi,
  parking: faParking,
  food: faUtensils,
  restroom: faToilet, // Washroom/Toilet facilities
  ac: faSnowflake, // Air conditioning
  security: faShieldAlt, // Security services
  loading: faTruck, // Loading/unloading dock
  lounge: faCouch, // Lounge area
  charging: faChargingStation, // Charging station for devices
  meeting_room: faUsers, // Meeting/conference rooms
  storage: faBoxes, // Storage facilities
  fire_safety: faFireExtinguisher, // Fire safety measures
  ventilation: faFan, // Proper ventilation
  power_backup: faLightbulb, // Power backup generators
  hospital: faHospital,
  restaurant: faHotel,
  cafe: faBowlFood,
  bank: faBank,
  atm: faMoneyBill,
  supermarket: faRestroom,
  metro: faTrain,
};

export default iconMap;
