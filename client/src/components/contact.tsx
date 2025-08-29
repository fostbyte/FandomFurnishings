import { useState } from "react";
import { Mail, Phone, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });

      if (response.ok) {
        toast({
          title: "Quote request sent!",
          description: "We'll get back to you within 24 hours with a custom quote.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at hello@fandomfurnishings.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your favorite fandom to life? Let's discuss your custom art project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-card shadow-lg">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Request Custom Quote</h3>
              
              <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2">Full Name *</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      className="w-full"
                      data-testid="contact-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2">Email *</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      className="w-full"
                      data-testid="contact-email"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2">Phone Number</Label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full"
                    data-testid="contact-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-foreground mb-2">Service Type *</Label>
                  <Select name="service" required>
                    <SelectTrigger className="w-full" data-testid="contact-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engraved-cups">Engraved Cups</SelectItem>
                      <SelectItem value="wood-burning">Wood Burning Art</SelectItem>
                      <SelectItem value="epoxy-art">Epoxy Resin Art</SelectItem>
                      <SelectItem value="paintings">Custom Paintings</SelectItem>
                      <SelectItem value="tables">Custom Tables</SelectItem>
                      <SelectItem value="wall-art">Wall Art</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="fandom" className="text-sm font-medium text-foreground mb-2">Fandom/Theme</Label>
                  <Input 
                    type="text" 
                    id="fandom" 
                    name="fandom" 
                    placeholder="e.g., Anime, Marvel, Harry Potter, Gaming" 
                    className="w-full"
                    data-testid="contact-fandom"
                  />
                </div>

                <div>
                  <Label htmlFor="budget" className="text-sm font-medium text-foreground mb-2">Estimated Budget</Label>
                  <Select name="budget">
                    <SelectTrigger className="w-full" data-testid="contact-budget">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25-75">$25 - $75</SelectItem>
                      <SelectItem value="75-150">$75 - $150</SelectItem>
                      <SelectItem value="150-350">$150 - $350</SelectItem>
                      <SelectItem value="350-500">$350 - $500</SelectItem>
                      <SelectItem value="500+">$500+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground mb-2">Project Details *</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    required 
                    placeholder="Describe your vision, preferred size, colors, specific characters, or any other details..." 
                    className="w-full"
                    data-testid="contact-message"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" name="newsletter" data-testid="contact-newsletter" />
                  <Label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
                    I'd like to receive updates about new artwork and special offers
                  </Label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground py-4 text-lg font-semibold hover:bg-primary/90 disabled:opacity-50" 
                  disabled={isSubmitting}
                  data-testid="contact-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl mt-1">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@fandomfurnishings.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl mt-1">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">(555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl mt-1">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Instagram</div>
                    <a 
                      href="https://www.instagram.com/fandomfurnishings/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                      data-testid="contact-instagram-link"
                    >
                      @fandomfurnishings
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-primary text-xl mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Turnaround Time</div>
                    <div className="text-muted-foreground">3-4 weeks for custom pieces</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <Card className="bg-card">
              <CardContent className="p-6">
                <h4 className="font-display text-xl font-semibold text-foreground mb-4">Frequently Asked Questions</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="font-medium text-foreground mb-1">Do you work with all fandoms?</div>
                    <div className="text-sm text-muted-foreground">Yes! We love working with all fandoms - anime, gaming, movies, TV shows, books, and more.</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-foreground mb-1">Can I see progress updates?</div>
                    <div className="text-sm text-muted-foreground">Absolutely! We share progress photos and updates throughout the creation process.</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-foreground mb-1">Do you ship nationwide?</div>
                    <div className="text-sm text-muted-foreground">Yes, we ship all across the US with secure packaging to protect your custom artwork.</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
