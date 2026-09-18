import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Círculo Dorado — Ciberseguridad gestionada para pymes",
  description:
    "Monitoreo constante, backups automáticos y reportes claros para que tu pyme esté protegida sin necesitar un equipo de TI propio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${sora.variable} ${inter.variable}`}>{children}</body>
    </html>
  );
}
