export interface SkillGroup {
  category: string;
  items: string[];
  isExploring?: boolean;
}

/** Technologies actually used by this site, not unverified personal skills. */
export const SKILLS_DATA: SkillGroup[] = [
  {
    category: "Interface",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Motion & visuals",
    items: ["Framer Motion", "Lucide", "Inter", "JetBrains Mono"],
  },
  {
    category: "Live presence",
    items: ["Discord", "Lanyard", "WebSockets"],
  },
  {
    category: "Deployment",
    items: ["Netlify", "Node.js", "Git"],
  },
];

export const STACK_BLUEPRINT = SKILLS_DATA.map((group) => ({
  title: group.category.toUpperCase(),
  items: group.items,
}));
