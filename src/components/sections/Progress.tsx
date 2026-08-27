import { motion } from "framer-motion";
import { pub } from "../../lib/constants";
import { Reveal } from "../Reveal";

const items = [
  {
    title: "Serini koru.",
    icon: pub("icons/streak-devam.png"),
    extras: [pub("icons/streak_olu.png")],
  },
  {
    title: "Performansını takip et.",
    icon: pub("icons/dolu_can.png"),
    extras: [pub("icons/saat_canli.png"), pub("icons/dogru.png"), pub("icons/yanlis.png")],
  },
  {
    title: "Yeni başarılar kazan.",
    icon: pub("icons/lig.png"),
    extras: [pub("icons/favorilendi.png")],
  },
];

export function Progress() {
  return (
    <section className="bg-peach px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Her doğru cevapta biraz daha ilerle.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-[28px] bg-white p-8 text-center shadow-[0_16px_36px_-22px_rgba(41,45,54,0.25)]"
            >
              <div className="mb-5 flex items-center justify-center gap-2">
                <img src={item.icon} alt="" className="h-14 w-14" />
                {item.extras.map((src) => (
                  <img key={src} src={src} alt="" className="h-9 w-9 opacity-90" />
                ))}
              </div>
              <h3 className="text-xl font-extrabold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
