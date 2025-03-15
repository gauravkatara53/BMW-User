import React, { useEffect, useState } from "react";
import WHNavbar from "@/components/common/WHNavbar";
import { apiService } from "@/components/APIService/ApiService";
import ClipLoader from "react-spinners/ClipLoader"; // Import the clipboard loader
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FaPencilAlt } from "react-icons/fa";
export const ProfilePageDesktop = () => {
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

  const [error, setError] = useState<string | null>(null); // State to store error messages
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state
  const [isLoadingAvtara, setIsLoadingAvtara] = useState(false);
  const [isLoadingLogOut, setIsLoadingLogOut] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

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
      }>("/user/get-user", { withCredentials: true });
      console.log("API Response:", response); // Debugging line to check response structure

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
      setIsLoading(false); // Stop loading regardless of success or failure
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []); // Empty dependency array ensures this runs only once

  const handleLogout = async () => {
    console.log("handleLogout called"); // Check if the function is being called
    setIsLoadingLogOut(true);
    try {
      const response = await fetch("/api/v1/user/loginOut", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Ensure cookies are sent with the request
      });

      const responseData = await response.json(); // Parse the response JSON

      console.log("Logout response:", responseData); // Log the entire response

      // Check the correct field for the status code
      if (responseData?.statusCode === 200) {
        console.log("Logout successful. Redirecting to /signin...");
        // Redirect to /signin after successful logout
        window.location.href = "/signin";
      } else {
        console.error("Logout failed with status:", responseData?.statusCode);
        setError("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      setError("Logout failed. Please try again.");
    } finally {
      setIsLoadingLogOut(false);
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

    console.log(selectedFile);
  };

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
      // Instead of reloading the page, fetch the updated profile
      await fetchProfile();
    } catch (error) {
      console.error("❌ Error uploading avatar:", error);
    } finally {
      setIsLoadingAvtara(false);
    }
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await apiService.patch("/user/update-detail", formData); // Change to PATCH request
      setUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Update failed:", error);
      setError("Failed to save changes. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#6d52ef" size={50} /> {/* Clipboard loader */}
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
            onClick={() => setError(null)} // Clear the error message
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
      <div className="w-[1440px] h-[890px] relative bg-white overflow-hidden">
        <div className="absolute left-[303.85px] top-[364px] rounded-[13.56px] border border-[#dfdfdf] flex-col justify-start items-center gap-[21.09px] inline-flex overflow-hidden">
          <h1 className="w-[240.30px] h-[42.18px] pl-8 pt-2 relative bg-[#6d52ef]/30">
            Personal Details
          </h1>

          <div
            className="w-[155.93px] h-[16.57px] text-gray-500 hover:text-[#6d52ef]/80 hover:cursor-pointer text-sm font-medium"
            onClick={handleEdit}
          >
            Edit{" "}
          </div>
          <Link to={"/rental-Orders"}>
            <div className="w-[155.93px] h-[16.57px] text-gray-500 text-sm font-medium hover:text-[#6d52ef]/80 hover:cursor-pointer">
              My Rental Orders
            </div>
          </Link>
          <Link to={"/buy-Orders"}>
            <div className="mb-4 w-[155.93px] h-[16.57px] text-gray-500 text-sm font-medium hover:text-[#6d52ef]/80 hover:cursor-pointer">
              My Buy Orders
            </div>
          </Link>
        </div>

        <div className="w-[509px] h-[519px] absolute left-[595px] top-[183px]">
          <div className="w-[461px] h-[300px] absolute left-[17px] top-[225px]">
            <h2 className="text-lg font-bold text-[#343434] mb-2">Address</h2>

            <div className="min-w-[220px] w-full max-w-[461px] h-[47px] px-4 py-[15px] absolute left-0 top-[27px] bg-[#f2f2f2] rounded-[10px] flex justify-start items-center gap-4">
              <div className="w-4 h-4 relative overflow-hidden" />
              {isEditing ? (
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full text-[#939393] text-sm font-medium bg-transparent outline-none truncate"
                />
              ) : (
                <div className="w-full text-[#939393] text-sm font-medium truncate">
                  {user ? user.address : ""}
                </div>
              )}
            </div>

            {/* City */}
            <div className=" w-[74.44px] left-0 top-[80px] absolute text-[#343434] text-sm font-semibold">
              City
            </div>
            <div className="min-w-[220px] w-full max-w-[461px] h-[47px] px-4 py-[15px] absolute left-0 top-[102px] bg-[#f2f2f2] rounded-[10px] flex justify-start items-center gap-4">
              <div className="w-4 h-4 relative overflow-hidden" />
              {isEditing ? (
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full text-[#939393] text-sm font-medium bg-transparent outline-none truncate"
                />
              ) : (
                <div className="w-full text-[#939393] text-sm font-medium truncate">
                  {user ? user.city : ""}
                </div>
              )}
            </div>

            {/* State */}
            <div className="w-[74.44px] left-0 top-[150px] absolute text-[#343434] text-sm font-semibold">
              State
            </div>
            <div className="min-w-[220px] h-[47px] px-4 py-[15px] absolute left-0 top-[171px] bg-[#f2f2f2] rounded-[10px] flex justify-start items-center gap-4">
              <div className="w-4 h-4 relative overflow-hidden" />
              {isEditing ? (
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full text-[#939393] text-sm font-medium bg-transparent outline-none truncate"
                />
              ) : (
                <div className="w-full text-[#939393] text-sm font-medium truncate">
                  {user ? user.state : ""}
                </div>
              )}
            </div>

            {/* Country */}
            <div className="w-[74.44px] left-[241.60px] top-[150px] absolute text-[#343434] text-sm font-semibold">
              Country
            </div>
            <div className="min-w-[220px] h-[47px] px-4 py-[15px] absolute left-[241.60px] top-[171px] bg-[#f2f2f2] rounded-[10px] flex justify-start items-center gap-4">
              <div className="w-4 h-4 relative overflow-hidden" />
              {isEditing ? (
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full text-[#939393] text-sm font-medium bg-transparent outline-none truncate"
                />
              ) : (
                <div className="w-full text-[#939393] text-sm font-medium truncate">
                  {user ? user.country : ""}
                </div>
              )}
            </div>

            {/* Pincode */}
            <div className="w-[74.44px] left-0 top-[223px] absolute text-[#343434] text-sm font-semibold">
              Pincode
            </div>
            <div className="min-w-[220px] w-full max-w-[461px] h-[47px] px-4 py-[15px] absolute left-0 top-[248px] bg-[#f2f2f2] rounded-[10px] flex justify-start items-center gap-4">
              <div className="w-4 h-4 relative overflow-hidden" />
              {isEditing ? (
                <input
                  type="number"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="w-full text-[#939393] text-sm font-medium bg-transparent outline-none truncate"
                />
              ) : (
                <div className="w-full text-[#939393] text-sm font-medium truncate">
                  {user ? user.pincode : ""}
                </div>
              )}
            </div>
          </div>

          <div className="h-[147px] absolute left-[16px] top-[63px] flex-col justify-center items-start gap-2.5 inline-flex">
            <div className="w-[462px] h-[72px] relative">
              <div className="w-[462px] h-[72px] absolute left-0 top-0 bg-[#f2f2f2] rounded-[15px]" />
              <div className="h-10 absolute left-[20px] top-[16px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="h-[17px] inline-flex justify-start items-center w-72">
                  {isEditing ? (
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full text-[#2c2c2c] text-sm font-semibold capitalize bg-transparent outline-none truncate"
                    />
                  ) : (
                    <div className="w-full text-[#2c2c2c] text-sm font-semibold capitalize truncate">
                      Hi, {user ? user.name : ""}
                    </div>
                  )}
                </div>

                <div className="flex-col flex justify-start items-start gap-[5px] w-full">
                  <div className="inline-flex justify-start items-center gap-2.5 w-full">
                    <div className="w-[15px] h-[15px] relative overflow-hidden" />
                    {isEditing ? (
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-3.5 text-[#939393] text-sm font-normal bg-transparent outline-none truncate"
                      />
                    ) : (
                      <div className="flex items-center space-x-2 text-[#939393] text-sm font-normal w-full break-words">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-[#939393]"
                        />
                        <span className="w-full break-words">
                          {user ? user.phone : ""}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="self-stretch h-[65px] px-5 py-4 bg-[#f2f2f2] rounded-[15px] flex-col justify-center items-start gap-2.5 flex">
              <div className="flex-col flex justify-start items-start gap-0.5 w-full">
                <div className="w-[137px] text-black font-bold text-sm leading-[15px]">
                  Mail Id
                </div>
                <div className="flex-col flex justify-start items-start gap-1.5 w-full">
                  {isEditing ? (
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="text-[#939393] text-[13px] font-normal bg-transparent outline-none w-full truncate"
                    />
                  ) : (
                    <div className="text-[#939393] text-[13px] font-normal w-full break-words">
                      {user ? user.email : ""}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="whitespace-nowrap w-[191.34px] h-[49.72px] absolute left-[16.34px] top-[13.09px] text-center text-black text-[22.60px] font-bold font-['Plus Jakarta Sans']">
            Account Settings
          </div>
          <img
            className="w-[11.30px] h-[11.30px] absolute left-[445px] top-[333px]"
            src="https://via.placeholder.com/11x11"
          />
        </div>

        <div className="relative w-[148px] h-[148px] left-[345px] top-[196px]">
          {/* Image Wrapper */}
          <div className="relative w-full h-full rounded-full overflow-hidden">
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

        <button
          onClick={() => {
            console.log("Button clicked!"); // Check if this logs
            handleLogout();
          }}
          disabled={isLoadingLogOut}
          className="absolute left-[304px] top-[548px] group rounded-lg w-[240.3px] h-[36.91px] bg-[#f9f9f9] hover:bg-red-200 text-[#da1414]/60 hover:text-red-800 text-[15.07px] font-medium flex items-center justify-center"
        >
          {isLoadingLogOut ? (
            <ClipLoader color="#da1414" size={24} />
          ) : (
            "Log Out"
          )}
        </button>

        {isEditing && (
          <button
            className="absolute left-[800px] top-[720px] bg-[#6d52ef] text-white px-4 py-2 rounded-lg flex items-center justify-center min-w-[120px]"
            onClick={handleSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              "Save Changes"
            )}
          </button>
        )}
      </div>
    </>
  );
};
