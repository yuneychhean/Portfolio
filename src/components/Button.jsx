
function Button ({className="", size="default", children}){

    const baseClasses =
      "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[#20b2a6] bg-[#1ea3cf] text-[#f0f2f5]/80 hover:bg-[#1ea3cf]/60 shadow-lg shadow-[#202ba6]/25";
      const sizeClasses = {
        sm: "px-3 py-1 text-sm",
        md: "px-5 py-2 text-base",
        lg: "px-6 py-3 text-lg",
      };
    
  const classes = `${baseClasses} ${sizeClasses[size] || ""} ${className || ""}`;
    return(
        <button  className={classes}>
            <span className=" relative flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
}

export default Button;