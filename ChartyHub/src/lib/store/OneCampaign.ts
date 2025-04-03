import { create } from "zustand";
import { ICampaign } from "@/types/Campaign";
import { getAllDonationsByCampaignId, getCampaignById } from "@/services/apiService";
import Donation from "@/types/Donation";

interface oneCampaignState {
  allDonation: Donation[]; // Change 'any' to the appropriate type for your donation data
  oneCampaign: ICampaign;
  loading: boolean;
  getOneCampaings: (id:string|undefined) => Promise<void>;
  error: string | null;
  getAllDonation: (id: string|undefined)  => void;

}

const useOneCampaings = create<oneCampaignState>((set) => ({
  oneCampaign: {} as ICampaign,
  allDonation: [],
  loading: false,
  error: null,

  getOneCampaings: async (id) => {
    if (!id) {
      set({ error: "Campaign ID is required", loading: false });
      return;
    }
    set({ loading: true, error: null });

    try {
      const res = await getCampaignById(id);
      // console.log(res.data);
      
      set({ oneCampaign: res.data, loading: false });
    } catch (err: any) {
      console.error(err.message);
      set({ error: err.message, loading: false });
    }
  },
  getAllDonation: async (id) => {
    set({ loading: true, error: null });
    if (!id) {
      set({ error: "Campaign ID is required", loading: false });
      return;
    }
    try {
        const response = await getAllDonationsByCampaignId(id);
        const data = response.data;
        set({ allDonation: data, loading: false });
    } catch (error: any) {
        set({ error: error.message, loading: false });
    }
},

}));

export default useOneCampaings;
