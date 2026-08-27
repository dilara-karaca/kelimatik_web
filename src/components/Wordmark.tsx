type WordmarkProps = {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizes: Record<NonNullable<WordmarkProps["size"]>, string> = {
  sm: "text-[22px]",
  md: "text-[26px]",
  lg: "text-4xl sm:text-5xl",
  xl: "text-5xl sm:text-6xl lg:text-7xl",
};

export function Wordmark({ size = "md", className = "" }: WordmarkProps) {
  return (
    <span
      className={`font-logo font-bold tracking-[0.02em] leading-none ${sizes[size]} ${className}`}
    >
      <span className="text-ink">KELİ</span>
      <span className="text-brand-deep">MATİK</span>
    </span>
  );
}
