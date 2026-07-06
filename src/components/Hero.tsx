import { useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PARTICLE_COUNT = 18;

// Beautiful bridal portrait — works as both dark (dramatic) and light (romantic)
const HERO_IMAGE = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85&auto=format&fit=crop";

export function Hero() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        size: (((i * 7 + 13) % 3) + 1.5),
        left: ((i * 37 + 11) % 100),
        top: ((i * 53 + 7) % 100),
        duration: (((i * 11) % 5) + 5),
        delay: ((i * 19) % 4),
        opacity: (((i * 3) % 3) + 2) / 10,
      })),
    []
  );

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">

      {/* ── Full-screen bridal image ───────────────────────────── */}
      <img
        src={HERO_IMAGE}
        alt="Bridal"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        loading="eager"
        decoding="async"
      />

      {/* ── Dark mode overlay — rich & dramatic ───────────────── */}
      <div className="absolute inset-0 z-10 hidden dark:block">
        {/* Base dark film */}
        <div className="absolute inset-0 bg-black/62" />
        {/* Gold shimmer — top */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 60%)" }} />
        {/* Rose glow — bottom left */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 50% at 0% 100%, rgba(180,40,80,0.18) 0%, transparent 60%)" }} />
        {/* Deep vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 30%, rgba(0,0,0,0.45) 100%)" }} />
      </div>

      {/* ── Light mode overlay — soft & romantic ──────────────── */}
      <div className="absolute inset-0 z-10 block dark:hidden">
        {/* Soft cream film */}
        <div className="absolute inset-0 bg-[#FAF7F2]/68" />
        {/* Warm gold shimmer — top */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.14) 0%, transparent 60%)" }} />
        {/* Blush wash — bottom left */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 45% at 0% 100%, rgba(242,196,206,0.25) 0%, transparent 60%)" }} />
        {/* Soft edges vignette */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 40%, rgba(240,230,218,0.35) 100%)" }} />
      </div>


      {/* ── Floating gold dust (dark mode only) ───────────────── */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none hidden dark:block">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size + "px",
              height: p.size + "px",
              left: p.left + "%",
              top: p.top + "%",
              background: "#C9A84C",
              boxShadow: "0 0 3px rgba(201,168,76,0.7)",
            }}
            animate={{ y: [0, -28, 0], opacity: [0, p.opacity, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          />
        ))}
      </div>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="container relative z-30 px-6 mx-auto flex flex-col items-center text-center mt-12">

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-px w-10 sm:w-16" style={{ background: "linear-gradient(to right, transparent, rgba(201,168,76,0.8))" }} />
          <span className="font-medium tracking-[0.28em] uppercase text-[10.5px] sm:text-[11px] whitespace-nowrap dark:text-[#C9A84C] text-[#7A5010]">
            Luxury Bridal Makeup by Khushi Koriya
          </span>
          <div className="h-px w-10 sm:w-16" style={{ background: "linear-gradient(to left, transparent, rgba(201,168,76,0.8))" }} />
        </motion.div>

        {/* Title — cream in dark, deep brown in light */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.65 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] leading-[1.05] tracking-wide mb-2 dark:text-[#FAF0E8] text-[#2C1810]"
        >
          Koriya Bliss
        </motion.h1>

        {/* Gold gradient divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.0, delay: 0.95 }}
          className="h-px my-3"
          style={{
            width: "clamp(180px,28vw,320px)",
            background: "linear-gradient(to right, transparent, #C9A84C, transparent)",
          }}
        />

        {/* Subtitle — blush in dark, warm taupe in light */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.25em] uppercase mb-10 dark:text-[rgba(242,196,206,0.72)] text-[#5C3420]"
        >
          Bridal Studio
        </motion.p>

        {/* Ornamental diamond */}
        <motion.span
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 200 }}
          className="text-xl mb-10 block leading-none"
          style={{ color: "rgba(201,168,76,0.8)" }}
        >
          ✦
        </motion.span>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-5"
        >
          <Button
            size="lg"
            className="rounded-none px-10 py-6 text-xs tracking-widest uppercase transition-all duration-300 border-none"
            style={{
              background: "linear-gradient(135deg, #C9A84C, #E2C06A)",
              color: "#1a0810",
              boxShadow: "0 6px 28px rgba(201,168,76,0.45)",
            }}
            onClick={() => scrollTo("packages")}
          >
            View Packages
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-none px-10 py-6 text-xs tracking-widest uppercase transition-all duration-300 backdrop-blur-sm dark:text-[rgba(250,240,232,0.9)] text-[#2C1810]"
            style={{ borderColor: "rgba(201,168,76,0.5)", background: "transparent" }}
            onClick={() => window.open("https://wa.me/917572935375", "_blank")}
          >
            Book on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
