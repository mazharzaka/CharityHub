import { ICampaign } from "./Campaign";

interface Donor {
  id: string;
  Fname: string;
  Lname: string;
  email?: string;
}

interface Donation {
    donorId: Donor;
    campaignId: ICampaign;
    amount: number;
    currency: string;
    donationType: "one-time" | "recurring";
    paymentMethod: "paypal" | "credit-card" | "cash";
    status?: "pending" | "completed" | "failed";
    message?: string;
    receiptUrl?: string;
    anonymous: boolean;
    createdAt?: string;
  }
  export default Donation;