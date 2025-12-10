import { useRouter } from "next/router"

const Recipe =()=>{
    const router = useRouter()
    const {recipe} = router.query

    return <p>Recipe :{recipe}</p>
}
export default Recipe