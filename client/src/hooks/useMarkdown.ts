import { useEffect, useState } from "react";

export function useMarkdown(filename: string) {
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/content/${filename}`);
        if (!response.ok) {
          throw new Error(`Failed to load ${filename}`);
        }
        const text = await response.text();
        setContent(text);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load content");
        setContent("");
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [filename]);

  return { content, loading, error };
}
