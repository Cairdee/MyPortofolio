import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-card border-t border-border mt-12 flex flex-col md:flex-row justify-between items-center relative z-10">
      {/* Kiri: copyright */}
      <p className="text-sm text-foreground">
        &copy; {new Date().getFullYear()} Jovanco Nicholas Rise. All rights reserved.
      </p>

      {/* Kanan: links + arrow */}
      <div className="flex items-center space-x-6 mt-4 md:mt-0">
        <a
          href="/privacy-policy"
          className="text-sm text-foreground hover:text-primary transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="/terms-and-conditions"
          className="text-sm text-foreground hover:text-primary transition-colors"
        >
          Terms & Conditions
        </a>
        {/* Arrow up */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
