import { useState } from "react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    category: 'cups',
    src: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Custom engraved anime mug'
  },
  {
    id: 2,
    category: 'cups',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Fandom quote engraved mug'
  },
  {
    id: 3,
    category: 'wood',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Fantasy wood burned art'
  },
  {
    id: 4,
    category: 'wood',
    src: 'https://pixabay.com/get/gde32e3ace696a73623a613b84351d831a3e3b1ca051e6bb7c1ea372ee374e2639024170b8a20f4e454541ef34daf435844281b3eb84ebf483216aa0eb08d345d_1280.jpg',
    alt: 'Decorative wood burned cutting board'
  },
  {
    id: 5,
    category: 'epoxy',
    src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Ocean-themed epoxy resin art'
  },
  {
    id: 6,
    category: 'epoxy',
    src: 'https://pixabay.com/get/g47d0ba08ed12cd831f070537a7326e1080525e50964f9a9d198ea9c75b345c7d83d47472a9d164f9d382bbe90b562c69_1280.jpg',
    alt: 'Galaxy epoxy art with metallics'
  },
  {
    id: 7,
    category: 'paintings',
    src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Pop art anime character painting'
  },
  {
    id: 8,
    category: 'paintings',
    src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Fantasy landscape painting'
  },
  {
    id: 9,
    category: 'tables',
    src: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Custom fandom dining table'
  },
  {
    id: 10,
    category: 'tables',
    src: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Epoxy river coffee table with LED'
  },
  {
    id: 11,
    category: 'wallart',
    src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Multi-fandom canvas wall art'
  },
  {
    id: 12,
    category: 'wallart',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600',
    alt: 'Geometric metal wall sculpture'
  }
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'cups', label: 'Engraved Cups' },
  { id: 'wood', label: 'Wood Burning' },
  { id: 'epoxy', label: 'Epoxy Art' },
  { id: 'paintings', label: 'Paintings' },
  { id: 'tables', label: 'Tables' },
  { id: 'wallart', label: 'Wall Art' }
];

interface GalleryProps {
  onImageClick: (image: { src: string; alt: string }) => void;
}

export default function Gallery({ onImageClick }: GalleryProps = { onImageClick: () => {} }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Art Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of custom artwork across different mediums and styles
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? "default" : "secondary"}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
              data-testid={`gallery-filter-${category.id}`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div 
              key={image.id}
              className="gallery-item bg-card rounded-lg shadow-md cursor-pointer"
              onClick={() => onImageClick({ src: image.src, alt: image.alt })}
              data-testid={`gallery-item-${image.id}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
