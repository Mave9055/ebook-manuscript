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
import { ShieldAlert } from "lucide-react";

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
      <DialogContent className="sm:max-w-md border-accent border-t-4" showCloseButton={false}>
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2 text-accent">
            <ShieldAlert size={24} />
            <DialogTitle className="text-2xl font-sans">Content Advisory</DialogTitle>
          </div>
          <DialogDescription className="text-foreground font-serif text-base leading-relaxed">
            This manuscript contains raw and honest discussions about trauma, addiction, 
            and the lived experience of navigating the legal system. The content is 
            intended for adult audiences and may be challenging for some readers.
            <br /><br />
            By proceeding, you acknowledge that you are entering a space of 
            vulnerability and intense personal narrative.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-4">
          <Button 
            onClick={handlePass}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-bold"
          >
            I UNDERSTAND AND WISH TO PROCEED
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
