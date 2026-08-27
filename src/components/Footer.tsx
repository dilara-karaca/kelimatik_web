import { Link } from "react-router-dom";
import { SUPPORT_EMAIL, pub } from "../lib/constants";
import { Wordmark } from "./Wordmark";

export function Footer() {
  return (
    <footer className="border-t border-ink/6 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/#ana-sayfa" className="flex items-center gap-2.5">
          <img src={pub("logo.png")} alt="" className="h-9 w-9 rounded-[9px]" />
          <Wordmark size="sm" />
        </Link>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold text-ink/65">
          <Link to="/gizlilik" className="hover:text-ink">
            Gizlilik Politikası
          </Link>
          <Link to="/destek" className="hover:text-ink">
            Destek
          </Link>
          <Link to="/iletisim" className="hover:text-ink">
            İletişim
          </Link>
        </nav>

        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="text-sm font-medium text-ink/65 hover:text-brand-deep"
        >
          {SUPPORT_EMAIL}
        </a>
      </div>
      <p className="pb-8 text-center text-xs text-ink/45">© 2026 Kelimatik</p>
    </footer>
  );
}
