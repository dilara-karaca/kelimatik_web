import { pub } from "../../lib/constants";

export function StatsPhone() {
  return (
    <div className="flex h-full flex-col bg-white px-3.5 pt-8 pb-3 text-ink">
      <p className="mb-3 text-center text-[16px] font-bold">İlerlemen</p>

      <div className="mb-3 flex items-center justify-between rounded-full bg-white px-3 py-2 shadow-[0_8px_18px_-10px_rgba(41,45,54,0.28)]">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <img key={i} src={pub("icons/dolu_can.png")} alt="" className="h-4 w-4" />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <img src={pub("icons/streak-devam.png")} alt="" className="h-4 w-4" />
          <span className="text-xs font-extrabold">12</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <StatTile
          icon={pub("icons/dogru.png")}
          label="Doğru"
          value="248"
          className="bg-correct-soft"
        />
        <StatTile
          icon={pub("icons/yanlis.png")}
          label="Yanlış"
          value="31"
          className="bg-wrong-soft"
        />
        <StatTile
          icon={pub("icons/saat_canli.png")}
          label="Süre"
          value="08:42"
          className="bg-mode-infinite"
        />
        <StatTile
          icon={pub("icons/lig.png")}
          label="Lig"
          value="Altın"
          className="bg-mode-streak"
        />
      </div>

      <div className="mt-3 rounded-[22px] bg-peach p-3.5">
        <p className="text-[11px] font-bold text-brand-deep">Günlük seri</p>
        <p className="mt-1 text-[22px] font-extrabold leading-none">12 gün</p>
        <p className="mt-1 text-[10px] text-ink/55">Serini koru, yıldız kazan.</p>
      </div>
    </div>
  );
}

function StatTile({
  icon,
  label,
  value,
  className,
}: {
  icon: string;
  label: string;
  value: string;
  className: string;
}) {
  return (
    <div className={`rounded-2xl ${className} p-3`}>
      <img src={icon} alt="" className="h-6 w-6" />
      <p className="mt-2 text-[10px] font-semibold text-ink/55">{label}</p>
      <p className="text-[16px] font-extrabold leading-tight">{value}</p>
    </div>
  );
}
