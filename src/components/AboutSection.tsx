import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();
  const [skillsRef, skillsVisible] = useScrollAnimation();
  const [experienceRef, experienceVisible] = useScrollAnimation();

  const skills = [
    { name: "Video Editing", level: 95, color: "neon-purple" },
    { name: "Color Grading", level: 90, color: "neon-cyan" },
    { name: "Motion Graphics", level: 85, color: "neon-green" },
    { name: "Sound Design", level: 88, color: "neon-yellow" }
  ];

  const experiences = [
    {
      title: "Senior Video Editor",
      company: "Creative Studios",
      period: "2022 - Present",
      description: "Lead editor for major brand campaigns and documentary projects"
    },
    {
      title: "Freelance Editor",
      company: "Various Clients",
      period: "2020 - 2022",
      description: "Specialized in social media content and music videos"
    },
    {
      title: "Assistant Editor",
      company: "Film Production House",
      period: "2019 - 2020",
      description: "Assisted in post-production for feature films"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-foreground">ABOUT</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate storyteller with 5+ years of experience in cinematic video production
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div className="space-y-6">
            <div ref={contentRef} className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h3 className="text-3xl font-bold mb-4 text-neon-purple hover:text-neon-cyan transition-colors duration-300">
                Crafting Visual Stories
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 5 years of experience in video editing and post-production, I specialize in creating 
                compelling visual narratives that resonate with audiences. My expertise spans across commercial 
                campaigns, documentaries, music videos, and social media content.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of storytelling through visual media and strive to bring each project 
                to life with cinematic excellence and creative innovation.
              </p>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className={`transition-all duration-1000 delay-200 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h4 className="text-xl font-bold mb-4 text-neon-cyan hover:text-neon-yellow transition-colors duration-300">Skills & Expertise</h4>
                <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="hover:transform hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-neon-purple font-bold">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skillsVisible ? skill.level : 0} 
                      className="h-3 bg-secondary/50"
                      style={{ 
                        transitionDelay: `${index * 200 + 400}ms`,
                        transition: 'all 1000ms ease-in-out'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div ref={experienceRef} className={`transition-all duration-1000 ${experienceVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-3xl font-bold mb-8 text-neon-cyan hover:text-neon-green transition-colors duration-300">Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className={`bg-gradient-card border-border hover:scale-105 hover:shadow-elevation transition-all duration-500 cursor-pointer ${
                    experienceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150 + 200}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-xl font-bold text-foreground hover:text-neon-purple transition-colors duration-300">{exp.title}</h4>
                      <span className="text-neon-purple font-medium">{exp.period}</span>
                    </div>
                    <p className="text-neon-cyan font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;