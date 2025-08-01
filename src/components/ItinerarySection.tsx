
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

  // Function to get specific image IDs for each day and itinerary
  const getImageId = (dayIndex: number, itinerary: string): string => {
    const imageMap: Record<string, string[]> = {
      "7": [
        "1469474968028-56623f02e42e", // Edinburgh - mountain landscape
        "1472396961693-142e6e269027", // Castles - deer and mountain
        "1509316975850-ff9c5deb0cd9", // Stirling - pine trees
        "1433086966358-54859d0ed716", // Glencoe - bridge and waterfalls
        "1553978297-87988c982b35", // Road to Skye - highland road
        "1534055683238-5d4c6e5faee5", // Skye peninsula - dramatic cliffs
        "1522199755839-a2bacb67c546" // Loch Ness - mysterious lake
      ],
      "9": [
        "1469474968028-56623f02e42e", // Edinburgh extended
        "1472396961693-142e6e269027", // Edinburgh museums
        "1509316975850-ff9c5deb0cd9", // Stirling and Fife coast
        "1434271849903-d8e8c5ba4b6e", // Cairngorms and Speyside
        "1433086966358-54859d0ed716", // Inverness
        "1553978297-87988c982b35", // Road to Skye
        "1534055683238-5d4c6e5faee5", // North Skye
        "1522199755839-a2bacb67c546", // Fairy Pools and Talisker
        "1467987506553-8f3916c7a4a7" // Return via Glencoe
      ],
      "11": [
        "1469474968028-56623f02e42e", // Edinburgh complete
        "1472396961693-142e6e269027", // Edinburgh splendid
        "1509316975850-ff9c5deb0cd9", // Stirling and Bannockburn
        "1434271849903-d8e8c5ba4b6e", // Towards Highlands
        "1553978297-87988c982b35", // North Coast 500 start
        "1433086966358-54859d0ed716", // Wester Ross to Ullapool
        "1534055683238-5d4c6e5faee5", // Ullapool to Skye
        "1522199755839-a2bacb67c546", // North Skye calm
        "1467987506553-8f3916c7a4a7", // Fairy Pools complete
        "1506905925346-9c3a2f3b8d8a", // Ferry to Mull
        "1441974231531-c6227db76b6e" // Mull, Iona and return
      ]
    };

    const images = imageMap[itinerary] || imageMap["7"];
    return images[dayIndex % images.length];
  };

  return (
    <motion.section
      id={id}
      className="py-20 px-6 relative"
      style={{ minHeight: "100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
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
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-celtic text-5xl md:text-6xl text-transparent bg-highland bg-clip-text mb-4">
            {title}
          </h2>
          <div className="w-32 h-1 bg-highland mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map - Fixed position when section is visible */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1,
              position: isVisible ? "sticky" : "static",
              top: isVisible ? "2rem" : "auto"
            }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:sticky lg:top-8"
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

          {/* Days List with improved animations */}
          <motion.div
            className="space-y-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {days.map((day, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card className="bg-card/60 backdrop-blur-sm border-border/50 shadow-mist hover:shadow-highland transition-celtic">
                  {/* Image placeholder */}
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={
                        // Use specific uploaded images for certain days
                        (itinerary === "7" && index === 0) 
                          ? "/lovable-uploads/94b4d4d1-b283-4052-a68d-66aa7ee9a596.png" // Edinburgh street for day 1
                        : (itinerary === "7" && index === 1) 
                          ? "/lovable-uploads/64df368e-4b7a-4ceb-b7ce-5c2a689f7dc3.png" // Castle illuminated for day 2
                        : (itinerary === "7" && index === 2) 
                          ? "/lovable-uploads/85f6e7bb-c096-40f6-95bf-8cb54f1abc5f.png" // River landscape for day 3
                        : (itinerary === "7" && index === 5)
                          ? "/lovable-uploads/4fc63d11-cc21-4955-b981-c902ab20b663.png" // Old Man of Storr for day 6
                        : (itinerary === "7" && index === 4) ||
                          (itinerary === "9" && (index === 5 || index === 6)) ||
                          (itinerary === "11" && (index === 6 || index === 7))
                          ? "/lovable-uploads/ab261f3a-439c-4313-9a65-0427fe301f2b.png" // Portree village
                          : `https://images.unsplash.com/photo-${getImageId(index, itinerary)}?w=600&h=400&fit=crop&crop=center&auto=format&q=80`
                      }
                      alt={`${day.title} - Paisaje escocés`}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-highland/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => toggleDay(index)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="font-cinzel text-xl text-primary">
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
