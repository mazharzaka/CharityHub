import Donation from "./Donation";

interface Transaction {
  _id: string;
  userId: string;
  donationId: Donation;
  transactionReference: string;
  amount: number;
  currency: 'USD' | 'EGP';
  transactionType: 'deposit' | 'withdraw';
  paymentMethod: 'credit-card' | 'paypal' | 'cash';
  status: 'pending' | 'completed' | 'failed' | 'refund';
  createdAt: string;
}
export default Transaction;