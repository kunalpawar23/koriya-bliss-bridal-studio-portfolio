import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("kb-theme") as Theme | null;
    if (stored === "dark" || stored === "light") return stored;
  }
  return "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  localStorage.setItem("kb-theme", theme);
}

const NAV_LINKS = ["About", "Services", "Packages", "Gallery", "Contact"];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(
      () => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      },
      menuOpen ? 300 : 0,
    );
  };

  const isOpaque = scrolled || menuOpen;

  const overHeroText = theme === "dark" ? "text-white" : "text-[#2C1810]";
  const navTextClass = isOpaque ? "text-foreground" : overHeroText;

  const iconBtnClass = `flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.25)] hover:bg-primary/15 ${
    isOpaque ? "text-foreground bg-background/80" : `${overHeroText} ${theme === "dark" ? "bg-white/10" : "bg-black/5"} backdrop-blur-sm`
  }`;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isOpaque
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img
            src="/logo-koriya.png"
            alt="Koriya Bliss Bridal Studio"
            className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_2px_10px_rgba(201,168,76,0.35)]"
          />
        </Link>

        {/* Right side — nav links + controls */}
        <div className="flex items-center gap-8">
          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase">
            {NAV_LINKS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary transition-colors duration-200 font-normal text-[18px] ${navTextClass}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className={iconBtnClass}
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "dark" ? (
                  <motion.span
                    key="sun"
                    initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.22 }}
                    className="flex"
                  >
                    <Sun className="w-[18px] h-[18px]" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="moon"
                    initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.22 }}
                    className="flex"
                  >
                    <Moon className="w-[18px] h-[18px]" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={`md:hidden ${iconBtnClass}`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <X className="w-5 h-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <Menu className="w-5 h-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile slide-down menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden md:hidden border-t border-border/50 bg-background/98 backdrop-blur-md"
          >
            <nav className="container mx-auto px-6 py-4 flex flex-col">
              {NAV_LINKS.map((item, i) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                  onClick={() => scrollTo(item)}
                  className="text-left text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium tracking-widest uppercase py-3.5 border-b border-border/30 last:border-0 flex items-center gap-2 group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-primary transition-all duration-300 shrink-0" />
                  {item}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
