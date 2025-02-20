import React, { useEffect, useState } from "react";
import WHNavbar from "@/components/common/WHNavbar";
import { apiService } from "@/components/APIService/ApiService";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { FaPencilAlt } from "react-icons/fa";

export const ProfilePageMobile = () => {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    phone: string;
    avatar: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
  } | null>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    phone: string;
    avatar: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: number;
  }>({
    name: "",
    email: "",
    phone: "",
    avatar: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: 0,
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingAvtara, setIsLoadingAvtara] = useState(false);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await apiService.get<{
          data: {
            name: string;
            email: string;
            phone: string;
            avatar: string;
            address: string;
            city: string;
            state: string;
            country: string;
            pincode: number;
          };
        }>("/user/get-user");

        if (response && response.data) {
          setUser(response.data);
          setFormData(response.data);
        } else {
          console.error("Invalid API response format:", response);
          setError("Failed to fetch user profile. Please try again later.");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError(
          "An error occurred while fetching your profile. Please try again."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/v1/user/loginOut", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const responseData = await response.json();

      if (responseData?.statusCode === 200) {
        window.location.href = "/signin";
      } else {
        setError("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      setError("Logout failed. Please try again.");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
      uploadAvatar(event.target.files[0]);
    }
  };
  console.log(selectedFile);
  const uploadAvatar = async (file: File) => {
    setIsLoadingAvtara(true);
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await apiService.patch("/user/update-avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("✅ Avatar updated successfully:", response);
      window.location.reload();
      // Handle UI update (e.g., refetch user data)
    } catch (error) {
      console.error("❌ Error uploading avatar:", error);
    } finally {
      setIsLoadingAvtara(false);
    }
  };

  const handleSave = async () => {
    try {
      await apiService.patch("/user/update-detail", formData);
      setUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Update failed:", error);
      setError("Failed to save changes. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#6d52ef" size={50} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-red-600 text-lg">{error}</p>
          <button
            className="mt-4 px-4 py-2 bg-[#6d52ef] text-white rounded-lg"
            onClick={() => setError(null)}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <WHNavbar dark />
      <div className="w-full mt-20 bg-white p-4">
        <div className="text-center text-black text-2xl font-bold mb-6">
          Account Settings
        </div>

        <div className="flex flex-col items-center space-y-6">
          {/* <img
            className="w-32 h-32 rounded-full"
            src={user ? user.avatar : ""}
            alt="Profile"
          />
           */}
          <div className="relative ">
            {/* Image Wrapper */}
            <div className="relative w-32 h-32 rounded-full overflow-hidden">
              {/* Image with conditional opacity during loading */}
              <img
                className={`w-full h-full rounded-full object-cover ${
                  isLoading ? "opacity-50" : ""
                }`}
                src={user ? user.avatar : ""}
                alt="Profile"
              />

              {/* Loader strictly over the image */}
              {isLoadingAvtara && (
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-white/60">
                  <ClipLoader size={32} color="#4F46E5" />
                </div>
              )}
            </div>

            {/* Pencil Icon for Upload */}
            <label className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer">
              <FaPencilAlt className="text-gray-600" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
          <div className="w-full max-w-md flex justify-between">
            <button
              className="text-gray-500 hover:text-[#6d52ef]/80 text-sm font-medium"
              onClick={handleEdit}
            >
              Edit
            </button>
            <Link to={"/rental-Orders"}>
              <button
                className="text-gray-500 hover:text-[#6d52ef]/80 text-sm font-medium"
                onClick={() => console.log("My Rental Orders")}
              >
                My Rental Orders
              </button>
            </Link>
            <Link to={"/buy-Orders"}>
              <button
                className="text-gray-500 hover:text-[#6d52ef]/80 text-sm font-medium"
                onClick={() => console.log("My Buy Orders")}
              >
                My Buy Orders
              </button>
            </Link>
          </div>
          <div className="w-full max-w-md bg-[#f2f2f2] rounded-lg p-4">
            <div className="text-[#343434] text-sm font-semibold mb-2">
              Name
            </div>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full text-[#2c2c2c] text-sm font-semibold bg-transparent outline-none"
              />
            ) : (
              <div className="text-[#2c2c2c] text-sm font-semibold">
                Hi, {user ? user.name : ""}
              </div>
            )}
          </div>

          <div className="w-full max-w-md bg-[#f2f2f2] rounded-lg p-4">
            <div className="text-[#343434] text-sm font-semibold mb-2">
              Email
            </div>
            {isEditing ? (
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full text-[#939393] text-sm bg-transparent outline-none"
              />
            ) : (
              <div className="text-[#939393] text-sm">
                {user ? user.email : ""}
              </div>
            )}
          </div>

          <div className="w-full max-w-md bg-[#f2f2f2] rounded-lg p-4">
            <div className="text-[#343434] text-sm font-semibold mb-2">
              Phone
            </div>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full text-[#939393] text-sm bg-transparent outline-none"
              />
            ) : (
              <div className="flex items-center space-x-2 text-[#939393] text-sm">
                <FontAwesomeIcon icon={faPhone} className="text-[#939393]" />
                <span>{user ? user.phone : ""}</span>
              </div>
            )}
          </div>

          <div className="w-full max-w-md bg-[#f2f2f2] rounded-lg p-4">
            <div className="text-[#343434] text-sm font-semibold mb-2">
              Address
            </div>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full text-[#939393] text-sm bg-transparent outline-none"
              />
            ) : (
              <div className="text-[#939393] text-sm">
                {user ? user.address : ""}
              </div>
            )}
          </div>

          <div className="w-full max-w-md bg-[#f2f2f2] rounded-lg p-4">
            <div className="text-[#343434] text-sm font-semibold mb-2">
              City
            </div>
            {isEditing ? (
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full text-[#939393] text-sm bg-transparent outline-none"
              />
            ) : (
              <div className="text-[#939393] text-sm">
                {user ? user.city : ""}
              </div>
            )}
          </div>

          <div className="w-full max-w-md bg-[#f2f2f2] rounded-lg p-4">
            <div className="text-[#343434] text-sm font-semibold mb-2">
              State
            </div>
            {isEditing ? (
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full text-[#939393] text-sm bg-transparent outline-none"
              />
            ) : (
              <div className="text-[#939393] text-sm">
                {user ? user.state : ""}
              </div>
            )}
          </div>

          <div className="w-full max-w-md bg-[#f2f2f2] rounded-lg p-4">
            <div className="text-[#343434] text-sm font-semibold mb-2">
              Country
            </div>
            {isEditing ? (
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full text-[#939393] text-sm bg-transparent outline-none"
              />
            ) : (
              <div className="text-[#939393] text-sm">
                {user ? user.country : ""}
              </div>
            )}
          </div>

          <div className="w-full max-w-md bg-[#f2f2f2] rounded-lg p-4">
            <div className="text-[#343434] text-sm font-semibold mb-2">
              Pincode
            </div>
            {isEditing ? (
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleInputChange}
                className="w-full text-[#939393] text-sm bg-transparent outline-none"
              />
            ) : (
              <div className="text-[#939393] text-sm">
                {user ? user.pincode : ""}
              </div>
            )}
          </div>

          <button
            className="w-full max-w-md bg-[#f9f9f9] hover:bg-red-200 text-[#da1414]/60 hover:text-red-800 text-sm font-medium py-2 rounded-lg"
            onClick={handleLogout}
          >
            Log Out
          </button>

          {isEditing && (
            <button
              className="w-full max-w-md bg-[#6d52ef] text-white py-2 rounded-lg"
              onClick={handleSave}
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </>
  );
};
