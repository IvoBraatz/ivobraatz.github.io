import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MeuPortfólio | Desenvolvedor Frontend",
  description: "Portfólio profissional de desenvolvedor frontend com projetos, habilidades e contato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="gradient-bg" aria-hidden="true" />
        <Header />
        <main style={{ paddingTop: 72 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
