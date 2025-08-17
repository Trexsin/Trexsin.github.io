import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Heart, Users } from "lucide-react";
const About = () => {
  return <section className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate Computer Science undergraduate at AIUB, currently in my 4th semester. 
            I have a deep love for coding, data analytics, and app development, always seeking to learn and grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="portfolio-card text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">Student</h3>
              <p className="text-muted-foreground text-sm">CSE student at AIUB constantly learning new technologies.</p>
            </CardContent>
          </Card>
          
          <Card className="portfolio-card text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display font-semibold text-lg">Developer</h3>
              <p className="text-muted-foreground text-sm">
                Proficient in multiple programming languages with a focus on problem-solving and clean code.
              </p>
            </CardContent>
          </Card>
          
          <Card className="portfolio-card text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="font-display font-semibold text-lg">Volunteer</h3>
              <p className="text-muted-foreground text-sm">
                Active member of Bangladesh Red Crescent Society since 2014, helping communities.
              </p>
            </CardContent>
          </Card>
          
          <Card className="portfolio-card text-center p-6">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg">Leader</h3>
              <p className="text-muted-foreground text-sm">
                Strong leadership and public speaking skills with experience in team collaboration.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto fade-in">
          <Card className="portfolio-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-semibold mb-6 text-center">My Journey</h3>
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-muted-foreground leading-relaxed">
                  My passion for technology began early, leading me to pursue Computer Science at 
                  American International University-Bangladesh (AIUB). I've been actively involved 
                  in humanitarian work through the Bangladesh Red Crescent Society since 2014, 
                  which has shaped my perspective on using technology for social good.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  I believe in continuous learning and improvement. Whether it's mastering a new 
                  programming language, contributing to open-source projects, or helping fellow 
                  students, I'm always looking for ways to grow and give back to the community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;