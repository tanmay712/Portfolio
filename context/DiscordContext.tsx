"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchLanyardPresence } from "@/lib/discord/lanyard";
import { INITIAL_DISCORD_PRESENCE, normalizeLanyardPresence } from "@/lib/discord/presence";
import { DiscordPresenceState } from "@/types/discord";

const DiscordContext = createContext<DiscordPresenceState>(INITIAL_DISCORD_PRESENCE);

export function DiscordProvider({ children }: { children: React.ReactNode }) {
  const [presence, setPresence] = useState<DiscordPresenceState>(INITIAL_DISCORD_PRESENCE);

  useEffect(() => {
    let disposed = false;
    let timer: ReturnType<typeof setTimeout>;
    const refresh = async () => {
      const data = await fetchLanyardPresence();
      if (disposed) return;
      if (data) setPresence(normalizeLanyardPresence(data));
      else setPresence((prev) => ({ ...prev, loading: false, connected: false }));
      timer = setTimeout(refresh, 15000);
    };
    void refresh();
    return () => { disposed = true; clearTimeout(timer); };
  }, []);

  return <DiscordContext.Provider value={presence}>{children}</DiscordContext.Provider>;
}

export function useDiscord() {
  return useContext(DiscordContext);
}
