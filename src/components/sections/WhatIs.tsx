import { motion } from "framer-motion";
import { BrainIcon, ProgressIcon, TargetIcon } from "../BrandIcons";
import { Reveal } from "../Reveal";

const pillars = [
  {
    title: "Öğren",
    text: "Doğru yazımı öğren",
    icon: BrainIcon,
  },
  {
    title: "Oyna",
    text: "Farklı modlarla pekiştir",
    icon: TargetIcon,
  },
  {
    title: "İlerle",
    text: "Performansını takip et",
    icon: ProgressIcon,
  },
];

export function WhatIs() {
  return (
    <section className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Türkçe yazımını oyunlaştır.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-ink/65 sm:text-lg">
            Kelimatik, Türkçede en sık yapılan yazım hatalarını eğlenceli oyun
            modlarıyla pekiştirmenizi sağlayan bir Türkçe yazım uygulamasıdır.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: 0.1 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[28px] bg-white p-8 shadow-[0_18px_40px_-24px_rgba(41,45,54,0.28)]"
            >
              <item.icon className="mx-auto h-16 w-16" />
              <h3 className="mt-5 text-2xl font-extrabold text-brand">{item.title}</h3>
              <p className="mt-2 text-ink/65">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
