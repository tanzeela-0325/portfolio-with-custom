import Image from "next/image";
import pic_1 from "../public/istockphoto-1307774382-1024x1024.jpg";


export default function About(){
    return(
        <div className="about">
            <div className="about-img">
                <Image src={pic_1} alt="Image" width={1000} height={1000} />
            </div>
            <div className="main-para">
            <h2 className="about-head">About Me</h2>
            <p className="about-para">Hi, I Am Tanzeela Syeda, a matric student passionate about learning new things, especially in science,
                technology, and coding! I enjoy solving problems and exploring creative ways to improve my skills. 
                Outside of academics, I like my best hobbies writing code , blogging, photography etc. I am excited 
                to see where my studies will take me, and I am always eager to take on new challenges and grow!</p>
            </div>
            
        </div>
    )
}