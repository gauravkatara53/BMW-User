import WHNavbar from "@/components/common/WHNavbar";
import { Hero } from "./Hero";
import { Facilities } from "./Facilites";
import { Nearest } from "./Nearest";
import { Testimonials } from "./Testimonials";
import { About } from "./About";
import { Rent } from "./Rent";

import { useEffect, useState } from "react";
import { apiService } from "@/components/APIService/ApiService";
import ClipLoader from "react-spinners/ClipLoader";
import { useParams } from "react-router-dom";

interface OrderPayload {
  order: any; // shape of your order
  transaction: any; // shape of transaction (if you need it later)
  // ...other top‑level fields in the API response
}

export const OrderDetail = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const [orderData, setOrderData] = useState<OrderPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  /* ───────────── fetch once on mount ───────────── */
  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setIsLoading(true);
        const response = await apiService.get<{ data: OrderPayload }>(
          `/order/deatil/${orderId}`
        );
        setOrderData(response.data); // store the *entire* payload
      } catch (err) {
        console.error(err);
        setError("Failed to fetch order details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  /* ───────────── early returns for clarity ───────────── */
  if (isLoading) {
    return (
      <>
        <WHNavbar dark />
        <div className="mt-20 flex items-center justify-center h-[300px]">
          <ClipLoader size={50} color="#6b46c1" />
        </div>
      </>
    );
  }

  if (error || !orderData?.order) {
    return (
      <>
        <WHNavbar dark />
        <div className="mt-20 text-center text-red-500">
          {error ?? "No order found."}
        </div>
      </>
    );
  }

  /* ───────────── helper vars ───────────── */
  const { order, transaction } = orderData;
  const shouldShowRent = order.paymentDay <= 5;

  /* ───────────── render ───────────── */
  return (
    <>
      <WHNavbar dark />
      <div className="mt-20 w-full max-w-[1200px] mx-auto bg-white p-4 md:p-8">
        <Hero order={order} transaction={transaction} />

        <About orderData={order} />

        <div className="flex mb-14">
          <div className="w-1/2">
            <Facilities orderData={order} />
          </div>
          <div className="ml-20 w-1/2">
            <Nearest orderData={order} />
          </div>
        </div>
        <Testimonials />

        {shouldShowRent && <Rent orderData={order} />}
      </div>
    </>
  );
};
