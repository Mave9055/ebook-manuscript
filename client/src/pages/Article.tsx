import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Streamdown } from "streamdown";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  getArticleBySlug,
  getNextArticle,
  getPreviousArticle,
  ARTICLES,
} from "@/lib/articles";
import { useMarkdown } from "@/hooks/useMarkdown";

export default function Article({ slug }: { slug: string }) {
  const [, setLocation] = useLocation();
  const article = getArticleBySlug(slug);
  const { content, loading, error } = useMarkdown(
    article?.contentFile || ""
  );
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 font-sans">Article not found</h1>
          <button
            onClick={() => setLocation("/")}
            className="nav-button"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const prevArticle = getPreviousArticle(article.id);
  const nextArticle = getNextArticle(article.id);
  const currentIndex = ARTICLES.findIndex((a) => a.id === article.id) + 1;
  const totalArticles = ARTICLES.length;

  return (
    <div className="min-h-screen bg-background">
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-border z-50">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main content */}
      <div className="pt-8 pb-16">
        <div className="container">
          {/* Breadcrumb navigation */}
          <div className="flex items-center gap-2 mb-8 text-sm text-muted font-sans">
            <button
              onClick={() => setLocation("/")}
              className="hover:text-accent transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button
              onClick={() => setLocation("/")}
              className="hover:text-accent transition-colors"
            >
              Articles
            </button>
            <span>/</span>
            <span className="text-foreground">{article.title}</span>
          </div>

          {/* Article header */}
          <div className="mb-12 pb-8 border-b border-border">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-sans text-muted uppercase tracking-wide">
                Article {currentIndex} of {totalArticles}
              </span>
              <span className="text-sm font-sans text-muted">
                {article.readingTime} min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-muted font-serif italic mb-6">
              {article.subtitle}
            </p>

            {/* Theme tags */}
            <div className="flex flex-wrap gap-2">
              {article.themes.map((theme) => (
                <span
                  key={theme}
                  className="inline-block px-3 py-1 bg-card border border-border rounded text-sm font-sans text-foreground"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>

          {/* Article content */}
          <div className="max-w-3xl article-accent-line">
            {loading && (
              <div className="text-center py-12">
                <p className="text-muted">Loading article...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-800">
                <p className="font-semibold">Error loading article</p>
                <p className="text-sm mt-2">{error}</p>
              </div>
            )}

            {content && (
              <div className="prose prose-lg max-w-none">
                <Streamdown>{content}</Streamdown>
              </div>
            )}
          </div>

          {/* Related articles */}
          {article.relatedArticles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-border">
              <h3 className="text-xl font-bold mb-6 font-sans">
                Related Articles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {article.relatedArticles.map((relatedId) => {
                  const relatedArticle = ARTICLES.find((a) => a.id === relatedId);
                  if (!relatedArticle) return null;
                  return (
                    <button
                      key={relatedArticle.id}
                      onClick={() => setLocation(`/article/${relatedArticle.slug}`)}
                      className="article-card text-left"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-sm font-sans text-muted">
                          Article {relatedArticle.id}
                        </span>
                      </div>
                      <h4 className="font-bold mb-2">{relatedArticle.title}</h4>
                      <p className="text-sm text-muted">{relatedArticle.subtitle}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-16 pt-12 border-t border-border">
            <div className="flex items-center justify-between gap-4">
              {prevArticle ? (
                <button
                  onClick={() => setLocation(`/article/${prevArticle.slug}`)}
                  className="nav-button flex items-center gap-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Previous</span>
                </button>
              ) : (
                <div />
              )}

              <div className="text-center font-sans text-sm text-muted">
                <p>
                  Article {currentIndex} of {totalArticles}
                </p>
              </div>

              {nextArticle ? (
                <button
                  onClick={() => setLocation(`/article/${nextArticle.slug}`)}
                  className="nav-button flex items-center gap-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <span className="hidden sm:inline">Next</span>
                  <ChevronRight size={20} />
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
