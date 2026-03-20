import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "../components/Button.jsx";

export const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [ isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#project", label: "Projects" },
    { href: "#experiences", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  useEffect(() => {
    const handlescrolled = () =>{
      setIsScrolled( window.scrollY > 50)
    };
    window.addEventListener("scroll", handlescrolled);

    return () => window.removeEventListener("scroll", handlescrolled);
  }, []);

  return (
    <header className={`fixed top-0 right-0 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} left-0 bg-transparent py-3 z-50`}>
      <nav className="container mx-auto px-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight text-white">
          Personal <span className="text-[#1ea3cf]">background</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-[#8a9ba8] hover:text-white rounded-full hover:bg-[#1ea3cf]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button size="md">Contact Me</Button>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            className="p-2 text-white"
            onClick={() => setIsMobileMenu(!isMobileMenu)}
          >
            {isMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenu && (
        <div className="md:hidden glass-strong absolute top-full left-0 w-full animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-[#8a9ba8] hover:text-white rounded-lg hover:bg-[#1ea3cf]"
                onClick={() => setIsMobileMenu(false)}
              >
                {link.label}
              </a>
            ))}

            <Button size="sm">Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
