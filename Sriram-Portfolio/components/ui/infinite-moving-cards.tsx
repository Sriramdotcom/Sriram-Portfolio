"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";

type Props = {
  skills: Array<[string, ReactNode]>;
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const InfiniteMovingCards = ({
  skills,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [hasDuplicated, setHasDuplicated] = useState(false);

  useEffect(() => {
    if (scrollerRef.current && !hasDuplicated) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const clone = item.cloneNode(true);
        scrollerRef.current!.appendChild(clone);
      });
      setHasDuplicated(true);
    }

    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [direction, speed, hasDuplicated]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-sm md:max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {skills.map(([title, icon], index) => (
          <li
            key={index}
            className="flex items-center gap-2 mr-3 rounded-full py-2 px-5 w-max bg-neutral-50 dark:bg-neutral-800 text-black dark:text-white shadow-sm border border-neutral-300 dark:border-neutral-700 font-outfit"
          >
            {icon}
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
