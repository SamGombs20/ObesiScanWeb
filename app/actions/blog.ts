import { getSanityData } from "../api/sanityAPI"

export const getBlogPosts = async()=>{
    const res= await getSanityData()
    return res.result
}