import { motion } from "framer-motion";
import { useState } from "react";
import { Utensils, Beer, MapPin, ExternalLink, Ticket, Camera, Castle, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import celticPattern from "@/assets/celtic-pattern.jpg";

const FoodAndActivitiesSection = () => {
  const [activeCity, setActiveCity] = useState("edinburgh");

  const recommendations = {
    edinburgh: {
      name: "Edimburgo",
      restaurants: [
        {
          name: "The Witchery by the Castle",
          type: "Fine Dining",
          description: "Restaurante gótico cerca del castillo con atmósfera única y cocina escocesa refinada.",
          highlight: "Ambiente medieval, perfecto para cenas románticas"
        },
        {
          name: "Deacon's House Café",
          type: "Tradicional",
          description: "Auténtica cocina escocesa en un edificio histórico del siglo XVI.",
          highlight: "Haggis tradicional y shortbread casero"
        },
        {
          name: "Ondine",
          type: "Marisquería",
          description: "Los mejores mariscos frescos de Escocia en pleno corazón de la ciudad.",
          highlight: "Ostras frescas y salmón ahumado"
        }
      ],
      pubs: [
        {
          name: "The Bow Bar",
          type: "Whisky Bar",
          description: "Más de 300 whiskies escoceses en un pub victoriano auténtico.",
          highlight: "Colección impresionante de single malts"
        },
        {
          name: "Sandy Bell's",
          type: "Música Tradicional",
          description: "Pub histórico con música folk en vivo todas las noches.",
          highlight: "Sesiones de música celta espontáneas"
        },
        {
          name: "The Royal Oak",
          type: "Pub Histórico",
          description: "El pub más pequeño de Edimburgo con gran personalidad.",
          highlight: "Ambiente íntimo y cerveza local"
        }
      ]
    },
    inverness: {
      name: "Inverness",
      restaurants: [
        {
          name: "Rocpool Restaurant",
          type: "Contemporáneo",
          description: "Cocina moderna escocesa con vistas al río Ness.",
          highlight: "Venado de las Highlands y mariscos locales"
        },
        {
          name: "The Mustard Seed",
          type: "Bistro",
          description: "Restaurante acogedor en una iglesia convertida del siglo XVIII.",
          highlight: "Ingredientes locales y atmósfera única"
        },
        {
          name: "Café 1",
          type: "Bistro Local",
          description: "Favorito local con cocina casera y productos regionales.",
          highlight: "Desayuno escocés completo y dulces caseros"
        }
      ],
      pubs: [
        {
          name: "The Phoenix",
          type: "Pub Tradicional",
          description: "Pub auténtico de las Highlands con cervezas locales.",
          highlight: "Ales artesanales de las Highlands"
        },
        {
          name: "Hootananny",
          type: "Música y Cervezas",
          description: "Bar vibrante con música en vivo y ambiente joven.",
          highlight: "Bandas locales y cervezas craft"
        },
        {
          name: "The Castle Tavern",
          type: "Pub Histórico",
          description: "Pub tradicional con vistas al castillo de Inverness.",
          highlight: "Whiskies locales y ambiente acogedor"
        }
      ]
    }
  };

  const activities = [
    {
      title: "Edinburgh City Pass",
      description: "Acceso gratuito a más de 30 atracciones y descuentos en tours.",
      price: "Desde £59",
      link: "https://www.edinburgh.org/edinburgh-city-pass",
      icon: Castle
    },
    {
      title: "Historic Scotland Explorer Pass",
      description: "Entrada a más de 70 castillos y sitios históricos por toda Escocia.",
      price: "Desde £46",
      link: "https://www.historicenvironment.scot/visit-a-place/explorer-pass/",
      icon: Mountain
    },
    {
      title: "Highland Tours desde Edimburgo",
      description: "Tours guiados de día completo a las Highlands y Loch Ness.",
      price: "Desde £85",
      link: "https://www.viator.com/Edinburgh/d739-ttd/p-5320EDINBURGH",
      icon: MapPin
    },
    {
      title: "Whisky Experience Tours",
      description: "Catas y tours por destilerías famosas con transporte incluido.",
      price: "Desde £120",
      link: "https://www.scotchwhiskyexperience.co.uk/",
      icon: Beer
    },
    {
      title: "Fotografía de las Highlands",
      description: "Tours fotográficos especializados a los paisajes más espectaculares.",
      price: "Desde £150",
      link: "https://www.scotlandphototours.com/",
      icon: Camera
    },
    {
      title: "National Trust for Scotland",
      description: "Pase anual para jardines, castillos y propiedades históricas.",
      price: "Desde £65",
      link: "https://www.nts.org.uk/visit/membership",
      icon: Ticket
    }
  ];

  return (
    <motion.section
      id="food-activities"
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
            Sabores y Experiencias
          </h2>
          <p className="font-cinzel text-xl text-muted-foreground mb-8">
            Los mejores lugares para comer, beber y vivir Escocia auténtica
          </p>
          <div className="w-32 h-1 bg-highland mx-auto rounded-full" />
        </motion.div>

        {/* Food & Drink Recommendations */}
        <motion.div
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-cinzel text-3xl text-primary mb-8 text-center">
            Gastronomía y Pubs Tradicionales
          </h3>
          
          <Tabs value={activeCity} onValueChange={setActiveCity} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="edinburgh" className="font-cinzel">
                <MapPin className="w-4 h-4 mr-2" />
                Edimburgo
              </TabsTrigger>
              <TabsTrigger value="inverness" className="font-cinzel">
                <Mountain className="w-4 h-4 mr-2" />
                Inverness
              </TabsTrigger>
            </TabsList>

            {Object.entries(recommendations).map(([key, city]) => (
              <TabsContent key={key} value={key}>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Restaurants */}
                  <Card className="bg-card/80 backdrop-blur-sm shadow-highland">
                    <CardHeader>
                      <CardTitle className="font-cinzel text-2xl text-primary flex items-center gap-2">
                        <Utensils className="h-6 w-6" />
                        Restaurantes en {city.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {city.restaurants.map((restaurant, index) => (
                        <motion.div
                          key={index}
                          className="border-l-4 border-highland pl-4 hover:bg-accent/10 p-4 rounded-r-lg transition-celtic"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <h4 className="font-cinzel text-lg font-semibold text-primary">
                            {restaurant.name}
                          </h4>
                          <p className="text-sm text-accent mb-2">{restaurant.type}</p>
                          <p className="text-muted-foreground text-sm mb-2">
                            {restaurant.description}
                          </p>
                          <p className="text-highland font-semibold text-sm">
                            ✨ {restaurant.highlight}
                          </p>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Pubs */}
                  <Card className="bg-card/80 backdrop-blur-sm shadow-highland">
                    <CardHeader>
                      <CardTitle className="font-cinzel text-2xl text-primary flex items-center gap-2">
                        <Beer className="h-6 w-6" />
                        Pubs Tradicionales
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                      {city.pubs.map((pub, index) => (
                        <motion.div
                          key={index}
                          className="border-l-4 border-celtic-emerald pl-4 hover:bg-accent/10 p-4 rounded-r-lg transition-celtic"
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <h4 className="font-cinzel text-lg font-semibold text-primary">
                            {pub.name}
                          </h4>
                          <p className="text-sm text-accent mb-2">{pub.type}</p>
                          <p className="text-muted-foreground text-sm mb-2">
                            {pub.description}
                          </p>
                          <p className="text-celtic-emerald font-semibold text-sm">
                            🍺 {pub.highlight}
                          </p>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Activities and Passes */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-cinzel text-3xl text-primary mb-8 text-center">
            Actividades y Pases con Descuento
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <Card className="bg-card/60 backdrop-blur-sm border-border/50 shadow-mist hover:shadow-highland transition-celtic h-full">
                  <CardHeader>
                    <CardTitle className="font-cinzel text-lg text-primary flex items-center gap-2">
                      <activity.icon className="h-5 w-5 text-highland" />
                      {activity.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col justify-between h-full">
                    <div>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {activity.description}
                      </p>
                      <p className="text-highland font-semibold text-lg mb-4">
                        {activity.price}
                      </p>
                    </div>
                    <Button 
                      asChild 
                      className="bg-highland hover:bg-highland/80 text-primary-foreground w-full group"
                    >
                      <a 
                        href={activity.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center"
                      >
                        Reservar Ahora
                        <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-celtic" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Tips */}
          <motion.div
            className="mt-12 p-6 bg-accent/10 rounded-lg border border-accent/20"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <h4 className="font-cinzel text-xl text-primary mb-4 text-center">
              💡 Consejos para Ahorrar
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div>
                <p className="mb-2">
                  <strong className="text-highland">Reserva con anticipación:</strong> Muchos pases ofrecen descuentos por reserva temprana.
                </p>
                <p>
                  <strong className="text-highland">Combina actividades:</strong> Los pases combinados suelen ser más económicos.
                </p>
              </div>
              <div>
                <p className="mb-2">
                  <strong className="text-highland">Temporada baja:</strong> Visita entre octubre y marzo para mejores precios.
                </p>
                <p>
                  <strong className="text-highland">Apps locales:</strong> Descarga apps como "Taste of Scotland" para ofertas exclusivas.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FoodAndActivitiesSection;