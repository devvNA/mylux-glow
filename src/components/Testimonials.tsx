import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Star } from "lucide-react";

const reviews = [
  { name: "Soyeon K.", rating: 5, text: "My skin has never looked this dewy and healthy. The Glass Skin Serum is pure magic — I stopped wearing foundation completely." },
  { name: "Aisha M.", rating: 5, text: "The Dewy Moisture Cream saved my dry winter skin. It's lightweight but so deeply hydrating. Absolutely obsessed!" },
  { name: "Emily R.", rating: 5, text: "I've tried every K-beauty brand and myLux is on another level. The glow is real and everyone keeps asking about my routine." },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollFadeIn();

  return (
    <section className="py-24 px-6 bg-secondary">
      <div
        ref={ref}
        className={`mx-auto max-w-5xl transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-heading text-3xl font-semibold text-center text-foreground mb-4 tracking-wide md:text-4xl">
          Real Results
        </h2>
        <p className="text-center text-muted-foreground font-body mb-16 max-w-md mx-auto">
          Hear from our glass skin community
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-background rounded-sm p-8 transition-shadow duration-500 hover:shadow-md"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-foreground text-foreground" />
                ))}
              </div>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                "{r.text}"
              </p>
              <p className="font-heading text-xs font-medium text-foreground tracking-wide">
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
