"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Linkedin, Mail, ExternalLink, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { BoxReveal } from "@/components/magicui/box-reveal";
export default function PersonalWebsite() {
  const [isOpen, setIsOpen] = useState(false);

  const projects = [
    {
      title: "E-Commerce Platform",
      subtitle: "Full-stack web application",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Modern e-commerce platform built with Next.js and Stripe integration",
    },
    {
      title: "Task Management App",
      subtitle: "React Native mobile app",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Cross-platform mobile app for team collaboration and task tracking",
    },
    {
      title: "Data Analytics Dashboard",
      subtitle: "Real-time analytics platform",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Interactive dashboard for business intelligence and data visualization",
    },
  ];

  const techStack = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Bootstrap", "Pinia"],
    backend: ["Node.js", "Sequelize", "Express", "FastAPI", "PostgreSQL","GraphQL", "MongoDB", "Rest API", "Json Web Token"],
    devops: ["Docker", "Vercel", "GitHub Actions"],
    tools: ["Git", "VS Code", "Figma", "Postman"],
  };

  const closeSheet = () => setIsOpen(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link
              href="/"
              className="text-lg sm:text-xl font-bold text-foreground"
            >
              jeaneselina
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link href="#contact">
                <RainbowButton>Contact</RainbowButton>
              </Link>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <Button asChild size="sm">
                <Link href="#contact">Contact</Link>
              </Button>
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link
                      href="#about"
                      className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                      onClick={closeSheet}
                    >
                      About
                    </Link>
                    <Link
                      href="#projects"
                      className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                      onClick={closeSheet}
                    >
                      Projects
                    </Link>
                    <Link
                      href="#contact"
                      className="text-lg font-medium text-foreground hover:text-muted-foreground transition-colors"
                      onClick={closeSheet}
                    >
                      Contact
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-6 sm:mb-8">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden bg-muted">
              <Image
                src="/placeholder.svg?height=128&width=128"
                alt="Jeane Selina"
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
           Jeane Selina
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 sm:mb-6">
              Fullstack Developer
            </p>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
                <TypingAnimation className="text-base text-pink-400 sm:text-lg  max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
 Passionate fullstack developer with expertise in modern web
              technologies. I create scalable applications and love turning
              complex problems into simple, beautiful solutions. Currently
              focused on React, Node.js, and cloud technologies.
                </TypingAnimation>
             
            </p>
          </div>
          <div className="flex justify-center space-x-3 sm:space-x-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="h-9 w-9 sm:h-10 sm:w-10"
            >
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="h-9 w-9 sm:h-10 sm:w-10"
            >
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="h-9 w-9 sm:h-10 sm:w-10"
            >
              <Link href="mailto:hello@selina.dev">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
               Featured Projects
           
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl mb-2 flex items-start justify-between gap-2">
                    <span className="leading-tight">{project.title}</span>
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5" />
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-3">
                    {project.subtitle}
                  </CardDescription>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Tech Stack
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {techStack.frontend.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs sm:text-sm text-white bg-pink-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Backend</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {techStack.backend.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs sm:text-sm bg-pink-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">DevOps</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {techStack.devops.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs sm:text-sm bg-pink-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3 sm:pb-6">
                <CardTitle className="text-lg sm:text-xl">Tools</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {techStack.tools.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs sm:text-sm bg-pink-500 text-white"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50"
      >
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Let's Work Together
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4 sm:px-0 leading-relaxed">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
          <Button size="lg" asChild className="w-full sm:w-auto">
            <Link href="mailto:hello@selina.dev">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <div className="text-sm text-muted-foreground order-2 sm:order-1">
              © 2025 selina.dev
            </div>
            <div className="text-sm text-muted-foreground order-1 sm:order-2">
              All rights reserved
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-sm order-3">
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
