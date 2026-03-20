import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlight = [
  {
    icon: Code2,
    title: "clean code",
    description: " to ensure clean and secure coding",
  },
  {
    icon: Lightbulb,
    title: "clean code",
    description: " to ensure clean and secure coding",
  },
  {
    icon: Rocket,
    title: "clean code",
    description: " to ensure clean and secure coding",
  },
  {
    icon: Users,
    title: "clean code",
    description: " to ensure clean and secure coding",
  },
];
function About (){
  return (
    <section id="about" className=" py-32 relative overflow-hidden">
      <div className=" container mx-auto px-6 relative z-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* left column */}
          <div className=" space-y-8">
            <div className=" animate-fade-in ">
              <span className=" text-[#1ea3cf] text-sm font-medium tracking-wider uppercase">
                About me
              </span>
            </div>

            <h2 className=" text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-[#1ea3cf]">
              Grow for the future
              <span className=" font-serif italic font-normal text-white">
                {" "}
                one life must try.
              </span>
            </h2>

            <div className=" space-y-4 text-[#8a9ba8] animate-fade-in animation-delay-200">
              <p>
                I am a scholarship student majoring in Computer Science. Besides
                my studies, I work as an English and math teacher to support
                myself and live independently, which helps me develop
                communication, patience, and leadership skills. I am passionate
                about becoming a Frontend Developer and enjoy building
                user-friendly web interfaces using HTML, CSS, JavaScript, and
                React. I am committed to improving my skills, graduating
                successfully, and contributing positively to my community.
              </p>
              <p>
                I graduated from high school in 2024 with an A grade. Currently,
                I work as a freelance math teacher, where I help students
                improve their understanding and problem-solving skills.
              </p>
              <p>
                In my free time, I enjoy exploring new technologies that can support my career development. I also have a strong interest in listening to music and playing games, which help me relax and stay creative.
              </p>
            </div>
            <div className=" glass rounded-2xl p-6 glow-border animate-fade-in ">
              <p className=" text-lg italic text-[#b6f3ff] ">
                This experience has strengthened my communication, patience, and
                leadership skills. I am passionate about becoming a Frontend
                Developer and enjoy building user-friendly web interfaces using
                HTML, CSS, JavaScript, and React, while continuously improving
                my skills and contributing to my community.
              </p>
            </div>
          </div>

          {/* right col */}
          <div className=" grid sm:grid-cols-2 gap-6">
            {highlight.map((items, index) => (
              <div
                key={index}
                className=" glass p-6 rounded-2xl animate-fade-in"
                style={{ animationonDelay: ` ${(index + 1) * 100}ms` }}
              >
                <div className=" w-12 h-12 rounded-xl bg-[#1ea3cf]/10 flex items-center justify-center mb-4 hover:bg-[#1ea3cf]/20">
                  {" "}
                  <items.icon className=" w-6 h-6 text-[#1ea3cf]" />
                </div>
                <h3 className=" text-lg font-semibold mb-2">{items.title}</h3>
                <p className=" text-sm text-[#8a9ba8]">{items.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;