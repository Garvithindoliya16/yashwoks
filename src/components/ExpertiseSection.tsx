import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExpertiseSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation();

  const expertiseItems = [
    {
      title: "Video Editing",
      description: "Professional video editing with advanced techniques for compelling storytelling and seamless transitions.",
      icon: "🎬"
    },
    {
      title: "Color Grading",
      description: "Expert color correction and grading to enhance mood, atmosphere, and visual aesthetics.",
      icon: "🎨"
    },
    {
      title: "Motion Graphics",
      description: "Dynamic motion graphics and visual effects to bring static elements to life with creativity.",
      icon: "✨"
    },
    {
      title: "Audio Design",
      description: "Professional audio mixing, sound design, and music integration for immersive experiences.",
      icon: "🎵"
    },
    {
      title: "Cinematic Storytelling",
      description: "Crafting compelling narratives through visual language and cinematic techniques.",
      icon: "📽️"
    },
    {
      title: "Post-Production",
      description: "Complete post-production workflow from raw footage to final delivery with precision.",
      icon: "⚡"
    }
  ];

  return (
    <section id="expertise" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              EXPERTISE
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized skills and technical proficiency across all aspects of video production
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-6xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full opacity-30"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {expertiseItems.map((item, index) => {
              const isEven = index % 2 === 0;
              const animationClass = timelineVisible 
                ? 'opacity-100 translate-x-0 translate-y-0' 
                : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'} translate-y-8`;
              
              return (
                <div
                  key={item.title}
                  className={`relative transition-all duration-1000 ${animationClass}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className="group bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:scale-105 transition-all duration-500 cursor-pointer">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-3xl group-hover:animate-bounce transition-all duration-300">
                              {item.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300 z-10">
                      <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
                    </div>

                    {/* Spacer */}
                    <div className="w-full md:w-5/12"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;