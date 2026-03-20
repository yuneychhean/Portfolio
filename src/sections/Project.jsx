import { ArrowUpRight, Github } from "lucide-react";
import ecommerceImg from "../assets/e-commerce.png";
import AnimateBorderbtn from "../components/AnimateBorderbtn";
import Movio from "../assets/Movio.jpg";

const projects = [
  {
    title: "Natural Beauty",
    description:
      " It is a skin care e-commerce website to provide the best services to customer such as find skin type and skin care product.",
    image: ecommerceImg,
    tags: ["html", "css", "JavaScript"],
    link: "#",
    github: "#",
  },
  {
    title: "Movie Website",
    description:
      " A front-end web project aimed at creating a visually appealing and intuitive user interface that enhances user relaxation and entertainment.",
    image: Movio,
    tags: ["JavaScript", "Tailwind", "ReactJs"],
    link: "#",
    github: "#",
  },
 
];

function Project() {
  return (
    <section id="project" className=" py-32 relative overflow-hidden">
      {/*  bg glow*/}
      <div className=" absolute top-1/4 right-0 w-96 h-96 bg-[#1ea3cf]/8 rounded-full blur-3xl" />
      <div className=" absolute bottom-1/4 left-0 w-64 h-64 bg-[#b6f3ff]/9 rounded-full blur-3xl" />
      <div className=" container mx-auto px-6 relative z-10">
        {/* section headre */}
        <div className=" text-center mx-auto max-w-3xl mb-16 ">
          <span className=" text-[#1ea3cf] text-sm  tracking-wider font-medium uppercase animate-fade-in ">
            Feature work
          </span>
          <h2 className=" text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in  animation-delay-100 text-[#1ea3cf]">
            {" "}
            Project that
            <span className=" font-serif italic font-normal text-white">
              {" "}
              make an impact
            </span>
          </h2>
          <p className=" text-[#8a9ba8] animate-fade-in animation-delay-200">
            There are my projects to achieved during study since year 1 until
            year 2, it's improve my skill to sovle problem in real-world
          </p>
        </div>

        {/* Project grid */}
        <div className=" grid md:grid-cols-2 gap-8">
          {projects.map((p, index) => (
            <div
              key={index}
              className=" group glass rounded-2xl animate-fade-in md:row-span-1"
              style={{ animationDelay: ` ${(index + 1) * 100}ms` }}
            >
              {/* image */}
              <div className=" relative overflow-hidden aspect-video">
                <img
                  src={p.image}
                  alt={p.title}
                  className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className=" absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60">
                  {/* overlay links */}
                  <div className=" absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={p.link}
                      className=" p-3 rounded-full glass hover:bg-[#0bb4ec] transition-all"
                    >
                      <ArrowUpRight className=" w-6 h-6" />
                    </a>
                    <a
                      href={p.github}
                      className=" p-3 rounded-full glass hover:bg-[#0bb4ec] transition-all"
                    >
                      <Github className=" w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
              {/* content */}
              <div className=" space-y-4 p-6">
                <div className=" flex items-center justify-between">
                  <h3 className=" text-xl font-semibold group-hover:text-[#1ea3cf] transition-colors">
                    {p.title}
                  </h3>
                  <ArrowUpRight className=" w-6 h-6 text-[#8a9ba8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className=" text-[#8a9ba8] text-sm">{p.description}</p>
                <div className=" flex flex-wrap gap-2">
                  {p.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className=" px-4 py-2 rounded-full bg-[#1a2329] text-xs font-medium border border-border/50 text-[#8a9ba8] hover:border-[#1ea3cf] hover:text-[#1ea3cf] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className=" text-center mt-12 animate-fade-in animation-delay-500 ">
          <AnimateBorderbtn>
            <ArrowUpRight className=" w-5 h-6" />
            view all Projects
          </AnimateBorderbtn>
        </div>
      </div>
    </section>
  );
}

export default Project;
