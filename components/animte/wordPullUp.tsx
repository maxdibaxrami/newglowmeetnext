"use client";
import { cn } from "@nextui-org/react";
import { motion, useInView } from "framer-motion";
import * as React from "react";

export function WordsPullUp({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const splittedText = text.split(" ");

  const pullupVariant = {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex justify-center">
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          animate={isInView ? "animate" : ""}
          className={cn(
            "text-xl text-center sm:text-4xl font-bold tracking-tighter md:text-6xl md:leading-[4rem]",
            "pr-2 w-full", // class to sperate words
            className,
          )}
          custom={i}
          initial="initial"
          variants={pullupVariant}
        >
          {current == "" ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
