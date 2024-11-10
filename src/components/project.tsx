import Link from "next/link";
import Image from "next/image";
import pic_1 from "../public/ratul-ghosh-e5hucrUutDE-unsplash.jpg";
import pic_2 from "../public/resume-apply-work-form-concept.jpg";
import pic_3 from "../public/nicola-styles-qWFMm1iRJkM-unsplash.jpg";

export default function Projects(){
    return(
        <div>
            <h2 className="pro-head">My Projects</h2>
         <div className="project">
                <div className="pro-div-1">
                 <Image src={pic_1} alt="Img-1" width={1000} height={1000} className="pro-img-1" />
                    <h3>Assignment Vagetable</h3>
                    <p>This is my Assignment no 4th & 5th</p>
                    <div className="link-1">
                  <Link className="button" href={"https://github.com/tanzeela-0325/assignment_04_and_05"}>GitHub</Link>
                  <Link className="button" href={"/https://vercel.com/tanzeela-syedas-projects/assignment04-and-05-isbt"}>Go Live</Link>
                  </div>
                </div>
                
              <div className="pro-div-2">
                <Image src={pic_2} alt="img-2" width={1000} height={1000} className="pro-img-2"/>
                  <h2>Resume Builder</h2>
                   <p>This is my Resumr Builder Assignment</p> 
                <div className="link-2">
                <Link className="button" href={"https://github.com/tanzeela-0325/hackathone-static-resume"} >GitHub</Link>
                <Link className="button" href={"https://hackathone-static-resume.vercel.app/"} >Go Live</Link>
                </div>

                
              </div>
              
         </div>
               <div className="todo-pro">
                  <Image className="todo-img" src={pic_3} alt="img-3" width={1000} height={1000}/>
                  <h2 className="todo-head">ToDo List</h2>
                  <p className="todo-para">This is My To Do List Assignment </p>
                  <Link className="button" href={"https://github.com/tanzeela-0325/simple-todos"}>GitHub</Link>

                </div>
        </div>
    )
}