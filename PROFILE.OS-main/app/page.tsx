"use client";

import { Home } from "@/components/home/Home";
import { Panels } from "@/components/panels/Panels";
import { MusicPlayer } from "@/components/music/MusicPlayer";
import { DiscordCard } from "@/components/discord/DiscordCard";
import { Effects } from "@/components/effects/Effects";
import { SITE_CONFIG } from "@/lib/constants";

export default function ProfileOSPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--os-bg)] text-zinc-100">
      <Effects />
      <div className="relative z-10 mx-auto min-h-screen w-full max-w-[1500px] px-3 py-3 sm:px-5 sm:py-5 lg:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-1.5rem)] w-full flex-col gap-4 lg:min-h-[calc(100vh-2.5rem)]">
          <main className="flex flex-col gap-4" id="main-content">
            <Home />
            <Panels />
            <section className="grid grid-cols-1 gap-4 xl:grid-cols-2" aria-label="Live Holds indra modules">
              <DiscordCard />
              <MusicPlayer />
            </section>
          </main>
          <footer className="mt-auto flex flex-col gap-3 border-t border-white/[0.05] px-1 pt-4 font-mono text-[10px] tracking-[0.1em] text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} {SITE_CONFIG.brand} <span className="text-zinc-600">{"//"} Holds indra v{SITE_CONFIG.version}</span></span>
            <a href={`mailto:${SITE_CONFIG.email}`} className="break-all transition hover:text-cyan-300">{SITE_CONFIG.email}</a>
          </footer>
        </div>
      </div>
    </div>
  );
}
