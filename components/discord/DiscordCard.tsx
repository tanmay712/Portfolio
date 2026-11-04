"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Headphones, Radio } from "lucide-react";
import { useDiscord } from "@/context/DiscordContext";
import { SITE_CONFIG } from "@/lib/constants";

const STATUS_STYLES: Record<string, string> = {
  online: "bg-emerald-400",
  idle: "bg-amber-400",
  dnd: "bg-rose-400",
  offline: "bg-zinc-500",
};

const STATUS_LABELS: Record<string, string> = {
  online: "Online",
  idle: "Idle",
  dnd: "Do not disturb",
  offline: "Offline",
};

export function DiscordCard() {
  const presence = useDiscord();
  const activity = presence.activities[0];

  return (
    <section
      className="relative flex h-full min-h-[260px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-[#08090f]/80 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.3)] backdrop-blur-xl"
      aria-label="Discord presence"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(124,58,237,0.08),transparent_40%)]" />
      <div className="relative mb-5 flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.18em]">
        <span className="flex items-center gap-2 text-zinc-400"><Radio className="h-3.5 w-3.5 text-purple-400" /> Discord // presence</span>
        <span className={presence.connected ? "text-emerald-400" : "text-zinc-500"}>{presence.loading ? "connecting" : presence.connected ? "live" : "standby"}</span>
      </div>

      <div className="relative flex items-center gap-4">
        <Image src={SITE_CONFIG.avatar} alt="void's Discord avatar" width={64} height={64} className="h-16 w-16 rounded-2xl border border-white/10 object-cover" />
        <div className="min-w-0">
          <h2 className="truncate text-xl font-semibold text-zinc-100">{presence.connected ? presence.displayName : SITE_CONFIG.brand}</h2>
          <p className="mt-1 font-mono text-xs text-zinc-400">@{SITE_CONFIG.username}</p>
          <p className="mt-2 flex items-center gap-2 text-xs text-zinc-400" role="status">
            <span className={`h-1.5 w-1.5 rounded-full ${presence.connected ? STATUS_STYLES[presence.status] || STATUS_STYLES.offline : "bg-zinc-600"}`} />
            {presence.loading ? "Connecting to Lanyard…" : presence.connected ? STATUS_LABELS[presence.status] || presence.status : "Live presence unavailable"}
          </p>
        </div>
      </div>

      <div className="relative mt-5 min-h-12 text-sm leading-6 text-zinc-400">
        {presence.connected && presence.customStatus ? (
          <p className="break-words">{presence.customStatus}</p>
        ) : presence.connected && presence.spotify ? (
          <p className="flex items-start gap-2"><Headphones className="mt-1 h-4 w-4 shrink-0 text-emerald-400" /><span><span className="text-zinc-200">{presence.spotify.song}</span><br /><span className="text-xs">{presence.spotify.artist}</span></span></p>
        ) : presence.connected && activity ? (
          <p><span className="text-xs text-zinc-500">Playing </span><span className="text-zinc-200">{activity.name}</span>{activity.details && <><br /><span className="text-xs">{activity.details}</span></>}</p>
        ) : (
          <p className="text-xs leading-6 text-zinc-500">The profile is always here. Live activity appears when Lanyard is connected.</p>
        )}
      </div>

      <a
        href={`https://discord.com/users/${SITE_CONFIG.lanyardId}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open void's Discord profile"
        className="relative mt-auto inline-flex w-fit items-center gap-2 pt-5 font-mono text-xs text-purple-300 transition hover:text-purple-200"
      >
        Open Discord profile <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </section>
  );
}

export default DiscordCard;
