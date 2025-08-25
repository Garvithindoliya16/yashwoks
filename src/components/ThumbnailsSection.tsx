import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Download, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ThumbnailsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const thumbnails = [
    {
      id: 1,
      title: "Dark Reality of Business Coaching",
      category: "Business",
      image: "/lovable-uploads/1d915617-4d5e-4aff-83de-2fefab7a2090.png",
      views: "1.2M",
      description: "Eye-catching business coaching thumbnail with dramatic contrast"
    },
    {
      id: 2,
      title: "Execution vs Ideas",
      category: "Motivation",
      image: "/lovable-uploads/8bb1a979-467f-4cdd-8cfe-d80c3fe57b02.png",
      views: "850K",
      description: "Clean motivational thumbnail emphasizing action over planning"
    },
    {
      id: 3,
      title: "Shiv Ji Explains Wealth",
      category: "Spiritual",
      image: "/lovable-uploads/9291ff67-f0f9-44bd-a777-38bd79ce4077.png",
      views: "2.1M",
      description: "Spiritual wealth wisdom with beautiful Hindu deity artwork"
    },
    {
      id: 4,
      title: "Story of 5 Year's King",
      category: "Storytelling",
      image: "/lovable-uploads/e664be38-ebd0-4453-8b47-663ef9db18cb.png",
      views: "1.8M",
      description: "Historical storytelling thumbnail with rich visual narrative"
    }
  ];

  return (
    <section id="thumbnails" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
            Thumbnail Designs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            High-converting YouTube thumbnails that grab attention and drive clicks. 
            Each design is carefully crafted to maximize viewer engagement.
          </p>
        </div>

        {/* Thumbnails Grid */}
        <div 
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {thumbnails.map((thumbnail, index) => (
            <Card 
              key={thumbnail.id}
              className="group overflow-hidden bg-card border-border hover:border-neon-purple/50 transition-all duration-500 hover:shadow-lg hover:shadow-neon-purple/20"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={thumbnail.image}
                  alt={thumbnail.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                        <Play className="w-4 h-4 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Views Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-white/20">
                    <Eye className="w-3 h-3 mr-1" />
                    {thumbnail.views}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-neon-cyan border-neon-cyan/50">
                    {thumbnail.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-neon-purple transition-colors">
                  {thumbnail.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {thumbnail.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="p-8 text-center bg-gradient-to-r from-secondary/20 to-secondary/10 border-neon-purple/30">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Need Custom Thumbnails?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get professional, high-converting thumbnails designed specifically for your content. 
              Stand out from the competition and increase your click-through rates.
            </p>
            <Button 
              className="bg-gradient-accent text-background hover:scale-105 transition-transform"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Custom Thumbnails
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThumbnailsSection;