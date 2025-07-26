import React from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { 
  Github, 
  ExternalLink,
  Trophy,
  Award,
  Star,
  Code2,
  Mail,
  Linkedin,
  MapPin,
  Calendar
} from "lucide-react";

const ProjectsSection = () => {
  // Mock data
  const mockProjects = [
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
  ];

  const mockAchievements = [
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
  ];

  const contactInfo = {
    email: "aalamchand052@gmail.com",
    github: "https://github.com/AveerAlamchand",
    linkedin: "https://linkedin.com/in/aveer-alamchand-3187912a0"
  };

  return (
    <>
      {/* Projects Section */}
      <section id="projects" className="py-24" style={{ backgroundColor: '#ffffff' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light mb-12 text-center" 
                style={{ color: '#1a1a2e' }}>
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {mockProjects.map((project) => (
                <Card key={project.id} 
                      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between" style={{ color: '#1a1a2e' }}>
                      <span>{project.title}</span>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="p-2 rounded-full transition-all duration-200 transform hover:scale-110" 
                           style={{ backgroundColor: '#f5f5f5' }}>
                          <Github className="w-5 h-5" style={{ color: '#1a1a2e' }} />
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
                               style={{ backgroundColor: '#00adb5', color: '#f5f5f5' }}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.certificate && (
                      <Button variant="outline" size="sm" 
                              style={{ borderColor: '#00adb5', color: '#00adb5' }}
                              className="hover:bg-opacity-10 transition-all duration-200">
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
              {mockAchievements.map((achievement, index) => (
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
              <a href={`mailto:${contactInfo.email}`}
                 className="flex items-center gap-3 p-4 rounded-lg transition-all duration-200 transform hover:scale-105" 
                 style={{ backgroundColor: '#00adb5', color: '#f5f5f5' }}>
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 p-4 rounded-lg border transition-all duration-200 transform hover:scale-105" 
                 style={{ borderColor: '#00adb5', color: '#00adb5' }}>
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-3 p-4 rounded-lg border transition-all duration-200 transform hover:scale-105" 
                 style={{ borderColor: '#00adb5', color: '#00adb5' }}>
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" 
                      style={{ backgroundColor: '#00adb5', color: '#f5f5f5' }}
                      className="text-lg px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-105">
                Reach Out
              </Button>
              <Button variant="outline" size="lg"
                      style={{ borderColor: '#00adb5', color: '#00adb5' }}
                      className="text-lg px-8 py-3 rounded-lg hover:bg-opacity-10 transition-all duration-200 transform hover:scale-105">
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
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer"
                 className="transition-all duration-200 transform hover:scale-110" 
                 style={{ color: '#f5f5f5', opacity: 0.7 }}>
                <Github className="w-5 h-5" />
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer"
                 className="transition-all duration-200 transform hover:scale-110" 
                 style={{ color: '#f5f5f5', opacity: 0.7 }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${contactInfo.email}`}
                 className="transition-all duration-200 transform hover:scale-110" 
                 style={{ color: '#f5f5f5', opacity: 0.7 }}>
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ProjectsSection;