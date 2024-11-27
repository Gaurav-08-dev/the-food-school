import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey to better health? Contact us today for a
            consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-none shadow-lg">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Phone Number" />
                <Textarea placeholder="Your Message" className="h-32" />
                <Button size="lg" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">contact@thefoodschool.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">
                      123 Nutrition Street
                      <br />
                      Health City, HC 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}