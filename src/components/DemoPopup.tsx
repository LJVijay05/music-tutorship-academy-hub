
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { X, Calendar as CalendarIcon, Users, User, Clock } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface DemoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoPopup = ({ isOpen, onClose }: DemoPopupProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    selectedDate: undefined as Date | undefined,
    selectedTime: '',
    interests: [] as string[]
  });

  // Available time slots
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM",
    "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (date: Date | undefined) => {
    setFormData(prev => ({
      ...prev,
      selectedDate: date,
      selectedTime: '' // Reset time when date changes
    }));
  };

  const handleTimeSelect = (time: string) => {
    setFormData(prev => ({
      ...prev,
      selectedTime: time
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

  // Disable past dates
  const disabledDays = (date: Date) => {
    return date < new Date();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl mx-auto bg-white rounded-2xl p-0 border-0 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="relative p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-20 bg-white rounded-full p-1.5 shadow-sm hover:shadow-md"
          >
            <X className="w-4 h-4" />
          </button>
          
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-1">Book Your Free Demo</h2>
            <p className="text-sm text-gray-600">Get personalized guidance and start your musical journey</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Basic Info Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-900 font-medium mb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-900 font-medium mb-2 text-sm">Mobile number</label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="9876543210"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-900 font-medium mb-2 text-sm">Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@email.com"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                required
              />
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Calendar */}
              <div>
                <label className="block text-gray-900 font-medium mb-2 text-sm flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  Select Date
                </label>
                <div className="border border-gray-200 rounded-lg p-2">
                  <Calendar
                    mode="single"
                    selected={formData.selectedDate}
                    onSelect={handleDateSelect}
                    disabled={disabledDays}
                    className={cn("p-0 pointer-events-auto")}
                    classNames={{
                      day_selected: "bg-red-600 text-white hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white",
                      day_today: "bg-red-50 text-red-600 font-medium"
                    }}
                  />
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <label className="block text-gray-900 font-medium mb-2 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Available Time Slots
                </label>
                <div className="border border-gray-200 rounded-lg p-3 h-[280px] overflow-y-auto">
                  {formData.selectedDate ? (
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time)}
                          className={cn(
                            "p-2 rounded-md text-sm font-medium transition-all duration-200",
                            formData.selectedTime === time
                              ? "bg-red-600 text-white shadow-md"
                              : "bg-gray-50 text-gray-700 hover:bg-red-50 hover:text-red-600 border border-gray-200"
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                      Please select a date first
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Course Interests */}
            <div>
              <label className="block text-gray-900 font-medium mb-3 text-sm">Are you interested in?</label>
              <div className="space-y-2">
                {courseOptions.map((course) => (
                  <label key={course.id} className="flex items-start cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(course.title)}
                      onChange={() => handleInterestChange(course.title)}
                      className="w-4 h-4 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500 mt-0.5 flex-shrink-0"
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <course.icon className="w-3.5 h-3.5 text-red-600" />
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
              disabled={!formData.selectedDate || !formData.selectedTime}
              className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white py-3 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl mt-6"
            >
              {formData.selectedDate && formData.selectedTime 
                ? `Book Demo for ${format(formData.selectedDate, "MMM d")} at ${formData.selectedTime}`
                : "Select Date & Time to Continue"
              }
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoPopup;
