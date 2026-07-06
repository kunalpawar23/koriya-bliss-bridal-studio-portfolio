import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiStar } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "BASIC",
    price: "₹6,999",
    features: ["Makeup + Hairstyle (1 time)"],
  },
  {
    name: "STANDARD",
    price: "₹14,999",
    features: ["Makeup + Hairstyle (2 times)", "Jewellery (1 time)"],
  },
  {
    name: "PREMIUM",
    price: "₹19,999",
    features: ["HD + Water Resistant Makeup", "Makeup + Hairstyle (2 times)", "Jewellery (1 time)"],
  },
  {
    name: "DELUXE",
    price: "₹24,999",
    features: ["Makeup + Hairstyle (3 times)", "Jewellery (2 times)", "Skin Treatment", "Wax + Facial + Eyebrow"],
  },
  {
    name: "LUXURY",
    price: "₹29,999",
    features: ["Makeup + Hairstyle (3 times)", "Jewellery (3 times)", "Full Beauty Care Package (Facial, Wax, D-Tan, Mani-Pedi)"],
    popular: true,
  },
  {
    name: "ROYAL",
    price: "₹39,999",
    features: ["Makeup + Hairstyle (4 times)", "Jewellery (4 times)", "Full body care + nails + facials + spa services", "1 special free service included"],
    popular: true,
  },
  {
    name: "ELITE",
    price: "₹49,999",
    features: ["Premium full bridal transformation package", "Full body beauty care + spa + nails + multiple sessions", "Ultra luxury bridal experience"],
    crown: true,
  },
];

export function Packages() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const bookWhatsApp = (pkgName: string) => {
    window.open(`https://wa.me/917572935375?text=Hi Khushi, I'm interested in the ${pkgName} bridal package.`, "_blank");
  };

  return (
    <section id="packages" className="py-24 bg-background relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Bridal Packages</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Curated experiences to make your special day seamless and stunning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {packages.map((pkg, i) => {
            const isExpanded = expandedIndex === i;
            
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-card/60 backdrop-blur-md border ${pkg.crown ? 'border-primary/60 shadow-[0_0_30px_rgba(201,168,76,0.15)]' : pkg.popular ? 'border-border shadow-lg' : 'border-border/50 shadow-sm'} rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
              >
                {/* Highlights */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                {pkg.crown && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary/80 via-primary to-primary/80 text-primary-foreground text-xs font-bold px-6 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg shadow-primary/20">
                    <FiStar className="w-3 h-3 fill-current" /> Elite Crown <FiStar className="w-3 h-3 fill-current" />
                  </div>
                )}

                <div className="text-center mb-8 pt-4">
                  <h3 className={`font-serif text-xl sm:text-2xl mb-2 ${pkg.crown ? 'text-primary' : 'text-foreground'}`}>
                    {pkg.name}
                  </h3>
                  <div className="text-3xl sm:text-4xl font-light text-foreground">{pkg.price}</div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {/* Show only first 2 items unless expanded or on larger screens */}
                    {pkg.features.map((feature, j) => (
                      <li 
                        key={j} 
                        className={`flex items-start gap-3 ${!isExpanded && j > 1 ? 'hidden lg:flex' : 'flex'}`}
                      >
                        <div className="mt-1 shrink-0 bg-primary/10 p-1 rounded-full">
                          <FiCheck className="text-primary w-3 h-3" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {pkg.features.length > 2 && (
                    <div className="lg:hidden text-center text-xs text-primary mb-6 italic hover:underline cursor-pointer">
                      {isExpanded ? "Show less" : `+${pkg.features.length - 2} more features`}
                    </div>
                  )}
                </div>

                <div className="mt-auto">
                  <Button 
                    className={`w-full py-6 rounded-xl uppercase tracking-widest text-xs transition-all ${pkg.crown || pkg.popular ? 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg' : 'bg-secondary/50 hover:bg-secondary text-secondary-foreground'}`}
                    onClick={(e) => { e.stopPropagation(); bookWhatsApp(pkg.name); }}
                  >
                    Book on WhatsApp
                  </Button>
                </div>
                
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
