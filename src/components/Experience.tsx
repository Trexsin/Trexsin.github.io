import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, TrendingUp, BarChart, Zap } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in the professional world and key contributions to business growth.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="portfolio-card">
            <CardHeader>
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <CardTitle className="text-2xl font-display flex items-center gap-3 mb-2">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    Business Analytics Assistant
                  </CardTitle>
                  <div className="flex items-center gap-4 text-muted-foreground mb-2">
                    <span className="font-semibold text-primary">United Group HQ</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Bangladesh</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>2021 - 2022</span>
                  </div>
                </div>
                <Badge variant="secondary" className="skill-badge">
                  Analytics
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                As a Business Analytics Assistant at United Group HQ, I played a crucial role in 
                transforming raw data into actionable business insights, helping drive strategic 
                decision-making across the organization.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BarChart className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Dashboard Creation</h4>
                  <p className="text-sm text-muted-foreground">
                    Designed and implemented comprehensive business dashboards for real-time monitoring
                  </p>
                </div>
                
                <div className="text-center p-4 bg-accent/5 rounded-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="font-semibold mb-2">Process Automation</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated repetitive data processing tasks, improving efficiency by 40%
                  </p>
                </div>
                
                <div className="text-center p-4 bg-primary/5 rounded-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2">Business Insights</h4>
                  <p className="text-sm text-muted-foreground">
                    Generated actionable insights that contributed to strategic business decisions
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 text-lg">Key Achievements</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      <strong>Dashboard Development:</strong> Created interactive business intelligence dashboards 
                      that provided real-time visibility into key performance metrics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      <strong>Process Automation:</strong> Implemented automated data processing workflows 
                      that reduced manual work by 40% and improved accuracy
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      <strong>Strategic Insights:</strong> Analyzed complex datasets to identify trends and 
                      patterns that informed critical business decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">
                      <strong>Cross-functional Collaboration:</strong> Worked closely with different departments 
                      to understand their analytics needs and deliver tailored solutions
                    </span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Technologies & Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["Data Analytics", "Dashboard Design", "Business Intelligence", "Process Automation", "Data Visualization", "Excel", "SQL"].map((tech, i) => (
                    <Badge key={i} variant="outline" className="skill-badge">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;