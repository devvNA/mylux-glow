import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { Link } from "react-router-dom";
import brandImg from "@/assets/brand-story.jpg";

const BrandStory = () => {
  const { ref: refLeft, isVisible: leftVisible } = useScrollFadeIn();
  const { ref: refRight, isVisible: rightVisible } = useScrollFadeIn();

  return (
    <section id="about-mylux" className="bg-blush py-24 px-6">
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-16 lg:flex-row lg:gap-20">
        {/* Image */}
        <div
          ref={refLeft}
          className={`w-full lg:w-1/2 transition-all duration-700 ease-out ${
            leftVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8"
          }`}
        >
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={brandImg}
              alt="myLux brand story"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Text */}
        <div
          ref={refRight}
          className={`w-full lg:w-1/2 transition-all duration-700 ease-out delay-200 ${
            rightVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8"
          }`}
        >
          <p className="font-heading text-xs font-medium tracking-[0.3em] text-muted-foreground uppercase mb-4">
            The myLux Experience
          </p>
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-6 leading-snug md:text-4xl">
            Surreal Softness,
            <br />
            Visible Results.
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
            Where sensory beauty meets skincare innovation. Experience visible
            results with every drop. Our formulas are crafted with rare
            botanical extracts and next-generation hydration science to unveil
            your most luminous skin.
          </p>
          <Link
            to="/our-story"
            className="inline-block border border-foreground text-foreground px-8 py-3 font-heading text-xs tracking-widest uppercase transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
