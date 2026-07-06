import { motion } from "framer-motion";
import khushiPhoto from "@assets/Khushi Photo 01.png";

export function About() {
  const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "100+", label: "Happy Brides" },
    { value: "200+", label: "Looks Created" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[3/4] w-full max-w-md mx-auto relative z-10">
              <div className="absolute inset-0 bg-primary/10 -translate-x-4 translate-y-4 rounded-t-full rounded-b-sm border border-primary/20" />
              <img 
                src={khushiPhoto} 
                alt="Khushi Koriya - Makeup Artist" 
                className="w-full h-full object-cover rounded-t-full rounded-b-sm shadow-xl relative z-10"
              />
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              The Artist Behind <br/><span className="text-primary italic">The Glow</span>
            </h2>
            <div className="h-1 w-20 bg-primary/50 mb-8 rounded-full" />
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Hi, I'm Khushi Koriya, founder of Koriya Bliss Bridal Studio. With over 4 years of experience in the beauty and bridal industry, I specialize in creating graceful bridal looks that celebrate individuality and elegance.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              My approach combines modern techniques, premium products, and a deep understanding of each bride's personal style to create looks that feel authentic, beautiful, and timeless. Together with my team, I strive to provide a warm, professional, and luxurious experience that leaves every client feeling confident, empowered, and camera-ready.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + (i * 0.2) }}
                  className="text-center"
                >
                  <div className="font-serif text-3xl md:text-4xl text-foreground mb-2">{stat.value}</div>
                  <div className="text-xs tracking-wider text-muted-foreground uppercase">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
