
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-red-50 to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact <span className="text-red-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your music production journey? Get in touch with us today.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input type="tel" placeholder="+91 9876543210" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Interest</label>
                    <select className="w-full p-3 border border-gray-300 rounded-md">
                      <option>Select a course</option>
                      <option>Music Production Batch Mentorship</option>
                      <option>One-on-One Music Production Mentorship</option>
                      <option>Both courses</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      rows={5} 
                      placeholder="Tell us about your musical background and goals..."
                    />
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700" size="lg">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                    <Mail className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">info@musictutorship.com</p>
                      <p className="text-gray-600">mentorship@musictutorship.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                    <Phone className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+91 9876543210</p>
                      <p className="text-gray-600">+91 8765432109</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Studio Location</h3>
                      <p className="text-gray-600">123 Music Street</p>
                      <p className="text-gray-600">Production District, Mumbai 400001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                    <Clock className="w-6 h-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 10:00 AM - 8:00 PM</p>
                      <p className="text-gray-600">Saturday: 10:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-semibold mb-1">Do I need prior experience?</h4>
                      <p className="text-gray-600 text-sm">No, our courses are designed for beginners to advanced levels.</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-semibold mb-1">What software do you teach?</h4>
                      <p className="text-gray-600 text-sm">We cover industry-standard DAWs including Ableton Live, Logic Pro, and FL Studio.</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-semibold mb-1">Can I switch between courses?</h4>
                      <p className="text-gray-600 text-sm">Yes, we offer flexible switching options during the first month.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
