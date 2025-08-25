import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const templateParams = {
        to_email: 'yashhindolia@gmail.com',
        to_name: 'Yash',
        user_name: formData.name,
        user_email: formData.email,
        reply_to: formData.email,
        project_type: formData.project,
        project_details: formData.message,
      };

      await emailjs.send(
        'service_jvn1w3k',
        'template_ml66zlg', 
        templateParams,
        'BjkSZBRIxYwF30IQv'
      );

      toast("Message sent successfully! I'll get back to you soon.", {
        description: "Thank you for reaching out. I'm excited to discuss your project!"
      });
      setFormData({ name: "", email: "", project: "", message: "" });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast("Failed to send message. Please try again or contact me directly.", {
        description: "There was an error sending your message."
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: "Email",
      value: "yashhindolia@gmail.com",
      icon: "✉️",
      color: "neon-purple"
    },
    {
      title: "Phone",
      value: "7697634387",
      icon: "📱",
      color: "neon-cyan"
    },
    {
      title: "Location",
      value: "Indore, MP",
      icon: "📍",
      color: "neon-green"
    },
    {
      title: "Social",
      value: "@imyaash7",
      icon: "🎬",
      color: "neon-yellow"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-foreground">CONTACT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card ref={formRef} className={`bg-gradient-card border-border transition-all duration-1000 hover:scale-105 hover:shadow-elevation ${formVisible ? 'opacity-100 -translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple">Start Your Project</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Project Type
                  </label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                    required
                  >
                    <option value="">Select project type</option>
                    <option value="commercial">Brand Commercial</option>
                    <option value="documentary">Documentary</option>
                    <option value="music-video">Music Video</option>
                    <option value="social">Social Media Content</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground resize-none"
                    placeholder="Tell me about your project vision, timeline, and goals..."
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-accent text-background font-bold py-3 text-lg transition-all duration-300 hover:scale-105 shadow-neon"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div ref={contactRef} className={`transition-all duration-1000 delay-200 ${contactVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl font-bold mb-8 text-neon-cyan">Get In Touch</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index} 
                  className={`bg-gradient-card border-border hover:scale-105 hover:shadow-neon transition-all duration-500 cursor-pointer ${
                    contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 300}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl transform hover:scale-125 transition-transform duration-300">{info.icon}</div>
                      <div>
                        <h4 className={`font-bold text-${info.color} hover:text-neon-purple transition-colors duration-300`}>{info.title}</h4>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-card border border-border rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4 text-neon-purple">Quick Response</h4>
              <p className="text-muted-foreground mb-4">
                I typically respond to project inquiries within 24 hours. For urgent requests, 
                feel free to reach out via phone or social media.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/imyaash7?igsh=dHprdXE5YjNkdzh3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:text-neon-purple transition-colors duration-300"
                >
                  Instagram
                </a>
                <a 
                  href="https://linkedin.com/in/yash-hindolia-35a629293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:text-neon-purple transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a 
                  href="https://www.youtube.com/@yashhindoliya4043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-cyan hover:text-neon-purple transition-colors duration-300"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;