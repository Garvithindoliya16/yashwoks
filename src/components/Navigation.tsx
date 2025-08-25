import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", href: "#home" },
    { name: "WORK", href: "#work" },
    { name: "THUMBNAILS", href: "#thumbnails" },
    { name: "ABOUT", href: "#about" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-neon-purple animate-glow">
            CINEMATIC
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.href.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-neon-cyan transition-all duration-300 text-sm font-medium tracking-wider animate-slide-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-neon-cyan transition-all duration-300 text-sm font-medium tracking-wider animate-slide-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.name}
                </a>
              )
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;