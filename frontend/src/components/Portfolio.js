import React, { useState, useEffect } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Github, 
  ExternalLink, 
  Mail, 
  Linkedin, 
  Download,
  Code2,
  Brain,
  Gamepad2,
  Trophy,
  User,
  Briefcase,
  MapPin,
  Calendar,
  Award,
  Star,
  MessageCircle
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Mock data
  const mockData = {
    personal: {
      name: "Aveer Alamchand",
      title: "Final-Year Computer Science Student | Future-Focused Developer | Driven Coder",
      bio: "Shaping the future of tech through creativity, code, and collaboration.",
      email: "aalamchand052@gmail.com",
      github: "https://github.com/AveerAlamchand",
      linkedin: "https://linkedin.com/in/aveer-alamchand-3187912a0"
    },
    about: {
      description: "Hi! I'm Aveer Alamchand, a final-year Computer Science student at the University of KwaZulu-Natal. I'm passionate about building things that matter — whether it's a dynamic AI tool or a story-driven C++ game.\n\nMy learning journey is built on curiosity, consistency, and collaboration. I strive to write clean code, communicate clearly, and deliver results that are thoughtful, ethical, and engaging.",
      highlights: [
        "5× Dean's Commendation",
        "Scholarship recipient – Top 5 in my college (2nd year)",
        "Excited about Generative AI, LLMs, and No-Code Automation"
      ]
    },
    skills: {
      frontend: ["HTML", "CSS", "JavaScript", "Web Development (Sololearn Certified)"],
      backend: ["Java", "SQL", "Python", "Git", "Bash", "OOP"],
      ai: ["Basic NLP", "LLM Workflows", "Make", "Zapier"],
      gamedev: ["C++", "Story Writing", "Project Design", "GitHub Collaboration"],
      soft: ["Communication", "Teamwork", "Problem Solving", "Presentations"]
    },
    projects: [
      {
        id: 1,
        title: "Echoes of Fate",
        description: "Story-based interactive quiz game (C++). An immersive, side-scrolling game where players travel through time, battling corrupted emperors in quiz-style boss fights. Features item systems, dialogue interactions, and a gripping plot that adapts based on your answers.",
        technologies: ["C++", "Game Design", "Story Scripting"],
        github: "https://github.com/Fogtail/Comp315_Project.git",
        type: "game"
      },
      {
        id: 2,
        title: "Web Developer Certification Projects",
        description: "From responsive layouts to interactive JavaScript elements, these projects reflect my journey through Sololearn's Web Dev path.",
        technologies: ["HTML", "CSS", "JavaScript"],
        certificate: true,
        type: "web"
      }
    ],
    achievements: [
      {
        title: "Dean's Commendation",
        description: "Received 5 times for academic excellence",
        icon: Trophy
      },
      {
        title: "Certificate of Merit: Math 235",
        description: "Outstanding performance in advanced mathematics",
        icon: Award
      },
      {
        title: "Tech Society UKZN Member",
        description: "Active member of university tech community",
        icon: Star
      },
      {
        title: "Sololearn Web Developer Certificate",
        description: "Certified web development skills",
        icon: Code2
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f5f5', color: '#1a1a2e' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b" 
              style={{ backgroundColor: 'rgba(245, 245, 245, 0.9)', borderColor: '#eeeeee' }}>
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-bold text-xl" style={{ color: '#1a1a2e' }}>
              Aveer Alamchand
            </div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:scale-105 transform duration-200 ${
                    activeSection === item.toLowerCase() 
                      ? 'font-semibold' 
                      : 'hover:opacity-70'
                  }`}
                  style={{ 
                    color: activeSection === item.toLowerCase() ? '#00adb5' : '#1a1a2e'
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              style={{ backgroundColor: '#00adb5', color: '#f5f5f5' }}
              className="hover:opacity-90 transition-opacity duration-200 transform hover:scale-105"
            >
              Let's Connect
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight" 
                style={{ color: '#1a1a2e', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              {mockData.personal.name}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light opacity-80" 
               style={{ color: '#1a1a2e' }}>
              {mockData.personal.title}
            </p>
            <p className="text-lg md:text-xl mb-12 opacity-70 max-w-2xl mx-auto" 
               style={{ color: '#1a1a2e' }}>
              {mockData.personal.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                style={{ backgroundColor: '#00adb5', color: '#f5f5f5' }}
                className="text-lg px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                style={{ borderColor: '#00adb5', color: '#00adb5' }}
                className="text-lg px-8 py-3 rounded-lg hover:bg-opacity-10 transition-all duration-200 transform hover:scale-105"
              >
                Let's Connect
              </Button>
            </div>
            <div className="flex justify-center gap-6 mt-12">
              <a href={mockData.personal.github} target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full transition-all duration-200 transform hover:scale-110" 
                 style={{ backgroundColor: '#eeeeee' }}>
                <Github className="w-6 h-6" style={{ color: '#1a1a2e' }} />
              </a>
              <a href={mockData.personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full transition-all duration-200 transform hover:scale-110" 
                 style={{ backgroundColor: '#eeeeee' }}>
                <Linkedin className="w-6 h-6" style={{ color: '#1a1a2e' }} />
              </a>
              <button className="p-3 rounded-full transition-all duration-200 transform hover:scale-110" 
                      style={{ backgroundColor: '#eeeeee' }}>
                <Download className="w-6 h-6" style={{ color: '#1a1a2e' }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" 
                style={{ color: '#1a1a2e' }}>
              Who I Am
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#1a1a2e' }}>
                  {mockData.about.description.split('\n\n')[0]}
                </p>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#1a1a2e' }}>
                  {mockData.about.description.split('\n\n')[1]}
                </p>
              </div>
              <Card className="border-0 shadow-lg" style={{ backgroundColor: '#f5f5f5' }}>
                <CardHeader>
                  <CardTitle style={{ color: '#1a1a2e' }}>Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.about.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00adb5' }}></div>
                        <span style={{ color: '#1a1a2e' }}>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" 
                style={{ color: '#1a1a2e' }}>
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3" style={{ color: '#1a1a2e' }}>
                    <Code2 className="w-6 h-6" style={{ color: '#00adb5' }} />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.frontend.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             style={{ backgroundColor: '#eeeeee', color: '#1a1a2e' }}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3" style={{ color: '#1a1a2e' }}>
                    <Briefcase className="w-6 h-6" style={{ color: '#00adb5' }} />
                    Backend & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.backend.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             style={{ backgroundColor: '#eeeeee', color: '#1a1a2e' }}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3" style={{ color: '#1a1a2e' }}>
                    <Brain className="w-6 h-6" style={{ color: '#00adb5' }} />
                    AI & Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.ai.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             style={{ backgroundColor: '#eeeeee', color: '#1a1a2e' }}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3" style={{ color: '#1a1a2e' }}>
                    <Gamepad2 className="w-6 h-6" style={{ color: '#00adb5' }} />
                    Game Dev & C++
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.gamedev.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             style={{ backgroundColor: '#eeeeee', color: '#1a1a2e' }}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3" style={{ color: '#1a1a2e' }}>
                    <MessageCircle className="w-6 h-6" style={{ color: '#00adb5' }} />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.soft.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             style={{ backgroundColor: '#eeeeee', color: '#1a1a2e' }}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-0" style={{ backgroundColor: '#eeeeee' }} />
    </div>
  );
};

export default Portfolio;