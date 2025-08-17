import { Button } from "@/components/ui/button";
import { Download, Github, Mail, Facebook } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Md. Tasin Sayed
          </h1>
          <div className="text-xl md:text-2xl mb-8 font-medium">
            <span className="hero-text-gradient">Coder</span> • <span className="hero-text-gradient">CSE Student</span> • <span className="hero-text-gradient">Problem Solver</span>
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Passionate Computer Science student at AIUB with expertise in multiple programming languages. 
            I love solving complex problems and building innovative solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </div>
          
          {/* Quick Actions */}
          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 border border-white/30"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 border border-white/30"
              onClick={() => window.open('https://github.com/Trexsin', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 border border-white/30"
              onClick={() => window.open('https://facebook.com/tasin.sayed.bd', '_blank')}
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;