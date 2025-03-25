
import { allCampaingsFeature } from "@/services/apiService";
import { create } from "zustand"
import { ICampaign } from "@/types/Campaign"

interface CampaignsFeaturedState {
    campaignsFeatured: ICampaign[];
    loading: boolean;
    getAll: () => void;
    error: string | null;
}

const useCampaignsFeatured = create<CampaignsFeaturedState>((set) => ({
    campaignsFeatured: [],
    loading: false,
    error:null,
    getAll: async () => {
    set({ loading: true, error: null }); 

        try {
            const campaigns = await allCampaingsFeature();
            set({ campaignsFeatured: campaigns.data, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}));
export default useCampaignsFeatured;