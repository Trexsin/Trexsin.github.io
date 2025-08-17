import { Button } from "@/components/ui/button";
import { Eye, Github, Mail, Facebook, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url(/lovable-uploads/dc6d1a39-7b76-433d-bd69-c67ee2d94951.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/20 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="fade-in-up">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display tracking-tight text-foreground">
              TASIN SAYED
            </h1>
            
            {/* Job Titles */}
            <div className="fade-in-up-delay mb-8">
              <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
                <span className="px-6 py-3 bg-primary/90 text-primary-foreground border border-primary rounded-full font-semibold backdrop-blur-md shadow-xl">
                  Software Developer
                </span>
                <span className="px-6 py-3 bg-accent/90 text-accent-foreground border border-accent rounded-full font-semibold backdrop-blur-md shadow-xl">
                  Data Analyst
                </span>
                <span className="px-6 py-3 bg-secondary/90 text-secondary-foreground border border-secondary rounded-full font-semibold backdrop-blur-md shadow-xl">
                  AI Engineer
                </span>
              </div>
            </div>
            
            <div className="fade-in-up-delay text-xl md:text-2xl mb-12 font-medium text-muted-foreground max-w-2xl mx-auto">
              <span className="text-foreground font-semibold">"Turning ideas into code, and code into impact."</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="font-semibold px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-semibold px-8 py-4 text-lg backdrop-blur-sm bg-background/20 border-background/40 transition-all duration-300 hover:scale-105 shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
            
            {/* Social Links Grid */}
            <div className="fade-in-up-delay-2 grid grid-cols-2 md:grid-cols-5 gap-4 max-w-2xl mx-auto">
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/40 border border-background/60 transition-all duration-300 hover:scale-105 hover:bg-background/60 shadow-lg flex flex-col items-center p-4 h-auto"
                onClick={() => window.open('mailto:tasin.gssc@gmail.com')}
              >
                <Mail className="w-5 h-5 mb-2" />
                <span className="text-xs">Email</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/40 border border-background/60 transition-all duration-300 hover:scale-105 hover:bg-background/60 shadow-lg flex flex-col items-center p-4 h-auto"
                onClick={() => window.open('https://efswlnvdpjcoahbmqjky.supabase.co/storage/v1/object/sign/Portfolio%20files/Tasin\'s%20CV.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZWU5OWNlYi1jOTU5LTRlNTAtODM0Ny0yNGE5ODY1YjM5NmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8gZmlsZXMvVGFzaW4ncyBDVi5wZGYiLCJpYXQiOjE3NTU0MzMxNTgsImV4cCI6MzMyNTk4OTcxNTh9.q4dNxpe0hR9-DM6A5uy2jMZQVULXvsuyKD4ICeNQ3po', '_blank')}
              >
                <Eye className="w-5 h-5 mb-2" />
                <span className="text-xs">CV</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/40 border border-background/60 transition-all duration-300 hover:scale-105 hover:bg-background/60 shadow-lg flex flex-col items-center p-4 h-auto"
                onClick={() => window.open('https://github.com/Trexsin', '_blank')}
              >
                <Github className="w-5 h-5 mb-2" />
                <span className="text-xs">GitHub</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/40 border border-background/60 transition-all duration-300 hover:scale-105 hover:bg-background/60 shadow-lg flex flex-col items-center p-4 h-auto"
                onClick={() => window.open('https://facebook.com/tasin.sayed.bd', '_blank')}
              >
                <Facebook className="w-5 h-5 mb-2" />
                <span className="text-xs">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/40 border border-background/60 transition-all duration-300 hover:scale-105 hover:bg-background/60 shadow-lg flex flex-col items-center p-4 h-auto md:col-span-1 col-span-2 md:mx-0 mx-auto"
                onClick={() => window.open('https://www.linkedin.com/in/tasin-sayed/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mb-2" />
                <span className="text-xs">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center backdrop-blur-sm bg-background/20">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;