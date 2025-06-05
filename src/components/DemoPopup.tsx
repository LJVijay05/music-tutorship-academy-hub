
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, Users, User } from "lucide-react";

interface DemoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoPopup = ({ isOpen, onClose }: DemoPopupProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    dateOfBirth: '',
    interests: []
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
    onClose();
  };

  const courseOptions = [
    {
      id: "complete-music-production-course", 
      title: "Complete Music Production Course",
      icon: Users,
      description: "From beginner to advanced level"
    },
    {
      id: "one-on-one-mentorship",
      title: "One-on-One Music Production Mentorship",
      icon: User,
      description: "Personalized guidance & feedback"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg mx-auto bg-white rounded-3xl p-0 border-0 shadow-2xl">
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Demo</h2>
            <p className="text-gray-600">Get personalized guidance and start your musical journey</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3 text-sm">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="eg: John Doe"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3 text-sm">Mobile number</label>
              <input
                type="tel"
                name="mobile"
                placeholder="9876543210"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3 text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="eg: john@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                required
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-gray-900 font-semibold mb-3 text-sm">Date of Birth</label>
              <div className="relative">
                <input
                  type="text"
                  name="dateOfBirth"
                  placeholder="dd/mm/yyyy"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-gray-900 placeholder-gray-400"
                  required
                />
                <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Course Interests */}
            <div>
              <label className="block text-gray-900 font-semibold mb-4 text-sm">Are you interested in?</label>
              <div className="space-y-3">
                {courseOptions.map((course) => (
                  <label key={course.id} className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(course.title)}
                      onChange={() => handleInterestChange(course.title)}
                      className="w-5 h-5 text-red-600 border-2 border-gray-300 rounded-md focus:ring-red-500 mt-0.5 flex-shrink-0"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <course.icon className="w-4 h-4 text-red-600" />
                        <span className="text-gray-900 font-medium text-sm group-hover:text-red-600 transition-colors">
                          {course.title}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500">{course.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl mt-8"
            >
              Submit
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoPopup;
