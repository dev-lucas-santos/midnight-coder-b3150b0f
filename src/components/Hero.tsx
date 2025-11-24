import { Button } from "@/components/ui/button";
import { FileDown, Briefcase } from "lucide-react";
import React, { useEffect, useRef } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const sectionRef = useRef<HTMLElement | null>(null);
  const terminalRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  // posiciona o indicador 10px abaixo do terminal text
  useEffect(() => {
    const updatePosition = () => {
      const sectionEl = sectionRef.current;
      const termEl = terminalRef.current;
      const indEl = indicatorRef.current;
      if (!sectionEl || !termEl || !indEl) return;

      const sectionRect = sectionEl.getBoundingClientRect();
      const termRect = termEl.getBoundingClientRect();

      // calcula top relativo ao elemento section
      const top = termRect.bottom - sectionRect.top + 10; // 10px abaixo do texto
      indEl.style.top = `${top}px`;
      // remove bottom positioning para evitar conflito
      indEl.style.bottom = "auto";
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, { passive: true });
    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-primary animate-glow-pulse blur-sm"></div>
              <img src={profilePhoto} alt="Lucas Dos Santos Silva - Desenvolvedor Fullstack" 
               className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 relative z-10"/>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground animate-flicker">
              <span className="text-glow">Lucas Dos santos Silva</span>
              <br />
              <br />
              <br />
              <span className="text-glow">Desenvolvedor Fullstack</span>
              <br />
              <span className="text-primary">Júnior JavaScript</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-primary via-accent to-primary mx-auto animate-glow-pulse"></div>
          </div>

          {/* Pitch */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Especializado no ecossistema <span className="text-primary font-semibold">JavaScript</span> (Node.js, React/Vue) 
            e utilizando ferramentas de <span className="text-accent font-semibold">IA</span> (Copilot, ChatGPT, Gemini, Lovable
            para otimizar o ciclo de desenvolvimento e qualidade de código.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              variant="terminal"
              className="w-full sm:w-auto"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Ver Projetos
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto"
              asChild
            >
              <a href="/cv.pdf" download>
                <FileDown className="mr-2 h-5 w-5" />
                Baixar CV
              </a>
            </Button>
          </div>

          {/* Terminal-style indicator */}
          <div className="pt-8 opacity-70" ref={terminalRef}>
            <p className="text-primary font-mono text-sm">
              <span className="animate-glow-pulse">&gt;_</span> Ready to build amazing projects
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={indicatorRef} className="absolute left-1/2 -translate-x-1/2 animate-bounce" style={{ bottom: 'auto' }}>
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
