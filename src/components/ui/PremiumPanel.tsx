import { type ReactNode } from "react";

interface PremiumPanelProps {
  children: ReactNode;
  className?: string;
  compact?: boolean;
}

export function PremiumPanel({
  children,
  className = "",
  compact = false,
}: PremiumPanelProps) {
  return (
    <div
      className={`luxury-shadow flex min-h-0 w-full flex-col rounded-[20px] border border-border/70 bg-white ${compact ? "p-3 sm:p-3.5" : "p-5 sm:p-6"} ${className}`}
    >
      {children}
    </div>
  );
}
