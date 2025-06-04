
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { CheckCircle, CreditCard, Shield } from "lucide-react";

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
    quarterly: { label: "Quarterly", discount: 10 },
    annually: { label: "Annually", discount: 20 }
  };

  const courses = {
    batch: {
      title: "Music Production Batch Mentorship",
      subtitle: "From Beginner to Advanced Level",
      price: 11999,
      duration: "12 Months Duration - 10 Students Per Batch",
      features: [
        "15 students per batch",
        "Live weekly sessions",
        "Group collaboration projects",
        "Industry-standard software training",
        "Certificate upon completion"
      ]
    },
    oneOnOne: {
      title: "One-on-One Music Production Mentorship",
      subtitle: "Flagship Course - 4 Classes / Month",
      price: 16000,
      duration: "Master the complete journey of music production",
      features: [
        "Personalized curriculum",
        "Flexible scheduling",
        "Direct mentor feedback",
        "Custom project development",
        "Lifetime support access"
      ]
    }
  };

  const calculatePrice = () => {
    const basePrice = courses[selectedCourse].price;
    const discount = plans[selectedPlan].discount;
    return Math.round(basePrice * (1 - discount / 100));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-red-50 to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Course <span className="text-red-600">Enrollment</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Register for our music tutorship program and become a student at our school.
            </p>
            <p className="text-lg text-gray-500">
              Fill out the form below to start your musical journey with us.
            </p>
          </div>
        </section>

        {/* Enrollment Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                
                {/* Form Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-8">Enrollment Details</h2>
                  
                  {/* Course Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Choose Course</h3>
                    <div className="grid gap-4">
                      {Object.entries(courses).map(([key, course]) => (
                        <Card 
                          key={key}
                          className={`cursor-pointer border-2 transition-all ${
                            selectedCourse === key ? "border-red-500 bg-red-50" : "border-gray-200"
                          }`}
                          onClick={() => setSelectedCourse(key)}
                        >
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full border-2 ${
                                selectedCourse === key ? "bg-red-500 border-red-500" : "border-gray-300"
                              }`} />
                              <div>
                                <h4 className="font-semibold">{course.title}</h4>
                                <p className="text-sm text-gray-600">{course.subtitle}</p>
                                <p className="text-sm text-red-600 font-semibold">₹{course.price.toLocaleString()}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Plan Selection */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Select Your Plan</h3>
                    <div className="flex gap-2 mb-4">
                      {Object.entries(plans).map(([key, plan]) => (
                        <Button
                          key={key}
                          variant={selectedPlan === key ? "default" : "outline"}
                          className={selectedPlan === key ? "bg-red-600 hover:bg-red-700" : ""}
                          onClick={() => setSelectedPlan(key)}
                        >
                          {plan.label}
                        </Button>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>
                        {selectedPlan === "quarterly" && "Enroll for 3 Month & Get 10% Off!"}
                        {selectedPlan === "annually" && "Enroll for 1 Year & Get 20% Off!"}
                        {selectedPlan === "monthly" && "Monthly payment option available"}
                      </span>
                    </div>
                  </div>

                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Your first name" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Your last name" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com" 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9876543210" 
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Music Production Experience</label>
                      <select 
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md"
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Complete Beginner</option>
                        <option value="some">Some Experience (< 1 year)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Coupon Code (Optional)</label>
                      <Input 
                        name="couponCode"
                        value={formData.couponCode}
                        onChange={handleInputChange}
                        placeholder="Enter coupon code" 
                      />
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="terms" className="mt-1" />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the <a href="#" className="text-red-600 hover:underline">terms & conditions</a>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div>
                  <Card className="sticky top-8">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold">{courses[selectedCourse].title}</h4>
                          <p className="text-sm text-gray-600">{courses[selectedCourse].subtitle}</p>
                          <p className="text-sm text-red-600">{courses[selectedCourse].duration}</p>
                        </div>
                        
                        <div className="space-y-2">
                          {courses[selectedCourse].features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t pt-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Course Fee</span>
                          <span>₹{courses[selectedCourse].price.toLocaleString()}</span>
                        </div>
                        {plans[selectedPlan].discount > 0 && (
                          <div className="flex justify-between text-green-600">
                            <span>{plans[selectedPlan].label} Discount ({plans[selectedPlan].discount}%)</span>
                            <span>-₹{(courses[selectedCourse].price * plans[selectedPlan].discount / 100).toLocaleString()}</span>
                          </div>
                        )}
                        <div className="flex justify-between font-bold text-lg border-t pt-2">
                          <span>Total INR:</span>
                          <span className="text-red-600">₹{calculatePrice().toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-red-600 hover:bg-red-700 mt-6" size="lg">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Proceed to Payment
                      </Button>
                      
                      <div className="flex items-center justify-center gap-2 mt-4 text-sm text-gray-500">
                        <Shield className="w-4 h-4" />
                        <span>Secure payment powered by Stripe</span>
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
