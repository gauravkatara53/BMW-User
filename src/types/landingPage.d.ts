interface LPAchievement {
  _id?: string;
  title?: string;
  subtitle?: string;
  images?: Array<string>;
}

interface LPFeatured {
  _id?: string;
  propertyName?: string;
  price?: string;
  img?: string;
  ownerImage?: string;
  ownerName?: string;
  place?: string;
  tag?: string;
}

interface LPReview {
  _id?: string;
  reviewTitle?: string;
  review?: string;
  rating?: number;
  reviewerName?: string;
  reviewerImage?: string;
  reviewerdes?: string;
  bgImageUrl?: string;
}

/* ---------- API primitives ---------- */
export interface PaymentCycle {
  _id: string;
  month: string;
  amount: number;
  paymentStatus: "Paid" | "Unpaid" | "Processing";
}

export interface PriceItem {
  _id: string;
  title: string;
  amount: number;
  isMonthly?: boolean;
}

export interface Facility {
  _id: string;
  icon: string;
  name: string;
  value: string;
}

/* ---------- Aggregate objects ---------- */
export interface WarehouseDetail {
  name: string;
  address: string;
  city: string;
  pincode: string | number; // number in the real API, but let it be string too
  areaSqFt: string | number;
  images: string[];
  price: PriceItem[];
  facility: Facility[];
  nearestFacility: Facility[];
  rentOrSell: "Rent" | "Sell";
}

export interface PartnerDetails {
  _id: string;
  name: string;
  avatar: string;
  phone?: string;
}

export interface Order {
  _id: string;
  orderStatus: string;
  duration: number;
  paymentDay: number;
  WarehouseDetail: WarehouseDetail;
  partnerDetails: PartnerDetails;
  monthlyPayment: PaymentCycle[];
}

export interface Transaction {
  _id: string;
  totalPrice: number;
  paymentStatus: "Completed" | "Pending" | "Failed" | string;
  transactionDate: string;
}

/* ---------- Envelope passed to Hero ---------- */
export interface OrderEnvelope {
  order: Order;
  transaction: Transaction;
}

/* ---------- Raw API envelope ---------- */
export interface ApiEnvelope {
  data: OrderEnvelope;
}
