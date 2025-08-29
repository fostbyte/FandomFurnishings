import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxImage {
  src: string;
  alt: string;
}

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<LightboxImage | null>(null);

  useEffect(() => {
    const handleImageClick = (event: CustomEvent<LightboxImage>) => {
      setCurrentImage(event.detail);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    // Listen for custom lightbox events
    window.addEventListener('openLightbox' as any, handleImageClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('openLightbox' as any, handleImageClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImage(null);
    document.body.style.overflow = 'auto';
  };

  if (!isOpen || !currentImage) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4"
      onClick={closeLightbox}
      data-testid="lightbox-overlay"
    >
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 text-white hover:text-primary z-10"
        onClick={closeLightbox}
        data-testid="lightbox-close"
      >
        <X className="w-8 h-8" />
      </Button>
      
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        className="max-w-[90%] max-h-[90%] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
        data-testid="lightbox-image"
      />
    </div>
  );
}
