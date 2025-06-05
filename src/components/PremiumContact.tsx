
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const PremiumContact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "hello@musictutorship.com",
      secondary: "support@musictutorship.com",
      description: "Get in touch via email"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 987-6543",
      description: "Speak with our team"
    },
    {
      icon: MapPin,
      title: "Visit Studio",
      primary: "123 Music District",
      secondary: "Los Angeles, CA 90028",
      description: "Come see our facilities"
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon - Fri: 9AM - 8PM",
      secondary: "Sat - Sun: 10AM - 6PM",
      description: "Pacific Standard Time"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Let's Create
            <span className="block font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Ready to start your musical journey? We're here to guide you every step of the way.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl rounded-3xl">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-3xl font-light text-gray-900 mb-8">Send us a message</h3>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input 
                        placeholder="John" 
                        className="h-12 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input 
                        placeholder="Doe" 
                        className="h-12 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="+1 (555) 123-4567" 
                      className="h-12 border-gray-200 rounded-xl focus:border-blue-600 focus:ring-blue-600"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Course Interest
                    </label>
                    <select className="w-full h-12 px-4 border border-gray-200 rounded-xl focus:border-blue-600 focus:ring-blue-600 focus:outline-none">
                      <option>Select a program</option>
                      <option>Music Production Mastery</option>
                      <option>1-on-1 Premium Mentorship</option>
                      <option>Both programs</option>
                      <option>Custom consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea 
                      rows={5} 
                      placeholder="Tell us about your musical background, goals, and what you'd like to achieve..."
                      className="border-gray-200 rounded-xl focus:border-blue-600 focus:ring-blue-600 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-8">Get in touch</h3>
                <p className="text-lg text-gray-600 font-light leading-relaxed mb-12">
                  Whether you have questions about our programs, want to schedule a consultation, 
                  or just want to say hello, we'd love to hear from you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <method.icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-medium text-gray-900 mb-1">{method.title}</h4>
                          <p className="text-gray-700 font-medium">{method.primary}</p>
                          <p className="text-gray-600">{method.secondary}</p>
                          <p className="text-sm text-gray-500 mt-1">{method.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <Card className="border-0 shadow-lg overflow-hidden rounded-2xl">
                <div className="h-64 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">Interactive Map</p>
                    <p className="text-gray-600 text-sm">Studio location and directions</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumContact;
