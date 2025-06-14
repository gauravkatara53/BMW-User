import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import ClipLoader from "react-spinners/ClipLoader";
import { useToast } from "@/components/common/context/ToastContext";

export const SignInScreen = () => {
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate
  const [loading, setLoading] = useState(false);
  interface LoginResponse {
    message?: string;
    // Add other properties of the response if needed
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous error

    try {
      const response = await fetch("/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
        credentials: "include",
      });

      const data: LoginResponse = await response.json();

      if (response.ok) {
        console.log("Login successful:", data);
        showToast("Logged in successfully!", "success");
        navigate("/");
        window.location.reload();
      } else {
        const errorMessage = data.message || "Login failed";
        setError(errorMessage);
        showToast(errorMessage, "error");
        setLoading(false);
      }
    } catch (err) {
      const fallbackError = "An error occurred. Please try again.";
      setError(fallbackError);
      showToast(fallbackError, "error");
      console.error("Login error:", err);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
              <Link to={"/"}>
                <img
                  src="https://bookmywarehouse.co/assets/BMW-Ce76mDeN.svg"
                  className="w-32"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="mt-40 flex flex-col items-center">
              <h1 className="text-2xl xl:text-3xl font-extrabold">Login In</h1>
              {error && <p className="text-red-500">{error}</p>}
              <div className="w-full flex-1 mt-8">
                <form onSubmit={handleSubmit} className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    {loading ? (
                      <ClipLoader color="#ffffff" size={24} />
                    ) : (
                      <>
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-3">Sign In</span>
                      </>
                    )}
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Did not have an account
                    <Link
                      to="/signUp"
                      className="border-b ml-2 border-gray-500 border-dotted"
                    >
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
              className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
              }}
            ></div>
          </div>
          {/* <button
            onClick={() =>
              showToast("Warehouse added successfully!", "success")
            }
            className="btn btn-success"
          >
            Show Success Toast
          </button> */}
        </div>
      </div>
    </>
  );
};
