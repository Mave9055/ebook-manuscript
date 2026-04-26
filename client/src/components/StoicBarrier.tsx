import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export default function StoicBarrier() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasPassed = localStorage.getItem("stoic-barrier-passed");
    if (!hasPassed) {
      setIsOpen(true);
    }
  }, []);

  const handlePass = () => {
    localStorage.setItem("stoic-barrier-passed", "true");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-2xl border-4 border-accent bg-black" showCloseButton={false}>
        <DialogHeader className="border-b-2 border-accent pb-4">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle size={32} className="text-accent" />
            <DialogTitle className="text-4xl font-sans text-accent">CONTENT ADVISORY</DialogTitle>
          </div>
          <DialogDescription className="text-white font-serif text-lg leading-relaxed mt-4">
            <p className="mb-4 text-base">
              This manuscript contains <strong className="text-accent">raw and honest discussions</strong> about:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4 text-base">
              <li>Trauma and its neurobiological impacts</li>
              <li>Addiction and substance use</li>
              <li>The lived experience of navigating the legal system</li>
              <li>Intimate personal narratives of survival</li>
            </ul>
            <p className="mb-4 text-base">
              This content is intended for <strong className="text-accent">adult audiences</strong> and may be challenging, triggering, or emotionally intense for some readers.
            </p>
            <p className="text-base font-semibold text-accent">
              By proceeding, you acknowledge that you are entering a space of vulnerability and intense personal narrative.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-6 flex flex-col gap-3">
          <Button 
            onClick={handlePass}
            className="w-full bg-accent text-black hover:bg-yellow-400 font-sans font-bold text-lg py-6 border-2 border-accent"
          >
            I UNDERSTAND AND WISH TO PROCEED
          </Button>
          <p className="text-center text-muted text-sm">
            If you are in crisis, please reach out to a trusted person or a crisis hotline.
          </p>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
