import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-image.jpg";
import ScrollReveal from "./ScrollReveal";

const scrollToForm = () => {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.1]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-navy overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <motion.img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ opacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/60 opacity-50" />
      </motion.div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-3xl">
          <ScrollReveal>
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-navy-foreground leading-tight mb-6">
              Seu carro novo está mais perto
              <br />
              <span className="text-primary">do que você imagina.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-silver text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Existe uma estratégia inteligente para conquistar o carro dos seus sonhos
              sem financiamento bancário e sem juros.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <motion.button
              onClick={scrollToForm}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative inline-block bg-primary text-primary-foreground font-display font-bold text-base md:text-lg tracking-wider px-10 py-4 rounded-md transition-colors duration-300 hover:bg-primary-deep animate-pulse-glow overflow-hidden group"
            >
              <span className="relative z-10">QUERO ENTENDER COMO FUNCIONA</span>
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </motion.button>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-silver/60 text-sm mt-8 font-body">
              Mais de 200 pessoas de Uberlândia já conquistaram o carro com essa estratégia
            </p>
          </ScrollReveal>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-silver/40 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
