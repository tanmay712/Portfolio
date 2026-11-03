import { SITE_CONFIG } from "@/lib/constants";
import { GitHubRepository, GitHubUserProfile } from "@/types/github";

export interface GitHubTelemetry {
  available: boolean;
  configured: boolean;
  profile: GitHubUserProfile | null;
  repos: GitHubRepository[];
  totalStars: number;
}

/** GitHub is optional; an unset username never falls back to another person. */
export async function fetchGitHubTelemetry(
  username: string = SITE_CONFIG.githubUsername
): Promise<GitHubTelemetry> {
  const empty = { available: false, configured: Boolean(username), profile: null, repos: [], totalStars: 0 };
  if (!username) return empty;

  try {
    const headers: HeadersInit = { Accept: "application/vnd.github+json" };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const base = `https://api.github.com/users/${encodeURIComponent(username)}`;
    const [profileRes, reposRes] = await Promise.all([
      fetch(base, { headers, next: { revalidate: 3600 } }),
      fetch(`${base}/repos?sort=updated&per_page=6`, { headers, next: { revalidate: 3600 } }),
    ]);
    if (!profileRes.ok) return empty;

    const profile = (await profileRes.json()) as GitHubUserProfile;
    const repos: unknown = reposRes.ok ? await reposRes.json() : [];
    const publicRepos = Array.isArray(repos) ? (repos as GitHubRepository[]) : [];
    return {
      available: true,
      configured: true,
      profile,
      repos: publicRepos,
      totalStars: publicRepos.reduce((total, repo) => total + (repo.stargazers_count || 0), 0),
    };
  } catch {
    return empty;
  }
}
