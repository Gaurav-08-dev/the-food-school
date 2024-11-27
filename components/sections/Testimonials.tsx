import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Weight Loss Client",
    content: "The personalized approach at The Food School transformed my relationship with food. I've lost 30 pounds and kept it off!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Michael Chen",
    role: "Fitness Enthusiast",
    content: "Their nutrition plans perfectly complement my workout routine. I've seen incredible improvements in my energy and performance.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
  },
  {
    name: "Emma Williams",
    role: "Busy Professional",
    content: "The practical meal planning advice fits perfectly into my hectic schedule. I'm eating healthier without spending hours in the kitchen.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted/50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Read what our clients have to say about their journey with The Food School
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <Avatar className="h-12 w-12 mb-4">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}