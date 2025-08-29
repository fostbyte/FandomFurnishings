import Header from "@/components/header";
import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import Services from "@/components/services";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Lightbox from "@/components/lightbox";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Gallery />
      <Services />
      <About />
      <Contact />
      <Footer />
      <Lightbox />
    </div>
  );
}
