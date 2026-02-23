import LoadingAnime from "../../public/loading.json"
import Lottie from "lottie-react"
export const Loading =()=>{
    return (
        <div className="loading-container">
            <Lottie animationData={LoadingAnime} loop={true}/>
        </div>
    )
}