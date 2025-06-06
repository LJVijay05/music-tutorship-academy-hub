
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
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

  // Available time slots with booking status
  const timeSlots = [
    { time: "09:00 AM", isBooked: false },
    { time: "10:00 AM", isBooked: true },
    { time: "11:00 AM", isBooked: false },
    { time: "12:00 PM", isBooked: false },
    { time: "02:00 PM", isBooked: true },
    { time: "03:00 PM", isBooked: false },
    { time: "04:00 PM", isBooked: false },
    { time: "05:00 PM", isBooked: false },
    { time: "06:00 PM", isBooked: true },
    { time: "07:00 PM", isBooked: false },
    { time: "08:00 PM", isBooked: false }
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

  const handleTimeSelect = (time: string, isBooked: boolean) => {
    if (isBooked) return; // Don't allow selection of booked slots
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
      <DialogContent className="max-w-4xl mx-auto bg-white rounded-3xl p-0 border-0 shadow-2xl max-h-[95vh] overflow-y-auto">
        <DialogTitle className="sr-only">Book Your Free Demo</DialogTitle>
        <DialogDescription className="sr-only">Get personalized guidance and start your musical journey</DialogDescription>
        
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors z-20 bg-gray-50 rounded-full p-2 hover:bg-gray-100"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your Free Demo</h2>
            <p className="text-gray-600 text-lg">Get personalized guidance and start your musical journey</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="9876543210"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calendar */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-red-600" />
                  Select Date
                </h3>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <Calendar
                    mode="single"
                    selected={formData.selectedDate}
                    onSelect={handleDateSelect}
                    disabled={disabledDays}
                    className={cn("p-0 pointer-events-auto")}
                    classNames={{
                      day_selected: "bg-red-600 text-white hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white",
                      day_today: "bg-red-50 text-red-600 font-medium",
                      cell: "text-center p-0 relative [&:has([aria-selected])]:bg-red-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                      day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
                    }}
                  />
                </div>
              </div>

              {/* Time Slots */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-600" />
                  Available Time Slots
                </h3>
                <div className="bg-white rounded-xl p-4 shadow-sm h-80 overflow-y-auto">
                  {formData.selectedDate ? (
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map(({ time, isBooked }) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => handleTimeSelect(time, isBooked)}
                          disabled={isBooked}
                          className={cn(
                            "p-3 rounded-lg text-sm font-medium transition-all duration-200 border",
                            isBooked 
                              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                              : formData.selectedTime === time
                                ? "bg-green-500 text-white border-green-500 shadow-md"
                                : "bg-green-50 text-green-700 border-green-200 hover:bg-green-100 hover:border-green-300"
                          )}
                        >
                          {time}
                          {isBooked && <span className="block text-xs mt-1">Booked</span>}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-center">
                      <div>
                        <CalendarIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                        <p>Please select a date first</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Course Interests */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What interests you?</h3>
              <div className="space-y-4">
                {courseOptions.map((course) => (
                  <label key={course.id} className="flex items-start cursor-pointer group bg-white rounded-xl p-4 border border-gray-200 hover:border-red-200 hover:bg-red-50 transition-all">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(course.title)}
                      onChange={() => handleInterestChange(course.title)}
                      className="w-5 h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500 mt-1 flex-shrink-0"
                    />
                    <div className="ml-4 flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <course.icon className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-900 font-medium group-hover:text-red-600 transition-colors">
                          {course.title}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{course.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={!formData.selectedDate || !formData.selectedTime}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl min-w-[300px]"
              >
                {formData.selectedDate && formData.selectedTime 
                  ? `Book Demo for ${format(formData.selectedDate, "MMM d")} at ${formData.selectedTime}`
                  : "Select Date & Time to Continue"
                }
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoPopup;
