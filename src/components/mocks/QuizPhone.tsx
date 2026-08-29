import { pub } from "../../lib/constants";

const WORD_TOTAL = 600;

type QuizPhoneProps = {
  variant?: "choose" | "correct" | "streak" | "challenge";
  correct?: string;
  wrong?: string;
  correctCount?: number;
  wrongCount?: number;
};

export function QuizPhone({
  variant = "choose",
  correct = "sıra dışı",
  wrong = "sıradışı",
  correctCount = 11,
  wrongCount = 4,
}: QuizPhoneProps) {
  const isStreak = variant === "streak";
  const isChallenge = variant === "challenge";
  const isCorrect = variant === "correct";

  const title = isStreak ? "Seri Modu" : isChallenge ? "Challenge" : "Klasik Mod";
  const subtitle = "Hangisi doğru?";
  const answered = correctCount + wrongCount;
  const progressPct = Math.round((answered / WORD_TOTAL) * 100);
  const progressWidth = `${Math.max(progressPct, answered > 0 ? 2 : 0)}%`;
  const progressLabel = `${answered} / ${WORD_TOTAL}`;

  return (
    <div className="flex h-full flex-col bg-white px-3.5 pt-8 pb-3 text-ink">
      <div className="mb-1 flex items-center">
        <span className="text-lg leading-none">‹</span>
        <div className="flex-1 text-center">
          <p className="text-[15px] font-bold leading-tight">{title}</p>
          {isStreak ? (
            <div className="mt-0.5 flex items-center justify-center gap-1">
              <img src={pub("icons/streak-devam.png")} alt="" className="h-5 w-5" />
              <span className="text-[13px] font-extrabold text-brand-deep">
                {correctCount}
              </span>
            </div>
          ) : (
            <p className="text-[10px] text-ink/55">{subtitle}</p>
          )}
        </div>
        <img src={pub("icons/favorile.png")} alt="" className="h-4 w-4" />
      </div>

      {!isStreak && !isChallenge && (
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

      {isChallenge && (
        <p className="mb-2 text-center text-[12px] font-extrabold text-brand-deep">
          Kalan süre: 0:57
        </p>
      )}

      <div className="mb-2.5 grid grid-cols-2 gap-1.5">
        <ScoreChip
          icon={pub("icons/dogru.png")}
          label="Doğru"
          value={correctCount}
          tone="correct"
        />
        <ScoreChip
          icon={pub("icons/yanlis.png")}
          label="Yanlış"
          value={wrongCount}
          tone="wrong"
        />
      </div>

      <WordChoice
        text={wrong}
        state={isCorrect ? "dimmed" : "idle"}
      />
      <div className="h-2.5" />
      <WordChoice
        text={correct}
        state={isCorrect ? "correct" : "idle"}
      />

      <div className="mt-auto rounded-2xl border border-[#e8e9eb] px-3 py-2.5">
        <div className="h-1.5 overflow-hidden rounded-full bg-brand/20">
          <div className="h-full rounded-full bg-brand" style={{ width: progressWidth }} />
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] font-bold">
          <span>{progressLabel}</span>
          <span className="text-brand-deep">%{progressPct}</span>
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
      <p className={`px-1.5 text-center text-[16px] font-bold leading-tight sm:text-[18px] ${textColor}`}>
        {text}
      </p>
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
