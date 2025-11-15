import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Fullstack",
      description: "Plataforma completa de e-commerce com painel administrativo, carrinho de compras e integração de pagamentos.",
      impact: "Sistema completo com autenticação, gestão de produtos e processamento de pedidos em tempo real.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      aiFeature: "Testes automatizados gerados com GitHub Copilot",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados e métricas em tempo real com gráficos dinâmicos.",
      impact: "Redução de 60% no tempo de análise de dados através de visualizações intuitivas.",
      tech: ["Vue.js", "Chart.js", "Node.js", "PostgreSQL"],
      aiFeature: "Otimização de queries com auxílio do ChatGPT",
      liveDemo: "#",
      github: "#"
    },
    {
      title: "API RESTful para Gestão",
      description: "API robusta com documentação completa, autenticação JWT e rate limiting para sistemas de gestão.",
      impact: "Processamento de +10k requisições/dia com 99.9% de uptime.",
      tech: ["Node.js", "Express", "MySQL", "JWT", "Swagger"],
      aiFeature: "Documentação automatizada com Gemini AI",
      liveDemo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-glow">
              <span className="text-primary font-mono">&lt;</span>
              Projetos em Destaque
              <span className="text-primary font-mono">/&gt;</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Confira alguns dos projetos que desenvolvi, aplicando as melhores práticas e tecnologias modernas.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Impact */}
                  <div className="p-3 bg-primary/5 border border-primary/20 rounded">
                    <p className="text-sm text-foreground">
                      <span className="text-primary font-semibold">Impacto:</span> {project.impact}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-primary/30 text-primary bg-primary/5 font-mono text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* AI Feature */}
                  <div className="flex items-start gap-2 p-2 bg-accent/5 border border-accent/20 rounded">
                    <Sparkles className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-muted-foreground">
                      <span className="text-accent font-semibold">IA:</span> {project.aiFeature}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      variant="terminal" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA for more projects */}
          <div className="text-center pt-8">
            <p className="text-muted-foreground mb-4">
              Quer ver mais projetos e contribuições?
            </p>
            <Button variant="terminal" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Ver GitHub Completo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
