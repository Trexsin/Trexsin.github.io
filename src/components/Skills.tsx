import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Smartphone, 
  Brain, 
  Users, 
  Mic, 
  BarChart3, 
  Target,
  Handshake,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["C", "C++", "Python", "Dart", "Java", "C#"]
    },
    {
      title: "Technologies & Frameworks",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["Machine Learning", "MongoDB", "Flutter", ".NET", "Java Swing"]
    },
    {
      title: "Development Tools",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      skills: ["VS Code", "IntelliJ IDEA", "PyCharm", "Git", "Android Studio"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      color: "from-amber-500 to-orange-500",
      skills: ["Leadership", "Public Speaking", "Analytics", "Problem Solving", "Cooperation"]
    }
  ];

  const specializations = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Flutter & Dart for cross-platform apps"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Python-based ML solutions"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analytics", 
      description: "Business intelligence & insights"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Problem Solving",
      description: "Algorithmic thinking & optimization"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional capabilities.
          </p>
        </div>
        
        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="portfolio-card">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {category.icon}
                </div>
                <CardTitle className="text-lg font-display">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="skill-badge text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Specializations */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-center mb-12">Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {specializations.map((spec, index) => (
              <Card key={index} className="portfolio-card text-center p-6 group">
                <CardContent className="space-y-4">
                  <div className="text-primary group-hover:text-accent transition-colors">
                    {spec.icon}
                  </div>
                  <h4 className="font-display font-semibold text-lg">{spec.title}</h4>
                  <p className="text-muted-foreground text-sm">{spec.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Key Strengths */}
        <Card className="portfolio-card max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-display">Key Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <Mic className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold">Public Speaking</h4>
                <p className="text-sm text-muted-foreground">Confident communication and presentation skills</p>
              </div>
              <div className="space-y-2">
                <Target className="w-8 h-8 text-accent mx-auto" />
                <h4 className="font-semibold">Problem Solving</h4>
                <p className="text-sm text-muted-foreground">Analytical approach to complex challenges</p>
              </div>
              <div className="space-y-2">
                <Handshake className="w-8 h-8 text-primary mx-auto" />
                <h4 className="font-semibold">Team Collaboration</h4>
                <p className="text-sm text-muted-foreground">Effective teamwork and cooperation</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;