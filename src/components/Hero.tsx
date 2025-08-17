import { Button } from "@/components/ui/button";
import { Download, Github, Mail, Facebook } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
        {/* Subtle geometric patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="fade-in-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 font-display tracking-tight">
            TASIN SAYED
          </h1>
          <div className="text-xl md:text-2xl mb-8 font-medium text-muted-foreground">
            <span className="hero-text-gradient">Coder</span> • <span className="hero-text-gradient">CSE Student</span> • <span className="hero-text-gradient">Problem Solver</span>
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-muted-foreground">
            Passionate Computer Science student at AIUB with expertise in multiple programming languages. 
            I love solving complex problems and building innovative solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="font-semibold px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="font-semibold px-8 py-3 text-lg"
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
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://github.com/Trexsin', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://facebook.com/tasin.sayed.bd', '_blank')}
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;