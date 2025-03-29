interface Donation {
    donorId: string;
    campaignId: string;
    amount: number;
    currency: string;
    donationType: "one-time" | "recurring";
    paymentMethod: "paypal" | "credit-card" | "cash";
    status?: "pending" | "completed" | "failed";
    message?: string;
    receiptUrl?: string;
    anonymous: boolean;
  }
  export default Donation;