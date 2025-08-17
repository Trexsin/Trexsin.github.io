import { Button } from "@/components/ui/button";
import { Download, Github, Mail, Facebook } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url(/lovable-uploads/7c910759-555d-4ea1-92ca-f51b09a444ac.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Text Content */}
          <div className="fade-in-up text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display tracking-tight text-foreground">
              TASIN SAYED
            </h1>
            <div className="text-xl md:text-2xl mb-8 font-medium text-muted-foreground">
              <span className="hero-text-gradient">Coder</span> • <span className="hero-text-gradient">CSE Student</span> • <span className="hero-text-gradient">Problem Solver</span>
            </div>
            <p className="text-lg md:text-xl mb-12 max-w-2xl lg:max-w-none text-muted-foreground backdrop-blur-sm bg-background/20 p-4 rounded-lg">
              Passionate Computer Science student at AIUB with expertise in multiple programming languages. 
              I love solving complex problems and building innovative solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <Button 
                size="lg" 
                className="font-semibold px-8 py-3 text-lg backdrop-blur-sm"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="font-semibold px-8 py-3 text-lg backdrop-blur-sm bg-background/10"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/10"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/10"
                onClick={() => window.open('https://github.com/Trexsin', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="backdrop-blur-sm bg-background/10"
                onClick={() => window.open('https://facebook.com/tasin.sayed.bd', '_blank')}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Facebook
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