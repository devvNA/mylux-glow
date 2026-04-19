import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import heroImg1 from "@/assets/hero-1.jpg";
import heroImg2 from "@/assets/hero-2.jpg";
import heroImg3 from "@/assets/hero-3.jpg";

const slides = [
  { image: heroImg1, alt: "myLux skincare collection" },
  { image: heroImg2, alt: "myLux glass skin serum" },
  { image: heroImg3, alt: "Serum drop on water" },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 600], [0, -80]);
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.4, 0.75]);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="shop" className="relative h-screen w-full overflow-hidden gradient-hero">
      {/* Parallax slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <motion.img
            src={slides[current].image}
            alt={slides[current].alt}
            className="h-full w-full object-cover will-change-transform"
            style={{ y: imgY }}
            loading={current === 0 ? "eager" : "lazy"}
          />
          <motion.div
            className="absolute inset-0 gradient-hero"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content overlay with parallax */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div className="text-center px-6 max-w-3xl" style={{ y: textY }}>
          <motion.h2
            key={`h-${current}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl font-semibold tracking-wider text-foreground md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            THE NEW ICON OF
            <br />
            GLASS SKIN.
          </motion.h2>
          <motion.p
            key={`p-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-base text-muted-foreground md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
          >
            Unreal softness and radiant glow, powered by advanced skincare science.
          </motion.p>
          <motion.a
            key={`a-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            href="#bestsellers"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-heading text-sm font-medium tracking-widest uppercase transition-colors duration-300 hover:bg-charcoal-hover"
          >
            Discover Your Glow
          </motion.a>
        </motion.div>
      </div>

      {/* Navigation arrows */}
      <motion.button
        onClick={prev}
        whileHover={{ scale: 1.2, x: -4 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition-colors duration-300 md:left-8"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </motion.button>
      <motion.button
        onClick={next}
        whileHover={{ scale: 1.2, x: 4 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-foreground transition-colors duration-300 md:right-8"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </motion.button>

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="relative h-2 rounded-full overflow-hidden"
            style={{ width: i === current ? 32 : 8 }}
            aria-label={`Go to slide ${i + 1}`}
          >
            <span className={`absolute inset-0 rounded-full transition-all duration-500 ${
              i === current ? "bg-foreground" : "bg-foreground/30"
            }`} />
            {i === current && (
              <motion.span
                className="absolute inset-0 rounded-full bg-foreground/50"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 5, ease: "linear" }}
                key={`progress-${current}`}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
