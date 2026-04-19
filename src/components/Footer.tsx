import { useState } from "react";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-primary text-primary-foreground py-20 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-2xl font-semibold tracking-wider mb-3 md:text-3xl">
          JOIN THE GLASS SKIN CLUB
        </h2>
        <p className="font-body text-sm text-primary-foreground/70 mb-10 max-w-md mx-auto leading-relaxed">
          Sign up for myLux and get closer to flawless skin — no filters needed.
        </p>

        <form
          onSubmit={(e) => { e.preventDefault(); setEmail(""); }}
          className="flex flex-col items-center gap-3 sm:flex-row sm:gap-0 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-transparent border border-primary-foreground/30 px-5 py-3 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-primary-foreground/60 sm:rounded-r-none"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-primary-foreground text-primary px-8 py-3 font-heading text-xs tracking-widest uppercase transition-opacity duration-300 hover:opacity-80 sm:rounded-l-none whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>

        <div className="flex items-center justify-center gap-6 mt-12">
          <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors" aria-label="Twitter">
            <Twitter size={20} />
          </a>
        </div>

        <p className="font-body text-xs text-primary-foreground/30 mt-8">
          © 2026 myLux Skincare. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
