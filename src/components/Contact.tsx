import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "text-accent"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "text-primary"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:seu.email@exemplo.com",
      color: "text-accent"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      href: "https://wa.me/5511999999999",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-glow">
              <span className="text-primary font-mono">&lt;</span>
              Vamos Conversar
              <span className="text-primary font-mono">/&gt;</span>
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos construir algo incrível juntos. Entre em contato!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-foreground">Envie uma Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entrarei em contato o mais breve possível.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Nome</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-primary/30 bg-background/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-primary/30 bg-background/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Assunto</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      className="border-primary/30 bg-background/50 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="border-primary/30 bg-background/50 focus:border-primary resize-none"
                    />
                  </div>

                  <Button type="submit" variant="terminal" className="w-full" size="lg">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Links */}
            <div className="space-y-6">
              <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-foreground">Conecte-se Comigo</CardTitle>
                  <CardDescription>
                    Siga-me nas redes sociais ou entre em contato direto.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactLinks.map((link) => (
                    <Button
                      key={link.label}
                      variant="outline"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.icon className={`h-5 w-5 mr-3 ${link.color}`} />
                        <span className="text-foreground">{link.label}</span>
                      </a>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Terminal-style info */}
              <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6 font-mono text-sm space-y-2">
                  <p className="text-primary">
                    <span className="text-accent">const</span> developer = {"{"}
                  </p>
                  <p className="text-muted-foreground pl-4">
                    status: <span className="text-primary">"Disponível para oportunidades"</span>,
                  </p>
                  <p className="text-muted-foreground pl-4">
                    location: <span className="text-primary">"São Paulo, Brasil"</span>,
                  </p>
                  <p className="text-muted-foreground pl-4">
                    workMode: <span className="text-primary">"Remoto | Híbrido | Presencial"</span>
                  </p>
                  <p className="text-primary">{"}"}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
