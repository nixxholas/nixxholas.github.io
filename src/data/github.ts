const GITHUB_USERNAME = "nixxholas";
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos`;

type GitHubApiRepo = {
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  pushed_at: string;
  created_at: string;
  topics?: string[];
  license: { spdx_id: string } | null;
};

type RepoNote = {
  summary: string;
  tags: string[];
  featured?: boolean;
};

export type GitHubRepo = {
  name: string;
  fullName: string;
  description: string | null;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  forks: number;
  isFork: boolean;
  isArchived: boolean;
  pushedAt: string;
  createdAt: string;
  topics: string[];
  license: string | null;
  explanation: string;
  tags: string[];
  isFeatured: boolean;
};

const REPO_NOTES: Record<string, RepoNote> = {
  "nixxholas.github.io": {
    summary:
      "This portfolio itself: a static Next.js and Sanity surface for writing, investing notes, and project history.",
    tags: ["portfolio", "next.js", "sanity"],
    featured: true,
  },
  "delta-neutral-engine": {
    summary:
      "A Python research engine for modeling delta-neutral crypto strategies, trade construction, and risk surfaces.",
    tags: ["markets", "research", "python"],
    featured: true,
  },
  "kernel-comet-6.1": {
    summary:
      "Linux kernel workspace for lower-level device, driver, and systems experimentation.",
    tags: ["linux", "kernel", "systems"],
    featured: true,
  },
  sniffer: {
    summary:
      "TypeScript data inspection tooling from the blockchain and infrastructure side of the workbench.",
    tags: ["typescript", "tooling", "infra"],
    featured: true,
  },
  nozomi: {
    summary:
      "The original Nozomi product codebase, capturing the API testing and monitoring product work before the public portfolio writeup.",
    tags: ["product", "api", "csharp"],
    featured: true,
  },
  "project-gooey": {
    summary:
      "A Java application experiment from the older product and interface-building archive.",
    tags: ["java", "ui", "archive"],
    featured: true,
  },
  CounterKeygen: {
    summary:
      "A .NET Bitcoin key-generation experiment from the early crypto tooling archive.",
    tags: ["bitcoin", "cryptography", "dotnet"],
  },
  LynxPlayer: {
    summary:
      "An Android music player project from the early mobile app building years.",
    tags: ["android", "mobile", "java"],
  },
  "nlp-exploration": {
    summary:
      "Research notes and experiments around natural language processing and language understanding.",
    tags: ["nlp", "notes", "ai"],
  },
  "place-order-ms": {
    summary:
      "A small Rust order-processing microservice, useful as an early service-boundary exercise.",
    tags: ["rust", "microservice", "school"],
  },
  "quark-cms": {
    summary:
      "A .NET Core CMS experiment around TrinityCore and game-server-adjacent tooling.",
    tags: ["dotnet", "cms", "game tooling"],
  },
};

const FALLBACK_REPOS: GitHubApiRepo[] = [
  {
    name: "nixxholas.github.io",
    full_name: "nixxholas/nixxholas.github.io",
    description: null,
    html_url: "https://github.com/nixxholas/nixxholas.github.io",
    homepage: "https://nixholas.me",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    pushed_at: "2026-06-11T01:50:01Z",
    created_at: "2016-11-25T12:59:26Z",
    topics: [],
    license: { spdx_id: "MIT" },
  },
  {
    name: "delta-neutral-engine",
    full_name: "nixxholas/delta-neutral-engine",
    description: null,
    html_url: "https://github.com/nixxholas/delta-neutral-engine",
    homepage: null,
    language: "Python",
    stargazers_count: 0,
    forks_count: 1,
    fork: false,
    archived: false,
    pushed_at: "2026-03-05T12:38:53Z",
    created_at: "2026-02-27T09:47:11Z",
    topics: [],
    license: null,
  },
  {
    name: "kernel-comet-6.1",
    full_name: "nixxholas/kernel-comet-6.1",
    description: null,
    html_url: "https://github.com/nixxholas/kernel-comet-6.1",
    homepage: null,
    language: "C",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    pushed_at: "2025-05-18T04:57:11Z",
    created_at: "2025-05-18T04:53:13Z",
    topics: [],
    license: null,
  },
  {
    name: "sniffer",
    full_name: "nixxholas/sniffer",
    description: null,
    html_url: "https://github.com/nixxholas/sniffer",
    homepage: null,
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 1,
    fork: false,
    archived: false,
    pushed_at: "2023-07-26T07:50:30Z",
    created_at: "2023-07-26T07:48:30Z",
    topics: [],
    license: null,
  },
  {
    name: "nozomi",
    full_name: "nixxholas/nozomi",
    description: null,
    html_url: "https://github.com/nixxholas/nozomi",
    homepage: null,
    language: "C#",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    pushed_at: "2020-04-14T19:04:05Z",
    created_at: "2018-10-14T16:21:00Z",
    topics: [],
    license: null,
  },
];

function githubHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;

  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "nixholas.me",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

function normalizeDescription(description: string | null): string | null {
  return description?.replace(/\s+/g, " ").trim() || null;
}

function repoExplanation(repo: GitHubApiRepo): string {
  const note = REPO_NOTES[repo.name];
  const description = normalizeDescription(repo.description);

  if (note) {
    return note.summary;
  }

  if (description && repo.language) {
    return `${description} Built primarily in ${repo.language}.`;
  }

  if (description) {
    return description;
  }

  if (repo.fork) {
    return "Forked reference repo kept around for upstream tracking, experiments, or implementation study.";
  }

  if (repo.language) {
    return `Original public ${repo.language} repository from the long-running engineering archive.`;
  }

  return "Original public repository from the engineering archive.";
}

function repoTags(repo: GitHubApiRepo): string[] {
  const note = REPO_NOTES[repo.name];
  const tags = new Set<string>();

  if (repo.fork) {
    tags.add("fork");
  } else {
    tags.add("original");
  }

  if (repo.archived) {
    tags.add("archived");
  }

  if (repo.language) {
    tags.add(repo.language);
  }

  for (const tag of note?.tags ?? []) {
    tags.add(tag);
  }

  for (const topic of repo.topics ?? []) {
    tags.add(topic);
  }

  if (repo.license?.spdx_id && repo.license.spdx_id !== "NOASSERTION") {
    tags.add(repo.license.spdx_id);
  }

  return Array.from(tags).slice(0, 8);
}

function normalizeRepo(repo: GitHubApiRepo): GitHubRepo {
  const note = REPO_NOTES[repo.name];

  return {
    name: repo.name,
    fullName: repo.full_name,
    description: normalizeDescription(repo.description),
    url: repo.html_url,
    homepage: repo.homepage || null,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    isFork: repo.fork,
    isArchived: repo.archived,
    pushedAt: repo.pushed_at,
    createdAt: repo.created_at,
    topics: repo.topics ?? [],
    license: repo.license?.spdx_id ?? null,
    explanation: repoExplanation(repo),
    tags: repoTags(repo),
    isFeatured: Boolean(note?.featured),
  };
}

function sortRepos(left: GitHubRepo, right: GitHubRepo): number {
  return new Date(right.pushedAt).getTime() - new Date(left.pushedAt).getTime();
}

export async function getPublicRepositories(): Promise<GitHubRepo[]> {
  const repos: GitHubApiRepo[] = [];

  try {
    for (let page = 1; page <= 10; page += 1) {
      const response = await fetch(
        `${GITHUB_REPOS_URL}?per_page=100&sort=pushed&type=owner&page=${page}`,
        {
          cache: "force-cache",
          headers: githubHeaders(),
        }
      );

      if (!response.ok) {
        throw new Error(`GitHub responded with ${response.status}`);
      }

      const pageRepos = (await response.json()) as GitHubApiRepo[];
      repos.push(...pageRepos);

      if (pageRepos.length < 100) {
        break;
      }
    }

    return repos.map(normalizeRepo).sort(sortRepos);
  } catch {
    return FALLBACK_REPOS.map(normalizeRepo).sort(sortRepos);
  }
}

export function getFeaturedRepositories(repos: GitHubRepo[]): GitHubRepo[] {
  const explicitFeatured = repos.filter((repo) => repo.isFeatured);
  const fill = repos.filter(
    (repo) =>
      !repo.isFeatured &&
      !repo.isFork &&
      (repo.description || repo.language || repo.stars > 0)
  );

  return [...explicitFeatured, ...fill];
}

export function getRepositoryStats(repos: GitHubRepo[]) {
  const languages = repos.reduce<Record<string, number>>((acc, repo) => {
    if (!repo.language) {
      return acc;
    }

    acc[repo.language] = (acc[repo.language] ?? 0) + 1;
    return acc;
  }, {});

  return {
    total: repos.length,
    originals: repos.filter((repo) => !repo.isFork).length,
    forks: repos.filter((repo) => repo.isFork).length,
    stars: repos.reduce((total, repo) => total + repo.stars, 0),
    languages: Object.entries(languages)
      .sort(([, leftCount], [, rightCount]) => rightCount - leftCount)
      .slice(0, 6),
  };
}

export function formatRepoDate(date: string): string {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
