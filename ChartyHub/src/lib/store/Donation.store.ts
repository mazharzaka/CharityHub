import { create } from "zustand"
import { createDonation } from "@/services/apiService";
import Donation from "@/types/Donation";
interface DonationState {
// Change 'any' to the appropriate type for your donation data
  loading: boolean;
   error: string | null;
   addDonation: (donationData: Donation) => void; // Change 'any' to the appropriate type for your donation data
}

const useDonationStore = create<DonationState>((set) => ({
//   donation: [],
loading: false,
error: null,
    addDonation: async (donationData: Donation) => {
        set({ loading: true, error: null });
        try {
         await createDonation(donationData);
        set(() => ({
            // donation: [...state.donation, response.data],
            loading: false,
        }));
        } catch (error: any) {
        set({ error: error.message, loading: false });
        }
    },

}))
export default useDonationStore;