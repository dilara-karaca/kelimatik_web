import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
  className?: string;
  widthClass?: string;
};

export function PhoneFrame({
  children,
  className = "",
  widthClass = "w-full max-w-[220px] sm:max-w-[260px]",
}: PhoneFrameProps) {
  return (
    <div className={`relative ${widthClass} ${className}`}>
      <div className="relative rounded-[40px] bg-ink p-[9px] shadow-[0_28px_60px_-18px_rgba(41,45,54,0.45)]">
        <div className="pointer-events-none absolute top-[11px] left-1/2 z-20 h-[18px] w-[86px] -translate-x-1/2 rounded-full bg-ink" />
        <div className="relative aspect-[9/19.4] overflow-hidden rounded-[32px] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}
