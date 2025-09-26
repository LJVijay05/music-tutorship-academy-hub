import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, ArrowRight, CheckCircle, Smartphone } from "lucide-react";

// Step 1: Personal Information
const personalInfoSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  dateOfBirth: z.string().min(1, "Please enter your date of birth"),
  gender: z.string().min(1, "Please select your gender"),
});

// Step 2: Address Information
const addressInfoSchema = z.object({
  address: z.string().min(10, "Address must be at least 10 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  state: z.string().min(2, "State must be at least 2 characters"),
  pincode: z.string().min(4, "Pincode must be at least 4 characters"),
  country: z.string().min(1, "Please select your country"),
});

// Step 3: Educational & Professional Background
const backgroundInfoSchema = z.object({
  education: z.string().min(1, "Please select your education level"),
  profession: z.string().min(2, "Please enter your profession"),
  experience: z.string().min(1, "Please select your experience level"),
  motivation: z.string().min(20, "Please tell us more about your motivation (at least 20 characters)"),
  goals: z.string().min(20, "Please describe your goals (at least 20 characters)"),
});

// Step 4: OTP Verification
const otpSchema = z.object({
  otp: z.string().min(6, "Please enter the complete OTP").max(6, "OTP must be 6 digits"),
});

// Combined schema
const completeFormSchema = personalInfoSchema
  .merge(addressInfoSchema)
  .merge(backgroundInfoSchema)
  .merge(otpSchema);

type PersonalInfo = z.infer<typeof personalInfoSchema>;
type AddressInfo = z.infer<typeof addressInfoSchema>;
type BackgroundInfo = z.infer<typeof backgroundInfoSchema>;
type OTPInfo = z.infer<typeof otpSchema>;
type CompleteFormData = z.infer<typeof completeFormSchema>;

interface EnhancedStudentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

const EnhancedStudentForm = ({ open, onOpenChange, onSuccess }: EnhancedStudentFormProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isVerifyingOTP, setIsVerifyingOTP] = useState(false);
  const [formData, setFormData] = useState<Partial<CompleteFormData>>({});

  const personalForm = useForm<PersonalInfo>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
    },
  });

  const addressForm = useForm<AddressInfo>({
    resolver: zodResolver(addressInfoSchema),
    defaultValues: {
      address: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
    },
  });

  const backgroundForm = useForm<BackgroundInfo>({
    resolver: zodResolver(backgroundInfoSchema),
    defaultValues: {
      education: '',
      profession: '',
      experience: '',
      motivation: '',
      goals: '',
    },
  });

  const otpForm = useForm<OTPInfo>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const handlePersonalInfoSubmit = (data: PersonalInfo) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(2);
  };

  const handleAddressInfoSubmit = (data: AddressInfo) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(3);
  };

  const handleBackgroundInfoSubmit = (data: BackgroundInfo) => {
    setFormData(prev => ({ ...prev, ...data }));
    sendOTP();
    setCurrentStep(4);
  };

  const sendOTP = async () => {
    try {
      // Simulate OTP sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsOTPSent(true);
      toast({
        title: "OTP Sent!",
        description: `A 6-digit verification code has been sent to ${formData.phone}`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send OTP. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleOTPSubmit = async (data: OTPInfo) => {
    setIsVerifyingOTP(true);
    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const completeData = { ...formData, ...data };
      
      // Store data in localStorage
      localStorage.setItem('enhancedStudentData', JSON.stringify(completeData));
      
      toast({
        title: "Verification Successful!",
        description: "Your information has been verified and saved.",
      });

      // Reset forms
      personalForm.reset();
      addressForm.reset();
      backgroundForm.reset();
      otpForm.reset();
      setCurrentStep(1);
      setIsOTPSent(false);
      setFormData({});
      
      onOpenChange(false);
      
      setTimeout(() => {
        if (onSuccess) {
          onSuccess();
        }
      }, 300);
      
    } catch (error) {
      toast({
        title: "Verification Failed",
        description: "Invalid OTP. Please try again.",
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

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-6">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
            step < currentStep ? 'bg-green-500 text-white' : 
            step === currentStep ? 'bg-red-600 text-white' : 
            'bg-gray-200 text-gray-500'
          }`}>
            {step < currentStep ? <CheckCircle className="w-4 h-4" /> : step}
          </div>
          {step < 4 && (
            <div className={`w-12 h-1 mx-2 transition-all duration-300 ${
              step < currentStep ? 'bg-green-500' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const stepTitles = [
    "Personal Information",
    "Address Details", 
    "Background & Goals",
    "Phone Verification"
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900 mb-2">
            Complete Your Profile
          </DialogTitle>
          <p className="text-center text-gray-600 text-sm">
            Step {currentStep} of 4: {stepTitles[currentStep - 1]}
          </p>
        </DialogHeader>

        {renderStepIndicator()}

        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <Form {...personalForm}>
            <form onSubmit={personalForm.handleSubmit(handlePersonalInfoSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={personalForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={personalForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={personalForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={personalForm.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={personalForm.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date of Birth *</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={personalForm.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                          <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </Form>
        )}

        {/* Step 2: Address Information */}
        {currentStep === 2 && (
          <Form {...addressForm}>
            <form onSubmit={addressForm.handleSubmit(handleAddressInfoSubmit)} className="space-y-4">
              <FormField
                control={addressForm.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Address *</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Enter your complete address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={addressForm.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={addressForm.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your state" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={addressForm.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pin Code *</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter pin code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={addressForm.control}
                  name="country"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Country *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="france">France</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={goBack}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </Form>
        )}

        {/* Step 3: Background Information */}
        {currentStep === 3 && (
          <Form {...backgroundForm}>
            <form onSubmit={backgroundForm.handleSubmit(handleBackgroundInfoSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={backgroundForm.control}
                  name="education"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Education Level *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select education" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                          <SelectItem value="master">Master's Degree</SelectItem>
                          <SelectItem value="doctorate">Doctorate</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={backgroundForm.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Music Experience *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Complete Beginner</SelectItem>
                          <SelectItem value="some-knowledge">Some Knowledge</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="professional">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={backgroundForm.control}
                name="profession"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Profession *</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Student, Software Engineer, Musician" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={backgroundForm.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Why do you want to learn music production? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your motivation and what draws you to music production..."
                        rows={3}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={backgroundForm.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What are your musical goals? *</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe what you hope to achieve through this course..."
                        rows={3}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-4 pt-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={goBack}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  Send OTP <Smartphone className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </form>
          </Form>
        )}

        {/* Step 4: OTP Verification */}
        {currentStep === 4 && (
          <Form {...otpForm}>
            <form onSubmit={otpForm.handleSubmit(handleOTPSubmit)} className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Verify Your Phone Number</h3>
                <p className="text-gray-600 text-sm">
                  We've sent a 6-digit verification code to<br />
                  <span className="font-semibold">{formData.phone}</span>
                </p>
              </div>

              <FormField
                control={otpForm.control}
                name="otp"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormLabel>Enter Verification Code</FormLabel>
                    <FormControl>
                      <InputOTP
                        maxLength={6}
                        value={field.value}
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
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  Didn't receive the code?
                </p>
                <Button
                  type="button"
                  variant="link"
                  onClick={resendOTP}
                  className="text-red-600 hover:text-red-700 p-0 h-auto"
                >
                  Resend OTP
                </Button>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  type="button"
                  variant="outline"
                  onClick={goBack}
                  className="flex-1"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Button>
                <Button 
                  type="submit" 
                  disabled={isVerifyingOTP}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  {isVerifyingOTP ? "Verifying..." : "Verify & Complete"}
                  {!isVerifyingOTP && <CheckCircle className="w-4 h-4 ml-2" />}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedStudentForm;