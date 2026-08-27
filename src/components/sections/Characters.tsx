import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { pub } from "../../lib/constants";
import { Reveal } from "../Reveal";

const characters = [
  "kadin1",
  "erkek1",
  "kadin2",
  "erkek3",
  "kadin4",
  "erkek5",
];

export function Characters() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={ref} className="overflow-hidden px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Öğrenirken yalnız değilsin.
          </h2>
        </Reveal>

        <motion.div
          style={{ y }}
          className="mt-12 flex flex-wrap items-end justify-center gap-4 sm:gap-6"
        >
          {characters.map((id, i) => (
            <motion.img
              key={id}
              src={pub(`characters/${id}.png`)}
              alt=""
              className="w-24 sm:w-32 md:w-36 drop-shadow-[0_18px_24px_rgba(41,45,54,0.16)]"
              animate={{ y: [0, i % 2 === 0 ? -12 : 10, 0] }}
              transition={{
                duration: 4.2 + i * 0.35,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
