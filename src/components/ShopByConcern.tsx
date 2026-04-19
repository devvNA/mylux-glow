import { motion } from "framer-motion";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import acneImg from "@/assets/concern-acne.jpg";
import dullnessImg from "@/assets/concern-dullness.jpg";
import agingImg from "@/assets/concern-aging.jpg";
import drynessImg from "@/assets/concern-dryness.jpg";

const concerns = [
  { name: "Acne / Blemishes", badge: "BEST", image: acneImg },
  { name: "Dullness", badge: "BEST", image: dullnessImg },
  { name: "Anti-Aging", badge: "NEW", image: agingImg },
  { name: "Dryness", badge: null, image: drynessImg },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ShopByConcern = () => {
  const { ref, isVisible } = useScrollFadeIn(0.1);

  return (
    <section id="by-concern" className="py-24 px-6 bg-secondary">
      <div ref={ref} className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl font-semibold text-center text-foreground mb-4 tracking-wide md:text-4xl"
        >
          Shop by Concern
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-muted-foreground font-body mb-16 max-w-md mx-auto"
        >
          Targeted solutions for your unique skin needs
        </motion.p>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {concerns.map((c, i) => (
            <motion.div
              key={c.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-5 bg-muted">
                <motion.img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
                {c.badge && (
                  <span className="absolute top-4 left-4 bg-foreground text-background font-body text-[10px] font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
                    {c.badge}
                  </span>
                )}
              </div>
              <h3 className="font-heading text-base text-center text-foreground tracking-wide mb-3">
                {c.name}
              </h3>
              <div className="flex justify-center">
                <a
                  href="#"
                  className="inline-block border border-foreground/30 rounded-full px-6 py-2 font-body text-xs font-medium tracking-widest uppercase text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByConcern;
