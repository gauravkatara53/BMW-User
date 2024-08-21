import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./SignupNavbar";
import OTPModal from "./OtpModal";
import Image from "../../../public/Image.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [username, setUsername] = useState<string>("");
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("user");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Basic validations
    if (!username.match(/^[A-Za-z0-9]+$/)) {
      setError("Username should contain only alphanumeric characters");
      setLoading(false);
      return;
    }
    if (!phoneNo.match(/^\d{10}$/)) {
      setError("Phone number should be 10 digits");
      setLoading(false);
      return;
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/)) {
      setError(
        "Password should be 6 to 20 characters with at least one numeric digit, one uppercase and one lowercase letter"
      );
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://mywarehouse-fxuk.onrender.com/api/v1/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, phoneNo, password, role }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setIsOtpModalOpen(true);
        toast.success("Sign Up successful. OTP sent to your phone number.");
      } else if (response.status === 409) {
        setError("User already exists");
      } else {
        setError(data.message || "Sign Up failed");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = () => {
    setIsOtpModalOpen(false);
    toast.success("Login successful");
    navigate("/home");
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navbar is fixed only on mobile */}
        <div className="md:relative fixed w-full z-10">
          <Navbar />
        </div>

        {/* Add top padding on mobile to prevent overlap with the Navbar */}
        <div className="flex flex-col md:flex-row pt-20 md:pt-0">
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4 md:p-8 space-y-8">
            <h2 className="text-2xl font-bold pt-4 text-center">Sign Up</h2>
            <p className="text-center text-gray-600">Create your account</p>
            <form className="space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="mt-1 block w-full px-3 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError("");
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNo"
                  className="mt-1 block w-full px-3 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={phoneNo}
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                    setError("");
                  }}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full px-3 py-2 border border-indigo-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Role
                </label>
                <div className="mt-1">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="role"
                      value="user"
                      checked={role === "user"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <span className="ml-2">User</span>
                  </label>
                  <label className="inline-flex items-center ml-6">
                    <input
                      type="radio"
                      className="form-radio text-indigo-600"
                      name="role"
                      value="admin"
                      checked={role === "admin"}
                      onChange={(e) => setRole(e.target.value)}
                    />
                    <span className="ml-2">Admin</span>
                  </label>
                </div>
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-indigo-500 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  disabled={loading}
                >
                  {loading ? "Signing Up..." : "Sign Up"}
                </button>
              </div>
            </form>
            <p className="text-center text-gray-600">
              Already have an account?{" "}
              <a
                href="/signin"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </a>
            </p>
          </div>
          <div className="hidden md:flex w-1/2">
            <img
              src={Image}
              alt="Sign Up"
              className="object-cover w-full h-[85%] rounded-lg"
            />
          </div>
        </div>

        <OTPModal
          isOpen={isOtpModalOpen}
          onClose={() => setIsOtpModalOpen(false)}
          onVerify={handleVerify}
          phoneNo={phoneNo}
        />
        <ToastContainer />
      </div>
    </>
  );
};

export default SignUp;
