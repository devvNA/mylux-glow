import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-2.jpg";
import philosophyImg from "@/assets/brand-story.jpg";
import scienceImg from "@/assets/conscious-card.png";
import bioActiveImg from "@/assets/bio-active-card.png";
import clinicalHydrationImg from "@/assets/clinical-hydration-card.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex flex-col justify-center items-center px-6 overflow-hidden">
        <div className="absolute inset-0 max-w-7xl mx-auto px-6 lg:px-8 mt-8 pb-12">
          <img
            src={heroImg}
            alt="myLux Hero"
            className="w-full h-full object-cover rounded-xl opacity-90"
          />
          <div className="absolute inset-0 bg-secondary/10 rounded-xl" />
        </div>
        <motion.div
          className="relative z-10 text-center max-w-2xl px-6 bg-background/80 glass-header py-12 rounded-lg"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <span className="font-heading text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-6 block">
            The Genesis
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Crafted for <br /> Radiance
          </h1>
          <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">
            Our journey began with a simple belief: skincare should be a
            transformative ritual that honors individual beauty and the power of
            nature.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-8">
              A Philosophy of Purity
            </h2>
            <div className="space-y-6 font-body text-muted-foreground text-base leading-relaxed">
              <p>
                We believe that the best skincare is born at the intersection of
                botanical wisdom and modern science. Before myLux Glow was
                bottled, it was a concept born out of frustration with overly
                aggressive formulas.
              </p>
              <p>
                We spent years collaborating with dermatologists and formulators
                to create products that feel ethereal on the skin but perform
                with rigorous clinical efficacy. It's not about hiding flaws;
                it's about illuminating your natural canvas.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 aspect-[4/5] overflow-hidden rounded-lg bg-secondary"
          >
            <img
              src={philosophyImg}
              alt="Brand Philosophy"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Science & Ingredients Section */}
      <section className="py-24 px-6 bg-blush">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-16"
          >
            The Science of Glow
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-background/60 p-10 rounded-lg text-left shadow-sm backdrop-blur-sm border border-transparent hover:border-border transition-colors"
            >
              <img
                src={bioActiveImg}
                alt="Botanicals"
                className="w-full h-32 object-cover rounded mb-6 opacity-90"
              />
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                Bio-Active Botanicals
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Extracted cleanly to preserve maximum potency, our plant-derived
                actives work in synergy to repair and calm the skin barrier.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-background/60 p-10 rounded-lg text-left shadow-sm backdrop-blur-sm border border-transparent hover:border-border transition-colors"
            >
              <img
                src={clinicalHydrationImg}
                alt="Hydration"
                className="w-full h-32 object-cover rounded mb-6 opacity-90"
              />
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                Clinical Hydration
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Multi-molecular weight hyaluronic acid ensures moisture
                penetrates deeply, locking in dewiness at every layer of the
                epidermis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-background/60 p-10 rounded-lg text-left shadow-sm backdrop-blur-sm border border-transparent hover:border-border transition-colors"
            >
              <img
                src={scienceImg}
                alt="Science"
                className="w-full h-32 object-cover rounded mb-6 opacity-90"
              />
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                Conscious Formulation
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Vegan, cruelty-free, and formulated without harsh sulfates or
                parabens.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-xl"
        >
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
            Begin Your Ritual
          </h2>
          <p className="font-body text-muted-foreground mb-10 leading-relaxed text-base">
            Discover the collections designed to bring out your most authentic,
            glowing self.
          </p>
          <Link
            to="/"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-heading text-xs tracking-widest uppercase transition-colors duration-300 hover:bg-charcoal-hover rounded-sm shadow-md"
          >
            Explore Bestsellers
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default OurStory;
