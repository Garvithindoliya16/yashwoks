import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PortfolioSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const portfolioItems = [
    {
      category: "BRAND COMMERCIAL",
      title: "Nike Revolution Campaign",
      description: "High-energy commercial showcasing athletic performance",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      color: "neon-purple"
    },
    {
      category: "DOCUMENTARY",
      title: "Urban Stories",
      description: "Capturing authentic moments in city life",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop",
      color: "neon-cyan"
    },
    {
      category: "SOCIAL REEL",
      title: "Behind The Scenes",
      description: "Dynamic content for social platforms",
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=600&h=400&fit=crop",
      color: "neon-green"
    },
    {
      category: "MUSIC VIDEO",
      title: "Electric Nights",
      description: "Cinematic music video with neon aesthetics",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
      color: "neon-yellow"
    }
  ];

  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <div ref={titleRef} className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            <span className="text-foreground">PORTFOLIO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of cinematic stories, from commercial campaigns to social media content
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className={`bg-gradient-card border-border overflow-hidden transition-all duration-700 hover:scale-105 hover:rotate-1 cursor-pointer transform ${
                hoveredCard === index ? 'shadow-elevation shadow-neon' : ''
              } ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ 
                transitionDelay: gridVisible ? `${index * 200}ms` : '0ms',
                animationDelay: `${index * 200}ms`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-64 object-cover transition-all duration-700 ${
                      hoveredCard === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-500">
                    <a 
                      href="https://youtube.com/@yashhindolia" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gradient-accent text-background px-6 py-3 rounded-lg font-bold transform hover:scale-110 transition-transform duration-300 shadow-neon"
                    >
                      WATCH PROJECT
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className={`text-sm font-bold mb-2 text-${item.color} tracking-wider`}>
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href="https://youtube.com/@yashhindolia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-2 border-neon-purple text-neon-purple px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-neon-purple hover:text-background hover:scale-105"
          >
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;