export interface Article {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  part: "counter-narratives" | "appendix" | "missing-pieces" | "resources";
  contentFile: string;
  readingTime: number;
  themes: string[];
  relatedArticles: number[];
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "the-rescue-boat",
    title: "The Rescue Boat",
    subtitle: "Addiction is survival, not weakness",
    part: "counter-narratives",
    contentFile: "article_01.md",
    readingTime: 12,
    themes: ["Addiction", "Survival", "Nervous System", "Self-Medication"],
    relatedArticles: [6, 8, 12],
  },
  {
    id: 2,
    slug: "they-called-it-noncompliance",
    title: "They Called It Noncompliance",
    subtitle: "Missing court is freeze, not defiance",
    part: "counter-narratives",
    contentFile: "article_02.md",
    readingTime: 11,
    themes: ["Freeze Response", "Legal System", "Trauma", "Misunderstanding"],
    relatedArticles: [7, 5, 2],
  },
  {
    id: 3,
    slug: "shame-is-the-glue",
    title: "Shame Is the Glue",
    subtitle: "Shame motivates hiding, not change",
    part: "counter-narratives",
    contentFile: "article_03.md",
    readingTime: 10,
    themes: ["Shame", "Behavior Change", "Nervous System", "Healing"],
    relatedArticles: [9, 1, 12],
  },
  {
    id: 4,
    slug: "staying-stoic-is-a-cage",
    title: "Staying Stoic Is a Cage",
    subtitle: "Stoicism is suffocation, not strength",
    part: "counter-narratives",
    contentFile: "article_04.md",
    readingTime: 13,
    themes: ["Emotional Suppression", "Freeze", "Vulnerability", "Co-Regulation"],
    relatedArticles: [10, 2, 12],
  },
  {
    id: 5,
    slug: "the-shakes-are-the-alarm",
    title: "The Shakes Are the Alarm Waking Up",
    subtitle: "Withdrawal is re-awakening, not punishment",
    part: "counter-narratives",
    contentFile: "article_05.md",
    readingTime: 11,
    themes: ["Withdrawal", "Nervous System", "Re-Awakening", "Physiology"],
    relatedArticles: [1, 6, 12],
  },
  {
    id: 6,
    slug: "i-got-clean-i-didnt-get-free",
    title: "I Got Clean. I Didn't Get Free.",
    subtitle: "Sobriety is the starting gate, not the finish line",
    part: "counter-narratives",
    contentFile: "article_06.md",
    readingTime: 12,
    themes: ["Sobriety", "Freedom", "Healing", "Nervous System Regulation"],
    relatedArticles: [1, 5, 12],
  },
  {
    id: 7,
    slug: "you-cant-punish-freeze",
    title: "You Can't Punish Freeze",
    subtitle: "Consequences don't teach – they trigger",
    part: "counter-narratives",
    contentFile: "article_07.md",
    readingTime: 10,
    themes: ["Consequences", "Freeze Response", "Punishment", "Learning"],
    relatedArticles: [2, 4, 5],
  },
  {
    id: 8,
    slug: "normal-is-the-most-addictive-state",
    title: "Normal Is the Most Addictive State",
    subtitle: "Addicts chase normal, not highs",
    part: "counter-narratives",
    contentFile: "article_08.md",
    readingTime: 11,
    themes: ["Addiction", "Baseline", "Nervous System", "Self-Medication"],
    relatedArticles: [1, 6, 12],
  },
  {
    id: 9,
    slug: "the-mirror-lies",
    title: "The Mirror Lies",
    subtitle: "Shame distorts everything",
    part: "counter-narratives",
    contentFile: "article_09.md",
    readingTime: 10,
    themes: ["Shame", "Self-Perception", "Trauma", "Healing"],
    relatedArticles: [3, 1, 12],
  },
  {
    id: 10,
    slug: "i-needed-a-co-regulator",
    title: "I Needed a Co-Regulator, Not a Savior",
    subtitle: "Find a steady presence, not a rescuer",
    part: "counter-narratives",
    contentFile: "article_10.md",
    readingTime: 11,
    themes: ["Co-Regulation", "Relationships", "Nervous System", "Healing"],
    relatedArticles: [4, 12, 6],
  },
  {
    id: 11,
    slug: "you-cant-outrun-your-nervous-system",
    title: "You Can't Outrun Your Nervous System",
    subtitle: "The fire follows you",
    part: "counter-narratives",
    contentFile: "article_11.md",
    readingTime: 12,
    themes: ["Nervous System", "Trauma Response", "Integration", "Healing"],
    relatedArticles: [12, 1, 4],
  },
  {
    id: 12,
    slug: "healing-is-a-spiral",
    title: "Healing Is a Spiral",
    subtitle: "Setbacks are not resets",
    part: "counter-narratives",
    contentFile: "article_12.md",
    readingTime: 11,
    themes: ["Healing", "Setbacks", "Progress", "Integration"],
    relatedArticles: [11, 6, 10],
  },
  {
    id: 13,
    slug: "deep-science-and-reframes",
    title: "Deep Science and Reframes",
    subtitle: "Citations, neurobiology, and the research behind the counter-narratives",
    part: "appendix",
    contentFile: "appendix.md",
    readingTime: 15,
    themes: ["Neuroscience", "Research", "Citations", "Evidence"],
    relatedArticles: [],
  },
  {
    id: 14,
    slug: "what-the-system-leaves-out",
    title: "What the System Leaves Out",
    subtitle: "The tools and reframes that traditional systems overlook",
    part: "missing-pieces",
    contentFile: "missing_pieces_overview.md",
    readingTime: 8,
    themes: ["Systems", "Tools", "Reframes", "Recovery"],
    relatedArticles: [],
  },
  {
    id: 15,
    slug: "freeze-response-protocol",
    title: "Freeze Response Protocol for Courtrooms",
    subtitle: "Operational reframes for legal support staff",
    part: "resources",
    contentFile: "freeze_protocol.md",
    readingTime: 5,
    themes: ["Legal System", "Freeze Response", "Protocol"],
    relatedArticles: [2, 7],
  },
  {
    id: 16,
    slug: "the-26-laws-of-survival",
    title: "The 26 Laws of Survival",
    subtitle: "Heuristic tools for pattern recognition",
    part: "resources",
    contentFile: "26_laws.md",
    readingTime: 10,
    themes: ["Survival", "Laws", "Pattern Recognition"],
    relatedArticles: [],
  },
  {
    id: 17,
    slug: "harm-reduction-note",
    title: "Harm Reduction Note",
    subtitle: "Regulation, not perfection",
    part: "resources",
    contentFile: "harm_reduction.md",
    readingTime: 3,
    themes: ["Harm Reduction", "Regulation", "Addiction"],
    relatedArticles: [1, 8],
  },
  {
    id: 18,
    slug: "co-regulation-barriers",
    title: "Co-Regulation Barriers & Low-Bar Alternatives",
    subtitle: "Building scaffolds for connection",
    part: "resources",
    contentFile: "co_regulation_barriers.md",
    readingTime: 4,
    themes: ["Co-Regulation", "Barriers", "Connection"],
    relatedArticles: [10, 4],
  },
  {
    id: 19,
    slug: "15-core-defaults",
    title: "The 15 Core Defaults",
    subtitle: "Rules of the system",
    part: "resources",
    contentFile: "15_defaults.md",
    readingTime: 5,
    themes: ["Principles", "System Rules", "Regulation"],
    relatedArticles: [],
  },
];

