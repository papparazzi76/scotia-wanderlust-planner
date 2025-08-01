import { motion } from "framer-motion";
import { MapPin, Mountain, Castle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/scotland-hero.jpg";

interface ScotlandHeroProps {
  onNavigate: (section: string) => void;
}

const ScotlandHero = ({ onNavigate }: ScotlandHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Scottish Highlands" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Floating Celtic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 text-primary/20"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Castle className="w-full h-full" />
        </motion.div>
        
        <motion.div
          className="absolute top-1/3 right-1/4 w-12 h-12 text-celtic-emerald/20"
          animate={{ 
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <Mountain className="w-full h-full" />
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav 
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex gap-4 bg-card/20 backdrop-blur-md rounded-full p-2 shadow-highland">
          {[
            { id: "itinerary7", label: "7 Días", icon: "7" },
            { id: "itinerary9", label: "9 Días", icon: "9" },
            { id: "itinerary11", label: "11 Días", icon: "11" },
          ].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <Button 
                variant="ghost" 
                onClick={() => onNavigate(item.id)}
                className="relative px-6 py-3 text-foreground hover:text-primary-foreground hover:bg-primary/80 transition-celtic group highland-glow"
              >
                <span className="font-cinzel font-semibold text-lg">{item.icon}</span>
                <span className="ml-2 font-inter">{item.label}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-celtic text-6xl md:text-8xl lg:text-9xl text-transparent bg-highland bg-clip-text mb-6 shadow-glow">
            Escocia Eterna
          </h1>
        </motion.div>

        <motion.p
          className="font-cinzel text-2xl md:text-3xl text-accent mb-12 drop-shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Tres viajes a través del corazón celta
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button 
            onClick={() => onNavigate("itinerary7")}
            className="bg-highland hover:bg-highland/80 text-primary-foreground px-8 py-4 text-lg font-cinzel shadow-highland transition-celtic group"
          >
            <MapPin className="mr-2 h-5 w-5 group-hover:scale-110 transition-celtic" />
            Comenzar Aventura
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => onNavigate("tips")}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-cinzel transition-celtic"
          >
            Consejos de Viaje
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-transparent via-accent to-transparent rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default ScotlandHero;