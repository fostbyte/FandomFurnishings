import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 hero-bg"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Bringing Your
          <span className="text-primary"> Fandoms</span>
          <br />to Life
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Custom handcrafted art and decor featuring engraved cups, wood burning, epoxy art, paintings, tables, and wall art
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('gallery')}
            className="bg-primary text-primary-foreground px-8 py-4 text-lg font-semibold hover:bg-primary/90"
            data-testid="hero-view-gallery"
          >
            View Gallery
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="bg-card/10 backdrop-blur-sm text-white border-white/30 px-8 py-4 text-lg font-semibold hover:bg-white/20"
            data-testid="hero-get-quote"
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
