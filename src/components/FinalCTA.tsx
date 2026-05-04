import { motion } from "framer-motion";
import ctaImage from "@/assets/cta-building.jpg";
import ScrollReveal from "./ScrollReveal";

const scrollToForm = () => {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
};

const FinalCTA = () => (
  <section className="relative py-24 md:py-32 bg-primary-deep overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={ctaImage}
        alt=""
        className="w-full h-full object-cover opacity-15 animate-ken-burns"
        loading="lazy"
        width={1280}
        height={640}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/90 to-primary-deep/80" />
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <ScrollReveal>
        <h2 className="font-display font-bold text-3xl md:text-4xl text-navy-foreground mb-4">
          <br />
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <motion.button
          onClick={scrollToForm}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          className="relative inline-block bg-primary text-primary-foreground font-display font-bold text-lg tracking-wider px-12 py-5 rounded-md transition-colors duration-300 hover:bg-navy mt-8 animate-pulse-glow overflow-hidden group"
        >
          <span className="relative z-10"></span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </motion.button>
      </ScrollReveal>
    </div>
  </section>
);

export default FinalCTA;
