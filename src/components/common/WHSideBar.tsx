import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faTachometerAlt,
  faUser,
  faDollarSign,
  faBuilding,
  faFileContract,
  faBell,
  faHome,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (activeTab !== location.pathname) {
      navigate(activeTab);
    }
  }, [activeTab, navigate, location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleTabClick = (path) => {
    if (path !== activeTab) {
      setActiveTab(path);
    }
  };

  return (
    <div className="flex">
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="pt-8 p-4 text-gray-500 hover:text-gray-700 z-50 fixed top-0 left-0"
        >
          <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
        </button>
      )}

      {isSidebarOpen && (
        <div
          className={`flex flex-col w-64 h-screen bg-gray-100 border-r fixed z-40 transition-transform transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0`}
        >
          <div className="flex items-center p-4 pt-8 border-b">
            <button
              onClick={toggleSidebar}
              className="mr-2 text-gray-500 hover:text-gray-700"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
            </button>
            <h2 className="text-lg font-semibold">Settings</h2>
          </div>

          <div className="flex-grow pt-8 pl-4">
            <h3 className="text-md font-bold text-gray-500 uppercase">
              General
            </h3>
            <ul className="mt-4">
              <li
                className={`flex items-center p-2 mb-4 rounded cursor-pointer group ${
                  activeTab === "/dashboard"
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick("/dashboard")}
              >
                <div className="icon-square bg-white p-2 rounded">
                  <FontAwesomeIcon
                    icon={faTachometerAlt}
                    className={`h-5 w-5 text-gray-500 transition-colors duration-200 ${
                      activeTab === "/dashboard"
                        ? "text-green-600"
                        : "group-hover:text-green-600"
                    }`}
                  />
                </div>
                <span
                  className={`ml-2 transition-colors duration-200 ${
                    activeTab === "/dashboard"
                      ? "text-gray-900"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  Dashboard
                </span>
              </li>
              <li
                className={`flex items-center p-2 mb-4 rounded cursor-pointer group ${
                  activeTab === "/accounts"
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick("/accounts")}
              >
                <div className="icon-square bg-white p-2 rounded">
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`h-5 w-5 text-gray-500 transition-colors duration-200 ${
                      activeTab === "/accounts"
                        ? "text-green-600"
                        : "group-hover:text-green-600"
                    }`}
                  />
                </div>
                <span
                  className={`ml-2 transition-colors duration-200 ${
                    activeTab === "/accounts"
                      ? "text-gray-900"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  Account
                </span>
              </li>
              <li
                className={`flex items-center p-2 mb-4 rounded cursor-pointer group ${
                  activeTab === "/financial"
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick("/financial")}
              >
                <div className="icon-square bg-white p-2 rounded">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    className={`h-5 w-5 text-gray-500 transition-colors duration-200 ${
                      activeTab === "/financial"
                        ? "text-green-600"
                        : "group-hover:text-green-600"
                    }`}
                  />
                </div>
                <span
                  className={`ml-2 transition-colors duration-200 ${
                    activeTab === "/financial"
                      ? "text-gray-900"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  Financial
                </span>
              </li>
              <li
                className={`flex items-center p-2 mb-4 rounded cursor-pointer group ${
                  activeTab === "/property-management"
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick("/property-management")}
              >
                <div className="icon-square bg-white p-2 rounded">
                  <FontAwesomeIcon
                    icon={faBuilding}
                    className={`h-5 w-5 text-gray-500 transition-colors duration-200 ${
                      activeTab === "/property-management"
                        ? "text-green-600"
                        : "group-hover:text-green-600"
                    }`}
                  />
                </div>
                <span
                  className={`ml-2 transition-colors duration-200 ${
                    activeTab === "/property-management"
                      ? "text-gray-900"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  Property Management
                </span>
              </li>
              <li
                className={`flex items-center p-2 mb-4 rounded cursor-pointer group ${
                  activeTab === "/lease-management"
                    ? "bg-gray-200"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleTabClick("/lease-management")}
              >
                <div className="icon-square bg-white p-2 rounded">
                  <FontAwesomeIcon
                    icon={faFileContract}
                    className={`h-5 w-5 text-gray-500 transition-colors duration-200 ${
                      activeTab === "/lease-management"
                        ? "text-green-600"
                        : "group-hover:text-green-600"
                    }`}
                  />
                </div>
                <span
                  className={`ml-2 transition-colors duration-200 ${
                    activeTab === "/lease-management"
                      ? "text-gray-900"
                      : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  Lease Management
                </span>
              </li>
            </ul>

            <div className="pt-4 pl-2 border-t">
              <h3 className="text-md font-bold text-gray-500 uppercase">
                System
              </h3>
              <ul className="mt-4">
                <li
                  className={`flex items-center p-2 mb-4 rounded cursor-pointer group ${
                    activeTab === "/notifications"
                      ? "bg-gray-200"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleTabClick("/notifications")}
                >
                  <div className="icon-square bg-white p-2 rounded">
                    <FontAwesomeIcon
                      icon={faBell}
                      className={`h-5 w-5 text-gray-500 transition-colors duration-200 ${
                        activeTab === "/notifications"
                          ? "text-green-600"
                          : "group-hover:text-green-600"
                      }`}
                    />
                  </div>
                  <span
                    className={`ml-2 transition-colors duration-200 ${
                      activeTab === "/notifications"
                        ? "text-gray-900"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    Notification
                  </span>
                </li>
                <li
                  className={`flex items-center p-2 mb-4 rounded cursor-pointer group ${
                    activeTab === "/" ? "bg-gray-200" : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleTabClick("/")}
                >
                  <div className="icon-square bg-white p-2 rounded">
                    <FontAwesomeIcon
                      icon={faHome}
                      className={`h-5 w-5 text-gray-500 transition-colors duration-200 ${
                        activeTab === "/"
                          ? "text-green-600"
                          : "group-hover:text-green-600"
                      }`}
                    />
                  </div>
                  <span
                    className={`ml-2 transition-colors duration-200 ${
                      activeTab === "/"
                        ? "text-gray-900"
                        : "text-gray-700 group-hover:text-gray-900"
                    }`}
                  >
                    Home
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
