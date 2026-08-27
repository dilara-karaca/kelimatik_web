import { motion } from "framer-motion";
import { pub } from "../../lib/constants";
import { PhoneFrame } from "../PhoneFrame";
import { PlayCta } from "../PlayCta";
import { Wordmark } from "../Wordmark";
import { HomePhone } from "../mocks/HomePhone";
import { QuizPhone } from "../mocks/QuizPhone";

export function Hero() {
  return (
    <section
      id="ana-sayfa"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-brand/12 blur-3xl" />
        <div className="absolute top-40 right-[-80px] h-80 w-80 rounded-full bg-brand-deep/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-48 w-48 rounded-full bg-brand/8 blur-3xl" />
      </div>

      <motion.img
        src={pub("characters/kadin1.png")}
        alt=""
        className="pointer-events-none absolute bottom-0 left-[-28px] w-24 drop-shadow-xl sm:w-32 lg:w-40"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src={pub("characters/erkek1.png")}
        alt=""
        className="pointer-events-none absolute right-[-20px] top-24 w-20 drop-shadow-xl sm:w-28 lg:top-28 lg:w-40"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Wordmark size="xl" />
          </motion.div>
          <motion.p
            className="mt-4 text-2xl font-semibold text-ink sm:text-3xl"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            Doğrusunu bil, fark yarat.
          </motion.p>
          <motion.p
            className="mt-5 max-w-md text-[16px] leading-relaxed text-ink/65 sm:text-lg"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            Türkçe yazım kurallarını eğlenceli oyunlarla öğren, bilgini pekiştir
            ve ilerlemeni takip et.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <PlayCta />
          </motion.div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[560px]">
          <motion.div
            className="absolute top-8 left-0 z-0 origin-bottom -rotate-12"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneFrame className="scale-[0.86] sm:scale-90">
                <QuizPhone variant="choose" correct="meyve" wrong="meyva" />
              </PhoneFrame>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute top-0 right-2 z-10 rotate-6 sm:right-6"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <PhoneFrame>
                <HomePhone wordOfDay="yalnız" />
              </PhoneFrame>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
