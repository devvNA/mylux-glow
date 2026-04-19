import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useCartStore } from "@/store/cartStore";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = ["Shop", "Bestsellers", "By Concern", "About myLux"];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { openCart, getTotalQuantity } = useCartStore();
  const totalQuantity = getTotalQuantity();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled ? "bg-background/80 glass-header shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-foreground"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Logo */}
        <div className="flex-1 text-center lg:flex-none">
          <h1 className="font-heading text-2xl font-semibold tracking-wider text-foreground">
            myLux
          </h1>
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const target =
                item === "Shop"
                  ? "/shop"
                  : item === "About myLux"
                    ? "/our-story"
                    : `/#${item.toLowerCase().replace(/\s/g, "-")}`;
              const isHash = target.startsWith("/#");

              if (isHash) {
                return (
                  <a
                    key={item}
                    href={
                      location.pathname === "/"
                        ? target.substring(1)
                        : `/${target}`
                    }
                    className="font-body text-sm tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {item}
                  </a>
                );
              }

              return (
                <Link
                  key={item}
                  to={target}
                  className="font-body text-sm tracking-wide text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        )}

        {/* Cart Icon & Spacer */}
        <div className="flex items-center gap-4">
          <button
            onClick={openCart}
            className="relative text-foreground hover:text-muted-foreground transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag size={24} strokeWidth={1.5} />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                {totalQuantity}
              </span>
            )}
          </button>
          {isMobile && <div className="w-1" />}
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobile && (
        <div
          className={`absolute left-0 right-0 top-full bg-background/95 glass-header transition-all duration-300 ${
            menuOpen
              ? "max-h-80 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => {
              const target =
                item === "Shop"
                  ? "/shop"
                  : item === "About myLux"
                    ? "/our-story"
                    : `/#${item.toLowerCase().replace(/\s/g, "-")}`;
              const isHash = target.startsWith("/#");

              if (isHash) {
                return (
                  <a
                    key={item}
                    href={
                      location.pathname === "/"
                        ? target.substring(1)
                        : `/${target}`
                    }
                    onClick={() => setMenuOpen(false)}
                    className="font-heading text-lg text-foreground"
                  >
                    {item}
                  </a>
                );
              }

              return (
                <Link
                  key={item}
                  to={target}
                  onClick={() => setMenuOpen(false)}
                  className="font-heading text-lg text-foreground"
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
