"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div>
      <div
        className={cn(
          "transition-bg relative flex flex-col items-center justify-center",
          className,
        )}
        {...props}
      >
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#673cdd 10%,#6651c0 15%,#52429d 20%,#b2a7ff 25%,#5b28cc 30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#02010c 0%,#02010c 7%,transparent 10%,transparent 12%,#02010c 16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff 0%,#fff 7%,transparent 10%,transparent 12%,#fff 16%)",

              "--violet-9": "#673cdd",
              "--violet-8": "#6651c0",
              "--violet-7": "#52429d",
              "--violet-11": "#b2a7ff",
              "--violet-10": "#5b28cc",
              "--gray-1": "#02010c",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              `after:animate-aurora pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--violet-9)_10%,var(--violet-8)_15%,var(--violet-7)_20%,var(--violet-11)_25%,var(--violet-10)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--gray-1)_0%,var(--gray-1)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--gray-1)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </div>
  );
}; 