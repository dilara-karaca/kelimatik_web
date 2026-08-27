type IconProps = {
  className?: string;
};

export function BrainIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path
        d="M26 12c-6.2 0-11 4.4-11 10.2 0 1.4.3 2.8.8 4C12.6 27.4 10 31 10 35.4c0 5.2 4 9.4 9.2 10.3C20 52 24.6 56 30.4 56h5.2c5.8 0 10.4-4 11.2-10.3 5.2-.9 9.2-5.1 9.2-10.3 0-4.4-2.6-8-5.8-9.2.5-1.2.8-2.6.8-4C51 16.4 46.2 12 40 12c-2.4 0-4.6.7-6.4 1.8C31.8 12.7 29.6 12 26 12Z"
        stroke="#fc8b04"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M22 28c2-3 5-5 10-5s8 2 10 5M24 38c2.4 2.6 5.6 4 9 4s6.6-1.4 9-4M33 23v19"
        stroke="#fc8b04"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TargetIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <circle cx="28" cy="34" r="16" stroke="#fc8b04" strokeWidth="2.4" />
      <circle cx="28" cy="34" r="9" stroke="#fc8b04" strokeWidth="2.4" />
      <circle cx="28" cy="34" r="3.2" fill="#fc8b04" />
      <path
        d="M38 24 54 12"
        stroke="#fc8b04"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M46 12h8v8"
        stroke="#fc8b04"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 24l6-2 2 6"
        stroke="#fc8b04"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ProgressIcon({ className = "w-14 h-14" }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden>
      <path
        d="M12 50h40"
        stroke="#fc8b04"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M18 50V38h8v12M30 50V28h8v22M42 50V20h8v30"
        stroke="#fc8b04"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path
        d="M40 16h12v12"
        stroke="#fc8b04"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52 16 36 32"
        stroke="#fc8b04"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="22" cy="32" r="3.5" stroke="#fc8b04" strokeWidth="2.2" />
      <path
        d="M22 35.5v6"
        stroke="#fc8b04"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
