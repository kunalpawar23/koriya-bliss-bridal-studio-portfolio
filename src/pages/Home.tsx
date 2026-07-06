import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Packages } from "@/components/Packages";
import { Gallery } from "@/components/Gallery";
import { Instagram } from "@/components/Instagram";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Services />
      <Packages />
      <Gallery />
      <Instagram />
      <Contact />
      <Footer />
    </div>
  );
}
