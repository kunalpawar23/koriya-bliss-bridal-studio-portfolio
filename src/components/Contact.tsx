import { motion } from "framer-motion";
import { FiPhone, FiInstagram, FiMapPin } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    icon: FiPhone,
    label: "Phone / WhatsApp",
    value: "+91 7572935375",
    sub: null,
    href: "https://wa.me/917572935375",
  },
  {
    icon: FiInstagram,
    label: "Instagram",
    value: "@koriya.bliss.bridal.studio",
    sub: null,
    href: "https://instagram.com/koriya.bliss.bridal.studio",
  },
  {
    icon: FiMapPin,
    label: "Studio",
    value: "Available for destination weddings worldwide.",
    sub: "1st Floor Shop No.1, 2, 3, Shlok Complex, near Saraswati Complex, Vaishnavdevi Society, Manjalpur, Vadodara, Gujarat 390011",
    href: "https://maps.google.com/?q=Shlok+Complex+Manjalpur+Vadodara+Gujarat+390011",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Let's Connect</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-5">Get In Touch</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-primary/40" />
            <span className="text-primary">✦</span>
            <div className="h-px w-16 bg-primary/40" />
          </div>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Ready to secure your date? Reach out to discuss your bridal vision and book your consultation.
          </p>
        </motion.div>

        {/* Contact cards — top two side by side, Studio full-width below */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6">

          {/* Phone + Instagram */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contacts.slice(0, 2).map((c, i) => {
              const Icon = c.icon;
              const card = (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(201,168,76,0.12)] transition-all duration-300 h-full"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{c.label}</p>
                    <p className="text-foreground font-medium leading-snug group-hover:text-primary transition-colors duration-200 break-words">
                      {c.value}
                    </p>
                  </div>
                </motion.div>
              );
              return (
                <a key={i} href={c.href!} target="_blank" rel="noreferrer" className="block">
                  {card}
                </a>
              );
            })}
          </div>

          {/* Studio — full width */}
          {(() => {
            const c = contacts[2];
            const Icon = c.icon;
            return (
              <motion.a
                href={c.href!}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 rounded-2xl border border-border/50 bg-background/60 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(201,168,76,0.12)] transition-all duration-300 text-left block"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300 shrink-0 mx-auto sm:mx-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">{c.label}</p>
                  <p className="text-foreground font-medium leading-snug group-hover:text-primary transition-colors duration-200 mb-2">
                    {c.value}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {c.sub}
                  </p>
                </div>
              </motion.a>
            );
          })()}
        </div>

        {/* WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full px-10 py-6 uppercase tracking-widest text-xs transition-all inline-flex items-center gap-3 shadow-lg hover:shadow-[0_8px_24px_rgba(37,211,102,0.35)]"
            onClick={() => window.open("https://wa.me/917572935375", "_blank")}
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.604 6.012L.27 24l6.104-1.311A11.956 11.956 0 0012.031 24c6.648 0 12.031-5.383 12.031-12.031C24.062 5.383 18.679 0 12.031 0zm0 22.016a9.924 9.924 0 01-5.068-1.378l-.364-.216-3.766.81.825-3.67-.237-.376A9.92 9.92 0 012.115 12.03C2.115 6.554 6.554 2.115 12.03 2.115c5.477 0 9.916 4.439 9.916 9.915 0 5.476-4.44 9.915-9.915 9.915zm5.438-7.424c-.298-.15-1.765-.87-2.038-.97-.274-.1-.473-.15-.672.15-.2.299-.77.97-.944 1.17-.174.2-.348.224-.646.074-1.288-.638-2.316-1.328-3.212-2.502-.23-.3-.024-.462.124-.61.134-.134.298-.348.448-.522.15-.174.198-.299.298-.498.1-.2.05-.373-.024-.522-.074-.15-.672-1.62-.92-2.217-.243-.585-.49-.505-.672-.515-.174-.01-.373-.01-.572-.01-.198 0-.522.074-.795.373-.274.299-1.045 1.02-1.045 2.488 0 1.468 1.07 2.886 1.22 3.086.15.2 2.102 3.208 5.093 4.5.711.309 1.266.493 1.698.631.714.227 1.365.195 1.871.118.57-.087 1.765-.721 2.014-1.42.249-.697.249-1.294.174-1.42-.074-.124-.274-.198-.572-.348z"/>
            </svg>
            Chat on WhatsApp
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
