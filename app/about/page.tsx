import { NextPage } from "next";
import Link from "next/link";
import style from './about.module.css';
const About:NextPage=()=>{
    return (
        <div className={style.about_container}>
            <h3>This is the styled about page</h3>
            <Link href="/">to Home</Link>
        </div>
    )
}
export default About;