import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Clock, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InteractiveRouteMap from "./InteractiveRouteMap";
import celticPattern from "@/assets/celtic-pattern.jpg";

interface Day {
  day: string;
  title: string;
  description: string;
  highlights?: string[];
}

interface ItinerarySectionProps {
  id: string;
  title: string;
  days: Day[];
  itinerary: "7" | "9" | "11";
  isVisible: boolean;
}

const ItinerarySection = ({ id, title, days, itinerary, isVisible }: ItinerarySectionProps) => {
  const [openDay, setOpenDay] = useState<number>(0);

  const toggleDay = (index: number) => {
    setOpenDay(openDay === index ? -1 : index);
  };

  return (
    <motion.section
      id={id}
      className="min-h-screen py-20 px-6 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={celticPattern} 
          alt="" 
          className="w-full h-full object-repeat"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-celtic text-5xl md:text-6xl text-transparent bg-highland bg-clip-text mb-4">
            {title}
          </h2>
          <div className="w-32 h-1 bg-highland mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="sticky top-8"
          >
            <Card className="bg-card/80 backdrop-blur-sm shadow-highland">
              <CardHeader>
                <CardTitle className="font-cinzel text-2xl text-primary flex items-center gap-2">
                  <MapPin className="h-6 w-6" />
                  Ruta Interactiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <InteractiveRouteMap itinerary={itinerary} />
                <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {itinerary} días de aventura
                  </span>
                  <span className="flex items-center gap-1">
                    <Camera className="h-4 w-4" />
                    Paisajes únicos
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Days List */}
          <motion.div
            className="space-y-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {days.map((day, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card className="bg-card/60 backdrop-blur-sm border-border/50 shadow-mist hover:shadow-highland transition-celtic">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => toggleDay(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-cinzel text-xl text-primary flex items-center gap-3">
                        <div className="w-12 h-12 bg-highland rounded-full flex items-center justify-center text-primary-foreground font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-lg">{day.day}</div>
                          <div className="text-base font-normal text-muted-foreground">
                            {day.title}
                          </div>
                        </div>
                      </CardTitle>
                      <Button variant="ghost" size="sm" className="p-2">
                        <ChevronDown 
                          className={`h-5 w-5 transition-celtic ${
                            openDay === index ? 'rotate-180' : ''
                          }`}
                        />
                      </Button>
                    </div>
                  </CardHeader>

                  <motion.div
                    initial={false}
                    animate={{
                      height: openDay === index ? "auto" : 0,
                      opacity: openDay === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <CardContent className="pt-0">
                      <div className="prose prose-invert max-w-none">
                        <p className="text-foreground/90 leading-relaxed">
                          {day.description}
                        </p>
                        {day.highlights && (
                          <div className="mt-4">
                            <h4 className="font-cinzel text-accent mb-2">Destacados:</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {day.highlights.map((highlight, idx) => (
                                <li key={idx}>{highlight}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ItinerarySection;