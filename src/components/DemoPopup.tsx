import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { X, Calendar as CalendarIcon, Users, User, Clock, Settings } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchCountries, fetchStates, fetchCities, Country, State, City, hasApiKey } from "@/utils/locationApi";
import ApiKeyManager from "@/components/ApiKeyManager";

interface DemoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoPopup = ({ isOpen, onClose }: DemoPopupProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    country: '',
    state: '',
    city: '',
    selectedDate: undefined as Date | undefined,
    selectedTime: '',
    interests: [] as string[]
  });

  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedState, setSelectedState] = useState<string>('');
  const [isLoadingStates, setIsLoadingStates] = useState(false);
  const [isLoadingCities, setIsLoadingCities] = useState(false);
  const [showApiKeyManager, setShowApiKeyManager] = useState(false);

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

  // Load countries on component mount
  useEffect(() => {
    const loadCountries = async () => {
      if (isOpen) {
        if (!hasApiKey()) {
          setShowApiKeyManager(true);
          return;
        }
        
        console.log('Loading countries...');
        const countriesData = await fetchCountries();
        console.log('Countries loaded:', countriesData);
        if (Array.isArray(countriesData)) {
          setCountries(countriesData);
        }
      }
    };
    loadCountries();
  }, [isOpen]);

  // Load states when country changes
  useEffect(() => {
    const loadStates = async () => {
      if (selectedCountry) {
        console.log('Loading states for country:', selectedCountry);
        setIsLoadingStates(true);
        const statesData = await fetchStates(selectedCountry);
        console.log('States loaded:', statesData);
        setStates(statesData);
        setIsLoadingStates(false);
        setCities([]); // Clear cities when country changes
        setSelectedState('');
        setFormData(prev => ({ ...prev, state: '', city: '' }));
      }
    };
    loadStates();
  }, [selectedCountry]);

  // Load cities when state changes
  useEffect(() => {
    const loadCities = async () => {
      if (selectedCountry && selectedState) {
        console.log('Loading cities for state:', selectedState, 'in country:', selectedCountry);
        setIsLoadingCities(true);
        const citiesData = await fetchCities(selectedCountry, selectedState);
        console.log('Cities loaded:', citiesData);
        setCities(citiesData);
        setIsLoadingCities(false);
        setFormData(prev => ({ ...prev, city: '' }));
      }
    };
    loadCities();
  }, [selectedCountry, selectedState]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    console.log(`Selection changed - ${name}:`, value);
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'country') {
      setSelectedCountry(value);
      setSelectedState('');
      setCities([]);
    } else if (name === 'state') {
      setSelectedState(value);
    }
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
    console.log('Demo booking submitted:', formData);
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

  const handleApiKeySet = () => {
    setShowApiKeyManager(false);
    // Reload countries after API key is set
    const loadCountries = async () => {
      console.log('Reloading countries after API key set...');
      const countriesData = await fetchCountries();
      console.log('Countries reloaded:', countriesData);
      if (Array.isArray(countriesData)) {
        setCountries(countriesData);
      }
    };
    loadCountries();
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="w-[95vw] max-w-6xl h-[95vh] max-h-[900px] mx-auto bg-white rounded-2xl p-0 border-0 shadow-2xl overflow-hidden">
          <DialogTitle className="sr-only">Book Your Free Music Production Demo Session</DialogTitle>
          <DialogDescription className="sr-only">Schedule a personalized music production consultation with our expert instructors at Music Tutorship Academy Hub</DialogDescription>
          
          <div className="relative h-full overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 text-gray-400 hover:text-gray-600 transition-colors bg-gray-50 rounded-full p-2 hover:bg-gray-100"
              aria-label="Close demo booking dialog"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Header */}
            <div className="text-center px-4 sm:px-6 lg:px-8 pt-6 pb-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Book Your Free Demo</h2>
              <p className="text-gray-600 text-base sm:text-lg">Get personalized guidance and start your musical journey</p>
            </div>
            
            {!hasApiKey() && (
              <div className="mx-4 sm:mx-6 lg:mx-8 mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-yellow-700">
                    API key required for location data
                  </p>
                  <Button
                    onClick={() => setShowApiKeyManager(true)}
                    variant="outline"
                    size="sm"
                    className="ml-2"
                  >
                    <Settings className="w-4 h-4 mr-1" />
                    Set API Key
                  </Button>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
              {/* Personal Information */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Mobile Number</label>
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="9876543210"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="john@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                      required
                    />
                  </div>
                </div>

                {/* Location Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Country</label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('country', value)}
                      value={formData.country}
                      disabled={countries.length === 0}
                    >
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder={countries.length === 0 ? "Loading countries..." : "Select country"} />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                        {countries.map((country) => (
                          <SelectItem key={country.iso2} value={country.iso2} className="hover:bg-gray-100">
                            {country.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">State</label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('state', value)}
                      value={formData.state}
                      disabled={!selectedCountry || isLoadingStates || states.length === 0}
                    >
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder={
                          !selectedCountry ? "Select country first" :
                          isLoadingStates ? "Loading states..." : 
                          states.length === 0 ? "No states available" :
                          "Select state"
                        } />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                        {states.map((state) => (
                          <SelectItem key={state.iso2} value={state.iso2} className="hover:bg-gray-100">
                            {state.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="sm:col-span-2 lg:col-span-1">
                    <label className="block text-gray-700 font-medium mb-2 text-sm">City</label>
                    <Select 
                      onValueChange={(value) => handleSelectChange('city', value)}
                      value={formData.city}
                      disabled={!selectedState || isLoadingCities || cities.length === 0}
                    >
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder={
                          !selectedState ? "Select state first" :
                          isLoadingCities ? "Loading cities..." :
                          cities.length === 0 ? "No cities available" :
                          "Select city"
                        } />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                        {cities.map((city) => (
                          <SelectItem key={city.id} value={city.name} className="hover:bg-gray-100">
                            {city.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Date and Time Selection - Responsive Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Calendar */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-red-600" />
                    Select Date
                  </h3>
                  <div className="bg-white rounded-lg p-3 shadow-sm">
                    <Calendar
                      mode="single"
                      selected={formData.selectedDate}
                      onSelect={handleDateSelect}
                      disabled={disabledDays}
                      className={cn("p-0 pointer-events-auto w-full")}
                      classNames={{
                        day_selected: "bg-red-600 text-white hover:bg-red-600 hover:text-white focus:bg-red-600 focus:text-white",
                        day_today: "bg-red-50 text-red-600 font-medium",
                        cell: "text-center p-0 relative [&:has([aria-selected])]:bg-red-100 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        day: "h-8 w-8 sm:h-9 sm:w-9 p-0 font-normal aria-selected:opacity-100 text-sm",
                        head_cell: "text-muted-foreground rounded-md w-8 sm:w-9 font-normal text-[0.8rem]",
                        caption_label: "text-sm font-medium",
                        nav_button: "h-6 w-6 sm:h-7 sm:w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
                      }}
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    Available Time Slots
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">All times are in IST (Indian Standard Time)</p>
                  <div className="bg-white rounded-lg p-3 shadow-sm h-64 sm:h-80 overflow-y-auto">
                    {formData.selectedDate ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                        {timeSlots.map(({ time, isBooked }) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => handleTimeSelect(time, isBooked)}
                            disabled={isBooked}
                            className={cn(
                              "p-2 sm:p-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 border",
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
                          <CalendarIcon className="w-8 sm:w-12 h-8 sm:h-12 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">Please select a date first</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Course Interests - Mobile Optimized */}
              <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What interests you?</h3>
                <div className="space-y-3">
                  {courseOptions.map((course) => (
                    <label key={course.id} className="flex items-start cursor-pointer group bg-white rounded-lg p-3 sm:p-4 border border-gray-200 hover:border-red-200 hover:bg-red-50 transition-all">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(course.title)}
                        onChange={() => handleInterestChange(course.title)}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 border-2 border-gray-300 rounded focus:ring-red-500 mt-1 flex-shrink-0"
                      />
                      <div className="ml-3 flex-1">
                        <div className="flex items-center gap-2 sm:gap-3 mb-1">
                          <course.icon className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 flex-shrink-0" />
                          <span className="text-gray-900 font-medium group-hover:text-red-600 transition-colors text-sm sm:text-base">
                            {course.title}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500">{course.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button - Mobile Optimized */}
              <div className="text-center pt-2">
                <Button
                  type="submit"
                  disabled={!formData.selectedDate || !formData.selectedTime}
                  className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold text-sm sm:text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto sm:min-w-[300px]"
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

      <ApiKeyManager 
        open={showApiKeyManager}
        onOpenChange={setShowApiKeyManager}
        onApiKeySet={handleApiKeySet}
      />
    </>
  );
};

export default DemoPopup;
