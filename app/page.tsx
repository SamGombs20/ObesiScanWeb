import { NextPage } from "next";
import Link from "next/link";

export default function Main (){
  return(
    <div>
      <h3>This is the Home page</h3>
      <Link href="/about">About page</Link>
    </div>
  )
}