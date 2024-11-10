
import { GiHamburgerMenu } from "react-icons/gi";

export default function NaveBar(){
    return(
        <div>
           <nav>
                
              <h1 className="nav-heading"><b>Tanzeela Syeda</b></h1>

              <ul className="nav-button">
               <li id="li-1"><a href={"/"}> Home</a></li>
               <li id="li-2"><a href={"/about"}>About</a></li>
               <li id="li-3"><a href={"/project"}>Projects</a></li>
               <li id="li-4"><a href={"/contact"}>Contact</a></li>

              </ul>

               <button className="c-button">Contact Me</button>
               <i className="menuicon"><GiHamburgerMenu /></i>
              
           </nav>
        </div>
    )

}