import HeroSection from "@/components/herosection";
import NaveBar from "@/components/navebar";
import About from "@/components/about";
import Contact from "@/components/contact";
import Projects from "@/components/project";


export default function Home() {
  return (
    <div className="main">
      <NaveBar/>
      <br />
      <HeroSection/>
      <br />
      <About/>
      <br />
      <Projects/>
      <br />
      <Contact/>
    </div>
  );
}
