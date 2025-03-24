
import { allCampaingsFeature } from "@/services/apiService";
import { create } from "zustand"

interface CampaignsFeaturedState {
    campaignsFeatured: [];
    loading: boolean;
    getAll: () => void;
    error: string | null;
}

const useCampaignsFeatured = create<CampaignsFeaturedState>((set) => ({
    campaignsFeatured: [],
    loading: false,
    error:null,
    getAll: async () => {
        try {
            const campaigns = await allCampaingsFeature();
            console.log( campaigns.data);
            
            set({ campaignsFeatured: campaigns.data, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    }
}));
export default useCampaignsFeatured;