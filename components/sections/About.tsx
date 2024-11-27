import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561"
              alt="Professional dietitian consulting"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">About The Food School</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded by expert nutritionists with over 15 years of experience, The Food
              School is dedicated to helping individuals develop a healthy relationship
              with food through education and personalized guidance.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our evidence-based approach combines the latest nutritional science with
              practical, sustainable strategies that fit your lifestyle.
            </p>
            <Button size="lg">Meet Our Team</Button>
          </div>
        </div>
      </div>
    </section>
  );
}