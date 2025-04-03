import { create } from 'zustand';
// import axios from 'axios';
import Transaction from '@/types/transaction';
import { getAllTransactionByUser } from '@/services/apiService';



interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  fetchTransactions: () => Promise<void>;
}

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  loading: false,
  error: null,

  fetchTransactions: async () => {
    set({ loading: true, error: null });

    try {
      const response = await getAllTransactionByUser();
      set({ transactions: response.data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch transactions', loading: false });
    }
  },
}));
