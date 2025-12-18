export const formatObesityLevel =(level:string):string=>{
    switch(level){
        case "Insufficient_Weight":
            return "Insufficient Weight"
        case "Normal_Weight":
            return "Normal Weight"
        case "Overweight_Level_I":
            return "Overweight Level I"
        case "Overweight_Level_II":
            return "Overweight Level II"
        case "Obesity_Type_I":
            return "Obesity Type I"
        case "Obesity_Type_II":
            return "Obesity Type II"
        case "Obesity_Type_III":
            return "Obesity Type III"
        default:
            return "Unknown"        
    }
}