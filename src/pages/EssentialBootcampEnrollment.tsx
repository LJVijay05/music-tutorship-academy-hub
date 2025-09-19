import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { 
  CheckCircle, 
  Star, 
  Clock, 
  Users, 
  Phone, 
  TrendingUp
} from "lucide-react";
import { useStudentForm } from "@/hooks/useStudentForm";
import StudentDataForm from "@/components/StudentDataForm";
import SuccessPopup from "@/components/SuccessPopup";
import { Badge } from "@/components/ui/badge";

const EssentialBootcampEnrollment = () => {
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

  const course = {
    title: "Essential Producer Bootcamp",
    subtitle: "Launch Your Music Career in 3 Months",
    duration: "3 Months Intensive Program",
    batchSize: "15 Students Per Batch",
    price: 49800,
    features: [
      "Twice-weekly sessions",
      "Hands-on project work",
      "Small group learning",
      "Individual project guidance",
      "Career mentoring included"
    ]
  };

  const openWhatsApp = () => {
    const phoneNumber = "+916374428173";
    const message = encodeURIComponent("Hi! I'm interested in the Essential Producer Bootcamp course. Can you help me with more information?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
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
        redirectTo="/essential-bootcamp-enrollment"
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
        <section className="py-12 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">Most Popular Course</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Essential Producer Bootcamp
                <span className="block text-orange-200">Launch Your Music Career</span>
              </h1>

              <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                Start your music production journey with our intensive 3-month program
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Course Enrollment</h2>
                <p className="text-gray-600">Complete your registration for the Essential Producer Bootcamp</p>
              </div>

              {/* Course Card */}
              <Card className="border-2 border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 shadow-xl relative mb-8">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
                
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">{course.subtitle}</p>
                  </div>
                  
                  {/* Course Details */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700">{course.batchSize}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-orange-500" />
                        What You'll Get:
                      </h4>
                      <ul className="space-y-2">
                        {course.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg border border-orange-300 p-6 text-center">
                    <div className="text-sm text-orange-700 font-semibold mb-2 flex items-center justify-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Special Launch Offer
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      8,200 INR per month
                    </div>
                    <div className="text-lg text-gray-600 mb-2">
                      Easy EMI offer available
                    </div>
                    <div className="text-xl font-bold text-orange-600 mb-3">
                      ₹{course.price.toLocaleString()} <span className="text-base font-normal text-gray-600">total</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      ✨ Most affordable way to start your music journey
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://wa.me/916374428173?text=I%20want%20to%20enroll%20in%20the%20Essential%20Producer%20Bootcamp', '_blank')}
                >
                  Enroll Now - Pay ₹49,800
                </Button>
                <Button 
                  variant="outline"
                  className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-lg font-semibold rounded-lg"
                  onClick={openWhatsApp}
                >
                  Have Questions? Chat with Us
                </Button>
              </div>

              {/* Benefits Section */}
              <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
                  Why Choose Our Essential Producer Bootcamp?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Intensive Learning</h4>
                    <p className="text-gray-600 text-sm">3 months of focused, hands-on training to kickstart your career</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Small Batches</h4>
                    <p className="text-gray-600 text-sm">Only 15 students per batch for personalized attention</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Career Support</h4>
                    <p className="text-gray-600 text-sm">Individual guidance and mentoring for your music career</p>
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

export default EssentialBootcampEnrollment;