import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { DiscordProvider } from "@/context/DiscordContext";
import { MusicProvider } from "@/context/MusicContext";
import { TerminalProvider } from "@/context/TerminalContext";
import { SITE_CONFIG } from "@/lib/constants";

const title = "void (@definescloud) — PROFILE.OS";
const description =
  "The personal space of void, also known as definescloud. Ideas, experiments, and what's next. Get in touch at void@definescloud.site.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.siteUrl),
  title,
  description,
  applicationName: "void — PROFILE.OS",
  authors: [{ name: SITE_CONFIG.brand, url: SITE_CONFIG.siteUrl }],
  alternates: { canonical: "/" },
  icons: { icon: SITE_CONFIG.avatar, apple: SITE_CONFIG.avatar },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "void — PROFILE.OS",
    type: "website",
    locale: "en_US",
    images: [{ url: SITE_CONFIG.avatar, width: 512, height: 512, alt: "void's avatar" }],
  },
  twitter: { card: "summary", title, description, images: [SITE_CONFIG.avatar] },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased overflow-x-hidden">
        <ThemeProvider>
          <DiscordProvider>
            <MusicProvider>
              <TerminalProvider>{children}</TerminalProvider>
            </MusicProvider>
          </DiscordProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
