import type { Metadata } from "next";
import { Kulim_Park } from "next/font/google";
import "./globals.css";
import Header from "@/layout/Header";
import Contact from "@/layout/Contact";
import ThemeProvider from "@/providers/theme-provider";

const kulimPark = Kulim_Park({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: {
    template: " Mon Portfolio",
    default: "Mon Portfolio",
  },
  description: "Portfolio de développeur montrant mes projets et compétences.",
  openGraph: {
    title: "Mon Portfolio",
    description:
      "Portfolio de développeur montrant mes projets et compétences.",
    url: "https://example.com",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Image de présentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mon Portfolio",
    description:
      "Portfolio de développeur montrant mes projets et compétences.",
    images: ["https://example.com/twitter-image.jpg"],
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
