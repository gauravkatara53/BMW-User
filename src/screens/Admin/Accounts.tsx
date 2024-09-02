import React from "react";
import Sidebar from "@/components/common/WHSideBar";

const AccountPage: React.FC = () => {
  return (
    <>
      <div className="flex min-h-screen bg-white">
        {/* Sidebar Component */}
        <div className="flex flex-col gap-16 sm:gap-40 overflow-x-hidden">
          {/* Welcome Bar with user data */}
          <Sidebar></Sidebar>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 pt-8 pl-8">
          <div className="max-w-5xl mx-auto px-6 py-8">
            {/* Account Heading */}
            <div className="mb-6">
              <h1 className="text-3xl font-bold">Account</h1>
              <p className="text-gray-700 mt-1">
                Manage your profile and account settings
              </p>
              <hr className="border-gray-300 mt-4" />
            </div>

            {/* Profile Section */}
            <div className="flex items-start mb-10">
              <div className="flex items-center flex-1">
                {/* Profile Photo */}
                <div className="w-24 h-24 bg-gray-200 rounded-full mr-6 flex-shrink-0">
                  {/* Add an <img> tag here for a real profile photo */}
                </div>
                <div className="flex-1">
                  <div className="flex justify-end gap-4">
                    <button className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
                      Update Profile
                    </button>
                    <button className="text-red-600 hover:text-red-800 text-lg font-semibold">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Name Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold">Full Name</h2>
              <div className="flex justify-between mt-3">
                <div className="flex-1  pt-4 rounded-lg mr-3">
                  <h3 className="text-md text-gray-600">First Name</h3>
                  <p className="mt-1 bg-gray-200 rounded-lg p-2 text-gray-800">
                    User First Name
                  </p>
                </div>
                <div className="flex-1 p-4 rounded-lg ml-3">
                  <h3 className="text-md text-gray-600">Secondary Name</h3>
                  <p className="mt-1 bg-gray-200 rounded-lg p-2 text-gray-800">
                    User Secondary Name
                  </p>
                </div>
              </div>
              <hr className="border-gray-300 mt-6" />
            </div>

            {/* Contact Email Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-semibold">Contact Email</h2>
              <p className="text-gray-700 mt-2">
                Manage your account email addresses for the invoices
              </p>
              <div className="flex justify-between items-center mt-3">
                <div className=" pt-3 rounded-lg">
                  <h3 className="text-md text-gray-600">Email</h3>
                  <p className="mt-1 bg-gray-200 rounded-lg p-2 pr-8 text-gray-800">
                    user@example.com
                  </p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 text-lg font-semibold">
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
