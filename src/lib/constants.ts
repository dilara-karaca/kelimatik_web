export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.kelimatik.kelimatik";

export const SUPPORT_EMAIL = "kelimatik.support@gmail.com";

export function pub(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

export function appPath(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export const NAV_LINKS = [
  { href: "/#ana-sayfa", label: "Ana Sayfa" },
  { href: "/#nasil", label: "Nasıl Çalışır?" },
  { href: "/#ozellikler", label: "Özellikler" },
  { href: "/#hakkimizda", label: "Hakkımızda" },
] as const;
