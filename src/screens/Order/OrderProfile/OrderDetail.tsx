import WHNavbar from "@/components/common/WHNavbar";
import { Hero } from "./Hero";
import { Facilities } from "./Facilites";
import { Nearest } from "./Nearest";
import { Testimonials } from "./Testimonials";
import { About } from "./About";
import { Rent } from "./Rent";

import { useEffect, useState } from "react";
import { apiService } from "@/components/APIService/ApiService";
import ClipLoader from "react-spinners/ClipLoader"; // Import ClipLoader
import { useParams } from "react-router-dom";

export const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [orderData, setOrderData] = useState<any>(null); // Store the warehouse data

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setIsLoading(true);
        const response = await apiService.get<{ data: any }>(
          `/order/deatil/${orderId}`
        );

        setOrderData(response.data.order);
      } catch (err) {
        setError("Failed to fetch order details.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);
  console.log(orderData);
  return (
    <>
      <WHNavbar dark />
      <div className="mt-20 w-full max-w-[1200px] mx-auto bg-white p-4 md:p-8 relative">
        {isLoading ? (
          <div className="flex items-center justify-center h-[300px]">
            <ClipLoader size={50} color="#6b46c1" /> {/* Purple loader */}
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <>
            {orderData && <Hero orderData={orderData} />}
            {orderData && <About orderData={orderData} />}
            <div className="flex mb-14">
              <div className="w-1/2">
                {orderData && <Facilities orderData={orderData} />}
              </div>
              <div className="ml-20 w-1/2">
                {orderData && <Nearest orderData={orderData} />}
              </div>
            </div>
            <Testimonials />

            {/* Conditionally render Rent or Sell component */}
            {orderData?.order.paymentDay <= 5
              ? orderData && <Rent orderData={orderData} />
              : null}
          </>
        )}
      </div>
    </>
  );
};
