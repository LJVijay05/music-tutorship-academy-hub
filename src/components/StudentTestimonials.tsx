
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const StudentTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Electronic Music Producer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=150&h=150&fit=crop&crop=face",
      content: "This mentorship program completely transformed my approach to music production. The personalized guidance helped me land my first record deal within 6 months.",
      rating: 5,
      achievement: "Signed with Atlantic Records"
    },
    {
      name: "Marcus Rodriguez",
      role: "Hip-Hop Producer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      content: "The technical depth and industry insights I gained here are unmatched. My mentor's feedback on my beats helped me develop a signature sound that artists love.",
      rating: 5,
      achievement: "Produced for Grammy nominees"
    },
    {
      name: "Emily Watson",
      role: "Singer-Songwriter & Producer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "From bedroom producer to professional studio owner - this journey wouldn't have been possible without the comprehensive training and ongoing support.",
      rating: 5,
      achievement: "Opened production studio"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Success
            <span className="block font-light bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Hear from our graduates who are now making waves in the music industry
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-12 text-center">
              <Quote className="w-16 h-16 text-gray-300 mx-auto mb-8" />
              
              <blockquote className="text-2xl md:text-3xl font-light text-gray-800 leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full shadow-lg"
                />
                <div className="text-left">
                  <div className="text-xl font-medium text-gray-900">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="text-gray-600">{testimonials[activeIndex].role}</div>
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonials[activeIndex].achievement}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
              index === activeIndex ? "ring-2 ring-blue-600" : ""
            }`} onClick={() => setActiveIndex(index)}>
              <CardContent className="p-8 text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg"
                />
                <h3 className="text-lg font-medium text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{testimonial.role}</p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
