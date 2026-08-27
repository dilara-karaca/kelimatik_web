import { pub } from "../../lib/constants";
import { PlayCta } from "../PlayCta";
import { Reveal } from "../Reveal";

export function FinalCta() {
  return (
    <section className="px-5 pb-20 sm:pb-28">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[36px] bg-linear-to-br from-brand to-brand-deep px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <img
            src={pub("characters/kadin3.png")}
            alt=""
            className="pointer-events-none absolute bottom-0 left-2 hidden w-32 lg:block xl:w-40"
          />
          <img
            src={pub("characters/erkek2.png")}
            alt=""
            className="pointer-events-none absolute right-2 bottom-0 hidden w-32 lg:block xl:w-40"
          />
          <h2 className="text-3xl font-extrabold sm:text-5xl">
            Doğrusunu bil, fark yarat.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/90 sm:text-lg">
            Türkçe yazımını geliştirmenin eğlenceli yolunu keşfet.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PlayCta className="bg-ink shadow-[0_12px_28px_-10px_rgba(41,45,54,0.45)]" />
            <PlayCta variant="badge" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
