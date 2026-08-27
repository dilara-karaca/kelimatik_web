import { pub } from "../../lib/constants";
import { Wordmark } from "../Wordmark";

const circles = [
  {
    title: "Challenge",
    subtitle: "Zamana karşı yarış",
    color: "bg-mode-challenge",
    icon: "icons/challenge_mod.png",
  },
  {
    title: "Yanlışlarım",
    subtitle: "Hatalarından öğren",
    color: "bg-mode-mistakes",
    icon: "icons/yanlislarim.png",
  },
  {
    title: "Seri Modu",
    subtitle: "Hatasız devam et",
    color: "bg-mode-streak",
    icon: "icons/seri_mod.png",
  },
  {
    title: "Sonsuz Mod",
    subtitle: "Durmadan kelime avı",
    color: "bg-mode-infinite",
    icon: "icons/sonsuz_mod.png",
  },
];

const tabs = [
  { label: "Ana Sayfa", icon: "icons/home.png", active: true },
  { label: "Ara", icon: "icons/arama.png", active: false },
  { label: "Favoriler", icon: "icons/favorilerim.png", active: false },
  { label: "Sıralama", icon: "icons/lig.png", active: false },
];

type HomePhoneProps = {
  wordOfDay?: string;
  wordWrong?: string;
};

export function HomePhone({
  wordOfDay = "kütüphane",
  wordWrong = "kütübhane",
}: HomePhoneProps) {
  return (
    <div className="flex h-full flex-col bg-white pt-8 text-ink">
      <div className="flex shrink-0 items-center gap-1 px-3">
        <svg
          viewBox="0 0 24 24"
          className="h-[18px] w-[18px] shrink-0 text-ink"
          fill="none"
          aria-hidden
        >
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
        <Wordmark size="sm" className="text-[16px]!" />
        <div className="ml-auto flex items-center rounded-full bg-white px-1.5 py-1 shadow-[0_6px_16px_-8px_rgba(41,45,54,0.35)]">
          <img src={pub("icons/dolu_can.png")} alt="" className="h-3.5 w-3.5" />
          <span className="ml-0.5 text-[11px] font-extrabold">5</span>
          <span className="mx-1.5 h-3 w-px bg-[#e8e9eb]" />
          <img src={pub("icons/streak-devam.png")} alt="" className="h-3.5 w-3.5" />
          <span className="ml-0.5 text-[11px] font-extrabold">2</span>
        </div>
      </div>

      <div className="mx-3 mt-2.5 shrink-0 rounded-[20px] bg-linear-to-br from-brand to-brand-deep p-3 text-white shadow-[0_10px_22px_-10px_rgba(252,139,4,0.65)]">
        <div className="flex items-start">
          <div className="min-w-0 flex-1">
            <p className="font-logo text-[15px] font-bold leading-tight">Merhaba!</p>
            <p className="mt-0.5 text-[8px] leading-tight text-white/88">
              Bugün öğrenmeye hazır mısın?
            </p>
          </div>
          <img src={pub("icons/arama.png")} alt="" className="mt-0.5 h-3.5 w-3.5" />
          <img
            src={pub("icons/favorilerim.png")}
            alt=""
            className="mt-0.5 ml-1.5 h-3.5 w-3.5"
          />
        </div>
        <div className="mt-2.5 flex items-center rounded-[14px] bg-white/16 px-2.5 py-2">
          <div className="min-w-0 flex-1">
            <p className="text-[7px] font-bold tracking-wider text-white/75">
              GÜNÜN KELİMESİ
            </p>
            <p className="font-logo mt-0.5 text-[13px] font-bold leading-tight">
              {wordOfDay}
            </p>
            <p className="mt-0.5 line-clamp-2 text-[7px] leading-snug text-white/85">
              Doğru kullanım: «{wordOfDay}». Sık yapılan yanlış yazım ise «
              {wordWrong}» biçimidir.
            </p>
          </div>
          <span className="pl-1 text-[16px] leading-none text-white/80">›</span>
        </div>
      </div>

      <p className="mx-3 mt-2.5 mb-1.5 shrink-0 text-[12px] font-bold">
        Öğrenme Modları
      </p>

      <div className="relative mx-3 h-11 shrink-0 overflow-hidden rounded-full bg-linear-to-r from-brand-deep to-brand shadow-[0_8px_18px_-10px_rgba(249,115,22,0.55)]">
        <img
          src={pub("icons/klasik_mod.png")}
          alt=""
          className="pointer-events-none absolute top-1/2 right-2 h-9 w-9 -translate-y-1/2 opacity-[0.14]"
        />
        <div className="relative flex h-full items-center px-3.5">
          <img src={pub("icons/klasik_mod.png")} alt="" className="mr-2 h-5 w-5" />
          <div className="min-w-0">
            <p className="font-logo text-[12px] font-bold leading-tight text-white">
              Klasik Mod
            </p>
            <p className="truncate text-[7px] text-white/90">
              Temel yazım kuralları ile ilerle.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-3 mt-2 grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-2">
        {circles.map((mode) => (
          <div
            key={mode.title}
            className="relative h-full w-full"
            style={{ containerType: "size" }}
          >
            <div
              className={`absolute top-1/2 left-1/2 overflow-hidden rounded-full shadow-[0_8px_18px_-10px_rgba(41,45,54,0.28)] ${mode.color}`}
              style={{
                width: "min(100cqw, 100cqh)",
                height: "min(100cqw, 100cqh)",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={pub(mode.icon)}
                alt=""
                className="pointer-events-none absolute right-[2%] bottom-[8%] h-[34%] w-[34%] opacity-[0.12]"
              />
              <div className="relative flex h-full flex-col px-[18%] pt-[18%] pb-[16%]">
                <img
                  src={pub(mode.icon)}
                  alt=""
                  className="h-[14%] w-[14%] min-h-3 min-w-3"
                />
                <div className="mt-auto">
                  <p className="text-[9px] font-extrabold leading-tight">{mode.title}</p>
                  <p className="mt-0.5 text-[7px] leading-tight text-ink/55">
                    {mode.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-1.5 shrink-0 bg-white px-1.5 pt-1.5 pb-2 shadow-[0_-8px_20px_-12px_rgba(41,45,54,0.2)]">
        <div className="flex items-center">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className={`flex flex-1 flex-col items-center rounded-full py-1.5 ${
                tab.active ? "bg-brand" : ""
              }`}
            >
              <img
                src={pub(tab.icon)}
                alt=""
                className={`h-3.5 w-3.5 ${tab.active ? "icon-white" : ""}`}
              />
              <span
                className={`mt-0.5 text-[7px] font-bold ${
                  tab.active ? "text-white" : "text-ink"
                }`}
              >
                {tab.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
