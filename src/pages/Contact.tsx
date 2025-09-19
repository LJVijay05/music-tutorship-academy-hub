
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="py-6 sm:py-8 md:py-12 bg-gradient-to-r from-red-50 to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Contact <span className="text-red-600">Us</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to start your music production journey? Get in touch with us today.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Contact Form */}
              <div className="lg:col-span-2 space-y-4 md:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-3 text-gray-900">Send us a Message</h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-sm">
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-xs sm:text-sm font-medium text-gray-700">
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          placeholder="Your first name" 
                          className="h-9 sm:h-10 text-sm border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="block text-xs sm:text-sm font-medium text-gray-700">
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <Input 
                          placeholder="Your last name" 
                          className="h-9 sm:h-10 text-sm border-gray-300 focus:border-red-500 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        type="email" 
                        placeholder="your.email@example.com" 
                        className="h-9 sm:h-10 text-sm border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">Phone Number</label>
                      <Input 
                        type="tel" 
                        placeholder="+91 9876543210" 
                        className="h-9 sm:h-10 text-sm border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">Course Interest</label>
                      <Select>
                        <SelectTrigger className="h-9 sm:h-10 text-sm border-gray-300 focus:border-red-500 focus:ring-red-500">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="batch">Music Production Batch Mentorship</SelectItem>
                          <SelectItem value="one-on-one">One-on-One Music Production Mentorship</SelectItem>
                          <SelectItem value="both">Both courses</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-xs sm:text-sm font-medium text-gray-700">Message</label>
                      <Textarea 
                        rows={3} 
                        placeholder="Tell us about your musical background and goals..."
                        className="text-sm border-gray-300 focus:border-red-500 focus:ring-red-500 resize-none"
                      />
                    </div>
                    
                    <Button className="w-full bg-red-600 hover:bg-red-700 h-9 sm:h-10 text-sm sm:text-base font-medium rounded-lg">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>

              {/* Contact Information & FAQ */}
              <div className="space-y-4 md:space-y-6">
                {/* Contact Information */}
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Get in Touch</h2>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4">
                    Have questions? We're here to help you on your music production journey.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Email</h3>
                        <a 
                          href="mailto:contact@musictutorship.com"
                          className="text-gray-600 hover:text-red-600 transition-colors text-xs sm:text-sm break-all"
                        >
                          contact@musictutorship.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-1">Phone</h3>
                        <a 
                          href="tel:+916374428173"
                          className="text-gray-600 hover:text-red-600 transition-colors text-xs sm:text-sm"
                        >
                          +91 6374428173
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-gray-900 text-xs sm:text-sm mb-2">Business Hours (IST)</h3>
                        <div className="space-y-1 text-xs">
                          <p className="text-gray-600">Mon - Tue: 10:00 AM - 7:00 PM</p>
                          <p className="text-gray-600">Thu - Sun: 10:00 AM - 7:00 PM</p>
                          <p className="text-red-600 font-medium">Wednesday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick FAQ */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Quick FAQ</h3>
                  <div className="space-y-2">
                    <div className="border-l-4 border-red-600 pl-3 py-2 bg-red-50 rounded-r">
                      <h4 className="font-semibold text-xs mb-1 text-gray-900">Do I need prior experience?</h4>
                      <p className="text-gray-600 text-xs">No, our courses are designed for all levels from beginners to advanced.</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-3 py-2 bg-red-50 rounded-r">
                      <h4 className="font-semibold text-xs mb-1 text-gray-900">What software do you teach?</h4>
                      <p className="text-gray-600 text-xs">We cover Ableton Live, Logic Pro, FL Studio, and more based on your preferences.</p>
                    </div>
                    <div className="border-l-4 border-red-600 pl-3 py-2 bg-red-50 rounded-r">
                      <h4 className="font-semibold text-xs mb-1 text-gray-900">Can I switch between courses?</h4>
                      <p className="text-gray-600 text-xs">Yes, we offer flexible switching options during the first month.</p>
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
