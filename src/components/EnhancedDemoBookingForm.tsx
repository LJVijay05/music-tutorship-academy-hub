import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { X, Calendar as CalendarIcon, Users, User, Clock, CheckCircle, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

// Validation schemas
const personalInfoSchema = z.object({
  fullName: z.string().trim().min(2, "Full name must be at least 2 characters").max(50, "Full name must be less than 50 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  mobile: z.string().trim().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number"),
});

const demoBookingSchema = z.object({
  selectedDate: z.date({ required_error: "Please select a date" }),
  selectedTime: z.string().min(1, "Please select a time slot"),
  interests: z.array(z.string()).min(1, "Please select at least one course interest"),
});

const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

const combinedSchema = personalInfoSchema.merge(demoBookingSchema).merge(otpSchema);

type PersonalInfoData = z.infer<typeof personalInfoSchema>;
type DemoBookingData = z.infer<typeof demoBookingSchema>;
type OTPData = z.infer<typeof otpSchema>;
type FormData = z.infer<typeof combinedSchema>;

interface EnhancedDemoBookingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

const EnhancedDemoBookingForm = ({ open, onOpenChange, onSuccess }: EnhancedDemoBookingFormProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const { toast } = useToast();

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

  // Form instances
  const personalInfoForm = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobile: "",
    },
  });

  const demoBookingForm = useForm<DemoBookingData>({
    resolver: zodResolver(demoBookingSchema),
    defaultValues: {
      interests: [],
    },
  });

  const otpForm = useForm<OTPData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Step handlers
  const handlePersonalInfoSubmit = (data: PersonalInfoData) => {
    console.log('Personal info submitted:', data);
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handleDemoBookingSubmit = async (data: DemoBookingData) => {
    console.log('Demo booking info submitted:', data);
    setFormData(prev => ({ ...prev, ...data }));
    await sendOTP();
    setCurrentStep(3);
  };

  const sendOTP = async () => {
    console.log('Sending OTP...');
    setIsOTPSent(true);
    toast({
      title: "OTP Sent!",
      description: "We've sent a 6-digit verification code to your mobile number.",
    });
  };

  const handleOTPSubmit = async (data: OTPData) => {
    console.log('OTP submitted:', data);
    setIsVerifyingOTP(true);
    
    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const completeData = { ...formData, ...data };
      console.log('Demo booking complete:', completeData);
      
      // Save to localStorage
      localStorage.setItem('demoBookingData', JSON.stringify(completeData));
      
      toast({
        title: "Demo Booked Successfully!",
        description: `Your demo session is confirmed for ${formData.selectedDate ? format(formData.selectedDate, "MMM d") : ''} at ${formData.selectedTime}.`,
      });
      
      // Reset forms and state
      personalInfoForm.reset();
      demoBookingForm.reset();
      otpForm.reset();
      setFormData({});
      setCurrentStep(1);
      setIsOTPSent(false);
      
      onOpenChange(false);
      onSuccess?.();
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to verify OTP. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsVerifyingOTP(false);
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resendOTP = () => {
    sendOTP();
  };

  // Disable past dates
  const disabledDays = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d < today;
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-6">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
              currentStep >= step
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
          >
            {currentStep > step ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              step
            )}
          </div>
          {step < 3 && (
            <div className={cn(
              "w-12 h-0.5 mx-2",
              currentStep > step ? "bg-primary" : "bg-muted"
            )} />
          )}
        </div>
      ))}
    </div>
  );

  const stepTitles = [
    "Personal Information",
    "Demo Booking Details", 
    "Mobile Verification"
  ];
  const canContinueStep2 = Boolean(
    demoBookingForm?.watch?.("selectedDate") &&
    demoBookingForm?.watch?.("selectedTime") &&
    ((demoBookingForm?.watch?.("interests")?.length ?? 0) > 0)
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-5xl h-[90vh] mx-auto bg-background rounded-2xl p-0 border shadow-2xl overflow-hidden">
        <DialogTitle className="sr-only">Book Your Free Music Production Demo Session</DialogTitle>
        <DialogDescription className="sr-only">Complete demo booking with mobile verification</DialogDescription>
        
        <div className="relative h-full overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={() => onOpenChange(false)}
            className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-foreground transition-colors bg-muted/50 rounded-full p-2 hover:bg-muted"
            aria-label="Close demo booking dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          {/* Header */}
          <div className="text-center px-6 pt-6 pb-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Book Your Free Demo</h2>
            <p className="text-muted-foreground text-base sm:text-lg">Complete the form below to secure your demo session</p>
          </div>
          
          <div className="px-6 pb-6">
            {renderStepIndicator()}
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground">
                Step {currentStep}: {stepTitles[currentStep - 1]}
              </h3>
            </div>

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <Form {...personalInfoForm}>
                <form onSubmit={personalInfoForm.handleSubmit(handlePersonalInfoSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={personalInfoForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={personalInfoForm.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter 10-digit mobile number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={personalInfoForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end">
                    <Button type="submit" className="px-8">
                      Continue
                    </Button>
                  </div>
                </form>
              </Form>
            )}

            {/* Step 2: Demo Booking Details */}
            {currentStep === 2 && (
              <Form {...demoBookingForm}>
                <form onSubmit={demoBookingForm.handleSubmit(handleDemoBookingSubmit)} className="space-y-6">
                  
                  {/* Date Selection */}
                  <div className="bg-muted/30 rounded-xl p-4 mb-6">
                    <FormField
                      control={demoBookingForm.control}
                      name="selectedDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold flex items-center gap-2 mb-4">
                            <CalendarIcon className="w-5 h-5 text-primary" />
                            Select Date *
                          </FormLabel>
                          <FormControl>
                            <div className="bg-background rounded-lg p-3 shadow-sm max-w-fit mx-auto">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={disabledDays}
                                className="p-3 pointer-events-auto"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Time Slots */}
                  <div className="bg-muted/30 rounded-xl p-4 mb-6">
                    <FormField
                      control={demoBookingForm.control}
                      name="selectedTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-lg font-semibold flex items-center gap-2 mb-1">
                            <Clock className="w-5 h-5 text-primary" />
                            Available Time Slots *
                          </FormLabel>
                          <p className="text-sm text-muted-foreground mb-4">
                            {demoBookingForm.watch("selectedDate") ? "All times are in IST" : "Select a date to enable time slots"}
                          </p>
                          <FormControl>
                            <div className="bg-background rounded-lg p-4 shadow-sm">
                              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                {timeSlots.map(({ time, isBooked }) => {
                                  const isDisabled = isBooked || !demoBookingForm.watch("selectedDate");
                                  return (
                                    <button
                                      key={time}
                                      type="button"
                                      onClick={() => !isDisabled && field.onChange(time)}
                                      disabled={isDisabled}
                                      className={cn(
                                        "p-3 rounded-lg text-sm font-medium transition-all border min-h-[50px]",
                                        isDisabled
                                          ? "bg-muted text-muted-foreground border-muted cursor-not-allowed opacity-50"
                                          : field.value === time
                                            ? "bg-primary text-primary-foreground border-primary shadow-md"
                                            : "bg-background text-foreground border-border hover:bg-secondary hover:border-primary/50"
                                      )}
                                    >
                                      {time}
                                      {isBooked && <span className="block text-xs mt-1 opacity-75">Booked</span>}
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Course Interests */}
                  <FormField
                    control={demoBookingForm.control}
                    name="interests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg font-semibold">What interests you? *</FormLabel>
                        <FormControl>
                          <div className="space-y-3">
                            {courseOptions.map((course) => (
                              <label 
                                key={course.id} 
                                className="flex items-start cursor-pointer group bg-secondary/30 rounded-lg p-4 border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all"
                              >
                                <input
                                  type="checkbox"
                                  checked={field.value?.includes(course.title) || false}
                                  onChange={(e) => {
                                    const currentInterests = field.value || [];
                                    if (e.target.checked) {
                                      field.onChange([...currentInterests, course.title]);
                                    } else {
                                      field.onChange(currentInterests.filter(interest => interest !== course.title));
                                    }
                                  }}
                                  className="w-5 h-5 text-primary border-2 border-border rounded focus:ring-primary mt-1 flex-shrink-0"
                                />
                                <div className="ml-3 flex-1">
                                  <div className="flex items-center gap-3 mb-1">
                                    <course.icon className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                                      {course.title}
                                    </span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">{course.description}</p>
                                </div>
                              </label>
                            ))}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="sticky bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t mt-6 pt-4 flex justify-between">
                    <Button type="button" variant="outline" onClick={goBack} className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                    <Button type="submit" className="px-8" disabled={!canContinueStep2}>
                      Continue
                    </Button>
                  </div>
                </form>
              </Form>
            )}

            {/* Step 3: OTP Verification */}
            {currentStep === 3 && (
              <Form {...otpForm}>
                <form onSubmit={otpForm.handleSubmit(handleOTPSubmit)} className="space-y-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Verify Your Mobile Number</h3>
                    <p className="text-muted-foreground mb-6">
                      We've sent a 6-digit verification code to <strong>{formData.mobile}</strong>
                    </p>
                  </div>

                  <FormField
                    control={otpForm.control}
                    name="otp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="sr-only">Enter OTP</FormLabel>
                         <FormControl>
                           <div className="flex justify-center">
                             <InputOTP 
                               maxLength={6} 
                               value={field.value || ""}
                               onChange={field.onChange}
                             >
                               <InputOTPGroup>
                                 <InputOTPSlot index={0} />
                                 <InputOTPSlot index={1} />
                                 <InputOTPSlot index={2} />
                                 <InputOTPSlot index={3} />
                                 <InputOTPSlot index={4} />
                                 <InputOTPSlot index={5} />
                               </InputOTPGroup>
                             </InputOTP>
                           </div>
                         </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Didn't receive the code?{" "}
                      <button
                        type="button"
                        onClick={resendOTP}
                        className="text-primary hover:underline font-medium"
                      >
                        Resend OTP
                      </button>
                    </p>
                  </div>

                  <div className="sticky bottom-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-t mt-6 pt-4 flex justify-between">
                    <Button type="button" variant="outline" onClick={goBack} className="flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                    <Button 
                      type="submit" 
                      className="px-8" 
                      disabled={isVerifyingOTP || !otpForm.watch("otp") || otpForm.watch("otp").length < 6}
                    >
                      {isVerifyingOTP ? "Verifying..." : "Book Demo Session"}
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedDemoBookingForm;