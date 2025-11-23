"use client";

import { ChevronRight, ArrowRight, LucideIcon } from "lucide-react";

interface UniversalButtonProps {
  text: string;
  href?: string;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void;
  variant?: "dark" | "light";
  Icon?: LucideIcon;
  animate?: boolean;
  className?: string;
  disabled?: boolean;
}

export default function UniversalButton({
  text,
  href,
  onClick,
  variant = "dark",
  Icon,
  animate = true,
  className = "",
  disabled = false,
}: UniversalButtonProps) {
  const sizeClasses = "pl-5 pr-3 py-2.5 text-[15px]";

  const baseStyles =
    variant === "dark"
      ? "bg-[#2D6BDF] text-white hover:bg-[#2457b8]"
      : "bg-white text-black hover:bg-gray-100 border border-gray-300";

  const disabledStyles =
    "opacity-50 cursor-not-allowed hover:bg-inherit hover:text-inherit hover:translate-x-0";

  const content = (
    <span className="flex items-center gap-1.5">
      {text}

      {Icon ? (
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      ) : (
        <span className="relative inline-flex items-center justify-center w-4 h-4">
          <ChevronRight
            className={`absolute inset-0 h-4 w-4 transition-all duration-300 ${
              animate ? "group-hover:opacity-0 group-hover:translate-x-1" : ""
            }`}
          />
          <ArrowRight
            className={`absolute inset-0 h-4 w-4 opacity-0 transition-all duration-300 ${
              animate
                ? "group-hover:opacity-100 -translate-x-[2px] group-hover:translate-x-0"
                : ""
            }`}
          />
        </span>
      )}
    </span>
  );

  // BUTTON (if onClick exists)
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={`group inline-flex items-center justify-center rounded-full font-poppins font-medium transition-all duration-300 active:scale-[0.98] 
          ${baseStyles} ${sizeClasses} ${className} ${disabled ? disabledStyles : ""}`}
      >
        {content}
      </button>
    );
  }

  // LINK (if no onClick)
  return (
    <a
      href={disabled ? "#" : href || "#"}
      aria-disabled={disabled}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
      }}
      className={`group inline-flex items-center justify-center rounded-full font-poppins font-medium transition-all duration-300 active:scale-[0.98] 
        ${baseStyles} ${sizeClasses} ${className} ${disabled ? disabledStyles : ""}`}
    >
      {content}
    </a>
  );
}
