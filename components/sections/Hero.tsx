import { Button } from "@/components/ui/button";
import { Salad } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-background py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
              <Salad className="h-8 w-8 text-primary" />
              <h1 className="text-2xl sm:text-3xl font-bold">The Food School</h1>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Transform Your Life Through{" "}
              <span className="text-primary bg-secondary/50 px-2 rounded-md">
                Mindful Eating
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Expert nutrition guidance tailored to your lifestyle. Learn how to make
              sustainable dietary changes that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-primary/10 rounded-lg -rotate-2"></div>
            <img
              src="https://images.unsplash.com/photo-1490818387583-1baba5e638af"
              alt="Fresh healthy food"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl rotate-2 hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
}