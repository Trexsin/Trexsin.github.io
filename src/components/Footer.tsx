import { Button } from "@/components/ui/button";
import { Github, Facebook, Mail, Heart, ArrowUp, Linkedin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="relative bg-gradient-to-br from-background via-background/95 to-primary/5 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="relative container mx-auto px-6 py-16">
        {/* Main Content - Centered and Symmetrical */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent mb-4">
            Md. Tasin Sayed
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Computer Science Student passionate about creating innovative solutions 
            and contributing to meaningful projects.
          </p>
        </div>

        {/* Symmetric Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
          {/* Left Column - Quick Links */}
          <div className="text-center space-y-6">
            <h4 className="text-xl font-display font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#projects" className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105" onClick={e => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Projects
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105" onClick={e => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>
                Contact
              </a>
              <a href="https://efswlnvdpjcoahbmqjky.supabase.co/storage/v1/object/sign/Portfolio%20files/Tasin's%20CV.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZWU5OWNlYi1jOTU5LTRlNTAtODM0Ny0yNGE5ODY1YjM5NmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8gZmlsZXMvVGFzaW4ncyBDVi5wZGYiLCJpYXQiOjE3NTU0MzMxNTgsImV4cCI6MzMyNTk4OTcxNTh9.q4dNxpe0hR9-DM6A5uy2jMZQVULXvsuyKD4ICeNQ3po" target="_blank" className="block text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105">
                View CV
              </a>
            </nav>
          </div>
          
          {/* Right Column - Contact Info */}
          <div className="text-center space-y-6">
            <h4 className="text-xl font-display font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p className="transition-colors hover:text-primary">📧 tasin.gssc@gmail.com</p>
              <p className="transition-colors hover:text-primary">📱 +880 1718-080138</p>
              <p className="transition-colors hover:text-primary">🎓 AIUB, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Social Links - Centered */}
        <div className="flex justify-center gap-4 mb-12">
          <Button variant="outline" size="sm" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" onClick={() => window.open('https://github.com/Trexsin', '_blank')}>
            <Github className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" onClick={() => window.open('https://facebook.com/tasin.sayed.bd', '_blank')}>
            <Facebook className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" onClick={() => window.open('https://www.linkedin.com/in/tasin-sayed/', '_blank')}>
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm" className="hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group" onClick={() => window.open('mailto:tasin.gssc@gmail.com', '_blank')}>
            <Mail className="w-4 h-4" />
            <span className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">tasin.gssc@gmail.com</span>
          </Button>
        </div>
        
        {/* Bottom Bar - Centered and Symmetrical */}
        <div className="border-t border-border pt-8 flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>© {currentYear} Md. Tasin Sayed. Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
          
          <Button variant="ghost" size="sm" className="hover:scale-105 transition-all duration-300 hover:bg-primary/10" onClick={scrollToTop}>
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>;
};
export default Footer;