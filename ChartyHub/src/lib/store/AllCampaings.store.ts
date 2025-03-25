import { create } from "zustand";
import { ICampaign } from "@/types/Campaign";
import { allCampaings } from "@/services/apiService";

interface allCampaignsState {
  allCampaigns: ICampaign[];
  loading: boolean;
  getAllCampaings: () => Promise<void>;
  error: string | null;
}

const useAllCampaings = create<allCampaignsState>((set) => ({
  allCampaigns: [],
  loading: false,
  error: null,

  getAllCampaings: async () => {
    set({ loading: true, error: null }); 

    try {
      const res = await allCampaings();
      set({ allCampaigns: res.data, loading: false });
    } catch (err: any) {
      console.error(err.message);
      set({ error: err.message, loading: false });
    }
  },
}));

export default useAllCampaings;
