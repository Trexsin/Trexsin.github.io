import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Facebook, Send, MapPin, Eye, Linkedin } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "tasin.gssc@gmail.com",
    href: "mailto:tasin.gssc@gmail.com",
    color: "text-primary"
  }, {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+8801718080138",
    href: "tel:+8801718080138",
    color: "text-accent"
  }, {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    value: "github.com/Trexsin",
    href: "https://github.com/Trexsin",
    color: "text-primary"
  }, {
    icon: <Facebook className="w-5 h-5" />,
    label: "Facebook",
    value: "tasin.sayed.bd",
    href: "https://facebook.com/tasin.sayed.bd",
    color: "text-accent"
  }, {
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    value: "tasin-sayed",
    href: "https://www.linkedin.com/in/tasin-sayed/",
    color: "text-primary"
  }, {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: ["House- 37/c, Road- 3, Block -D", "Bashundhara Residential Area, Dhaka- 1229"],
    href: "#",
    color: "text-accent"
  }];
  return <section id="contact" className="py-20 section-alt">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's connect and discuss how we can work together!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="text-2xl font-display flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => <div key={index} className="flex items-center gap-4 group">
                    <div className={`w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center ${contact.color} group-hover:bg-primary/20 transition-colors`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-muted-foreground uppercase tracking-wide">
                        {contact.label}
                      </p>
                       <a href={contact.href} className="text-foreground hover:text-primary transition-colors font-medium" target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                         {Array.isArray(contact.value) ? <div>
                             
                             <div>{contact.value[1]}</div>
                           </div> : contact.value}
                       </a>
                    </div>
                  </div>)}
                
                <div className="pt-6 border-t">
                  <Button className="w-full" size="lg" onClick={() => window.open('https://efswlnvdpjcoahbmqjky.supabase.co/storage/v1/object/sign/Portfolio%20files/Tasin\'s%20CV.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lZWU5OWNlYi1jOTU5LTRlNTAtODM0Ny0yNGE5ODY1YjM5NmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3J0Zm9saW8gZmlsZXMvVGFzaW4ncyBDVi5wZGYiLCJpYXQiOjE3NTU0MzMxNTgsImV4cCI6MzMyNTk4OTcxNTh9.q4dNxpe0hR9-DM6A5uy2jMZQVULXvsuyKD4ICeNQ3po', '_blank')}>
                    <Eye className="w-4 h-4 mr-2" />
                    View CV
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Quick Stats */}
            <Card className="portfolio-card">
              <CardHeader>
                <CardTitle className="text-xl font-display">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">2</div>
                    <div className="text-sm text-muted-foreground">Ongoing Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">2</div>
                    <div className="text-sm text-muted-foreground">Completed Projects</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">Python</div>
                    <div className="text-sm text-muted-foreground">Preferred Language</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">4+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="portfolio-card">
            <CardHeader>
              <CardTitle className="text-2xl font-display flex items-center gap-3">
                <Send className="w-6 h-6 text-primary" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Project Collaboration Opportunity" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea placeholder="Hi Tasin, I'd like to discuss a potential collaboration opportunity..." className="min-h-32" />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
              
              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  💡 <strong>Pro Tip:</strong> Mention specific projects or technologies you'd like to collaborate on. 
                  I respond faster to detailed messages!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;