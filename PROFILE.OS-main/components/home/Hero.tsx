"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Circle, Mail } from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";
import { SITE_CONFIG } from "@/lib/constants";
import { useDiscord } from "@/context/DiscordContext";

interface HeroProps {
  onCommand?: (command: string) => void;
}

export function Hero({ onCommand }: HeroProps) {
  const discord = useDiscord();

  return (
    <section className="relative mx-auto w-full max-w-5xl">
      <div className="absolute -left-24 top-0 h-48 w-48 rounded-full bg-purple-600/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#08090f]/75 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-10">
        <div className="mb-8 flex items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
          <span>PROFILE.OS <span className="text-cyan-400/70">{"//"} {SITE_CONFIG.username}</span></span>
          <span className="flex shrink-0 items-center gap-2">
            <Circle className={`h-2 w-2 fill-current ${discord.connected ? "text-emerald-400" : "text-zinc-600"}`} />
            {discord.connected ? "live" : "standby"}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col-reverse items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10"
        >
          <div className="min-w-0">
            <p className="mb-3 font-mono text-xs tracking-[0.2em] text-cyan-400/80">HELLO, I&apos;M</p>
            <h1 className="text-6xl font-black tracking-[-0.06em] text-white sm:text-7xl">
              {PROFILE_DATA.brand}<span className="text-cyan-400">.</span>
            </h1>
            <p className="mt-3 font-mono text-sm text-zinc-400">@{SITE_CONFIG.username}</p>
          </div>
          <div className="relative shrink-0">
            <div className="absolute -inset-2 rounded-[30px] bg-gradient-to-br from-cyan-400/15 to-purple-500/15 blur-lg" />
            <Image
              src={SITE_CONFIG.avatar}
              alt="void's avatar"
              width={144}
              height={144}
              priority
              className="relative h-28 w-28 rounded-[24px] border border-white/10 object-cover sm:h-36 sm:w-36"
            />
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-cyan-400/20 bg-[#0b121b] px-3 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-cyan-300">
              that&apos;s me
            </span>
          </div>
        </motion.div>

        <p className="mt-8 max-w-3xl text-xl font-medium leading-tight tracking-tight text-zinc-200 sm:text-3xl">
          {PROFILE_DATA.headline}
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
          {PROFILE_DATA.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="group inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 font-mono text-xs text-cyan-200 transition hover:border-cyan-300/60 hover:bg-cyan-400/20"
          >
            <Mail className="h-3.5 w-3.5" /> Get in touch
          </a>
          {[
            ["about", "About"],
            ["projects", "Projects"],
            ["skills", "Built with"],
            ["discord", "Discord"],
            ...(SITE_CONFIG.githubUsername ? [["github", "GitHub"]] : []),
          ].map(([command, label]) => (
            <button
              key={command}
              type="button"
              onClick={() => onCommand?.(command)}
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2 font-mono text-xs text-zinc-400 transition hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-300"
            >
              {label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          ))}
        </div>
        <a href={`mailto:${SITE_CONFIG.email}`} className="mt-4 inline-block break-all font-mono text-[11px] text-zinc-500 transition hover:text-cyan-300">
          {SITE_CONFIG.email}
        </a>
      </div>
    </section>
  );
}

export default Hero;
