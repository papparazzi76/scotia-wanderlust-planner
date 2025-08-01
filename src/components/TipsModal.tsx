import { motion, AnimatePresence } from "framer-motion";
import { X, AlertTriangle, Camera, MapPin, Clock, Umbrella } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TipsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tips = [
  {
    icon: AlertTriangle,
    title: "Reservas Esenciales",
    content: "Reserve el alojamiento en la Isla de Skye y Applecross con varios meses de antelación, ya que la disponibilidad se agota rápidamente.",
    color: "text-tartan-red"
  },
  {
    icon: Clock,
    title: "Restaurantes Populares",
    content: "En temporada alta conviene reservar mesa en restaurantes populares de Edimburgo y Portree para evitar sorpresas.",
    color: "text-accent"
  },
  {
    icon: Umbrella,
    title: "Clima Escocés",
    content: "El clima puede ser impredecible; lleve ropa impermeable y calzado adecuado para caminar en todas las estaciones.",
    color: "text-highland-blue"
  },
  {
    icon: MapPin,
    title: "Conducción en NC500",
    content: "El paso de Bealach na Bà en la NC500 es estrecho y tiene pendientes pronunciadas; evítelo si conduce una autocaravana o no se siente cómodo.",
    color: "text-celtic-emerald"
  },
  {
    icon: Camera,
    title: "Atracciones y Descuentos",
    content: "Algunas destilerías y atracciones ofrecen descuentos con el Explorer Pass y requieren reserva previa. Planifique con anticipación.",
    color: "text-primary"
  }
];

const TipsModal = ({ isOpen, onClose }: TipsModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="bg-card/90 backdrop-blur-sm shadow-highland border border-border/50">
              <CardHeader className="relative">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-celtic text-3xl text-transparent bg-highland bg-clip-text">
                    Consejos de Viaje
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 hover:bg-destructive/20 hover:text-destructive"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <p className="font-cinzel text-muted-foreground">
                  Consejos esenciales para una experiencia inolvidable en Escocia
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                {tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-muted/20 border-border/30 hover:shadow-mist transition-celtic">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-full bg-card ${tip.color}`}>
                            <tip.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-cinzel text-xl text-foreground mb-2">
                              {tip.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {tip.content}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                <motion.div
                  className="mt-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="p-6 bg-highland/10 rounded-lg border border-primary/20">
                    <h3 className="font-celtic text-2xl text-primary mb-4">
                      ¡Buen Viaje!
                    </h3>
                    <p className="font-cinzel text-muted-foreground">
                      Que los vientos escoceses lleven sus aventuras hacia paisajes inolvidables
                      y experiencias que perdurarán para siempre en su corazón.
                    </p>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TipsModal;