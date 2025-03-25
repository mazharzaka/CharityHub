import { create } from "zustand";
import { ICampaign } from "@/types/Campaign";
import { getCampaignById } from "@/services/apiService";

interface oneCampaignState {
  oneCampaign: ICampaign;
  loading: boolean;
  getOneCampaings: (id:string|undefined) => Promise<void>;
  error: string | null;
}

const useOneCampaings = create<oneCampaignState>((set) => ({
  oneCampaign: {} as ICampaign,
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
      console.log(res.data);
      
      set({ oneCampaign: res.data, loading: false });
    } catch (err: any) {
      console.error(err.message);
      set({ error: err.message, loading: false });
    }
  },
}));

export default useOneCampaings;
