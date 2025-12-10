import { NextPage } from "next";
import Link from "next/link";

const About:NextPage=()=>{
    return (
        <div>
            <h3>This is the about page</h3>
            <Link href="/">to Home</Link>
        </div>
    )
}
export default About;