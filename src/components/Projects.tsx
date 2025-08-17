import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code2, Database } from "lucide-react";
import diceProject from "@/assets/dice-project.jpg";
import inventoryProject from "@/assets/inventory-project.jpg";
const Projects = () => {
  const projects = [{
    title: "🎲 Dice Roller with Statistics",
    description: "An interactive dice rolling application built with C++ featuring object-oriented design, random number generation, and a beautiful emoji-based user interface with comprehensive statistics tracking.",
    image: diceProject,
    technologies: ["C++", "OOP", "Random Generation", "Statistics"],
    features: ["Object-Oriented Design", "Random Number Generator", "Emoji UI", "Statistics Tracking", "Multiple Dice Types"],
    icon: <Code2 className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    githubUrl: "https://github.com/Trexsin/Dice-Game.git"
  }, {
    title: "🧾 Store Inventory Management System",
    description: "A comprehensive inventory management system built with Java Swing featuring a modern GUI, real-time search capabilities, and MVC architecture for efficient store operations.",
    image: inventoryProject,
    technologies: ["Java", "Java Swing", "GUI", "MVC Pattern"],
    features: ["Modern GUI Interface", "Real-time Search", "MVC Structure", "Data Management", "User-friendly Design"],
    icon: <Database className="w-6 h-6" />,
    color: "from-amber-500 to-orange-500",
    githubUrl: "https://github.com/Trexsin/Store-Inventory-System.git"
  }];
  return <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => <Card key={index} className="portfolio-card group overflow-hidden">
              <div className="relative">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => <Badge key={i} variant="secondary" className="skill-badge">
                        {tech}
                      </Badge>)}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-sm text-muted-foreground uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>)}
                  </ul>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Projects;