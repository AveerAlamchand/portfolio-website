// Mock data for portfolio website - This will be replaced with backend integration later

export const mockPortfolioData = {
  // Personal Information
  personal: {
    name: "Aveer Alamchand",
    title: "Final-Year Computer Science Student | Future-Focused Developer | Driven Coder",
    bio: "Shaping the future of tech through creativity, code, and collaboration.",
    email: "aalamchand052@gmail.com",
    github: "https://github.com/AveerAlamchand",
    linkedin: "https://linkedin.com/in/aveer-alamchand-3187912a0",
    location: "University of KwaZulu-Natal",
    cvUrl: "/cv/aveer-alamchand-cv.pdf"
  },

  // About Me Section
  about: {
    description: "Hi! I'm Aveer Alamchand, a final-year Computer Science student at the University of KwaZulu-Natal. I'm passionate about building things that matter — whether it's a dynamic AI tool or a story-driven C++ game.\n\nMy learning journey is built on curiosity, consistency, and collaboration. I strive to write clean code, communicate clearly, and deliver results that are thoughtful, ethical, and engaging.",
    highlights: [
      "Working on Echoes of Fate Game",
      "Scholarship recipient – Top 5 in my college (2nd year)",
      "Excited about Generative AI, LLMs, and No-Code Automation"
    ],
    university: "University of KwaZulu-Natal",
    year: "Final Year",
    degree: "Computer Science"
  },

  // Skills organized by category
  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "Web Development (Sololearn Certified)"],
    backend: ["Java", "SQL", "Python", "Git", "Bash", "OOP"],
    ai: ["Basic NLP", "LLM Workflows", "Make", "Zapier"],
    gamedev: ["C++", "Story Writing", "Project Design", "GitHub Collaboration"],
    soft: ["Communication", "Teamwork", "Problem Solving", "Presentations"]
  },

  // Featured Projects
  projects: [
    {
      id: 1,
      title: "Echoes of Fate",
      description: "Story-based interactive quiz game (C++). An immersive, side-scrolling game where players travel through time, battling corrupted emperors in quiz-style boss fights. Features item systems, dialogue interactions, and a gripping plot that adapts based on your answers.",
      technologies: ["C++", "Game Design", "Story Scripting"],
      github: "https://github.com/Fogtail/Comp315_Project.git",
      type: "game",
      status: "completed",
      featured: true
    },
    {
      id: 2,
      title: "Web Developer Certification Projects",
      description: "From responsive layouts to interactive JavaScript elements, these projects reflect my journey through Sololearn's Web Dev path.",
      technologies: ["HTML", "CSS", "JavaScript"],
      certificate: true,
      certificateUrl: "/certificates/sololearn-web-dev.pdf",
      type: "web",
      status: "completed",
      featured: true
    }
  ],

  // Achievements and Awards
  achievements: [
    {
      id: 1,
      title: "Dean's Commendation",
      description: "Received 5 times for academic excellence",
      type: "academic",
      year: "Multiple Years",
      count: 5
    },
    {
      id: 2,
      title: "Certificate of Merit: Math 235",
      description: "Outstanding performance in advanced mathematics",
      type: "academic",
      subject: "Mathematics"
    },
    {
      id: 3,
      title: "Tech Society UKZN Member",
      description: "Active member of university tech community",
      type: "extracurricular",
      organization: "UKZN Tech Society"
    },
    {
      id: 4,
      title: "Sololearn Web Developer Certificate",
      description: "Certified web development skills",
      type: "certification",
      provider: "Sololearn",
      certificateUrl: "/certificates/sololearn-web-dev.pdf"
    }
  ],

  // Contact Information
  contact: {
    email: "aalamchand052@gmail.com",
    github: "https://github.com/AveerAlamchand",
    linkedin: "https://linkedin.com/in/aveer-alamchand-3187912a0",
    availability: "Open to opportunities",
    preferredContact: "email"
  },

  // Social Media Links
  social: {
    github: "https://github.com/AveerAlamchand",
    linkedin: "https://linkedin.com/in/aveer-alamchand-3187912a0"
  },

  // Site Configuration
  config: {
    theme: "modern",
    colorScheme: {
      primary: "#1a1a2e",      // Deep navy
      secondary: "#00adb5",     // Vibrant cyan
      background: "#f5f5f5",    // Soft white
      muted: "#eeeeee"         // Muted grey
    },
    typography: {
      headingFont: "Inter",
      bodyFont: "Inter"
    },
    features: {
      smoothScroll: true,
      darkMode: false,
      animations: true
    }
  }
};

// Mock API functions - These simulate backend calls and will be replaced later
export const mockAPI = {
  // Get all portfolio data
  getPortfolioData: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPortfolioData);
      }, 500); // Simulate network delay
    });
  },

  // Get specific sections
  getPersonalInfo: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPortfolioData.personal);
      }, 300);
    });
  },

  getProjects: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPortfolioData.projects);
      }, 400);
    });
  },

  getAchievements: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockPortfolioData.achievements);
      }, 300);
    });
  },

  // Contact form simulation
  sendMessage: (messageData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Mock: Message sent successfully:', messageData);
        resolve({ success: true, message: 'Message sent successfully!' });
      }, 1000);
    });
  },

  // Track page views (analytics mock)
  trackPageView: (page) => {
    console.log(`Mock Analytics: Page view tracked for ${page}`);
  },

  // Download CV simulation
  downloadCV: () => {
    console.log('Mock: CV download initiated');
    return mockPortfolioData.personal.cvUrl;
  }
};

export default mockPortfolioData;