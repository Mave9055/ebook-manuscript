import { useState } from "react";
import { useLocation } from "wouter";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  ARTICLES,
  ARTICLE_PARTS,
  getArticlesByPart,
} from "@/lib/articles";

export default function Home() {
  const [, setLocation] = useLocation();
  const [expandedPart, setExpandedPart] = useState<string | null>(
    "counter-narratives"
  );

  const parts = ["counter-narratives", "appendix", "missing-pieces"] as const;

  return (
    <div className="min-h-screen bg-background">
      {/* Header section */}
      <header className="bg-gradient-to-r from-primary to-secondary border-b-4 border-accent py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4 font-sans leading-tight">
              The Rescue Boat
            </h1>
            <h2 className="text-2xl md:text-3xl text-accent/80 mb-6 font-serif italic">
              & Other Counter-Narratives
            </h2>
            <p className="text-lg text-primary-foreground/90 font-serif leading-relaxed mb-6">
              Twelve articles on trauma, addiction, and the nervous system
            </p>
            <p className="text-base text-primary-foreground/80 font-serif">
              These articles challenge the narratives that have been used to shame, blame, and
              misunderstand survivors of trauma and addiction. They are written from lived
              experience and grounded in neuroscience.
            </p>
          </div>
        </div>
      </header>

      {/* Welcome section */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 font-sans">Welcome</h2>
          <div className="space-y-4 text-foreground font-serif leading-relaxed">
            <p>
              If you have been called lazy, defiant, broken, or weak – this book is for you. You
              are not what they called you. You are a nervous system that learned to survive.
            </p>
            <p>
              This manuscript is based on <em>From the Storm to the Fire</em> and the{" "}
              <em>WRH Master Curriculum</em>, developed by Daniel Lingar to help survivors
              understand the neurobiology of their own experience.
            </p>
            <div className="mt-6 pt-6 border-t border-border text-sm text-muted font-sans">
              <p className="font-semibold mb-2">About This Book</p>
              <p>
                <strong>Author:</strong> Daniel Lingar
              </p>
              <p>
                <strong>Published:</strong> 2026
              </p>
              <p>
                <strong>Publisher:</strong> Capitol Contracts LLC, Clarksville, Arkansas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of contents */}
      <section className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 font-sans">The Manuscript</h2>

          <div className="space-y-6">
            {parts.map((part) => {
              const articles = getArticlesByPart(part);
              const partInfo = ARTICLE_PARTS[part];
              const isExpanded = expandedPart === part;

              return (
                <div key={part} className="border border-border rounded-lg overflow-hidden">
                  {/* Part header */}
                  <button
                    onClick={() =>
                      setExpandedPart(isExpanded ? null : part)
                    }
                    className="w-full px-6 py-4 bg-card hover:bg-accent/10 transition-colors flex items-center justify-between text-left"
                  >
                    <div>
                      <h3 className="text-lg font-bold font-sans text-accent">
                        {partInfo.title}
                      </h3>
                      <p className="text-sm text-muted mt-1">{partInfo.description}</p>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="text-accent flex-shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="text-accent flex-shrink-0 ml-4" />
                    )}
                  </button>

                  {/* Articles list */}
                  {isExpanded && (
                    <div className="border-t border-border divide-y divide-border">
                      {articles.map((article, index) => (
                        <button
                          key={article.id}
                          onClick={() => setLocation(`/article/${article.slug}`)}
                          className="w-full px-6 py-4 text-left hover:bg-accent/5 transition-colors group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center font-sans font-bold text-accent text-sm">
                              {article.id}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-foreground group-hover:text-accent transition-colors">
                                {article.title}
                              </h4>
                              <p className="text-sm text-muted mt-1">
                                {article.subtitle}
                              </p>
                              <div className="flex items-center gap-2 mt-2 text-xs text-muted font-sans">
                                <span>{article.readingTime} min read</span>
                                <span>•</span>
                                <span>{article.themes.length} themes</span>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to use section */}
      <section className="py-12 md:py-16 bg-card border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 font-sans">How to Use This Book</h2>
          <div className="space-y-4 text-foreground font-serif leading-relaxed">
            <p>
              These articles were written to stand alone. You can read them in order or jump to
              the one that calls to you. Each article ends with a quiet whisper – a tool you can
              borrow.
            </p>
            <p>
              The technical appendix holds the citations and science for those who want them. The
              "Seven Missing Pieces" section names what traditional systems overlook.
            </p>
            <p className="text-lg font-semibold text-accent">
              If you are in pain, you are not alone. If you have been called lazy, defiant, or
              broken, you are not what they called you. You are a nervous system that learned to
              survive. This book is a map. Not to fix you – to help you see the machine.
            </p>
          </div>
        </div>
      </section>

      {/* About author section */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 font-sans">About the Author</h2>
          <div className="space-y-4 text-foreground font-serif leading-relaxed">
            <p>
              <strong>Daniel Lingar</strong> is a survivor, a mechanic, and a writer. His work is
              based on his lived experience navigating the intersections of trauma, addiction, and
              the legal system. He lives and works in Clarksville, Arkansas, where he continues to
              develop tools and reframes for trauma-informed recovery.
            </p>
            <p className="text-sm text-muted pt-4 border-t border-border mt-6">
              For more information and resources, visit the{" "}
              <a
                href="https://wrh-master-curriculum.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline"
              >
                WRH Master Curriculum
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Copyright section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground border-t-4 border-accent">
        <div className="container max-w-3xl">
          <div className="space-y-4 font-sans text-sm">
            <p>
              © 2026 Daniel Lingar. All rights reserved.
            </p>
            <p className="text-primary-foreground/80">
              <strong>Disclaimer:</strong> This book is not a substitute for professional medical
              or mental health advice. The author is not a therapist, doctor, or clinician. The
              content is based on lived experience and psychoeducational principles. If you are in
              crisis, please reach out to a trusted person or a crisis hotline.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
