
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-red-50 to-gray-50">
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
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Send us a Message</h2>
                  <p className="text-gray-600 text-lg">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>
                
                <form className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">First Name</label>
                      <Input 
                        placeholder="Your first name" 
                        className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-700">Last Name</label>
                      <Input 
                        placeholder="Your last name" 
                        className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Phone Number</label>
                    <Input 
                      type="tel" 
                      placeholder="+91 9876543210" 
                      className="h-12 border-gray-300 focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Course Interest</label>
                    <select className="w-full h-12 p-3 border border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500 focus:outline-none bg-white">
                      <option>Select a course</option>
                      <option>Music Production Batch Mentorship</option>
                      <option>One-on-One Music Production Mentorship</option>
                      <option>Both courses</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-gray-700">Message</label>
                    <Textarea 
                      rows={6} 
                      placeholder="Tell us about your musical background and goals..."
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-red-600 hover:bg-red-700 h-12 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Get in Touch</h2>
                  <p className="text-gray-600 text-lg">
                    Have questions? We're here to help you on your music production journey.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-8 bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Email</h3>
                      <p className="text-gray-600 font-medium">contact@musictutorship.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-8 bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Phone</h3>
                      <p className="text-gray-600 font-medium">+91 9514499932</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-8 bg-gradient-to-br from-red-50 to-gray-50 rounded-2xl border border-red-100 hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">Business Hours</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600 font-medium">Monday - Tuesday: 10:00 AM - 7:00 PM</p>
                        <p className="text-gray-600 font-medium">Thursday - Sunday: 10:00 AM - 7:00 PM</p>
                        <p className="text-red-600 font-medium">Wednesday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-600 pl-6 py-2 bg-red-50/50 rounded-r-lg">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Do I need prior experience?</h4>
                      <p className="text-gray-600">No, our courses are designed for beginners to advanced levels. We'll guide you through every step of your musical journey.</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-6 py-2 bg-red-50/50 rounded-r-lg">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">What software do you teach?</h4>
                      <p className="text-gray-600">We cover industry-standard DAWs including Ableton Live, Logic Pro, FL Studio, and more based on your preferences.</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-6 py-2 bg-red-50/50 rounded-r-lg">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Can I switch between courses?</h4>
                      <p className="text-gray-600">Yes, we offer flexible switching options during the first month to ensure you find the perfect learning path.</p>
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
