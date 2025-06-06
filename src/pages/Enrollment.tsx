
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { CheckCircle, CreditCard, Shield, Star, Clock, Users, Award, MessageCircle, Phone, Sparkles, Trophy, Target, PlayCircle, Music, Globe, Zap } from "lucide-react";

const Enrollment = () => {
  const [selectedPlan, setSelectedPlan] = useState("annually");
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
    halfYearly: { label: "6 Months", discount: 0 },
    annually: { label: "12 Months", discount: 0 }
  };

  const courses = {
    batch: {
      title: "Complete Music Production Mastery Course",
      subtitle: "From Beginner to Advanced Level",
      monthlyPrice: 9599,
      sixMonthDiscount: 5,
      annualDiscount: 15,
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
      sixMonthDiscount: 10,
      annualDiscount: 20,
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

  // WhatsApp Integration
  const openWhatsApp = () => {
    const phoneNumber = "+919876543210";
    const message = encodeURIComponent("Hi! I'm interested in your music production courses. Can you help me with more information?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const calculateDiscountedPrice = (basePrice: number, plan: string, courseKey: string) => {
    const course = courses[courseKey as keyof typeof courses];
    
    switch (plan) {
      case "halfYearly":
        const sixMonthDiscount = course.sixMonthDiscount;
        return Math.round(basePrice * (1 - sixMonthDiscount / 100));
      case "annually":
        const annualDiscount = course.annualDiscount;
        return Math.round(basePrice * (1 - annualDiscount / 100));
      default:
        return basePrice;
    }
  };

  const calculatePrice = () => {
    const course = courses[selectedCourse as keyof typeof courses];
    const basePrice = course.monthlyPrice;
    const discountedMonthlyPrice = calculateDiscountedPrice(basePrice, selectedPlan, selectedCourse);
    
    switch (selectedPlan) {
      case "halfYearly":
        return discountedMonthlyPrice * 6;
      case "annually":
        return discountedMonthlyPrice * 12;
      default:
        return discountedMonthlyPrice;
    }
  };

  const getOriginalPrice = () => {
    const course = courses[selectedCourse as keyof typeof courses];
    const monthlyPrice = course.monthlyPrice;
    
    switch (selectedPlan) {
      case "halfYearly":
        return monthlyPrice * 6;
      case "annually":
        return monthlyPrice * 12;
      default:
        return monthlyPrice;
    }
  };

  const getDiscount = () => {
    const original = getOriginalPrice();
    const discounted = calculatePrice();
    return original - discounted;
  };

  const getDiscountPercentage = () => {
    const course = courses[selectedCourse as keyof typeof courses];
    switch (selectedPlan) {
      case "halfYearly":
        return course.sixMonthDiscount;
      case "annually":
        return course.annualDiscount;
      default:
        return 0;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg transition-all duration-300 hover:scale-110"
          size="lg"
        >
          <Phone className="w-8 h-8" />
        </Button>
      </div>

      <div className="pt-20">
        {/* Compact Hero Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 rounded-full px-6 py-2 mb-6 border border-red-100">
                <Music className="w-4 h-4" />
                <span className="text-sm font-medium">India's Premier Music Production Academy</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                Transform Your
                <span className="block text-red-600 mt-2">Musical Dreams Into Reality</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Join India's most exclusive music production mentorship program designed for serious artists and creative professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Main Enrollment Section - Single Page Layout */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                
                {/* Left Column - Course & Payment Selection */}
                <div className="lg:col-span-2 space-y-8">
                  
                  {/* Payment Plan Selection - Moved to Top */}
                  <div>
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Choose Your Payment Plan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {Object.entries(plans).map(([key, plan]) => (
                        <Button
                          key={key}
                          variant={selectedPlan === key ? "default" : "outline"}
                          className={`h-16 text-sm font-semibold relative ${
                            selectedPlan === key 
                              ? selectedCourse === "oneOnOne"
                                ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black"
                                : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600"
                              : "border-2 hover:border-red-300"
                          }`}
                          onClick={() => setSelectedPlan(key)}
                        >
                          <div className="text-center">
                            <div className="font-bold">{plan.label}</div>
                            {key === "halfYearly" && (
                              <div className="text-xs opacity-80">Save {courses[selectedCourse as keyof typeof courses].sixMonthDiscount}%</div>
                            )}
                            {key === "annually" && (
                              <div className="text-xs opacity-80">Save {courses[selectedCourse as keyof typeof courses].annualDiscount}%</div>
                            )}
                          </div>
                        </Button>
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-green-800 font-medium text-sm">
                          {selectedPlan === "annually" && selectedCourse === "oneOnOne" && `Save ₹${getDiscount().toLocaleString()} with annual payment! Exclusive 20% discount.`}
                          {selectedPlan === "annually" && selectedCourse === "batch" && `Save ₹${getDiscount().toLocaleString()} with annual payment! 15% discount.`}
                          {selectedPlan === "halfYearly" && selectedCourse === "oneOnOne" && `Save ₹${getDiscount().toLocaleString()} with 6-month payment! 10% discount.`}
                          {selectedPlan === "halfYearly" && selectedCourse === "batch" && `Save ₹${getDiscount().toLocaleString()} with 6-month payment! 5% discount.`}
                          {selectedPlan === "monthly" && "Flexible monthly payments with premium support included."}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Course Selection */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-6 text-gray-900">Select Your Program</h3>
                    <div className="grid gap-4">
                      {Object.entries(courses).map(([key, course]) => (
                        <Card 
                          key={key}
                          className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-lg relative overflow-hidden ${
                            selectedCourse === key 
                              ? course.premium 
                                ? "border-amber-400 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 shadow-lg ring-2 ring-amber-200" 
                                : "border-red-500 bg-gradient-to-r from-red-50 to-orange-50 shadow-lg"
                              : "border-gray-200 hover:border-red-300"
                          }`}
                          onClick={() => setSelectedCourse(key)}
                        >
                          {course.premium && (
                            <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-3 py-1 text-xs font-bold rounded-bl-lg shadow-lg">
                              ✨ PREMIUM GOLD
                            </div>
                          )}
                          <CardContent className="p-4">
                            <div className="flex items-start gap-3">
                              <div className={`w-5 h-5 rounded-full border-2 mt-1 flex-shrink-0 ${
                                selectedCourse === key 
                                  ? course.premium 
                                    ? "bg-amber-500 border-amber-500" 
                                    : "bg-red-500 border-red-500"
                                  : "border-gray-300"
                              }`}>
                                {selectedCourse === key && <CheckCircle className="w-5 h-5 text-white -m-0.5" />}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="text-lg font-bold text-gray-900">{course.title}</h4>
                                  {course.popular && <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">POPULAR</span>}
                                </div>
                                <p className="text-gray-600 mb-2 text-sm">{course.subtitle}</p>
                                <div className="flex flex-wrap gap-3 mb-3 text-sm">
                                  <span className="flex items-center gap-1 text-red-600 font-semibold">
                                    <Clock className="w-3 h-3" />
                                    {course.duration}
                                  </span>
                                  <span className="flex items-center gap-1 text-gray-700">
                                    <Users className="w-3 h-3" />
                                    {course.batchSize}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="flex items-center gap-2">
                                    {(selectedPlan === "halfYearly" || selectedPlan === "annually") && (
                                      <span className="text-base font-semibold text-gray-400 line-through">
                                        ₹{course.monthlyPrice.toLocaleString()}
                                      </span>
                                    )}
                                    <span className={`text-xl font-bold ${course.premium ? 'text-amber-600' : 'text-red-600'}`}>
                                      ₹{calculateDiscountedPrice(course.monthlyPrice, selectedPlan, key).toLocaleString()}
                                    </span>
                                    <span className="text-gray-500 text-sm">/month</span>
                                    {(selectedPlan === "halfYearly" || selectedPlan === "annually") && (
                                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                                        SAVE {getDiscountPercentage()}%
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Compact Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-900">Personal Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">First Name</label>
                        <Input 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Your first name"
                          className="h-10 border-2 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Last Name</label>
                        <Input 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name"
                          className="h-10 border-2 focus:border-red-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
                        <Input 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
                          className="h-10 border-2 focus:border-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Phone Number</label>
                        <Input 
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 9876543210"
                          className="h-10 border-2 focus:border-red-500"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Experience Level</label>
                        <select 
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full h-10 p-3 border-2 border-gray-300 rounded-md focus:border-red-500 focus:outline-none"
                        >
                          <option value="">Select experience level</option>
                          <option value="beginner">Complete Beginner</option>
                          <option value="some">Some Experience (&lt; 1 year)</option>
                          <option value="intermediate">Intermediate (1-3 years)</option>
                          <option value="advanced">Advanced (3+ years)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-gray-700">Coupon Code (Optional)</label>
                        <Input 
                          name="couponCode"
                          value={formData.couponCode}
                          onChange={handleInputChange}
                          placeholder="Enter coupon code"
                          className="h-10 border-2 focus:border-red-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <input type="checkbox" id="terms" className="mt-1 w-4 h-4" />
                      <label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                        I agree to the <a href="#" className="text-red-600 hover:underline font-semibold">terms & conditions</a> and 
                        <a href="#" className="text-red-600 hover:underline font-semibold ml-1">privacy policy</a>.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Right Column - Compact Summary */}
                <div>
                  <Card className={`sticky top-8 shadow-xl border-0 overflow-hidden ${
                    selectedCourse === "oneOnOne" 
                      ? "bg-gradient-to-br from-amber-50 via-yellow-50 to-white ring-2 ring-amber-200" 
                      : "bg-gradient-to-br from-white via-red-50 to-white ring-1 ring-red-100"
                  }`}>
                    <CardContent className="p-0">
                      {/* Header Section */}
                      <div className={`p-6 ${
                        selectedCourse === "oneOnOne" 
                          ? "bg-gradient-to-r from-amber-500 to-yellow-500" 
                          : "bg-gradient-to-r from-red-600 to-red-500"
                      } text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 opacity-20">
                          <Sparkles className="w-16 h-16" />
                        </div>
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-3">
                            <Trophy className="w-6 h-6" />
                            <span className="font-bold">Your Investment</span>
                          </div>
                          <h3 className="text-lg font-bold mb-1">{courses[selectedCourse as keyof typeof courses].title}</h3>
                          <p className="text-sm opacity-90">{courses[selectedCourse as keyof typeof courses].subtitle}</p>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Course Details */}
                        <div className="mb-6">
                          <div className={`p-3 rounded-lg border-2 ${
                            selectedCourse === "oneOnOne" 
                              ? "bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200" 
                              : "bg-gradient-to-r from-red-50 to-orange-50 border-red-200"
                          }`}>
                            <p className={`font-semibold ${selectedCourse === "oneOnOne" ? "text-amber-700" : "text-red-700"}`}>
                              {courses[selectedCourse as keyof typeof courses].duration}
                            </p>
                            <p className="text-gray-600 text-sm">
                              {courses[selectedCourse as keyof typeof courses].batchSize}
                            </p>
                          </div>
                        </div>
                        
                        {/* Key Features - Compact */}
                        <div className="space-y-2 mb-6">
                          <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            Key Features:
                          </h5>
                          <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                            {courses[selectedCourse as keyof typeof courses].features.slice(0, 4).map((feature, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle className="w-3 h-3 text-green-600 mt-1 flex-shrink-0" />
                                <span className="text-gray-700 text-xs leading-relaxed">{feature}</span>
                              </div>
                            ))}
                            {courses[selectedCourse as keyof typeof courses].features.length > 4 && (
                              <div className="text-xs text-gray-500 italic">+ {courses[selectedCourse as keyof typeof courses].features.length - 4} more features included</div>
                            )}
                          </div>
                        </div>
                        
                        {/* Pricing Section */}
                        <div className="border-t-2 border-gray-200 pt-4 space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium text-sm">Program Investment ({plans[selectedPlan as keyof typeof plans].label})</span>
                            {getDiscount() > 0 ? (
                              <div className="text-right">
                                <div className="text-sm font-semibold text-gray-400 line-through">₹{getOriginalPrice().toLocaleString()}</div>
                                <div className="font-bold text-green-600">₹{calculatePrice().toLocaleString()}</div>
                              </div>
                            ) : (
                              <span className="font-bold">₹{calculatePrice().toLocaleString()}</span>
                            )}
                          </div>
                          {getDiscount() > 0 && (
                            <div className="flex justify-between items-center text-green-600 bg-green-50 p-2 rounded-lg">
                              <span className="font-medium text-sm">Smart Saver Bonus ({getDiscountPercentage()}% off)</span>
                              <span className="font-bold text-sm">-₹{getDiscount().toLocaleString()}</span>
                            </div>
                          )}
                          <div className={`flex justify-between items-center font-bold text-xl border-t-2 border-gray-200 pt-3 ${
                            selectedCourse === "oneOnOne" ? "text-amber-600" : "text-red-600"
                          }`}>
                            <span className="text-gray-900">Total Investment:</span>
                            <span>₹{calculatePrice().toLocaleString()}</span>
                          </div>
                          {selectedPlan !== "monthly" && (
                            <p className="text-xs text-gray-600 text-center bg-blue-50 p-2 rounded">
                              Only ₹{Math.round(calculatePrice() / (selectedPlan === "halfYearly" ? 6 : 12)).toLocaleString()}/month
                            </p>
                          )}
                        </div>
                        
                        <Button 
                          className={`w-full h-12 text-base font-bold mt-6 shadow-lg transition-all duration-300 hover:scale-105 ${
                            selectedCourse === "oneOnOne" 
                              ? "bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black" 
                              : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600"
                          }`} 
                          size="lg"
                        >
                          <CreditCard className="w-5 h-5 mr-2" />
                          🚀 Secure Your Future
                        </Button>
                        
                        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                          <Shield className="w-4 h-4" />
                          <span>Secure payment • SSL encrypted</span>
                        </div>

                        <div className="mt-3">
                          <Button 
                            onClick={openWhatsApp}
                            variant="outline" 
                            className="w-full bg-green-50 border-green-200 text-green-700 hover:bg-green-100 h-10 text-sm"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Get Help on WhatsApp
                          </Button>
                        </div>
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
