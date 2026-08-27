import { pub } from "../../lib/constants";

const stats = [
  {
    icon: "icons/dogru.png",
    label: "Doğru",
    value: "248",
    tone: "bg-correct-soft",
  },
  {
    icon: "icons/yanlis.png",
    label: "Yanlış",
    value: "31",
    tone: "bg-wrong-soft",
  },
  {
    icon: "icons/saat_canli.png",
    label: "Süre",
    value: "08:42",
    tone: "bg-mode-infinite",
  },
  {
    icon: "icons/lig.png",
    label: "Lig",
    value: "Altın",
    tone: "bg-mode-streak",
  },
  {
    icon: "icons/streak-devam.png",
    label: "Seri",
    value: "12",
    tone: "bg-peach",
  },
];

export function StatsPhone() {
  return (
    <div className="flex h-full flex-col bg-white px-3.5 pt-8 pb-4 text-ink">
      <p className="mb-5 text-center text-[16px] font-bold">İlerlemen</p>

      <div className="flex flex-col gap-2.5">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`flex items-center gap-2.5 rounded-[18px] ${stat.tone} px-3.5 py-3`}
          >
            <img src={pub(stat.icon)} alt="" className="h-6 w-6 shrink-0" />
            <p className="text-[12px] font-medium text-ink/55">{stat.label}</p>
            <p className="ml-auto text-[16px] font-extrabold leading-none">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
