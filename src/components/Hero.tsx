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
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20 transition-all duration-700 ease-in-out">
          {/* Text Content */}
          <div className="fade-in-up text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-display tracking-tight text-foreground">
              TASIN SAYED
            </h1>
            
            {/* Job Titles */}
            <div className="fade-in-up-delay mb-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm md:text-base">
                <span className="px-4 py-2 bg-primary/80 text-primary-foreground border border-primary rounded-full font-medium backdrop-blur-md shadow-lg">
                  Software Developer
                </span>
                <span className="px-4 py-2 bg-accent/80 text-accent-foreground border border-accent rounded-full font-medium backdrop-blur-md shadow-lg">
                  Data Analyst
                </span>
                <span className="px-4 py-2 bg-primary/80 text-primary-foreground border border-primary rounded-full font-medium backdrop-blur-md shadow-lg">
                  AI Engineer
                </span>
              </div>
            </div>
            
            <div className="fade-in-up-delay text-xl md:text-2xl mb-8 font-medium text-muted-foreground">
              <span className="text-foreground font-semibold">"Turning ideas into code, and code into impact."</span>
            </div>
            
            {/* CTA Buttons */}
            <div className="fade-in-up-delay-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                variant="outline"
                size="lg" 
                className="font-semibold px-8 py-3 text-lg backdrop-blur-sm bg-background/10 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-semibold px-8 py-3 text-lg backdrop-blur-sm bg-background/10 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="fade-in-up-delay-2 flex justify-center lg:justify-start gap-4 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/40 border border-background/60 transition-all duration-300 hover:scale-105 hover:bg-background/60"
                onClick={() => window.open('https://efswlnvdpjcoahbmqjky.supabase.co/storage/v1/object/sign/Portfolio%20files/Tasin\'s%20CV.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZWU5OWNlYi1jOTU5LTRlNTAtODM0Ny0yNGE5ODY1YjM5NmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8gZmlsZXMvVGFzaW4ncyBDVi5wZGYiLCJpYXQiOjE3NTU0MzMxNTgsImV4cCI6MzMyNTk4OTcxNTh9.q4dNxpe0hR9-DM6A5uy2jMZQVULXvsuyKD4ICeNQ3po', '_blank')}
              >
                <Eye className="w-4 h-4 mr-2" />
                View CV
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/40 border border-background/60 transition-all duration-300 hover:scale-105 hover:bg-background/60"
                onClick={() => window.open('https://github.com/Trexsin', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/40 border border-background/60 transition-all duration-300 hover:scale-105 hover:bg-background/60"
                onClick={() => window.open('https://facebook.com/tasin.sayed.bd', '_blank')}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/40 border border-background/60 transition-all duration-300 hover:scale-105 hover:bg-background/60"
                onClick={() => window.open('https://www.linkedin.com/in/tasin-sayed/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Empty space for balance */}
          <div className="hidden lg:block"></div>
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