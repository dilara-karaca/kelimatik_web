import { motion } from "framer-motion";
import { PhoneFrame } from "../PhoneFrame";
import { Reveal } from "../Reveal";
import { QuizPhone } from "../mocks/QuizPhone";
import { StatsPhone } from "../mocks/StatsPhone";

const steps = [
  {
    title: "Doğru yazımı seç.",
    screen: <QuizPhone variant="choose" correct="şoför" wrong="şöför" />,
    rotate: 4,
  },
  {
    title: "Zamana karşı yarış.",
    screen: (
      <QuizPhone variant="challenge" correct="öge" wrong="öğe" />
    ),
    rotate: -3,
  },
  {
    title: "Serini oluştur.",
    screen: <QuizPhone variant="streak" correct="bir şey" wrong="birşey" />,
    rotate: -4,
  },
  {
    title: "İlerlemeni takip et.",
    screen: <StatsPhone />,
    rotate: 3,
  },
];

export function HowItWorks() {
  return (
    <section id="nasil" className="scroll-mt-24 bg-mist px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="mb-3 text-sm font-bold tracking-widest text-brand uppercase">
            Uygulama nasıl çalışır?
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Kısa. Net. Eğlenceli.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-6 xl:grid-cols-4 xl:gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                className="w-full"
                style={{ rotate: step.rotate }}
                whileInView={{ y: [16, 0] }}
                viewport={{ once: true }}
              >
                <PhoneFrame className="mx-auto">
                  {step.screen}
                </PhoneFrame>
              </motion.div>
              <p className="mt-6 max-w-[200px] text-lg font-extrabold leading-snug">
                {step.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
