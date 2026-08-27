import { motion } from "framer-motion";
import { pub } from "../../lib/constants";
import { Reveal } from "../Reveal";

const items = [
  {
    title: "Serini koru.",
    text: "Hatasız gittiğin sürece serin büyür.",
    icon: pub("icons/streak-devam.png"),
    tone: "bg-mode-streak",
  },
  {
    title: "Performansını takip et.",
    text: "Doğru, yanlış, süre ve ligin bir arada.",
    icon: pub("icons/saat_canli.png"),
    tone: "bg-mode-infinite",
  },
  {
    title: "Yeni başarılar kazan.",
    text: "Liglerde yüksel, yeni hedeflere ulaş.",
    icon: pub("icons/lig.png"),
    tone: "bg-peach",
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
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${item.tone}`}
              >
                <img src={item.icon} alt="" className="h-9 w-9" />
              </div>
              <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/60">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
