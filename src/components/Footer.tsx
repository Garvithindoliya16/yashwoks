import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const [footerRef, footerVisible] = useScrollAnimation();
  
  return (
    <footer ref={footerRef} className={`bg-secondary/10 border-t border-border py-12 transition-all duration-1000 ${footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-neon-purple animate-glow mb-4">
              CINEMATIC
            </div>
            <p className="text-muted-foreground">
              Professional video editing services for brands, artists, and storytellers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-neon-cyan hover:translate-x-2 transition-all duration-300">
                Home
              </a>
              <a href="#work" className="block text-muted-foreground hover:text-neon-cyan hover:translate-x-2 transition-all duration-300">
                Portfolio
              </a>
              <a href="#thumbnails" className="block text-muted-foreground hover:text-neon-cyan hover:translate-x-2 transition-all duration-300">
                Thumbnails
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-neon-cyan hover:translate-x-2 transition-all duration-300">
                About
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-neon-cyan hover:translate-x-2 transition-all duration-300">
                Contact
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-foreground">Follow My Work</h4>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/yashhindolia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-background font-bold transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-neon"
              >
                IG
              </a>
              <a 
                href="https://youtube.com/@yashhindolia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-background font-bold transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-neon"
              >
                YT
              </a>
              <a 
                href="https://linkedin.com/in/yashhindolia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center text-background font-bold transition-all duration-300 hover:scale-125 hover:rotate-12 hover:shadow-neon"
              >
                LI
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Cinematic. All rights reserved. | Crafted with passion for storytelling.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;