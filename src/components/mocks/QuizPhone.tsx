import { pub } from "../../lib/constants";

type QuizPhoneProps = {
  variant?: "choose" | "correct" | "streak";
};

export function QuizPhone({ variant = "choose" }: QuizPhoneProps) {
  const isStreak = variant === "streak";
  const isCorrect = variant === "correct";

  return (
    <div className="flex h-full flex-col bg-white px-3.5 pt-8 pb-3 text-ink">
      <div className="mb-1 flex items-center">
        <span className="text-lg leading-none">‹</span>
        <div className="flex-1 text-center">
          <p className="text-[15px] font-bold leading-tight">
            {isStreak ? "Seri Modu" : "Klasik Mod"}
          </p>
          <p className="text-[10px] text-ink/55">
            {isStreak ? "Seri: 8" : "Hangisi doğru?"}
          </p>
        </div>
        <img src={pub("icons/favorile.png")} alt="" className="h-4 w-4" />
      </div>

      {!isStreak && (
        <div className="mb-2 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              src={pub("icons/dolu_can.png")}
              alt=""
              className="h-4 w-4"
            />
          ))}
        </div>
      )}

      {isStreak && (
        <div className="mb-2 flex items-center justify-center gap-1.5">
          <img src={pub("icons/streak-devam.png")} alt="" className="h-6 w-6" />
          <span className="text-sm font-extrabold text-brand-deep">8</span>
        </div>
      )}

      <div className="mb-2.5 grid grid-cols-2 gap-1.5">
        <ScoreChip
          icon={pub("icons/dogru.png")}
          label="Doğru"
          value={isCorrect || isStreak ? 7 : 4}
          tone="correct"
        />
        <ScoreChip
          icon={pub("icons/yanlis.png")}
          label="Yanlış"
          value={isStreak ? 0 : 1}
          tone="wrong"
        />
      </div>

      <WordChoice
        text="herkez"
        state={isCorrect ? "dimmed" : "idle"}
      />
      <div className="h-2.5" />
      <WordChoice
        text="herkes"
        state={isCorrect ? "correct" : "idle"}
      />

      <div className="mt-auto rounded-2xl border border-[#e8e9eb] px-3 py-2.5">
        <div className="h-1.5 overflow-hidden rounded-full bg-brand/20">
          <div
            className="h-full rounded-full bg-brand"
            style={{ width: isCorrect || isStreak ? "62%" : "38%" }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] font-bold">
          <span>{isCorrect || isStreak ? "8 / 13" : "5 / 13"}</span>
          <span className="text-brand-deep">
            %{isCorrect || isStreak ? 62 : 38}
          </span>
        </div>
      </div>
    </div>
  );
}

function ScoreChip({
  icon,
  label,
  value,
  tone,
}: {
  icon: string;
  label: string;
  value: number;
  tone: "correct" | "wrong";
}) {
  const soft = tone === "correct" ? "bg-correct-soft" : "bg-wrong-soft";
  const text = tone === "correct" ? "text-correct" : "text-wrong";
  return (
    <div className={`flex items-center gap-1.5 rounded-xl ${soft} px-2 py-1.5`}>
      <img src={icon} alt="" className="h-3.5 w-3.5" />
      <span className={`text-[10px] font-semibold ${text}`}>{label}</span>
      <span className={`ml-auto text-sm font-bold ${text}`}>{value}</span>
    </div>
  );
}

function WordChoice({
  text,
  state,
}: {
  text: string;
  state: "idle" | "correct" | "dimmed";
}) {
  const styles = {
    idle: "bg-white border-[#fc8b04]/20",
    correct: "bg-correct-soft border-correct/35",
    dimmed: "bg-white/60 border-[#e8e9eb] opacity-60",
  }[state];
  const textColor = {
    idle: "text-ink",
    correct: "text-correct",
    dimmed: "text-ink/50",
  }[state];

  return (
    <div
      className={`relative flex min-h-[78px] flex-1 items-center justify-center rounded-[22px] border ${styles} shadow-[0_8px_18px_-12px_rgba(41,45,54,0.2)]`}
    >
      <p className={`font-bold text-[22px] ${textColor}`}>{text}</p>
      {state === "correct" && (
        <img
          src={pub("icons/dogru.png")}
          alt=""
          className="absolute top-2.5 right-2.5 h-6 w-6"
        />
      )}
    </div>
  );
}
