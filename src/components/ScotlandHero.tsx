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
          alt="Guía de viaje por los Highlands de Escocia - Paisajes espectaculares de montañas, lagos y castillos celtas para tu viaje perfecto a Escocia" 
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
        className="absolute top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-10 px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex gap-2 sm:gap-4 bg-card/20 backdrop-blur-md rounded-full p-1 sm:p-2 shadow-highland">
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
                className="relative px-3 py-2 sm:px-6 sm:py-3 text-foreground hover:text-primary-foreground hover:bg-primary/80 transition-celtic group highland-glow"
              >
                <span className="font-cinzel font-semibold text-sm sm:text-lg">{item.icon}</span>
                <span className="ml-1 sm:ml-2 font-inter text-xs sm:text-base">{item.label}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="font-celtic text-4xl sm:text-5xl md:text-8xl lg:text-9xl text-transparent bg-highland bg-clip-text mb-4 sm:mb-6 shadow-glow leading-tight">
            Escocia Eterna
          </h1>
        </motion.div>

        <motion.p
          className="font-cinzel text-lg sm:text-xl md:text-3xl text-accent mb-8 sm:mb-12 drop-shadow-lg px-2 leading-relaxed"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Tres viajes a través del corazón celta
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Button 
            onClick={() => onNavigate("itinerary7")}
            className="bg-highland hover:bg-highland/80 text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-cinzel shadow-highland transition-celtic group w-full sm:w-auto"
          >
            <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-celtic" />
            Comenzar Aventura
          </Button>
          
          <Button 
            onClick={() => onNavigate("food-activities")}
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-cinzel transition-celtic w-full sm:w-auto"
          >
            Gastronomía Local
          </Button>
          
          <Button 
            variant="outline"
            onClick={() => onNavigate("tips")}
            className="border-muted-foreground text-muted-foreground hover:bg-muted hover:text-foreground px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-cinzel transition-celtic w-full sm:w-auto"
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

        {/* SEO Content - Hidden but accessible to crawlers */}
        <div className="sr-only">
          <h2>Guías Completas de Viaje por Escocia</h2>
          <p>Descubre los mejores itinerarios para viajar a Escocia: explora los Highlands escoceses, la misteriosa Isla de Skye, la histórica Edimburgo con su castillo medieval, y los lagos legendarios como Loch Ness. Nuestras guías incluyen rutas de 7, 9 y 11 días con recomendaciones de restaurantes, pubs tradicionales, actividades con descuento y consejos prácticos para tu viaje perfecto a Escocia.</p>
          <ul>
            <li>Itinerario de 7 días: Edimburgo, Highlands e Isla de Skye</li>
            <li>Itinerario de 9 días: Ruta extendida con más tiempo en cada destino</li>
            <li>Itinerario de 11 días: Tour completo incluyendo islas y costa oeste</li>
            <li>Mejores restaurantes en Edimburgo: The Witchery, Oink, Deacon's House</li>
            <li>Pubs tradicionales: Greyfriars Bobby, The Bow Bar, Sandy Bell's</li>
            <li>Actividades en Highlands: Highland Tours, Whisky Experience, fotografía</li>
            <li>Isla de Skye: Old Man of Storr, Fairy Pools, Portree</li>
            <li>Castillos escoceses: Edinburgh Castle, Eilean Donan, Dunnottar</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ScotlandHero;