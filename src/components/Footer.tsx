import { Button } from "@/components/ui/button";
import { Github, Facebook, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">Md. Tasin Sayed</h3>
            <p className="text-primary-foreground/80">
              Computer Science Student passionate about creating innovative solutions 
              and contributing to meaningful projects.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-white/10"
                onClick={() => window.open('https://github.com/Trexsin', '_blank')}
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-white/10"
                onClick={() => window.open('https://facebook.com/tasin.sayed.bd', '_blank')}
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary-foreground hover:bg-white/10"
                onClick={() => window.open('mailto:tasin.sayed@example.com', '_blank')}
              >
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              <a 
                href="#projects" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact
              </a>
              <a 
                href="#" 
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  // CV download functionality
                }}
              >
                Download CV
              </a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📧 tasin.sayed@example.com</p>
              <p>📱 +880 123 456 7890</p>
              <p>🎓 AIUB, Dhaka, Bangladesh</p>
              <p>🔴 Red Crescent Volunteer</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <span>© {currentYear} Md. Tasin Sayed. Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>using React & TypeScript</span>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground hover:bg-white/10"
            onClick={scrollToTop}
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;