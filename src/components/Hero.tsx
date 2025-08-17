import { Button } from "@/components/ui/button";
import { Download, Github, Mail, Facebook } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      {/* Content */}
      <div className="container mx-auto px-6 text-center">
        <div className="fade-in-up">
          <h1 className="text-8xl md:text-9xl font-bold mb-12 text-foreground tracking-tight">
            TASIN SAYED
          </h1>
          
          {/* Quick Actions */}
          <div className="flex justify-center gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground border border-border"
              onClick={() => window.open('#', '_blank')}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground border border-border"
              onClick={() => window.open('https://github.com/Trexsin', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground border border-border"
              onClick={() => window.open('https://facebook.com/tasin.sayed.bd', '_blank')}
            >
              <Facebook className="w-4 h-4 mr-2" />
              Facebook
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;