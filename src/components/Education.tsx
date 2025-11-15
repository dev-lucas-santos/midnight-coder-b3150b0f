import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      type: "Graduação",
      course: "Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Tecnológica Federal",
      period: "2022 - 2024",
      status: "Concluído"
    },
    {
      type: "Bootcamp",
      course: "Bootcamp Fullstack JavaScript",
      institution: "Rocketseat / XP Educação",
      period: "2023",
      status: "Concluído"
    }
  ];

  const certifications = [
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      year: "2023"
    },
    {
      title: "Node.js - The Complete Guide",
      issuer: "Udemy",
      year: "2023"
    },
    {
      title: "React - The Complete Guide",
      issuer: "Udemy",
      year: "2024"
    },
    {
      title: "MongoDB for Developers",
      issuer: "MongoDB University",
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-glow">
              <span className="text-primary font-mono">&lt;</span>
              Formação & Certificações
              <span className="text-primary font-mono">/&gt;</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary font-mono">// Formação</h3>
              </div>
              
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card 
                    key={index}
                    className="border-primary/20 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  >
                    <CardContent className="p-6 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-accent" />
                            <span className="text-xs font-mono text-accent uppercase">{edu.type}</span>
                          </div>
                          <h4 className="text-lg font-semibold text-foreground">{edu.course}</h4>
                          <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        </div>
                        <div className="text-right space-y-1">
                          <p className="text-sm font-mono text-primary">{edu.period}</p>
                          <span className="inline-block px-2 py-1 bg-primary/10 text-primary border border-primary/30 rounded text-xs">
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <Award className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-accent font-mono">// Certificações</h3>
              </div>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card 
                    key={index}
                    className="border-accent/20 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-all duration-300"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 flex-1">
                          <h4 className="text-sm font-semibold text-foreground">{cert.title}</h4>
                          <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/30">
                          {cert.year}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
