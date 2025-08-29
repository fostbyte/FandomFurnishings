import { Coffee, Flame, Palette, Brush, Table2, Image, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Coffee,
    title: "Custom Engraved Cups",
    description: "Personalized mugs and tumblers with your favorite characters, quotes, and designs. Perfect for daily use or gifts.",
    features: [
      "Ceramic and stainless steel options",
      "Dishwasher safe engravings",
      "Custom quotes and characters",
      "Various sizes available"
    ],
    price: "Starting at $25"
  },
  {
    icon: Flame,
    title: "Wood Burning Art",
    description: "Intricate pyrography artwork on wooden panels, cutting boards, and decorative pieces featuring your beloved fandoms.",
    features: [
      "Natural wood finishes",
      "Detailed character portraits",
      "Functional and decorative pieces",
      "Custom size options"
    ],
    price: "Starting at $45"
  },
  {
    icon: Palette,
    title: "Epoxy Resin Art",
    description: "Stunning resin artwork with vibrant colors, metallic accents, and embedded elements inspired by your favorite universes.",
    features: [
      "Ocean and galaxy themes",
      "Metallic and glitter accents",
      "UV-resistant finish",
      "Coaster sets and wall art"
    ],
    price: "Starting at $35"
  },
  {
    icon: Brush,
    title: "Custom Paintings",
    description: "Hand-painted artwork on canvas featuring characters, scenes, and symbols from your favorite fandoms in various artistic styles.",
    features: [
      "Acrylic and oil painting options",
      "Multiple art styles available",
      "Canvas and wood panel surfaces",
      "Commission-based pricing"
    ],
    price: "Starting at $75"
  },
  {
    icon: Table2,
    title: "Custom Tables",
    description: "Handcrafted furniture pieces with fandom-inspired designs, epoxy inlays, and LED lighting for a unique centerpiece.",
    features: [
      "Coffee and dining tables",
      "Epoxy river designs",
      "LED lighting integration",
      "Custom dimensions"
    ],
    price: "Starting at $350"
  },
  {
    icon: Image,
    title: "Wall Art",
    description: "Large-scale artwork including metal sculptures, canvas prints, and mixed-media pieces to transform your space.",
    features: [
      "Metal and wood constructions",
      "Canvas and print options",
      "Mixed-media compositions",
      "Installation services available"
    ],
    price: "Starting at $125"
  }
];

export default function Services() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From concept to creation, we bring your favorite fandoms to life through various artistic mediums
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-card hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-primary text-4xl mb-4">
                    <IconComponent className="w-10 h-10" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="text-muted-foreground text-sm space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                  <p className="font-semibold text-primary text-lg">{service.price}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90 inline-flex items-center"
            data-testid="services-get-quote"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
