import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      title: "Bridal Makeup",
      image: "/service-bridal.png",
      description: "Timeless elegance for your special day."
    },
    {
      title: "Engagement Makeup",
      image: "/service-engagement.png",
      description: "Soft, romantic glam for your ring ceremony."
    },
    {
      title: "Haldi Makeup",
      image: "/service-haldi.png",
      description: "Fresh, vibrant, and dewy looks."
    },
    {
      title: "Party Makeup",
      image: "/service-party.png",
      description: "Bold and flawless evening glam."
    }
  ];

  return (
    <section id="services" className="py-24 bg-card relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crafting bespoke looks for every chapter of your bridal journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative h-[400px] overflow-hidden rounded-xl cursor-pointer"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl text-white mb-2">{service.title}</h3>
                <div className="h-0.5 w-12 bg-primary mb-3 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  {service.description}
                </p>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 shadow-[inset_0_0_40px_rgba(201,168,76,0.3)] pointer-events-none transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
