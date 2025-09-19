import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Award, 
  Phone, 
  Music as MusicIcon,
  Crown,
  TrendingUp,
  Zap
} from "lucide-react";
import { useStudentForm } from "@/hooks/useStudentForm";
import StudentDataForm from "@/components/StudentDataForm";
import SuccessPopup from "@/components/SuccessPopup";
import { Badge } from "@/components/ui/badge";

const Enrollment = () => {
  const [selectedPlan, setSelectedPlan] = useState("annually");
  const [selectedCourse, setSelectedCourse] = useState("mastery");
  const [studentData, setStudentData] = useState<any>(null);
  const { 
    showStudentForm, 
    showSuccessPopup, 
    setShowStudentForm, 
    showSuccess, 
    closeSuccess 
  } = useStudentForm();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const storedStudentData = localStorage.getItem('studentData');
    if (storedStudentData) {
      try {
        const parsedData = JSON.parse(storedStudentData);
        setStudentData(parsedData);
      } catch (error) {
        console.error("Error parsing student data:", error);
        localStorage.removeItem('studentData');
        setShowStudentForm(true);
      }
    } else {
      setShowStudentForm(true);
    }
  }, [setShowStudentForm]);

  const handleFormSuccess = () => {
    const storedStudentData = localStorage.getItem('studentData');
    if (storedStudentData) {
      try {
        const parsedData = JSON.parse(storedStudentData);
        setStudentData(parsedData);
      } catch (error) {
        console.error("Error parsing updated student data:", error);
      }
    }
    showSuccess();
  };

  const courses = {
    mastery: {
      title: "Complete Music Production Mastery Course",
      subtitle: "Beginner to Advanced Level",
      duration: "12 Months",
      batchSize: "30 Students Per Batch",
      monthlyPrice: 11599,
      annualPrice: 118308,
      totalPrice: 139188,
      savings: 20880,
      features: [
        "Weekly live interactive sessions",
        "Industry-standard DAW training (Logic Pro, Ableton)",
        "Collaborative projects",
        "Small premium batch size"
      ],
      badge: "Best Value",
      badgeColor: "bg-red-600",
      cardGradient: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-700"
    },
    bootcamp: {
      title: "Essential Producer Bootcamp",
      subtitle: "Beginner to Intermediate Level",
      duration: "3 Months Intensive Program",
      batchSize: "15 Students Per Batch",
      price: 49800,
      features: [
        "Twice-weekly sessions",
        "Hands-on project work",
        "Small group learning"
      ],
      badge: "Most Popular",
      badgeColor: "bg-coral-500",
      cardGradient: "from-coral-50 to-pink-50",
      borderColor: "border-coral-200",
      textColor: "text-coral-700"
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "+919876543210";
    const message = encodeURIComponent("Hi! I'm interested in your music production courses. Can you help me with more information?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const getDisplayPrice = () => {
    if (selectedCourse === "mastery") {
      return selectedPlan === "annually" 
        ? { price: courses.mastery.annualPrice, period: "annually", monthly: 9859 }
        : { price: courses.mastery.monthlyPrice, period: "monthly", monthly: null };
    }
    return { price: courses.bootcamp.price, period: "one-time", monthly: null };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50">
      <Navigation />
      
      <StudentDataForm 
        open={showStudentForm} 
        onOpenChange={setShowStudentForm}
        onSuccess={handleFormSuccess}
      />

      <SuccessPopup
        open={showSuccessPopup}
        onOpenChange={closeSuccess}
        title="Registration Complete!"
        message="Your information has been successfully saved. You can now proceed with the enrollment and payment process."
        buttonText="Continue"
        redirectTo="/enrollment"
      />
      
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
          size="icon"
          aria-label="Contact via WhatsApp"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </div>

      <div className="pt-20">
        <section className="py-12 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <Crown className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Music Education</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Master Music Production
                <span className="block text-red-200">With India's Best</span>
              </h1>

              <p className="text-xl text-red-100 max-w-2xl mx-auto">
                Choose your path to professional music production mastery
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              
              {/* Payment Plan Toggle */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Choose Your Payment Plan</h2>
                <div className="inline-flex bg-gray-100 rounded-lg p-1 mx-auto">
                  <Button
                    variant={selectedPlan === "monthly" ? "default" : "ghost"}
                    className={`px-8 py-3 rounded-md font-semibold transition-all ${
                      selectedPlan === "monthly" 
                        ? "bg-white shadow-sm text-gray-900" 
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setSelectedPlan("monthly")}
                  >
                    Monthly
                  </Button>
                  <Button
                    variant={selectedPlan === "annually" ? "default" : "ghost"}
                    className={`px-8 py-3 rounded-md font-semibold transition-all relative ${
                      selectedPlan === "annually" 
                        ? "bg-red-600 text-white shadow-lg" 
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                    onClick={() => setSelectedPlan("annually")}
                  >
                    Annual
                    <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5">
                      Save 15%
                    </Badge>
                  </Button>
                </div>
              </div>

              {/* Course Cards Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Complete Music Production Mastery Course */}
                <Card 
                  className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-xl relative overflow-hidden ${
                    selectedCourse === "mastery" 
                      ? "border-red-500 bg-gradient-to-br from-red-50 to-red-100 shadow-lg ring-2 ring-red-200" 
                      : "border-gray-200 hover:border-red-300 bg-white"
                  }`}
                  onClick={() => setSelectedCourse("mastery")}
                >
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-600 text-white font-semibold">
                      <Award className="w-3 h-3 mr-1" />
                      Best Value
                    </Badge>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-6 h-6 rounded-full border-2 mt-1 flex-shrink-0 transition-all ${
                        selectedCourse === "mastery" 
                          ? "bg-red-500 border-red-500" 
                          : "border-gray-300"
                      }`}>
                        {selectedCourse === "mastery" && <CheckCircle className="w-6 h-6 text-white -m-0.5" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Complete Music Production Mastery Course
                        </h3>
                        <p className="text-gray-600 mb-1">{courses.mastery.subtitle}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {courses.mastery.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {courses.mastery.batchSize}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Star className="w-4 h-4 text-red-500" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {courses.mastery.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="text-center p-4 bg-white/80 rounded-lg border">
                        {selectedPlan === "annually" ? (
                          <>
                            <div className="text-sm text-gray-500 mb-1">Annual Payment</div>
                            <div className="text-3xl font-bold text-red-600 mb-1">
                              ₹{courses.mastery.annualPrice.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">
                              Only ₹{Math.round(courses.mastery.annualPrice / 12).toLocaleString()}/month paid annually
                            </div>
                            <div className="text-xs text-green-600 font-medium mt-2">
                              Save ₹{courses.mastery.savings.toLocaleString()} (15% off)
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="text-sm text-gray-500 mb-1">Monthly Payment</div>
                            <div className="text-3xl font-bold text-red-600">
                              ₹{courses.mastery.monthlyPrice.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-600">per month</div>
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Essential Producer Bootcamp */}
                <Card 
                  className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-xl relative overflow-hidden ${
                    selectedCourse === "bootcamp" 
                      ? "border-coral-500 bg-gradient-to-br from-coral-50 to-pink-50 shadow-lg ring-2 ring-coral-200" 
                      : "border-gray-200 hover:border-coral-300 bg-white"
                  }`}
                  onClick={() => setSelectedCourse("bootcamp")}
                >
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-coral-500 text-white font-semibold">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-6 h-6 rounded-full border-2 mt-1 flex-shrink-0 transition-all ${
                        selectedCourse === "bootcamp" 
                          ? "bg-coral-500 border-coral-500" 
                          : "border-gray-300"
                      }`}>
                        {selectedCourse === "bootcamp" && <CheckCircle className="w-6 h-6 text-white -m-0.5" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          Essential Producer Bootcamp
                        </h3>
                        <p className="text-gray-600 mb-1">{courses.bootcamp.subtitle}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Zap className="w-4 h-4" />
                            {courses.bootcamp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {courses.bootcamp.batchSize}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Star className="w-4 h-4 text-coral-500" />
                        Features:
                      </h4>
                      <ul className="space-y-2">
                        {courses.bootcamp.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div className="text-center p-4 bg-white/80 rounded-lg border">
                        <div className="text-sm text-gray-500 mb-1">One-time Payment</div>
                        <div className="text-3xl font-bold text-coral-600">
                          ₹{courses.bootcamp.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-600">Complete Course</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Enroll Now Button */}
              <div className="text-center mt-12">
                <Button 
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg px-12 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setShowStudentForm(true)}
                >
                  <Crown className="w-5 h-5 mr-2" />
                  Enroll Now - Start Your Journey
                </Button>
                <p className="text-sm text-gray-600 mt-3">
                  🔒 Secure enrollment • 💰 Money-back guarantee • 🎓 Industry certification
                </p>
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