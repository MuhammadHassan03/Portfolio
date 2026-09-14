import { GoogleTagManager } from "@next/third-parties/google";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import { personalData } from "@/utils/data/personal-data";
import ChapterRail from "./components/chapter-rail";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap", axes: ["opsz", "SOFT"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = `${personalData.name} — ${personalData.designation}`;

export const metadata = {
  metadataBase: new URL(personalData.siteUrl),
  title,
  description: `${personalData.tagline} ${personalData.description}`,
  openGraph: { title, description: personalData.tagline, type: "website", images: [personalData.profile] },
  twitter: { card: "summary_large_image", title, description: personalData.tagline },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#100F0E" },
  ],
};

export default function RootLayout({ children }) {
  const gtm = process.env.NEXT_PUBLIC_GTM;
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <ChapterRail />
        <main id="main">{children}</main>
        <Footer />
      </body>
      {gtm && <GoogleTagManager gtmId={gtm} />}
    </html>
  );
}
