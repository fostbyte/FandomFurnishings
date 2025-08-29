import { Palette, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Palette className="text-primary text-2xl" />
              <div>
                <div className="font-display text-xl font-semibold">Fandom Furnishings</div>
                <div className="text-sm text-gray-300">Custom Art & Decor</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Bringing your favorite fandoms to life through handcrafted art and custom decor.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/fandomfurnishings/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary transition-colors"
                data-testid="footer-instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-primary transition-colors"
                data-testid="footer-facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors text-left">Engraved Cups</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors text-left">Wood Burning</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors text-left">Epoxy Art</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors text-left">Custom Paintings</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors text-left">Tables</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors text-left">Wall Art</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors text-left">Gallery</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors text-left">Services</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors text-left">About</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors text-left">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <div>hello@fandomfurnishings.com</div>
              <div>(555) 123-4567</div>
              <div>3-4 week turnaround</div>
              <div>Shipping nationwide</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Fandom Furnishings. All rights reserved. | Made with ❤️ for fandom lovers</p>
        </div>
      </div>
    </footer>
  );
}
