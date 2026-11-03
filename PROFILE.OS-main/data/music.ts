import { Track } from "@/types/music";

/**
 * Audio inherited from the template. These are local listening picks,
 * not tracks authored by void. Replace with your own licensed selections.
 */
export const MUSIC_LIBRARY: Track[] = [
  {
    id: "track-01",
    title: "Local track 01",
    artist: "Unattributed template audio",
    album: "Local library",
    audio: "/music/track-01.mp3",
    artwork: "/music/artwork/track-01.webp",
    duration: 214,
  },
  {
    id: "track-02",
    title: "Finding Her",
    artist: "Kushagra, Bharath",
    album: "Finding Her",
    audio: "/music/track-02.mp3",
    artwork: "/music/artwork/track-02.webp",
    duration: 198,
  },
  {
    id: "track-03",
    title: "Dil Tu Jaan Tu",
    artist: "Gurnazar",
    album: "Dil Tu Jaan Tu",
    audio: "/music/track-03.mp3",
    artwork: "/music/artwork/track-03.webp",
    duration: 242,
  },
];
