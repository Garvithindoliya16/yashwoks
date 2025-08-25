import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="geometric-shape w-20 h-20 top-20 left-20 opacity-30"></div>
        <div className="geometric-shape w-16 h-16 top-40 right-32 opacity-40"></div>
        <div className="geometric-shape w-24 h-24 bottom-32 left-40 opacity-35"></div>
        <div className="geometric-shape w-12 h-12 top-60 right-20 opacity-45"></div>
        <div className="geometric-shape w-28 h-28 bottom-20 right-40 opacity-25"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-none">
            <span className="block text-foreground animate-slide-up">I CREATE</span>
            <span className="block text-neon-purple animate-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>
              STORIES
            </span>
            <span className="block text-neon-cyan animate-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
              THAT MOVE YOU
            </span>
          </h1>
        </div>

        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Hi, I'm <span className="text-neon-yellow font-semibold">Yash</span> Professional video editor crafting
            <br />
            cinematic experiences that captivate audiences and tell
            <br />
            compelling stories
          </p>
        </div>

        <div className={`mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://youtube.com/@yashhindolia"><button className="bg-gradient-accent text-background px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-neon">
              VIEW MY WORK
            </button></a>
            {/* <button className="border-2 border-neon-cyan text-neon-cyan px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:bg-neon-cyan hover:text-background hover:scale-105">
              DOWNLOAD REEL
            </button> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-6 h-10 border-2 border-neon-purple rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neon-purple rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;