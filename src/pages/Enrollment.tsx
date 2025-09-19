import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    mentorship: {
      title: "One-on-One Music Production Mentorship",
      subtitle: "Personalized Learning Experience",
      duration: "Flexible Schedule",
      batchSize: "1-on-1 Sessions",
      monthlyPrice: 15999,
      annualPrice: 163188,
      totalPrice: 191988,
      savings: 28800,
      features: [
        "Personalized curriculum design",
        "Direct mentor access",
        "Flexible scheduling",
        "Individual project guidance",
        "Career mentoring included"
      ],
      badge: "Premium",
      badgeColor: "bg-purple-600",
      cardGradient: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-700"
    }
  };

  const openWhatsApp = () => {
    const phoneNumber = "+916374428173";
    const message = encodeURIComponent("Hi! I'm interested in your music production courses. Can you help me with more information?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const getDisplayPrice = () => {
    if (selectedCourse === "mastery") {
      return selectedPlan === "annually" 
        ? { price: courses.mastery.annualPrice, period: "annually", monthly: 9859 }
        : { price: courses.mastery.monthlyPrice, period: "monthly", monthly: null };
    }
    if (selectedCourse === "mentorship") {
      return selectedPlan === "annually" 
        ? { price: courses.mentorship.annualPrice, period: "annually", monthly: Math.round(courses.mentorship.annualPrice / 12) }
        : { price: courses.mentorship.monthlyPrice, period: "monthly", monthly: null };
    }
    return { price: 0, period: "one-time", monthly: null };
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
            <div className="max-w-7xl mx-auto">
              
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

              {/* Course Cards Grid - Clean Aligned Layout */}
              <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                
                {/* Essential Producer Bootcamp - Special Section */}
                <div className="col-span-full mb-8">
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6 text-center border border-orange-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Looking for our Essential Producer Bootcamp?</h3>
                    <p className="text-gray-700 mb-4">Launch Your Music Career in 3 Months - Our most popular short program</p>
                    <Button 
                      className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg"
                      asChild
                    >
                      <Link to="/essential-bootcamp-enrollment">
                        View Essential Bootcamp →
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Complete Music Production Mastery Course - Center Card */}
                <Card 
                  className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-xl relative ${
                    selectedCourse === "mastery" 
                      ? "border-red-500 bg-gradient-to-br from-red-50 to-red-100 shadow-lg" 
                      : "border-gray-200 hover:border-red-300 bg-white"
                  }`}
                  onClick={() => setSelectedCourse("mastery")}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <Award className="w-3 h-3 mr-1" />
                      Best Value
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    {/* Header - Course Selection */}
                    <div className="flex items-start gap-3 mb-6">
                      <div className={`w-6 h-6 rounded-full border-2 mt-1 flex-shrink-0 transition-all ${
                        selectedCourse === "mastery" 
                          ? "bg-red-500 border-red-500" 
                          : "border-gray-300"
                      }`}>
                        {selectedCourse === "mastery" && <CheckCircle className="w-6 h-6 text-white -m-0.5" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          Complete Music Production Mastery Course
                        </h3>
                      </div>
                    </div>
                    
                    {/* Course Details */}
                    <div className="mb-6">
                      <p className="text-gray-600 font-medium text-base mb-3">{courses.mastery.subtitle}</p>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{courses.mastery.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{courses.mastery.batchSize}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3 text-base">
                        <Star className="w-4 h-4 text-red-500" />
                        Key Features:
                      </h4>
                      <ul className="space-y-2.5">
                        {courses.mastery.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-5 text-center">
                      {selectedPlan === "annually" ? (
                        <>
                          <div className="text-sm text-green-700 font-semibold mb-2 flex items-center justify-center gap-1">
                            <Crown className="w-3 h-3" />
                            Best Value Plan
                          </div>
                          <div className="text-3xl font-bold text-red-600 mb-2">
                            ₹{Math.round(courses.mastery.annualPrice / 12).toLocaleString()}
                            <span className="text-base font-normal text-gray-600">/month</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            billed annually
                          </div>
                          <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            <span>💰 Save ₹{courses.mastery.savings.toLocaleString()}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm text-gray-500 mb-2">Monthly Investment</div>
                          <div className="text-3xl font-bold text-red-600 mb-2">
                            ₹{courses.mastery.monthlyPrice.toLocaleString()}
                            <span className="text-base font-normal text-gray-600">/month</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">flexible monthly billing</div>
                          <div className="text-sm text-gray-500">
                            Just ₹387/day - less than a coffee shop visit!
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* One-on-One Music Production Mentorship - Right Card */}
                <Card 
                  className={`cursor-pointer border-2 transition-all duration-300 hover:shadow-xl relative ${
                    selectedCourse === "mentorship" 
                      ? "border-purple-500 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-lg" 
                      : "border-gray-200 hover:border-purple-300 bg-white"
                  }`}
                  onClick={() => setSelectedCourse("mentorship")}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      <Crown className="w-3 h-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    {/* Header - Course Selection */}
                    <div className="flex items-start gap-3 mb-6">
                      <div className={`w-6 h-6 rounded-full border-2 mt-1 flex-shrink-0 transition-all ${
                        selectedCourse === "mentorship" 
                          ? "bg-purple-500 border-purple-500" 
                          : "border-gray-300"
                      }`}>
                        {selectedCourse === "mentorship" && <CheckCircle className="w-6 h-6 text-white -m-0.5" />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          One-on-One Music Production Mentorship
                        </h3>
                      </div>
                    </div>
                    
                    {/* Course Details */}
                    <div className="mb-6">
                      <p className="text-gray-600 font-medium text-base mb-3">{courses.mentorship.subtitle}</p>
                      
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{courses.mentorship.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{courses.mentorship.batchSize}</span>
                        </div>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-8">
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3 text-base">
                        <Star className="w-4 h-4 text-purple-500" />
                        Premium Features:
                      </h4>
                      <ul className="space-y-2.5">
                        {courses.mentorship.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200 p-5 text-center">
                      {selectedPlan === "annually" ? (
                        <>
                          <div className="text-sm text-purple-700 font-semibold mb-2 flex items-center justify-center gap-1">
                            <Crown className="w-3 h-3" />
                            Premium Experience
                          </div>
                          <div className="text-3xl font-bold text-purple-600 mb-2">
                            ₹{Math.round(courses.mentorship.annualPrice / 12).toLocaleString()}
                            <span className="text-base font-normal text-gray-600">/month</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">
                            billed annually
                          </div>
                          <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                            <span>💰 Save ₹{courses.mentorship.savings.toLocaleString()}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="text-sm text-gray-500 mb-2">Monthly Investment</div>
                          <div className="text-3xl font-bold text-purple-600 mb-2">
                            ₹{courses.mentorship.monthlyPrice.toLocaleString()}
                            <span className="text-base font-normal text-gray-600">/month</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-2">flexible monthly billing</div>
                          <div className="text-sm text-gray-500">
                            Premium personalized training for ₹533/day
                          </div>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 text-center">
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                  <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="text-green-600 text-2xl font-bold mb-2">100%</div>
                    <div className="text-gray-700 font-medium">Money-Back Guarantee</div>
                    <div className="text-sm text-gray-500 mt-1">15-day trial period</div>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="text-blue-600 text-2xl font-bold mb-2">500+</div>
                    <div className="text-gray-700 font-medium">Successful Students</div>
                    <div className="text-sm text-gray-500 mt-1">Industry-ready producers</div>
                  </div>
                  <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="text-purple-600 text-2xl font-bold mb-2">24/7</div>
                    <div className="text-gray-700 font-medium">Support Available</div>
                    <div className="text-sm text-gray-500 mt-1">WhatsApp & email support</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Enroll Now - Start Your Journey
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Secure payment • Instant access • 15-day guarantee
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