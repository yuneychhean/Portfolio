import HeroImg from "../assets/Hero.png";
import Button from "../components/Button";
import CVPDF from "../assets/CVPDF.jpg"

import {
  ArrowRight,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ChevronDown,
  Download
} from "lucide-react";
import Profile from "../assets/Profile.jpg"
import AnimateBorderbtn from "../components/AnimateBorderbtn";

const skills =[
  "HTML5",
  "CSS3",
  "JavaScript",
  "C/C++",
  "Figma",
  "Tailwind",
  "Bootstrap",
  "Java",
  "Git/Github",
];

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HeroImg}
          alt="Hero Img"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
      </div>

      {/* content */}

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className=" grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Colum- Text Content */}
          <div className=" space-y-8">
            <div className=" animate-fade-in ">
              <span className=" inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#1ea3cf]">
                <span className=" w-2 h-2 bg-[#1ea3cf] rounded-full animate-pulse" />{" "}
                Front-end Developer
              </span>
            </div>

            {/* Headline */}
            <div className=" space-y-4">
              <h1 className=" text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in animation-delay-200">
                Hello! I’m{" "}
                <span className=" text-[#1ea3cf] glow-text gradient-text">
                  {" "}
                  EyChhean{" "}
                </span>
                <br />
                who has passionate
                <br />
                <span className=" font-serif italic font-normal text-white">
                  interactive web experiences
                </span>
              </h1>
              <p className="text-lg text-[#b6f3ff] max-w-lg animate-fade-in animation-delay-800">
                Hi! I’m a second-year Computer Science student who likes to
                build website. I’m skilled in JavaScript, HTML, CSS, ReactJS,
                and have a grasp of algorithms and data structures.
              </p>
            </div>

            {/* CTA button*/}
            <div className="flex gap-4 flex-wrap animate-fade-in animate-delay-300">
              {" "}
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <a href={CVPDF}>
                <AnimateBorderbtn>
                  <Download className=" w-5 h-5" />
                  Download CV
                </AnimateBorderbtn>
              </a>
            </div>
            <div className=" flex items-center gap-4 animate-fade-in animation-delay-300">
              <span>Follow</span>
              {[
                { icon: Github, href: "https://github.com/yuneychhean" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/yun-eychhean-6a365a395?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                },
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/share/179sGfcdNW/?mibextid=wwXIfr",
                },
                { icon: Instagram, href: "https://www.instagram.com/yeannohavemoney?igsh=MTBmaHN4NnYzYmRwNw%3D%3D&utm_source=qr" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className=" p-2 rounded-full glass hover:bg-[#1ea3cf] transition-all duration-300"
                >
                  {" "}
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {/* Right Column- Profile image */}
          <div className="relative animate-fade-in animation-delay-300">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#1ea3cf] via-transparent to-[#1ea3cf] blur-2xl profile-pulse" />

            <div className="relative max-w-md mx-auto">
              <img
                src={Profile}
                alt="Profile"
                className="w-full aspect-[4/5] object-cover rounded-2xl glow-border"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full dot-pulse" />
                  <span className="text-sm font-medium">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Status badge — fixed typo */}
              <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3">
                <div className="text-sm font-bold text-[#1ea3cf]">Junior</div>
                <div className="text-xs text-[#8a9ba8]">Frontend Developer</div>
              </div>
            </div>
          </div>
        </div>
        {/* Skill  */}
        <div className=" mt-20 animate-fade-in animation-delay-600 ">
          <p className=" text-sm text-[#8a9ba8] mb-6 text-center">
            Technology tools
          </p>
          <div className=" relative overflow-hidden">
            <div className=" flex animate-marquee ">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className=" flex-shrink-0 px-8 py-4">
                  <span className=" text-lg font-semibold text-[#8a9ba8] hover:text-[#1ea3cf]">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* scoll path*/}
        <div className=" absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 ">
          <a
            href="#about"
            className=" flex flex-col items-center gap-2 text-[#8a9ba8] hover:text-[#8a9ba8]"
          >
            <span className=" text-xs uppercase tracking-wider"> scroll </span>
            <ChevronDown />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
