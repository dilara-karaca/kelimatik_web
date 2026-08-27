import { pub } from "../../lib/constants";
import { Wordmark } from "../Wordmark";

const modes = [
  {
    title: "Klasik",
    subtitle: "Temel yazım",
    color: "bg-linear-to-br from-brand to-brand-deep text-white",
    icon: "icons/klasik_mod.png",
    invert: true,
  },
  {
    title: "Challenge",
    subtitle: "Zamana karşı",
    color: "bg-mode-challenge",
    icon: "icons/challenge_mod.png",
    invert: false,
  },
  {
    title: "Yanlışlarım",
    subtitle: "Hatalarından öğren",
    color: "bg-mode-mistakes",
    icon: "icons/yanlislarim.png",
    invert: false,
  },
  {
    title: "Sonsuz",
    subtitle: "Durmadan ilerle",
    color: "bg-mode-infinite",
    icon: "icons/sonsuz_mod.png",
    invert: false,
  },
];

type HomePhoneProps = {
  wordOfDay?: string;
};

export function HomePhone({ wordOfDay = "yalnız" }: HomePhoneProps) {
  return (
    <div className="flex h-full flex-col bg-white px-3 pt-8 pb-3 text-ink">
      <div className="mb-2 flex items-center gap-1">
        <span className="text-lg leading-none">☰</span>
        <Wordmark size="sm" />
        <div className="ml-auto flex items-center gap-1.5 rounded-full bg-white px-2 py-1 shadow-[0_6px_16px_-8px_rgba(41,45,54,0.35)]">
          <img src={pub("icons/dolu_can.png")} alt="" className="h-3.5 w-3.5" />
          <span className="text-[11px] font-extrabold">5</span>
          <span className="mx-0.5 h-3 w-px bg-[#e8e9eb]" />
          <img src={pub("icons/streak-devam.png")} alt="" className="h-3.5 w-3.5" />
          <span className="text-[11px] font-extrabold">12</span>
        </div>
      </div>

      <div className="rounded-[18px] bg-linear-to-br from-brand to-brand-deep px-3 py-2.5 text-white">
        <p className="text-[8px] font-bold tracking-wider text-white/75">
          GÜNÜN KELİMESİ
        </p>
        <p className="font-logo text-[17px] font-bold leading-tight">{wordOfDay}</p>
      </div>

      <p className="mt-3 mb-2 text-[12px] font-bold">Öğrenme Modları</p>

      <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-2">
        {modes.map((mode) => (
          <div
            key={mode.title}
            className={`flex min-h-0 flex-col justify-end rounded-[22px] p-2.5 shadow-[0_8px_18px_-10px_rgba(41,45,54,0.28)] ${mode.color}`}
          >
            <img
              src={pub(mode.icon)}
              alt=""
              className={`mb-auto h-5 w-5 ${mode.invert ? "icon-white" : ""}`}
            />
            <p className="text-[11px] font-extrabold leading-tight">{mode.title}</p>
            <p
              className={`text-[8px] leading-tight ${mode.invert ? "text-white/85" : "text-ink/55"}`}
            >
              {mode.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
