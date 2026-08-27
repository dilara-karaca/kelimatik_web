import { motion } from "framer-motion";
import { pub } from "../../lib/constants";
import { Reveal } from "../Reveal";

const modes = [
  {
    title: "Klasik Mod",
    text: "Temel yazım bilgini test et.",
    icon: pub("icons/klasik_mod.png"),
    tone: "bg-linear-to-br from-brand to-brand-deep text-white",
    invert: true,
  },
  {
    title: "Challenge",
    text: "Kendine meydan oku.",
    icon: pub("icons/challenge_mod.png"),
    tone: "bg-mode-challenge",
    invert: false,
  },
  {
    title: "Yanlışlarım",
    text: "Yanlış yaptığın kelimeleri tekrar et.",
    icon: pub("icons/yanlislarim.png"),
    tone: "bg-mode-mistakes",
    invert: false,
  },
  {
    title: "Sonsuz",
    text: "Serini olabildiğince uzun tut.",
    icon: pub("icons/sonsuz_mod.png"),
    tone: "bg-mode-infinite",
    invert: false,
  },
];

export function GameModes() {
  return (
    <section id="ozellikler" className="scroll-mt-24 px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Öğrenmenin eğlenceli yolu
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {modes.map((mode, i) => (
            <motion.article
              key={mode.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className={`rounded-[32px] p-7 shadow-[0_16px_36px_-22px_rgba(41,45,54,0.3)] ${mode.tone}`}
            >
              <img
                src={mode.icon}
                alt=""
                className={`h-12 w-12 ${mode.invert ? "icon-white" : ""}`}
              />
              <h3 className="mt-5 text-2xl font-extrabold">{mode.title}</h3>
              <p className={`mt-1.5 ${mode.invert ? "text-white/90" : "text-ink/60"}`}>
                {mode.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
