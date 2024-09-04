import React from "react";
import Sidebar from "@/components/common/WHSideBar";

const AccountPage: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen bg-white">
        {/* Sidebar Component */}
        <div className=" lg:flex lg:flex-col lg:gap-16 lg:overflow-x-hidden">
          <Sidebar />
        </div>

        {/* Main Content Area */}
        <div className="flex-1  pl-8 lg:pl-4 ">
          <div className="max-w-5xl mx-auto px-6 py-7 ">
            {/* Account Heading */}
            <div className="mb-6 ">
              <h1 className="text-2xl sm:text-3xl font-bold">Account</h1>
              <p className="text-gray-700 mt-1 text-sm sm:text-base -ml-4">
                Manage your profile and account settings
              </p>
              <hr className="border-gray-300 mt-4" />
            </div>

            {/* Profile Section */}
            <div className="flex flex-col sm:flex-row items-start mb-10 -ml-4">
              <div className="flex items-center flex-1 mb-4 sm:mb-0">
                {/* Profile Photo */}
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-200 rounded-full mr-4 sm:mr-6 flex-shrink-0">
                  {/* Add an <img> tag here for a real profile photo */}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm sm:text-lg font-semibold">
                      Update Profile
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-sm sm:text-lg font-semibold">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Name Section */}
            <div className="mb-10 -ml-4">
              <h2 className="text-xl sm:text-2xl font-semibold">Full Name</h2>
              <div className="flex flex-col sm:flex-row gap-4 mt-3">
                <div className="flex-1 pt-4 rounded-lg mb-4 sm:mb-0">
                  <h3 className="text-sm sm:text-md text-gray-600">
                    First Name
                  </h3>
                  <p className="mt-1 bg-gray-200 rounded-lg p-2 text-gray-800 text-sm sm:text-base">
                    User First Name
                  </p>
                </div>
                <div className="flex-1 pt-4 rounded-lg">
                  <h3 className="text-sm sm:text-md text-gray-600">
                    Secondary Name
                  </h3>
                  <p className="mt-1 bg-gray-200 rounded-lg p-2 text-gray-800 text-sm sm:text-base">
                    User Secondary Name
                  </p>
                </div>
              </div>
              <hr className="border-gray-300 mt-6" />
            </div>

            {/* Contact Email Section */}
            <div className="mb-10 -ml-4">
              <h2 className="text-xl sm:text-2xl font-semibold">
                Contact Email
              </h2>
              <p className="text-gray-700 mt-2 text-sm sm:text-base">
                Manage your account email addresses for the invoices
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center mt-3">
                <div className="pt-3 rounded-lg flex-1 mb-4 sm:mb-0">
                  <h3 className="text-sm sm:text-md text-gray-600">Email</h3>
                  <p className="mt-1 bg-gray-200 rounded-lg p-2 pr-4 text-gray-800 text-sm sm:text-base max-w-xs ">
                    user@example.com
                  </p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-sm sm:text-lg font-semibold">
                  Add Another
                </button>
              </div>
              <hr className="border-gray-300 mt-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountPage;
