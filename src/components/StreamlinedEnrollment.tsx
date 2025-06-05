
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Calendar, CreditCard, BookOpen } from "lucide-react";

const StreamlinedEnrollment = () => {
  const steps = [
    {
      icon: BookOpen,
      title: "Choose Your Path",
      description: "Select between group learning or 1-on-1 mentorship based on your goals and learning style."
    },
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Book a free 30-minute consultation to discuss your musical background and objectives."
    },
    {
      icon: CreditCard,
      title: "Secure Your Spot",
      description: "Complete enrollment with flexible payment options and immediate access to resources."
    }
  ];

  const benefits = [
    "30-day money-back guarantee",
    "Flexible scheduling options",
    "Industry-standard software included",
    "Lifetime access to course materials",
    "Certificate upon completion",
    "Alumni network access"
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Start Your
            <span className="block font-light bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Musical Journey
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Join hundreds of successful producers with our streamlined enrollment process
          </p>
        </div>

        {/* Enrollment Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-sm font-medium text-blue-600 mb-2">STEP {index + 1}</div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
            <CardContent className="p-12 text-center text-white">
              <h3 className="text-3xl md:text-4xl font-light mb-6">
                Ready to Transform Your Music?
              </h3>
              <p className="text-xl font-light mb-8 opacity-90">
                Start with a free consultation and discover your potential
              </p>
              
              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 text-left">
                    <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="font-light">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105">
                  Book Free Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105">
                  View Course Details
                </Button>
              </div>
              
              <p className="text-sm opacity-75 mt-6">
                No credit card required • 30-day money-back guarantee
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StreamlinedEnrollment;
