import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Trophy, Globe, Cpu } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "American International University-Bangladesh (AIUB)",
      degree: "Bachelor of Science in Computer Science and Engineering",
      period: "2022 - Present",
      status: "4th Semester",
      cgpa: "3.44",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      institution: "Shah Sultan College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2019 - 2021",
      status: "Completed",
      cgpa: "5.00",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      institution: "Bogura Zilla School",
      degree: "Secondary School Certificate (SSC)",
      period: "2017 - 2019",
      status: "Completed",
      cgpa: "5.00",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500"
    }
  ];

  const achievements = [
    {
      title: "Science Fair Winner",
      year: "2016",
      description: "Won the regional science fair with an innovative project",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      title: "Cisco IT Essentials",
      year: "2024",
      description: "Completed Cisco IT Essentials certification program",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: "IELTS 7.5",
      year: "Recent",
      description: "Achieved IELTS score of 7.5 demonstrating English proficiency",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const volunteering = [
    {
      organization: "Bangladesh Red Crescent Society",
      role: "Active Volunteer",
      period: "Since 2014",
      description: "Long-term commitment to humanitarian work and community service",
      activities: ["Disaster Relief", "Community Health", "Blood Donation", "Emergency Response"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education & Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey and notable accomplishments that have shaped my career path.
          </p>
        </div>
        
        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-center mb-12">Academic Background</h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {education.map((edu, index) => (
              <Card key={index} className="portfolio-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-display mb-2">{edu.institution}</CardTitle>
                      <p className="text-muted-foreground font-medium mb-2">{edu.degree}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <Badge variant="outline" className="skill-badge">
                          {edu.period}
                        </Badge>
                        <Badge variant="secondary" className="skill-badge">
                          {edu.status}
                        </Badge>
                        <Badge className="bg-primary/10 text-primary border-primary/20">
                          CGPA: {edu.cgpa}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-bold text-center mb-12">Notable Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="portfolio-card text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                    <div className="text-accent">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="font-display font-semibold text-lg">{achievement.title}</h4>
                  <Badge variant="outline" className="skill-badge">
                    {achievement.year}
                  </Badge>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Volunteering */}
        <div>
          <h3 className="text-3xl font-display font-bold text-center mb-12">Volunteering & Community Service</h3>
          <div className="max-w-4xl mx-auto">
            {volunteering.map((vol, index) => (
              <Card key={index} className="portfolio-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-display mb-2">{vol.organization}</CardTitle>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary" className="skill-badge">
                          {vol.role}
                        </Badge>
                        <Badge variant="outline" className="skill-badge">
                          {vol.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{vol.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Activities</h4>
                  <div className="flex flex-wrap gap-2">
                    {vol.activities.map((activity, i) => (
                      <Badge key={i} variant="outline" className="skill-badge">
                        {activity}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground italic">
                      "10+ years of dedicated service to humanitarian causes, demonstrating long-term 
                      commitment to making a positive impact in the community."
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;