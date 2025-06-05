
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, PenTool, Sparkles, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Coming Soon Section */}
        <section className="py-32 min-h-[80vh] flex items-center justify-center">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Animated Icon */}
              <div className="relative mb-12 animate-bounce">
                <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto flex items-center justify-center shadow-2xl">
                  <PenTool className="w-16 h-16 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
                  <Sparkles className="w-4 h-4 text-yellow-800" />
                </div>
              </div>

              {/* Main Content */}
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent animate-fade-in">
                Coming Soon
              </h1>
              
              <p className="text-2xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
                We're crafting something <span className="text-red-600 font-semibold">extraordinary</span> for you
              </p>
              
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '400ms' }}>
                Our music production blog is currently in development. Get ready for in-depth tutorials, 
                industry insights, gear reviews, and exclusive content from professional producers.
              </p>

              {/* Features Preview */}
              <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Calendar className="w-8 h-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Weekly Tutorials</h3>
                  <p className="text-gray-600 text-sm">Step-by-step production guides</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Sparkles className="w-8 h-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Industry Insights</h3>
                  <p className="text-gray-600 text-sm">Behind-the-scenes content</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <PenTool className="w-8 h-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Expert Tips</h3>
                  <p className="text-gray-600 text-sm">Professional techniques revealed</p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-2xl p-8 text-white shadow-2xl animate-fade-in" style={{ animationDelay: '800ms' }}>
                <h3 className="text-2xl font-bold mb-4">Be the First to Know</h3>
                <p className="mb-6">Join our community and get notified when we launch</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2">
                    Notify Me
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a 
                    href="/contact" 
                    className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
                  >
                    Contact Us
                  </a>
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

export default Blog;
