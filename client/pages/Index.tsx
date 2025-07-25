import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, ExternalLink, Code, Database, Palette, Download } from "lucide-react";
import { useState } from "react";

const skills = {
  backend: ["PHP", "Laravel", "CodeIgniter", "MySQL", "MongoDB", "REST APIs"],
  frontend: ["React", "JavaScript", "jQuery", "Bootstrap", "Tailwind CSS", "HTML5/CSS3"],
  cms: ["WordPress", "Shopify", "Plugin Development"],
  apis: ["Google Maps", "Stripe", "PayPal", "Twilio", "Firebase"],
  tools: ["Git", "Jira", "Laravel Nova", "Laravel Sanctum"]
};

const projects = [
  {
    title: "North Black Canada",
    description: "Professional business website built with modern web technologies",
    url: "https://northblackcanada.com/",
    image: "/api/placeholder/400/250",
    tech: ["WordPress", "PHP", "Custom Theme"]
  },
  {
    title: "Laser and Derma Care",
    description: "Medical practice website with appointment booking system",
    url: "https://laseranddermacare.com/",
    image: "/api/placeholder/400/250",
    tech: ["Laravel", "MySQL", "Bootstrap"]
  },
  {
    title: "SEO SMEK Dashboard",
    description: "SEO management and analytics dashboard for business optimization",
    url: "https://seo.smek.co.uk/public/login",
    image: "/api/placeholder/400/250",
    tech: ["Laravel", "Vue.js", "MySQL", "Chart.js"]
  },
  {
    title: "Bridging Gap (SMEK App)",
    description: "Resource allocation system for business management",
    url: "https://app.smek.co.uk/login",
    image: "/api/placeholder/400/250",
    tech: ["Laravel", "React", "MySQL", "REST API"]
  }
];

const workExperience = [
  {
    title: "Senior Backend Developer",
    company: "Smart Marketing Experts in Kashmir (SMEK)",
    period: "2022 - Present",
    description: "Led backend architecture using Laravel, mentored junior developers, and implemented scalable solutions with advanced Laravel features.",
    achievements: [
      "Designed and maintained relational database schemas using MySQL and Laravel Eloquent ORM",
      "Developed RESTful APIs and integrated third-party services (Stripe, Twilio, Firebase)",
      "Implemented caching, queues, and job scheduling for optimal performance"
    ]
  },
  {
    title: "Senior Web Developer (Remote)",
    company: "Teqnoor (UK)",
    period: "2021 - 2022",
    description: "Led development of responsive websites and client portals using Laravel and WordPress.",
    achievements: [
      "Migrated legacy PHP codebases into modular Laravel applications",
      "Built REST APIs for mobile app integration using Laravel Sanctum",
      "Delivered SEO-optimized landing pages for UK-based clients"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "Teqholic",
    period: "2020 - 2021",
    description: "Assisted in Laravel application development and maintenance with focus on CRUD operations.",
    achievements: [
      "Implemented basic CRUD functionalities and admin dashboards using Blade templates",
      "Supported frontend development using Bootstrap and jQuery",
      "Participated in QA testing and bug fixing"
    ]
  }
];

export default function Index() {
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus("sending");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setEmailStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setEmailStatus("error");
      }
    } catch (error) {
      setEmailStatus("error");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/10 via-portfolio-purple/10 to-portfolio-orange/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-orange bg-clip-text text-transparent">
                  Muhammad Abubakar
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                  PHP/Laravel Developer
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  5+ years of experience building scalable web applications with Laravel, WordPress, and modern frontend technologies. 
                  Passionate about creating efficient, maintainable code and mentoring developers.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-portfolio-blue hover:bg-portfolio-blue-dark">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button variant="outline" size="lg" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple hover:text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href="mailto:bkrmalik3@gmail.com"
                  className="flex items-center text-muted-foreground hover:text-portfolio-blue transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  bkrmalik3@gmail.com
                </a>
                <a
                  href="tel:+923325274881"
                  className="flex items-center text-muted-foreground hover:text-portfolio-green transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +92 332 5274881
                </a>
              </div>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/p33rg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-portfolio-blue hover:text-white transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-abubakar-37587a102/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-100 hover:bg-portfolio-blue hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue via-portfolio-purple to-portfolio-orange rounded-full blur-xl opacity-30 scale-110"></div>
                <img
                  src="https://cdn.builder.io/api/v1/assets/1003bf6113fb469e8f4dee2c31207df5/264435541_6443003785771025_5949968381697688399_n-2-d1344b?format=webp&width=800"
                  alt="Muhammad Abubakar"
                  className="relative w-80 h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Technical Skills</h3>
            <p className="text-lg text-muted-foreground">Technologies and tools I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-portfolio-blue">
              <CardHeader>
                <CardTitle className="flex items-center text-portfolio-blue">
                  <Database className="w-5 h-5 mr-2" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-portfolio-blue/10 text-portfolio-blue">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-portfolio-purple">
              <CardHeader>
                <CardTitle className="flex items-center text-portfolio-purple">
                  <Palette className="w-5 h-5 mr-2" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-portfolio-purple/10 text-portfolio-purple">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-portfolio-orange">
              <CardHeader>
                <CardTitle className="flex items-center text-portfolio-orange">
                  <Code className="w-5 h-5 mr-2" />
                  CMS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.cms.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-portfolio-orange/10 text-portfolio-orange">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-portfolio-green">
              <CardHeader>
                <CardTitle className="flex items-center text-portfolio-green">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  APIs & Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[...skills.apis, ...skills.tools].map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-portfolio-green/10 text-portfolio-green">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h3>
            <p className="text-lg text-muted-foreground">Some of my recent work and client projects</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-gray-400">
                      <Code />
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-portfolio-blue/20 text-portfolio-blue">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Work Experience</h3>
            <p className="text-lg text-muted-foreground">My professional journey and key achievements</p>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{job.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-portfolio-blue">
                        {job.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-portfolio-purple text-portfolio-purple w-fit">
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-portfolio-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Get In Touch</h3>
            <p className="text-lg text-muted-foreground">Let's discuss your next project</p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>
                I'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-portfolio-blue"
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-portfolio-blue hover:bg-portfolio-blue-dark"
                  disabled={emailStatus === "sending"}
                >
                  {emailStatus === "sending" ? "Sending..." : "Send Message"}
                </Button>
                {emailStatus === "sent" && (
                  <p className="text-green-600 text-center">Message sent successfully!</p>
                )}
                {emailStatus === "error" && (
                  <p className="text-red-600 text-center">Error sending message. Please try again.</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Muhammad Abubakar</h4>
            <p className="text-gray-400 mb-6">PHP/Laravel Developer</p>
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="mailto:bkrmalik3@gmail.com"
                className="text-gray-400 hover:text-portfolio-blue transition-colors"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+923325274881"
                className="text-gray-400 hover:text-portfolio-green transition-colors"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/p33rg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-blue transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-abubakar-37587a102/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-portfolio-blue transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">
              © 2024 Muhammad Abubakar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
