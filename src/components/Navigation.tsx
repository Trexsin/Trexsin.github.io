import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoClicked, setLogoClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    setLogoClicked(true);
    setTimeout(() => setLogoClicked(false), 600);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigationItems = [
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-white/10 shadow-lg transition-transform duration-500",
      !isScrolled && "-translate-y-full"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div 
            className={cn(
              "flex items-center cursor-pointer group transition-all duration-500 hover:scale-105",
              logoClicked && "animate-pulse scale-110"
            )}
            onClick={scrollToTop}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/083f16bf-ceba-45ea-a1f3-b0d6f02a7b8c.png" 
                alt="Tasin Sayed Logo" 
                className={cn(
                  "h-10 w-10 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-500 shadow-lg",
                  logoClicked && "ring-4 ring-primary/80 scale-125 shadow-2xl shadow-primary/50"
                )}
              />
              <div className={cn(
                "absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                logoClicked && "opacity-100 from-primary/40 to-accent/40"
              )}></div>
            </div>
            <span className={cn(
              "ml-4 text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-accent transition-all duration-500",
              logoClicked && "from-primary to-accent scale-105"
            )}>
              Tasin Sayed
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      className={cn(
                        "group inline-flex h-11 w-max items-center justify-center rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105",
                        "bg-background/20 backdrop-blur-sm border border-white/10 text-foreground",
                        "hover:bg-primary/80 hover:text-primary-foreground hover:border-primary/50 hover:shadow-lg hover:shadow-primary/25",
                        "focus:bg-primary/80 focus:text-primary-foreground focus:outline-none",
                        "cursor-pointer"
                      )}
                      onClick={() => scrollToSection(item.id)}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="h-11 w-11 rounded-full bg-background/20 backdrop-blur-sm border border-white/10 text-foreground hover:bg-primary/80 hover:text-primary-foreground hover:border-primary/50 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-18 left-0 right-0 bg-background/90 backdrop-blur-xl border-b border-white/10 shadow-2xl">
            <div className="px-6 py-6 space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-foreground rounded-xl bg-background/30 backdrop-blur-sm border border-white/10 hover:bg-primary/80 hover:text-primary-foreground hover:border-primary/50 transition-all duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;