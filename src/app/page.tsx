import Image from "next/image";
import Link from "next/link";
import React from 'react'
import Contact from "./Contact/page";
import About from "./About/page"
import Service from "./Services/page";

const page = () => {
  return (
    <div>
<Link href="./">Home</Link>
<br/>
<Link href="./About">About</Link>
<br />
<Link href="./Contact">Contact</Link>
<br />
<Link href="./Services">Services</Link>
<br />
    </div>
  )
};
export default page;