export const ARTICLE_PARTS = {
  "counter-narratives": {
    title: "PART I: THE COUNTER-NARRATIVES",
    description: "Twelve articles challenging the narratives that shame and blame survivors",
  },
  appendix: {
    title: "PART II: TECHNICAL APPENDIX",
    description: "Citations, neurobiology, and the research behind the counter-narratives",
  },
  "missing-pieces": {
    title: "PART III: THE SEVEN MISSING PIECES",
    description: "The tools and reframes that traditional systems overlook",
  },
  resources: {
    title: "ADDITIONAL RESOURCES",
    description: "Protocols, laws, and practical tools for survival and support",
  },
};

export function getArticleById(id: number): Article | undefined {
  return ARTICLES.find((article) => article.id === id);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((article) => article.slug === slug);
}

export function getArticlesByPart(
  part: "counter-narratives" | "appendix" | "missing-pieces" | "resources"
): Article[] {
  return ARTICLES.filter((article) => article.part === part);
}

export function getNextArticle(currentId: number): Article | undefined {
  const currentIndex = ARTICLES.findIndex((a) => a.id === currentId);
  if (currentIndex === -1 || currentIndex === ARTICLES.length - 1) return undefined;
  return ARTICLES[currentIndex + 1];
}

export function getPreviousArticle(currentId: number): Article | undefined {
  const currentIndex = ARTICLES.findIndex((a) => a.id === currentId);
  if (currentIndex <= 0) return undefined;
  return ARTICLES[currentIndex - 1];
}
