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
  MessageCircle,
  GraduationCap,
  Building,
  Heart
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
        "Working on Echoes of Fate Game",
        "Scholarship recipient – Top 5 in my college (2nd year)",
        "Excited about Generative AI, LLMs, and No-Code Automation"
      ]
    },
    interests: [
      { icon: "💪", title: "Gym & Fitness", description: "Maintaining physical and mental strength" },
      { icon: "♟️", title: "Chess", description: "Strategic thinking and problem solving" },
      { icon: "🧠", title: "Generative AI & Automation", description: "Exploring cutting-edge AI technologies" },
      { icon: "🎮", title: "Game Mechanics & Narrative Design", description: "Creating engaging interactive experiences" }
    ],
    education: {
      university: {
        name: "University of KwaZulu-Natal",
        degree: "BSc in Computer Science & IT",
        period: "2023–2026",
        achievements: [
          "16 Distinctions",
          "4× Dean's Commendations", 
          "Top 5 Scholarship Award"
        ]
      },
      highSchool: {
        name: "Curro Heritage House",
        qualification: "National Senior Certificate",
        period: "2018–2022",
        achievements: [
          "4 Distinctions"
        ]
      }
    },
    experience: [
      {
        id: 1,
        position: "Assistant",
        company: "UCL, Durban",
        period: "2023–2025 holiday periods",
        description: "Balanced tasks in a fast-paced environment. Sharpened my work ethic, teamwork, and professional discipline during 3 holiday contracts."
      },
      {
        id: 2,
        position: "Class Representative", 
        company: "UKZN",
        period: "2024",
        description: "Elected class rep for Mathematical Modelling. Acted as liaison between students and lecturer, resolving academic and admin issues."
      }
    ],
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
        image: "https://customer-assets.emergentagent.com/job_aveer-techfolio/artifacts/ems28446_Picture1.png", 
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
      const sections = ['hero', 'about', 'interests', 'education', 'experience', 'skills', 'projects', 'achievements', 'contact'];
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
              {['About', 'Interests', 'Education', 'Experience', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
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
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden gradient-bg-3">
        {/* Animated background shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        
        {/* Particle effect */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight glow-text" 
                style={{ color: '#1a1a2e', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.02em' }}>
              {mockData.personal.name}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light gradient-text">
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
                className="text-lg px-8 py-3 rounded-lg pulse-button gradient-bg-1 text-white border-0 hover:opacity-90 transition-all duration-200 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="text-lg px-8 py-3 rounded-lg pulse-button hover:bg-opacity-10 transition-all duration-200 transform hover:scale-105"
                style={{ borderColor: '#00adb5', color: '#00adb5', borderWidth: '2px' }}
              >
                Let's Connect
              </Button>
            </div>
            <div className="flex justify-center gap-6 mt-12">
              <a href={mockData.personal.github} target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full transition-all duration-200 transform interactive-icon gradient-bg-1" 
                 style={{ backgroundColor: '#eeeeee' }}>
                <Github className="w-6 h-6 text-white" />
              </a>
              <a href={mockData.personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full transition-all duration-200 transform interactive-icon gradient-bg-1" 
                 style={{ backgroundColor: '#eeeeee' }}>
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <button className="p-3 rounded-full transition-all duration-200 transform interactive-icon gradient-bg-1"
                      onClick={() => window.open("https://customer-assets.emergentagent.com/job_aveer-techfolio/artifacts/74ajrvut_Aveer%20Norman%20Psalms%20Alamchand%20CV.pdf", "_blank")}>
                <Download className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
        {/* Subtle background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full" style={{ backgroundColor: '#00adb5' }}></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 rotate-45" style={{ backgroundColor: '#00d4aa' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 rounded-full" style={{ backgroundColor: '#1a1a2e' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center glow-text" 
                style={{ color: '#1a1a2e' }}>
              Who I Am
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left">
                <p className="text-lg leading-relaxed mb-6" style={{ color: '#1a1a2e' }}>
                  {mockData.about.description.split('\n\n')[0]}
                </p>
                <p className="text-lg leading-relaxed mb-8" style={{ color: '#1a1a2e' }}>
                  {mockData.about.description.split('\n\n')[1]}
                </p>
              </div>
              <Card className="border-0 shadow-lg interactive-card slide-in-right" style={{ backgroundColor: '#f5f5f5' }}>
                <CardHeader>
                  <CardTitle className="gradient-text">Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.about.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3 transform hover:translate-x-2 transition-transform duration-200">
                        <div className="w-3 h-3 rounded-full gradient-bg-1"></div>
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

      {/* Interests Section */}
      <section id="interests" className="py-24" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center glow-text" 
                style={{ color: '#1a1a2e' }}>
              Interests
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {mockData.interests.map((interest, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-4" style={{ color: '#1a1a2e' }}>
                      <span className="text-3xl">{interest.icon}</span>
                      <span>{interest.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{ color: '#1a1a2e', opacity: 0.8 }}>
                      {interest.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" 
                style={{ color: '#1a1a2e' }}>
              Education
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* University */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3" style={{ color: '#1a1a2e' }}>
                    <GraduationCap className="w-8 h-8" style={{ color: '#00adb5' }} />
                    University
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a1a2e' }}>
                    {mockData.education.university.name}
                  </h3>
                  <p className="text-lg mb-2" style={{ color: '#1a1a2e', opacity: 0.9 }}>
                    {mockData.education.university.degree}
                  </p>
                  <p className="text-sm mb-4" style={{ color: '#1a1a2e', opacity: 0.7 }}>
                    {mockData.education.university.period}
                  </p>
                  <div className="space-y-2">
                    {mockData.education.university.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00adb5' }}></div>
                        <span style={{ color: '#1a1a2e' }}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* High School */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3" style={{ color: '#1a1a2e' }}>
                    <Building className="w-8 h-8" style={{ color: '#00adb5' }} />
                    High School
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#1a1a2e' }}>
                    {mockData.education.highSchool.name}
                  </h3>
                  <p className="text-lg mb-2" style={{ color: '#1a1a2e', opacity: 0.9 }}>
                    {mockData.education.highSchool.qualification}
                  </p>
                  <p className="text-sm mb-4" style={{ color: '#1a1a2e', opacity: 0.7 }}>
                    {mockData.education.highSchool.period}
                  </p>
                  <div className="space-y-2">
                    {mockData.education.highSchool.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#00adb5' }}></div>
                        <span style={{ color: '#1a1a2e' }}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" 
                style={{ color: '#1a1a2e' }}>
              Experience
            </h2>
            <div className="space-y-8">
              {mockData.experience.map((exp) => (
                <Card key={exp.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3" style={{ color: '#1a1a2e' }}>
                      <Briefcase className="w-6 h-6" style={{ color: '#00adb5' }} />
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                          <span>{exp.position}</span>
                          <Badge style={{ backgroundColor: '#00adb5', color: '#f5f5f5' }}>
                            {exp.company}
                          </Badge>
                        </div>
                        <p className="text-sm font-normal mt-1" style={{ color: '#1a1a2e', opacity: 0.7 }}>
                          {exp.period}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p style={{ color: '#1a1a2e', opacity: 0.8 }}>
                      {exp.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#f5f5f5' }}>
        {/* Subtle animated background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-3">
          <div className="absolute top-20 right-10 w-24 h-24 rounded-full animate-pulse" style={{ backgroundColor: '#00adb5' }}></div>
          <div className="absolute bottom-1/4 left-16 w-18 h-18 rotate-45 animate-pulse" style={{ backgroundColor: '#00d4aa', animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" 
                style={{ color: '#1a1a2e' }}>
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg interactive-card skill-badge-frontend">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Code2 className="w-6 h-6" />
                    Frontend
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.frontend.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             className="bg-white/20 text-white hover:bg-white/30 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg interactive-card skill-badge-backend">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Briefcase className="w-6 h-6" />
                    Backend & Tools
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.backend.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             className="bg-white/20 text-white hover:bg-white/30 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg interactive-card skill-badge-ai">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-800">
                    <Brain className="w-6 h-6" />
                    AI & Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.ai.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             className="bg-white/30 text-gray-800 hover:bg-white/50 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg interactive-card skill-badge-gamedev">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-800">
                    <Gamepad2 className="w-6 h-6" />
                    Game Dev & C++
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.gamedev.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             className="bg-white/30 text-gray-800 hover:bg-white/50 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg interactive-card skill-badge-soft md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <MessageCircle className="w-6 h-6" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {mockData.skills.soft.map((skill, index) => (
                      <Badge key={index} variant="secondary" 
                             className="bg-white/20 text-white hover:bg-white/30 transition-colors">
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

      {/* Projects Section */}
      <section id="projects" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
        {/* Subtle background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#00adb5' }}></div>
          <div className="absolute bottom-1/3 right-10 w-24 h-24 rotate-12" style={{ backgroundColor: '#00d4aa' }}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 rounded-full" style={{ backgroundColor: '#1a1a2e' }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" 
                style={{ color: '#1a1a2e' }}>
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {mockData.projects.map((project) => (
                <Card key={project.id} 
                      className="border-0 shadow-lg interactive-card overflow-hidden group">
                  {project.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between" style={{ color: '#1a1a2e' }}>
                      <span className="gradient-text">{project.title}</span>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full transition-all duration-200 transform interactive-icon gradient-bg-1">
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: '#1a1a2e', opacity: 0.8 }}>
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} 
                               className="gradient-bg-1 text-white border-0 hover:opacity-80 transition-opacity">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.certificate && (
                      <Button variant="outline" size="sm" 
                              onClick={() => window.open("https://www.sololearn.com/en/certificates/CC-JMQX6A9D", "_blank")}
                              className="pulse-button hover:bg-opacity-10 transition-all duration-200"
                              style={{ borderColor: '#00adb5', color: '#00adb5' }}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24" style={{ backgroundColor: '#f5f5f5' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" 
                style={{ color: '#1a1a2e' }}>
              Achievements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockData.achievements.map((achievement, index) => (
                <Card key={index} 
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 rounded-full" style={{ backgroundColor: '#00adb5' }}>
                        <achievement.icon className="w-8 h-8" style={{ color: '#f5f5f5' }} />
                      </div>
                    </div>
                    <CardTitle className="text-lg" style={{ color: '#1a1a2e' }}>
                      {achievement.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm" style={{ color: '#1a1a2e', opacity: 0.7 }}>
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24" style={{ backgroundColor: '#1a1a2e' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-6" 
                style={{ color: '#f5f5f5' }}>
              Let's Collaborate or Connect
            </h2>
            <p className="text-lg mb-12" style={{ color: '#f5f5f5', opacity: 0.8 }}>
              Whether it's a dev project, mentorship, or just a shared love of AI and code — I'd love to hear from you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a href={`mailto:${mockData.personal.email}`}
                 className="flex items-center gap-3 p-4 rounded-lg transition-all duration-200 transform hover:scale-105" 
                 style={{ backgroundColor: '#00adb5', color: '#f5f5f5' }}>
                <Mail className="w-5 h-5" />
                <span>{mockData.personal.email}</span>
              </a>
              <a href={mockData.personal.github} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 p-4 rounded-lg border transition-all duration-200 transform hover:scale-105" 
                 style={{ borderColor: '#00adb5', color: '#00adb5' }}>
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href={mockData.personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 p-4 rounded-lg border transition-all duration-200 transform hover:scale-105" 
                 style={{ borderColor: '#00adb5', color: '#00adb5' }}>
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" 
                      onClick={() => window.open(`mailto:${mockData.personal.email}?subject=Let's collaborate!&body=Hi Aveer, I'd love to discuss potential collaboration opportunities.`, '_blank')}
                      className="text-lg px-8 py-3 rounded-lg pulse-button gradient-bg-1 text-white border-0 hover:opacity-90 transition-all duration-200 transform hover:scale-105">
                Reach Out
              </Button>
              <Button variant="outline" size="lg"
                      onClick={() => window.open(`mailto:${mockData.personal.email}?subject=Let's schedule a chat!&body=Hi Aveer, I'd like to schedule a chat with you. What's your availability like?`, '_blank')}
                      className="text-lg px-8 py-3 rounded-lg pulse-button hover:bg-opacity-10 transition-all duration-200 transform hover:scale-105"
                      style={{ borderColor: '#00adb5', color: '#00adb5', borderWidth: '2px' }}>
                Schedule a Chat
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t" style={{ backgroundColor: '#1a1a2e', borderColor: '#eeeeee' }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p style={{ color: '#f5f5f5', opacity: 0.7 }}>
                © 2024 Aveer Alamchand. Crafted with passion and code.
              </p>
            </div>
            <div className="flex gap-6">
              <a href={mockData.personal.github} target="_blank" rel="noopener noreferrer"
                 className="transition-all duration-200 transform hover:scale-110" 
                 style={{ color: '#f5f5f5', opacity: 0.7 }}>
                <Github className="w-5 h-5" />
              </a>
              <a href={mockData.personal.linkedin} target="_blank" rel="noopener noreferrer"
                 className="transition-all duration-200 transform hover:scale-110" 
                 style={{ color: '#f5f5f5', opacity: 0.7 }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${mockData.personal.email}`}
                 className="transition-all duration-200 transform hover:scale-110" 
                 style={{ color: '#f5f5f5', opacity: 0.7 }}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;