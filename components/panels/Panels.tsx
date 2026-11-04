"use client";

import React from "react";
import { ArrowUpRight, FolderGit2, Github, Mail, Radio, UserRound, Wrench, X } from "lucide-react";
import { useTerminal } from "@/hooks/useTerminal";
import { PROFILE_DATA } from "@/data/profile";
import { SKILLS_DATA } from "@/data/skills";
import { SOCIAL_LINKS } from "@/data/socials";
import { SITE_CONFIG } from "@/lib/constants";

const PANEL_META = {
  about: { title: "ABOUT", icon: UserRound, description: PROFILE_DATA.bio },
  skills: { title: "BUILT WITH", icon: Wrench, description: "The open-source tools and technologies powering this little corner of the internet." },
  projects: { title: "PROJECTS", icon: FolderGit2, description: "A space for selected work and experiments. Projects will appear here when they're ready to share — good things take time." },
  github: {
    title: "GITHUB",
    icon: Github,
    description: SITE_CONFIG.githubUsername
      ? "Public repositories, experiments, and works in progress."
      : "A public GitHub profile hasn't been linked yet. You can still find me on Discord or get in touch by email.",
  },
  discord: { title: "DISCORD", icon: Radio, description: `Find @${SITE_CONFIG.username} on Discord. Live activity is shown below when Lanyard is monitoring the account.` },
  music: { title: "MUSIC", icon: Radio, description: "A local listening library. Use the player below or try the music, play, and pause terminal commands." },
  socials: { title: "ELSEWHERE & CONTACT", icon: Mail, description: "A few ways to find me or say hello. For support, email is the best place to start." },
} as const;

export function Panels() {
  const { activePanel, closePanel } = useTerminal();
  if (!activePanel || !(activePanel in PANEL_META)) return null;

  const panel = PANEL_META[activePanel as keyof typeof PANEL_META];
  const Icon = panel.icon;

  return (
    <aside className="w-full rounded-2xl border border-white/[0.07] bg-[#08090f]/80 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl" aria-labelledby="active-panel-title">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05]">
          <Icon className="h-4 w-4 text-cyan-300" />
        </span>
        <div>
          <div className="font-mono text-[10px] tracking-[0.2em] text-zinc-500">PANEL // ACTIVE</div>
          <h2 id="active-panel-title" className="font-mono text-sm font-semibold tracking-wider text-zinc-100">{panel.title}</h2>
        </div>
        <button type="button" onClick={closePanel} aria-label="Close panel" className="control-button ml-auto"><X /></button>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">{panel.description}</p>

      {activePanel === "about" && (
        <dl className="mt-5 grid gap-4 border-t border-white/[0.06] pt-4 font-mono text-xs sm:grid-cols-3">
          <div><dt className="text-zinc-500">NAME</dt><dd className="mt-1 text-zinc-200">{SITE_CONFIG.brand}</dd></div>
          <div><dt className="text-zinc-500">USERNAME</dt><dd className="mt-1 text-cyan-300">@{SITE_CONFIG.username}</dd></div>
          <div><dt className="text-zinc-500">SUPPORT</dt><dd className="mt-1"><a href={`mailto:${SITE_CONFIG.email}`} className="break-all text-cyan-300 hover:underline">{SITE_CONFIG.email}</a></dd></div>
        </dl>
      )}
      {activePanel === "skills" && (
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {SKILLS_DATA.map((group) => (
            <div key={group.category} className="rounded-xl border border-white/[0.06] p-4">
              <h3 className="font-mono text-xs text-cyan-300">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">{group.items.map((skill) => <span key={skill} className="rounded-md bg-white/[0.04] px-2 py-1 text-xs text-zinc-300">{skill}</span>)}</div>
            </div>
          ))}
        </div>
      )}
      {(activePanel === "socials" || activePanel === "discord" || (activePanel === "github" && SOCIAL_LINKS.github) || (activePanel === "projects" && SOCIAL_LINKS.github)) && (
        <div className="mt-5 flex flex-wrap gap-3">
          {Object.values(activePanel === "socials" ? SOCIAL_LINKS : activePanel === "discord" ? { discord: SOCIAL_LINKS.discord } : { github: SOCIAL_LINKS.github }).filter(Boolean).map((link) => (
            <a key={link.id} href={link.url} target={link.id === "email" ? undefined : "_blank"} rel={link.id === "email" ? undefined : "noopener noreferrer"} className="inline-flex max-w-full items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/[0.05] px-3 py-2 font-mono text-xs text-cyan-300 transition hover:bg-cyan-400/10">
              <span><span className="mr-2 text-zinc-500">{link.label}</span><span className="break-all">{link.handle}</span></span><ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
            </a>
          ))}
        </div>
      )}
      {activePanel === "projects" && !SOCIAL_LINKS.github && (
        <a href={`mailto:${SITE_CONFIG.email}`} className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-cyan-300 hover:underline">Have an idea? Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" /></a>
      )}
    </aside>
  );
}

export default Panels;
