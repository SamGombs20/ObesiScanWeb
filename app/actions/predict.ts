import { predict, recommendation } from "../api/predictionAPI";

export const predictAction = async(input:APIInput)=>{
    return await predict(input)
}

export const recommendationAction = async(input:APIInput)=>{
    return await recommendation(input)
}