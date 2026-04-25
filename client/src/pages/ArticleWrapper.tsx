import { useRoute } from "wouter";
import Article from "./Article";

export default function ArticleWrapper() {
  const [match, params] = useRoute("/article/:slug");

  if (!match || !params) {
    return null;
  }

  return <Article slug={params.slug as string} />;
}
