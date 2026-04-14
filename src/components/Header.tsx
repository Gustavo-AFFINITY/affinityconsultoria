import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const WHATSAPP_LINK = "https://wa.me/5534999999999?text=Olá! Gostaria de agendar meu diagnóstico patrimonial gratuito.";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <img src={logo} alt="AFFINITYMASTER" className="h-10 w-auto" />
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={`font-display font-bold text-sm tracking-wider px-6 py-2.5 rounded-md transition-all duration-300 ${
            scrolled
              ? "bg-primary text-primary-foreground hover:bg-primary-deep"
              : "bg-primary/90 text-primary-foreground hover:bg-primary"
          }`}
        >
          AGENDAR DIAGNÓSTICO
        </a>
      </div>
    </header>
  );
};

export default Header;
