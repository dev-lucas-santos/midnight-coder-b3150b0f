import { Code2, Database, GitBranch, Sparkles, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const hardSkills = {
    frontend: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js"],
    database: ["PostgreSQL", "MySQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code"]
  };

  const aiTools = [
    { name: "GitHub Copilot", use: "Refatoração e testes automatizados" },
    { name: "ChatGPT", use: "Debugging e arquitetura de soluções" },
    { name: "Gemini", use: "Otimização de código e documentação" }
  ];

  const softSkills = [
    { icon: Users, label: "Colaboração em equipe" },
    { icon: Zap, label: "Aprendizado rápido" },
    { icon: Code2, label: "Resolução de problemas" }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-glow">
              <span className="text-primary font-mono">&lt;</span>
              Sobre Mim
              <span className="text-primary font-mono">/&gt;</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          {/* Bio */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desenvolvedor apaixonado por tecnologia e inovação, com foco em criar soluções eficientes 
                e escaláveis. Utilizando o poder da Inteligência Artificial para acelerar o desenvolvimento, 
                mantenho a qualidade do código e implemento as melhores práticas do mercado. 
                Sempre em busca de novos desafios e oportunidades de crescimento profissional.
              </p>
            </CardContent>
          </Card>

          {/* Hard Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary text-center font-mono">
              // Hard Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Code2 className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hardSkills.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-accent" />
                    <h4 className="text-lg font-semibold text-foreground">Backend & Database</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...hardSkills.backend, ...hardSkills.database].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-accent/10 text-accent border border-accent/30 rounded text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <GitBranch className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold text-foreground">Ferramentas</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hardSkills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded text-sm font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-accent/20 hover:border-accent/50 transition-all duration-300 border-glow-accent">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-6 w-6 text-accent animate-glow-pulse" />
                    <h4 className="text-lg font-semibold text-accent">IA para Desenvolvimento</h4>
                  </div>
                  <div className="space-y-2">
                    {aiTools.map((tool) => (
                      <div key={tool.name} className="text-sm">
                        <span className="text-accent font-semibold">{tool.name}:</span>
                        <span className="text-muted-foreground ml-2">{tool.use}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary text-center font-mono">
              // Soft Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {softSkills.map((skill) => (
                <Card key={skill.label} className="border-primary/20 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                    <skill.icon className="h-8 w-8 text-primary" />
                    <p className="text-foreground font-medium">{skill.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
