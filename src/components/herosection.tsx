import Link from "next/link";
import Image from "next/image";
import main_img from "../public/istockphoto-1992823299-1024x1024.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function HeroSection(){
    return(
        <div>
           <div className="hero-sec">
            <div className="discription">           
            <h1>Hello I Am<span>Tanzeela Syeda!</span></h1>
            <h2>I Am a<br /><span>Web Developer...</span></h2>
            <p >I am a student of GIAIC,quater 02: but curently i learning <br />
            <i> next.js #15,</i> Language in this <b>Quater 02:</b></p>
            <br />

           <ul className="hero-li">
            <li className="list-1"><Link href="https://github.com/tanzeela-0325"><FaGithub /></Link></li>
            <li className="list-2"><Link href={"https://www.linkedin.com/in/tanzeela-syeda-b609532ba/"}><FaLinkedin /></Link></li>
            <li className="list-3"><Link href={"https://www.instagram.com"}></Link> <FaInstagramSquare /></li>
           </ul>

           <button className="down-but">Download CV</button>
           </div>

        <Image src={main_img} alt="Image" width={1000} height={1000} className="main-img"/>
        </div>

        </div>
    )
}