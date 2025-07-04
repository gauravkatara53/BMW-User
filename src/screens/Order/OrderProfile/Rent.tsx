import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import { apiService } from "@/components/APIService/ApiService";

declare global {
  interface Window {
    Razorpay: any;
  }
}

/* ───────────── helpers ───────────── */
const loadRazorpayScript = () =>
  new Promise<void>((resolve, reject) => {
    if (window.Razorpay) return resolve();
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });

/* ───────────── types ───────────── */
interface MonthlyPayment {
  month: string;
  amount: number;
  paymentStatus: "Paid" | "Unpaid";
}

interface Order {
  _id: string;
  monthlyAmount: number;
  monthlyPayment: MonthlyPayment[];
  customerDetails?: { name?: string; email?: string; phone?: string };
  WarehouseDetail?: { address?: string };
}

interface RentProps {
  orderData: Order; // ✅ plain order object
}

/* ───────────── component ───────────── */
export const Rent = ({ orderData }: RentProps) => {
  const [loading, setLoading] = useState(false);

  /* first unpaid month */
  const unpaidMonth = orderData?.monthlyPayment?.find(
    (p) => p.paymentStatus === "Unpaid"
  );

  /* load Razorpay script once */
  useEffect(() => {
    loadRazorpayScript().catch((err) =>
      console.error("Failed to load Razorpay:", err)
    );
  }, []);

  const handleRent = async () => {
    if (!orderData || !unpaidMonth) return;

    setLoading(true);
    try {
      /* 1 — create Razorpay order on backend */
      const res = await apiService.post<{
        data: { updatedOrder: Order; razorpayOrder: any; transaction: any };
      }>(`/transaction/montly/rent/${orderData._id}`, {});

      const { updatedOrder, razorpayOrder } = res.data;

      /* 2 — configure checkout */
      const options = {
        key: "rzp_test_u4a2EVKlaHtY6X",
        amount: updatedOrder.monthlyAmount * 100,
        currency: "INR",
        name: "BookMyWarehouse",
        image: "https://bookmywarehouse.co/logo1.png",
        description: `Payment for ${unpaidMonth.month} rent`,
        order_id: razorpayOrder.id,
        handler: async (response: any) => {
          await verifyPayment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          );
        },
        prefill: {
          name: orderData.customerDetails?.name ?? "",
          email: orderData.customerDetails?.email ?? "",
          contact: orderData.customerDetails?.phone ?? "",
        },
        notes: {
          address: orderData.WarehouseDetail?.address ?? "N/A",
        },
      };

      /* 3 — open checkout */
      new window.Razorpay(options).open();
    } catch (err) {
      console.error("Error initiating payment:", err);
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (
    razorpayPaymentId: string,
    razorpayOrderId: string,
    razorpaySignature: string
  ) => {
    try {
      await apiService.post("/transaction/verify/rent", {
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
      });
    } catch (err) {
      console.error("Error verifying payment:", err);
    }
  };

  /* ───────────── UI ───────────── */
  if (!unpaidMonth) return null; // nothing due ⇒ render nothing

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faIndianRupee} />
            <p className="text-xl font-normal">{unpaidMonth.amount}</p>
          </div>
          <p className="text-sm text-gray-600 underline">
            {unpaidMonth.month} Month
          </p>
        </div>

        <button
          className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-full font-medium disabled:opacity-50"
          onClick={handleRent}
          disabled={loading}
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      </div>
    </div>
  );
};
