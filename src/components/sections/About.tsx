import { Reveal } from "../Reveal";

export function About() {
  return (
    <section id="hakkimizda" className="scroll-mt-24 px-5 py-16 sm:py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-bold tracking-widest text-brand uppercase">
          Hakkımızda
        </p>
        <p className="text-xl leading-relaxed text-ink/80 sm:text-2xl sm:leading-snug">
          Kelimatik, Türkçe yazım kurallarını öğrenmeyi daha eğlenceli,
          erişilebilir ve sürdürülebilir hale getirmek için geliştirildi.
        </p>
      </Reveal>
    </section>
  );
}
