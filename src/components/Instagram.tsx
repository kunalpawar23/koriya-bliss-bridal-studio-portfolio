import { motion } from "framer-motion";
import { FiInstagram } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const PROFILE_URL = "https://instagram.com/koriya.bliss.bridal.studio";

export function Instagram() {
  const posts = [
    { src: "/insta-1.jpg", url: "https://www.instagram.com/p/DZA1S4ojsvQ/?igsh=NGRkeG5uaHl5ZzFq" },
    { src: "/insta-2.jpg", url: "https://www.instagram.com/p/DYOorkMGsVO/?igsh=MTN2eWs2MHRyYjhqbQ==" },
    { src: "/insta-3.jpg", url: "https://www.instagram.com/p/DZeaW3Imhd6/?igsh=aHFiZTdtZ3I1MGt6" },
  ];

  return (
    <section className="py-24 bg-background border-t border-border/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <FiInstagram className="w-10 h-10 text-primary mb-6" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-foreground mb-4"
          >
            Follow Our Journey
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="text-primary hover:text-primary/80 transition-colors tracking-widest uppercase text-sm mb-8"
          >
            @koriya.bliss.bridal.studio
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group rounded-sm"
            >
              <img 
                src={post.src} 
                alt={`Instagram post ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <FiInstagram className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8 py-6 uppercase tracking-widest text-xs transition-all"
            onClick={() => window.open(PROFILE_URL, "_blank")}
          >
            Follow on Instagram
          </Button>
        </div>
      </div>
    </section>
  );
}
