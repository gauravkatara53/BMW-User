import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSignOutAlt,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/components/common/WHSideBar";

// Dashboard Component
const Dashboard: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="flex flex-col gap-16 sm:gap-40 overflow-x-hidden mr-6">
        <Sidebar />
      </div>
      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            {/* Notification Icon */}
            <FontAwesomeIcon
              icon={faBell}
              className="text-gray-600 cursor-pointer text-xl"
            />
            {/* Profile and Sign Out Section */}
            <div className="hidden sm:flex items-center space-x-4">
              {/* Profile Image */}
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-gray-800">John Doe</span>
              <button className="flex items-center text-red-500">
                <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
                <span className="ml-1">Sign Out</span>
              </button>
            </div>
            {/* Mobile Dropdown */}
            <div className="relative sm:hidden">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2"
              >
                <img
                  src="https://via.placeholder.com/40"
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <FontAwesomeIcon
                  icon={isDropdownOpen ? faChevronUp : faChevronDown}
                  className="text-xl"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <div className="flex items-center p-4 border-b">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="Profile"
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="ml-3 text-gray-800">John Doe</span>
                  </div>
                  <button className="flex items-center w-full p-4 text-red-500 border-t hover:bg-gray-100">
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
                    <span className="ml-2">Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6 sm:mr-0 -ml-6">
          {/* Replace these with actual cards */}
          <div className="bg-gray-100 p-6 shadow rounded-lg">Card 1</div>
          <div className="bg-gray-100 p-6 shadow rounded-lg">Card 2</div>
          <div className="bg-gray-100 p-6 shadow rounded-lg">Card 3</div>
          <div className="bg-gray-100 p-6 shadow rounded-lg">Card 4</div>
        </div>

        {/* Recent Activities Section */}
        <div className="sm:mr-0 -ml-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activities
          </h2>
          <div className="bg-gray-100 p-6 shadow rounded-lg">
            {/* Replace this with an actual horizontal card */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-700">
                  Activity Title
                </h3>
                <p className="text-gray-500">
                  Details about the recent activity...
                </p>
              </div>
              <span className="text-sm text-gray-400">2 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
