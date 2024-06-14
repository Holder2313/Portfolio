import type { Metadata } from "next";
import { Kulim_Park } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Contact from "@/layout/Contact";
import ThemeProvider from "@/providers/theme-provider";

const kulimPark = Kulim_Park({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: {
    template: " Sébastien Perrot | Portfolio",
    default: "Sébastien Perrot | Portfolio",
  },
  description:
    "Je suis un développeur front-end spécialisé en React et Next.js. Découvrez mes projets et compétences en développement web.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Sébastien Perrot | Portfolio",
    description:
      "Je suis un développeur front-end spécialisé en React et Next.js. Découvrez mes projets et compétences en développement web.",
    url: "https://sebastien.perrot.portfolio.com",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
        alt: "Image de présentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sébastien Perrot | Portfolio",
    description:
      "Je suis un développeur front-end spécialisé en React et Next.js. Découvrez mes projets et compétences en développement web.",
    images: [""],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} lang="fr">
      <body className={kulimPark.className}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Header />
          {children}
          <Contact />
        </ThemeProvider>
      </body>
    </html>
  );
}
