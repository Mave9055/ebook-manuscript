import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container max-w-md text-center">
        <h1 className="text-6xl font-bold text-accent mb-4 font-sans">404</h1>
        <h2 className="text-2xl font-bold mb-4 font-sans">Page Not Found</h2>
        <p className="text-foreground mb-8 font-serif leading-relaxed">
          The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <button
          onClick={() => setLocation("/")}
          className="nav-button inline-flex items-center gap-2 hover:bg-accent hover:text-accent-foreground"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
