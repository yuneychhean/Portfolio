import { Download } from "lucide-react";

function AnimateBorderbtn({children}) {
  return (
    <button
      className="relative bg-transparent text-foreground transition-all 
        duration-300 focus:outline-none group animated-border
        px-8 py-4 text-lg font-medium rounded-full"
      style={{ border: "1px solid rgba(255,255,255,0.1)" }}
    >
      {/* SVG overlay — draws animated orange line around the full pill */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none rounded-full"
        style={{ overflow: "visible" }}
        preserveAspectRatio="none"
      >
        <rect
          x="0.75"
          y="0.75"
          width="99.5%"
          height="calc(100% - 1.5px)"
          rx="9999"
          ry="9999"
          fill="none"
          stroke="#1ea3cf"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="60 1000"
          strokeDashoffset="0"
          className="animate-border-path"
        />
      </svg>

      <span className="relative z-10 flex items-center justify-center gap-2">
       {children}
      </span>
    </button>
  );
}

export default AnimateBorderbtn;
