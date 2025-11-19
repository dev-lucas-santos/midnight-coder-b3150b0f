import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-primary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm font-mono">
              <span className="text-primary">&copy;</span> {currentYear} -DEV-lucas-Santos Desenvolvido com{" "}
              <span className="text-accent">❤</span> e <span className="text-primary">JavaScript</span>
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:seu.email@exemplo.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Terminal-style signature */}
          <div className="mt-6 text-center">
            <p className="text-xs font-mono text-muted-foreground/50">
              <span className="text-primary animate-glow-pulse">&gt;_</span> Ready to make an impact
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
