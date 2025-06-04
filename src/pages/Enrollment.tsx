
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { CheckCircle, CreditCard, Shield, Star, Clock, Users, Award, MessageCircle } from "lucide-react";

const Enrollment = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const [selectedCourse, setSelectedCourse] = useState("batch");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    experience: "",
    couponCode: ""
  });

  const plans = {
    monthly: { label: "Monthly", discount: 0 },
    quarterly: { label: "3 Months", discount: 0 },
    halfYearly: { label: "6 Months", discount: 0 },
    annually: { label: "12 Months", discount: 0 }
  };

  const courses = {
    batch: {
      title: "Music Production Batch Mentorship",
      subtitle: "From Beginner to Advanced Level",
      monthlyPrice: 9599,
      duration: "12 Months Duration",
      batchSize: "15 Students Per Batch",
      popular: true,
      premium: false,
      features: [
        "15 premium students per batch",
        "Weekly live interactive sessions",
        "Industry-standard DAW training (Logic Pro, Ableton)",
        "Collaborative music projects",
        "1-on-1 feedback sessions monthly",
        "Access to premium sample libraries",
        "Certificate of completion",
        "Alumni network access",
        "Career guidance & placement support"
      ],
      highlights: [
        { icon: Users, text: "Small batch size for personalized attention" },
        { icon: Clock, text: "Flexible timing for global students" },
        { icon: Award, text: "Industry-recognized certification" }
      ]
    },
    oneOnOne: {
      title: "One-on-One Music Production Mentorship",
      subtitle: "Premium Individual Coaching",
      monthlyPrice: 16000,
      duration: "Personalized Learning Journey",
      batchSize: "Exclusive 1-on-1 Sessions",
      popular: false,
      premium: true,
      features: [
        "Completely personalized curriculum",
        "4 intensive sessions per month",
        "Flexible scheduling across time zones",
        "Direct mentor WhatsApp access",
        "Custom project development",
        "Advanced mixing & mastering techniques",
        "Industry networking opportunities",
        "Lifetime mentorship support",
        "Priority career placement assistance"
      ],
      highlights: [
        { icon: Star, text: "VIP treatment with personal mentor" },
        { icon: Clock, text: "24/7 support for global accessibility" },
        { icon: Award, text: "Fast-track to professional level" }
      ]
    }
  };

  const calculatePrice = () => {
    const course = courses[selectedCourse as keyof typeof courses];
    let basePrice = course.monthlyPrice;
    
    if (selectedCourse === "oneOnOne" && selectedPlan === "annually") {
      basePrice = 12800; // Special annual rate for 1-on-1
    }
    
    switch (selectedPlan) {
      case "quarterly":
        return basePrice * 3;
      case "halfYearly":
        return basePrice * 6;
      case "annually":
        return basePrice * 12;
      default:
        return basePrice;
    }
  };

  const getOriginalPrice = () => {
    const course = courses[selectedCourse as keyof typeof courses];
    const monthlyPrice = course.monthlyPrice;
    
    switch (selectedPlan) {
      case "quarterly":
        return monthlyPrice * 3;
      case "halfYearly":
        return monthlyPrice * 6;
      case "annually":
        return monthlyPrice * 12;
      default:
        return monthlyPrice;
    }
  };

  const getDiscount = () => {
    if (selectedCourse === "oneOnOne" && selectedPlan === "annually") {
      const original = getOriginalPrice();
      const discounted = calculatePrice();
      return original - discounted;
    }
    return 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 font-inter">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                Elevate Your <span className="text-yellow-300">Music Production</span> Journey
              </h1>
              <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                Join India's most exclusive music production mentorship program designed for serious artists and NRI students seeking world-class education.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-300" />
                  <span>Premium Quality Education</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-300" />
                  <span>Global Time Zone Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-300" />
                  <span>Industry Recognition</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Chatbot Section */}
        <section className="py-16 bg-gradient-to-r from-pink-500 to-red-500 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white bg-opacity-20 p-4 rounded-full">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Have Questions?</h2>
              <p className="text-xl text-pink-100 mb-8">
                Our AI-powered assistant is here to help you choose the perfect music production program
              </p>
              <Button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 text-lg font-semibold rounded-full">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat with AI Assistant
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 via-red-500 to-pink-500 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-red-100">Premium Music Production Course Features</p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="bg-white bg-opacity-20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Expert Mentorship</h3>
                <p className="text-red-100 leading-relaxed">
                  Learn from industry professionals with years of experience in music production and sound engineering.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Industry Recognition</h3>
                <p className="text-red-100 leading-relaxed">
                  Get certified credentials that are recognized by top music studios and production houses worldwide.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-20 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Clock className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Global Accessibility</h3>
                <p className="text-red-100 leading-relaxed">
                  Flexible scheduling across multiple time zones to accommodate students from around the world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16">
                
                {/* Form Section */}
                <div className="space-y-10">
                  <div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">Choose Your Path to Excellence</h2>
                    <p className="text-lg text-gray-600">Select the program that aligns with your musical aspirations</p>
                  </div>
                  
                  {/* Course Selection */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">Select Your Program</h3>
                    <div className="grid gap-6">
                      {Object.entries(courses).map(([key, course]) => (
                        <Card 
                          key={key}
                          className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-xl ${
                            selectedCourse === key 
                              ? "border-red-500 bg-gradient-to-r from-red-50 to-orange-50 shadow-lg" 
                              : "border-gray-200 hover:border-red-300"
                          }`}
                          onClick={() => setSelectedCourse(key)}
                        >
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className={`w-6 h-6 rounded-full border-2 mt-1 flex-shrink-0 ${
                                selectedCourse === key ? "bg-red-500 border-red-500" : "border-gray-300"
                              }`}>
                                {selectedCourse === key && <CheckCircle className="w-6 h-6 text-white -m-0.5" />}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-xl font-bold text-gray-900">{course.title}</h4>
                                  {course.popular && <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">POPULAR</span>}
                                  {course.premium && <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full">PREMIUM</span>}
                                </div>
                                <p className="text-gray-600 mb-3">{course.subtitle}</p>
                                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                  <span className="flex items-center gap-1 text-red-600 font-semibold">
                                    <Clock className="w-4 h-4" />
                                    {course.duration}
                                  </span>
                                  <span className="flex items-center gap-1 text-gray-700">
                                    <Users className="w-4 h-4" />
                                    {course.batchSize}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-2xl font-bold text-red-600">₹{course.monthlyPrice.toLocaleString()}</span>
                                  <span className="text-gray-500">/month</span>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Plan Selection */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">Payment Plan</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      {Object.entries(plans).map(([key, plan]) => (
                        <Button
                          key={key}
                          variant={selectedPlan === key ? "default" : "outline"}
                          className={`h-14 text-sm font-semibold ${
                            selectedPlan === key 
                              ? "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600" 
                              : "border-2 hover:border-red-300"
                          }`}
                          onClick={() => setSelectedPlan(key)}
                        >
                          {plan.label}
                        </Button>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-green-800 font-medium">
                          {selectedPlan === "annually" && selectedCourse === "oneOnOne" && "Save ₹38,400 with annual payment! Perfect for serious students."}
                          {selectedPlan === "annually" && selectedCourse === "batch" && "Annual upfront payment ensures your spot in our exclusive batch."}
                          {selectedPlan === "quarterly" && "3-month commitment for focused learning."}
                          {selectedPlan === "halfYearly" && "6-month program for comprehensive skill development."}
                          {selectedPlan === "monthly" && "Flexible monthly payments with premium support included."}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-900">Personal Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-700">First Name</label>
                        <Input 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Your first name"
                          className="h-12 text-lg border-2 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-700">Last Name</label>
                        <Input 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name"
                          className="h-12 text-lg border-2 focus:border-red-500"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Email Address</label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="h-12 text-lg border-2 focus:border-red-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Phone Number</label>
                      <Input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210 or +1 234567890"
                        className="h-12 text-lg border-2 focus:border-red-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Music Production Experience</label>
                      <select 
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full h-12 p-4 text-lg border-2 border-gray-300 rounded-md focus:border-red-500 focus:outline-none"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Complete Beginner</option>
                        <option value="some">Some Experience (&lt; 1 year)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-700">Coupon Code (Optional)</label>
                      <Input 
                        name="couponCode"
                        value={formData.couponCode}
                        onChange={handleInputChange}
                        placeholder="Enter coupon code for additional savings"
                        className="h-12 text-lg border-2 focus:border-red-500"
                      />
                    </div>
                    
                    <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                      <input type="checkbox" id="terms" className="mt-1 w-5 h-5" />
                      <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                        I agree to the <a href="#" className="text-red-600 hover:underline font-semibold">terms & conditions</a> and 
                        <a href="#" className="text-red-600 hover:underline font-semibold ml-1">privacy policy</a>. 
                        I understand this is a premium educational program with high standards.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div>
                  <Card className="sticky top-8 shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-8 text-gray-900">Investment Summary</h3>
                      
                      <div className="space-y-6 mb-8">
                        <div className="p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-100">
                          <h4 className="text-xl font-bold text-gray-900 mb-2">{courses[selectedCourse as keyof typeof courses].title}</h4>
                          <p className="text-gray-600 mb-3">{courses[selectedCourse as keyof typeof courses].subtitle}</p>
                          <p className="text-red-600 font-semibold">{courses[selectedCourse as keyof typeof courses].duration}</p>
                        </div>
                        
                        <div className="space-y-3">
                          <h5 className="font-semibold text-gray-900 mb-4">What's Included:</h5>
                          {courses[selectedCourse as keyof typeof courses].features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="grid gap-4 mt-6">
                          {courses[selectedCourse as keyof typeof courses].highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                              <highlight.icon className="w-5 h-5 text-yellow-600" />
                              <span className="text-yellow-800 font-medium text-sm">{highlight.text}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t-2 border-gray-200 pt-6 space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Course Fee ({plans[selectedPlan as keyof typeof plans].label})</span>
                          <span className="font-semibold">₹{getOriginalPrice().toLocaleString()}</span>
                        </div>
                        {getDiscount() > 0 && (
                          <div className="flex justify-between items-center text-green-600">
                            <span>Annual Discount</span>
                            <span className="font-semibold">-₹{getDiscount().toLocaleString()}</span>
                          </div>
                        )}
                        <div className="flex justify-between items-center font-bold text-xl border-t-2 border-gray-200 pt-4">
                          <span className="text-gray-900">Total Investment:</span>
                          <span className="text-red-600">₹{calculatePrice().toLocaleString()}</span>
                        </div>
                        {selectedPlan !== "monthly" && (
                          <p className="text-sm text-gray-600 text-center">
                            Equivalent to ₹{Math.round(calculatePrice() / (selectedPlan === "quarterly" ? 3 : selectedPlan === "halfYearly" ? 6 : 12)).toLocaleString()}/month
                          </p>
                        )}
                      </div>
                      
                      <Button className="w-full h-14 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-lg font-semibold mt-8 shadow-lg" size="lg">
                        <CreditCard className="w-6 h-6 mr-3" />
                        Secure Your Spot Now
                      </Button>
                      
                      <div className="flex items-center justify-center gap-3 mt-6 text-sm text-gray-500">
                        <Shield className="w-5 h-5" />
                        <span>Secure payment • SSL encrypted • Money-back guarantee</span>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 text-blue-600" />
                          <span className="font-semibold text-blue-900">Premium Support</span>
                        </div>
                        <p className="text-blue-800 text-sm">
                          24/7 support for international students • Multiple payment options • Installment plans available
                        </p>
                      </div>
                    </CardContent>
                  </Card>
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

export default Enrollment;
