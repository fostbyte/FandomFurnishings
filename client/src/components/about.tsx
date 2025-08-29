import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">About Fandom Furnishings</h2>
            <p className="text-xl text-muted-foreground mb-6">
              We're passionate artists who believe that your living space should reflect the stories, characters, and worlds that inspire you most.
            </p>
            <p className="text-muted-foreground mb-8">
              From intricate wood burned portraits to stunning epoxy resin pieces, each item is carefully handcrafted with attention to detail and a deep appreciation for fandom culture. Whether you're looking to showcase your love for anime, gaming, movies, or books, we create unique pieces that become conversation starters and cherished keepsakes.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-muted-foreground">Art Mediums</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Handmade</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                className="bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90"
                data-testid="about-instagram"
              >
                <a href="https://www.instagram.com/fandomfurnishings/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="mr-2 w-5 h-5" />
                  Follow on Instagram
                </a>
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-border text-foreground px-6 py-3 font-semibold hover:bg-muted"
                data-testid="about-contact"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
              alt="Artist workspace with creative tools and materials" 
              className="rounded-2xl shadow-2xl w-full"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="text-sm font-medium text-foreground">Currently crafting custom orders</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
