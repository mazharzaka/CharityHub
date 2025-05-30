// import AllCampaings from "@/pages/AllCampaings";
import Donation from "@/types/Donation";
import { IUser } from "@/types/User";
import axios from "axios";
// import { config } from "process";


const API= axios.create({
    baseURL:import.meta.env.VITE_API_BASE_URL,
    // headers:{"Content-Type":"application/json"}
})
API.interceptors.request.use((config)=>{
 const Token= localStorage.getItem("token")
 if (Token){
    config.headers.Authorization=`Bearer ${Token}`
 }
 return config
},(error) => Promise.reject(error))

export const allCampaings=()=>API.get('/campaign/all')
export const allCampaingsFeature=()=>API.get('/campaign/featured')
export const getCampaignById=(id:string)=>API.get(`/campaign/${id}`)
export const createDonation=(data:Donation)=>API.post('/donation',data)
export const getAllDonation=()=>API.get('/donation')
export const getAllDonationsByCampaignId=(id:string)=>API.get(`/donation/${id}`)
export const getAllTransactionByUser=()=>API.get(`/transaction/all`)
export const createUser=(data:IUser)=>API.post('/user/create',data, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
    })
 export const getUserById=(id:string)=>API.get(`/user/${id}`)   
export default API