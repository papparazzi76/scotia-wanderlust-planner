import { useState, useEffect } from "react";
import { MapPin, Mountain, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface InteractiveRouteMapProps {
  itinerary: "7" | "9" | "11";
}

const routeData = {
  "7": {
    center: "Highlands Centrales",
    points: [
      { name: "Edimburgo", day: "Días 1-2", description: "Capital histórica" },
      { name: "Stirling", day: "Día 3", description: "Castillo y monumentos" },
      { name: "Glencoe", day: "Día 4", description: "Valle dramático" },
      { name: "Isla de Skye", day: "Días 5-6", description: "Paisajes mágicos" },
      { name: "Inverness", day: "Día 7", description: "Capital de las Highlands" },
    ],
    highlights: ["Royal Mile", "Castillo de Stirling", "Old Man of Storr", "Loch Ness"]
  },
  "9": {
    center: "Highlands Extendidas",
    points: [
      { name: "Edimburgo", day: "Días 1-2", description: "Exploración profunda" },
      { name: "Costa de Fife", day: "Día 3", description: "Puertos pesqueros" },
      { name: "Cairngorms", day: "Día 4", description: "Destilerías de whisky" },
      { name: "Inverness", day: "Día 5", description: "Capital Highland" },
      { name: "Isla de Skye", day: "Días 6-8", description: "Aventura completa" },
      { name: "Glencoe", day: "Día 9", description: "Regreso épico" },
    ],
    highlights: ["Dean Village", "Speyside", "Fairy Pools", "Neist Point"]
  },
  "11": {
    center: "Gran Tour Escocés",
    points: [
      { name: "Edimburgo", day: "Días 1-2", description: "Base perfecta" },
      { name: "Stirling", day: "Día 3", description: "Historia escocesa" },
      { name: "Cairngorms", day: "Día 4", description: "Hacia las Highlands" },
      { name: "North Coast 500", day: "Días 5-6", description: "Ruta legendaria" },
      { name: "Isla de Skye", day: "Días 7-9", description: "Paraíso natural" },
      { name: "Isla de Mull", day: "Días 10-11", description: "Aventura isleña" },
    ],
    highlights: ["Bannockburn", "Bealach na Bà", "Tobermory", "Iona"]
  },
};

const InteractiveRouteMap = ({ itinerary }: InteractiveRouteMapProps) => {
  const [selectedPoint, setSelectedPoint] = useState<number>(0);
  const route = routeData[itinerary];

  useEffect(() => {
    console.log("InteractiveRouteMap mounted successfully");
    const interval = setInterval(() => {
      setSelectedPoint((prev) => (prev + 1) % route.points.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [route.points.length]);

  console.log("Rendering InteractiveRouteMap", { itinerary, selectedPoint });

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-highland border border-border celtic-border bg-highland/5 relative">
      {/* Interactive Route Visualization */}
      <div className="absolute inset-0 p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="font-cinzel text-xl text-primary flex items-center justify-center gap-2">
            <Mountain className="h-5 w-5" />
            {route.center}
            <Navigation className="h-5 w-5" />
          </h3>
          <p className="text-sm text-muted-foreground">Ruta de {itinerary} días</p>
        </div>

        {/* Route Points */}
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {route.points.map((point, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-celtic ${
                selectedPoint === index 
                  ? 'bg-highland/20 border-primary shadow-glow' 
                  : 'bg-card/50 hover:bg-card/80'
              }`}
              onClick={() => setSelectedPoint(index)}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-celtic ${
                    selectedPoint === index 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-cinzel font-semibold text-foreground">{point.name}</h4>
                    <p className="text-sm text-muted-foreground">{point.day}</p>
                    <p className="text-xs text-accent">{point.description}</p>
                  </div>
                  <MapPin className={`h-5 w-5 transition-celtic ${
                    selectedPoint === index ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-6 pt-4 border-t border-border/50">
          <h4 className="font-cinzel text-sm text-accent mb-2">Destacados de la ruta:</h4>
          <div className="flex flex-wrap gap-2">
            {route.highlights.map((highlight, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-1">
            {route.points.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-celtic ${
                  selectedPoint === index ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRouteMap;