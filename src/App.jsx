import  Hero  from "./sections/Hero";
import  NavBar  from "./Layout/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Testimonails from "./sections/Testimonails";
import Contact from "./sections/Contact";
import "./index.css";

function App() {
 return (
   <div className="min-h-screen bg-[#0f1418] overflow-hidden text-[#f0f2f5]">
     <NavBar />
     <main className="">
       <Hero />
       <About />
       <Project />
       <Experience />
       <Testimonails />
       <Contact />
     </main>
   </div>
 );
}
export default App;
