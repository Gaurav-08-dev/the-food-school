import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Brain, Heart, Scale } from "lucide-react";

const services = [
  {
    title: "Personalized Nutrition Plans",
    description: "Custom meal plans designed around your lifestyle, preferences, and health goals.",
    icon: Apple,
  },
  {
    title: "Weight Management",
    description: "Science-based approaches to achieving and maintaining your ideal weight.",
    icon: Scale,
  },
  {
    title: "Medical Nutrition Therapy",
    description: "Specialized dietary guidance for managing health conditions.",
    icon: Heart,
  },
  {
    title: "Mindful Eating Coaching",
    description: "Learn to develop a healthy relationship with food and eating habits.",
    icon: Brain,
  },
];

export default function Services() {
  return (
    <section className="bg-secondary/50 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive nutrition services tailored to help you achieve your health goals
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}