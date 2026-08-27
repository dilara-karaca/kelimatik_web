import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { SUPPORT_EMAIL, pub } from "../lib/constants";

export function SupportPage() {
  return (
    <>
      <Navbar />
      <main id="iletisim" className="mx-auto max-w-xl px-5 pt-28 pb-20 text-center">
        <Link to="/" className="text-sm font-semibold text-brand-deep">
          ← Ana sayfa
        </Link>
        <img src={pub("logo.png")} alt="" className="mx-auto mt-8 h-20 w-20 rounded-[18px]" />
        <h1 className="mt-6 text-3xl font-extrabold">Destek ve iletişim</h1>
        <p className="mt-4 text-ink/65">
          Bir sorun mu var? Bize yaz, yardımcı olalım.
        </p>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          className="mt-8 inline-flex rounded-full bg-brand px-6 py-3.5 font-bold text-white"
        >
          {SUPPORT_EMAIL}
        </a>
      </main>
      <Footer />
    </>
  );
}
