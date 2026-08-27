import { pub } from "../../lib/constants";
import { Wordmark } from "../Wordmark";

export function HomePhone() {
  return (
    <div className="flex h-full flex-col bg-white px-3.5 pt-8 pb-3 text-ink">
      <div className="mb-3 flex items-center gap-1">
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

      <div className="rounded-[22px] bg-linear-to-br from-brand to-brand-deep p-3.5 text-white shadow-[0_10px_22px_-10px_rgba(252,139,4,0.7)]">
        <p className="font-bold text-[17px] leading-tight">Merhaba!</p>
        <p className="mt-0.5 text-[10px] text-white/85">
          Bugün öğrenmeye hazır mısın?
        </p>
        <div className="mt-3 rounded-2xl bg-white/15 px-3 py-2.5">
          <p className="text-[8px] font-bold tracking-wider text-white/75">
            GÜNÜN KELİMESİ
          </p>
          <p className="font-logo text-[18px] font-bold leading-tight">herkes</p>
        </div>
      </div>

      <p className="mt-4 mb-2 text-[13px] font-bold">Öğrenme Modları</p>

      <div className="flex h-14 items-center rounded-full bg-linear-to-r from-brand-deep to-brand px-4 text-white">
        <img
          src={pub("icons/klasik_mod.png")}
          alt=""
          className="icon-white mr-2 h-5 w-5"
        />
        <div>
          <p className="text-[13px] font-bold leading-tight">Klasik Mod</p>
          <p className="text-[9px] text-white/90">Temel yazım kuralları</p>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2.5">
        <ModeCircle
          title="Challenge"
          subtitle="Zamana karşı"
          color="bg-mode-challenge"
          icon={pub("icons/challenge_mod.png")}
        />
        <ModeCircle
          title="Yanlışlarım"
          subtitle="Hatalarından öğren"
          color="bg-mode-mistakes"
          icon={pub("icons/yanlislarim.png")}
        />
      </div>
    </div>
  );
}

function ModeCircle({
  title,
  subtitle,
  color,
  icon,
}: {
  title: string;
  subtitle: string;
  color: string;
  icon: string;
}) {
  return (
    <div
      className={`aspect-square rounded-full ${color} flex flex-col justify-end p-3.5 shadow-[0_8px_18px_-10px_rgba(41,45,54,0.28)]`}
    >
      <img src={icon} alt="" className="mb-auto h-5 w-5" />
      <p className="text-[11px] font-extrabold leading-tight">{title}</p>
      <p className="text-[8px] text-ink/55 leading-tight">{subtitle}</p>
    </div>
  );
}
