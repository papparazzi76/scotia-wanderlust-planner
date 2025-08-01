import { motion } from "framer-motion";
import { Heart, Mountain } from "lucide-react";
import celticPattern from "@/assets/celtic-pattern.jpg";

const ScotlandFooter = () => {
  return (
    <footer className="relative py-16 bg-card border-t border-border/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={celticPattern} 
          alt="" 
          className="w-full h-full object-repeat"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Celtic Divider */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-32 h-1 bg-highland rounded-full" />
            <Mountain className="mx-4 h-8 w-8 text-primary" />
            <div className="w-32 h-1 bg-highland rounded-full" />
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h3 className="font-celtic text-3xl text-transparent bg-highland bg-clip-text">
              Escocia Eterna
            </h3>
            
            <p className="font-cinzel text-lg text-muted-foreground max-w-2xl mx-auto">
              Diseño inspirado en los clanes y paisajes escoceses, creado con pasión 
              para compartir la magia de las Highlands.
            </p>

            <div className="flex items-center justify-center gap-2 text-foreground/70">
              <span className="font-inter">Hecho con</span>
              <Heart className="h-4 w-4 text-tartan-red fill-current" />
              <span className="font-inter">en el corazón de las Highlands</span>
            </div>

            <div className="text-sm text-muted-foreground font-inter">
              &copy; 2025 Escocia Eterna. Todos los derechos reservados.
            </div>
          </div>

          {/* Celtic Quote */}
          <motion.div
            className="mt-12 p-6 bg-muted/20 rounded-lg border border-border/30"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <blockquote className="font-cinzel italic text-accent text-lg">
              "En cada colina escocesa vive una historia, <br />
              en cada lago se refleja un sueño, <br />
              en cada castillo habita la eternidad."
            </blockquote>
            <cite className="block mt-3 text-sm text-muted-foreground">
              — Proverbio Celta
            </cite>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default ScotlandFooter;