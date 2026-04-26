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

  const parts = ["counter-narratives", "appendix", "missing-pieces", "resources"] as const;

  return (
    <div className="min-h-screen bg-background">
      {/* Header section with Cover Image */}
      <header className="relative bg-primary overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/ebook-manuscript/assets/cover.png" 
            alt="" 
            className="w-full h-full object-cover object-center filter blur-sm"
          />
        </div>
        
        <div className="container relative z-10 py-16 md:py-24">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Main Cover Image */}
            <div className="w-full max-w-[320px] shadow-2xl border-4 border-accent/30 rounded-lg overflow-hidden transform md:-rotate-2 transition-transform hover:rotate-0 duration-500">
              <img 
                src="/ebook-manuscript/assets/cover.png" 
                alt="The Rescue Boat Book Cover" 
                className="w-full h-auto"
              />
            </div>

            <div className="max-w-2xl text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-accent mb-4 font-sans leading-tight border-none pb-0">
                The Rescue Boat
              </h1>
              <h2 className="text-2xl md:text-3xl text-accent/90 mb-6 font-serif italic">
                & Other Counter-Narratives
              </h2>
              <div className="w-24 h-1 bg-accent mb-8 mx-auto md:mx-0"></div>
              <p className="text-xl text-primary-foreground/90 font-serif leading-relaxed mb-6">
                Twelve articles on trauma, addiction, and the nervous system
              </p>
              <p className="text-base text-primary-foreground/80 font-serif max-w-xl">
                These articles challenge the narratives that have been used to shame, blame, and
                misunderstand survivors of trauma and addiction. They are written from lived
                experience and grounded in neuroscience.
              </p>
            </div>
          </div>
        </div>
        <div className="h-2 bg-accent w-full"></div>
      </header>

      {/* Welcome / How to Read Section */}
      <section className="py-12 md:py-16 bg-card border-b border-border">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 font-sans">How to Read This Book</h2>
          
          <div className="space-y-8 text-foreground font-serif leading-relaxed">
            <div className="p-6 bg-background/50 border-l-4 border-accent rounded-r-lg">
              <h3 className="text-xl font-bold mb-3 font-sans text-accent">Audience Lanes</h3>
              <p className="mb-4">This book is built to stand alone, but it serves three different readers. Pick your lane.</p>
              <div className="grid gap-6 md:grid-cols-3 text-sm">
                <div>
                  <p className="font-bold text-accent mb-1 font-sans uppercase tracking-wider">Survivors / Peers</p>
                  <p className="text-muted-foreground">Read for the map, not the manual. The articles are psychoeducational, not clinical. Use this to name what you’re carrying, not to prove you’re fixed.</p>
                </div>
                <div>
                  <p className="font-bold text-accent mb-1 font-sans uppercase tracking-wider">Legal Support</p>
                  <p className="text-muted-foreground">Focus on the freeze response and the compliance vs. survival gap. This isn’t about lowering standards. It’s about recognizing when “noncompliance” is a nervous system shutdown.</p>
                </div>
                <div>
                  <p className="font-bold text-accent mb-1 font-sans uppercase tracking-wider">Clinicians / Providers</p>
                  <p className="text-muted-foreground">Use the conceptual framework and the missing-pieces index. It translates physiology into plain language so you can explain mechanisms without overpromising outcomes.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p>
                If you have been called lazy, defiant, broken, or weak – this book is for you. You
                are not what they called you. You are a nervous system that learned to survive.
              </p>
              <p>
                Each article ends with a list of "Missing Pieces"—cross-references to Part III that name what traditional systems overlook. The Technical Appendix (Part II) holds the science, citations, and reframes.
              </p>
              <p className="text-lg font-semibold text-accent italic">
                This is a map of the wiring. Not a substitute for the mechanic.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 md:grid-cols-2 gap-8 text-sm font-sans">
              <div>
                <p className="font-bold text-accent mb-2 uppercase tracking-widest">Citation & Evidence Note</p>
                <p className="text-muted">
                  This book cites foundational trauma and addiction literature. For specific page references and primary studies, consult the Technical Appendix (Part II).
                </p>
              </div>
              <div>
                <p className="font-bold text-accent mb-2 uppercase tracking-widest">Boundary Note</p>
                <p className="text-muted">
                  This book explains mechanisms. It does not diagnose, treat, or replace legal counsel. If you’re in acute crisis, contact a licensed provider or emergency service.
                </p>
              </div>
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
              const partInfo = ARTICLE_PARTS[part as keyof typeof ARTICLE_PARTS];
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
                      <h3 className="text-lg font-bold font-sans text-accent mt-0 mb-0">
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
                              <h4 className="font-bold text-foreground group-hover:text-accent transition-colors mt-0 mb-0">
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

      {/* About author section */}
      <section className="py-12 md:py-16 border-t border-border bg-card">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 font-sans">About the Author</h2>
          <div className="space-y-4 text-foreground font-serif leading-relaxed">
            <p>
              <strong>Daniel Lingar</strong> was born in Davenport, Iowa, and raised in Clarksville, Arkansas. 
              He spent forty-three years living with undiagnosed CPTSD—a condition that was running his life with mechanical precision, though no system he passed through ever translated the mechanism behind it.
            </p>
            <p>
              He is the co-founder of <strong>Capitol Contracts LLC</strong>, a government contracting company based in Clarksville. 
              His memoir, <em>From the Storm to the Fire</em>, is the narrative foundation of the <strong>What Really Happened (WRH)</strong> curriculum.
            </p>
            <p className="text-sm text-muted pt-4 border-t border-border mt-6">
              For more information and resources, visit the{" "}
              <a
                href="https://wrh-master-curriculum.github.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 underline"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                WRH Master Curriculum
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Copyright section */}
      <footer className="py-12 md:py-16 bg-primary text-primary-foreground border-t-4 border-accent">
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
            <p className="text-xs text-primary-foreground/60 pt-4 border-t border-primary-foreground/10">
              Published by Capitol Contracts LLC, Clarksville, Arkansas. ISBN: [pending]
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
