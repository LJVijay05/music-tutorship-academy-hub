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
import { ArrowLeft, Shield, CheckCircle } from "lucide-react";

// Schema definitions
const personalInfoSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  country: z.string().min(1, "Please select your country"),
  city: z.string().trim().min(2, "City must be at least 2 characters").max(100, "City must be less than 100 characters"),
  pincode: z.string().trim().min(4, "Pincode must be at least 4 characters").max(10, "Pincode must be less than 10 characters"),
  gender: z.string().min(1, "Please select your gender"),
});

const otpSchema = z.object({
  otp: z.string().min(6, "Please enter the complete OTP").max(6, "OTP must be exactly 6 digits"),
});

type PersonalInfoData = z.infer<typeof personalInfoSchema>;
type OTPData = z.infer<typeof otpSchema>;

interface EnhancedStudentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

type FormStep = 'personal-info' | 'otp-verification';

const EnhancedStudentForm = ({ open, onOpenChange, onSuccess }: EnhancedStudentFormProps) => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<FormStep>('personal-info');
  const [personalData, setPersonalData] = useState<PersonalInfoData | null>(null);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const personalForm = useForm<PersonalInfoData>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      pincode: '',
      gender: '',
    },
  });

  const otpForm = useForm<OTPData>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: '',
    },
  });

  const sendOTP = async (phoneNumber: string) => {
    try {
      // Simulate OTP sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsOTPSent(true);
      toast({
        title: "OTP Sent Successfully!",
        description: `Verification code sent to ${phoneNumber}`,
      });
      return true;
    } catch (error) {
      toast({
        title: "Failed to Send OTP",
        description: "Please check your phone number and try again.",
        variant: "destructive",
      });
      return false;
    }
  };

  const resendOTP = async () => {
    if (!personalData) return;
    
    setIsResending(true);
    try {
      await sendOTP(personalData.phone);
      toast({
        title: "OTP Resent",
        description: "A new verification code has been sent to your phone.",
      });
    } finally {
      setIsResending(false);
    }
  };

  const handlePersonalInfoSubmit = async (data: PersonalInfoData) => {
    setPersonalData(data);
    const otpSent = await sendOTP(data.phone);
    if (otpSent) {
      setCurrentStep('otp-verification');
    }
  };

  const handleOTPSubmit = async (data: OTPData) => {
    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (!personalData) return;

      // Store combined data in localStorage
      const combinedData = { ...personalData, verified: true };
      localStorage.setItem('studentData', JSON.stringify(combinedData));
      
      toast({
        title: "Verification Complete!",
        description: "Your information has been verified and saved successfully.",
      });

      // Reset forms and close dialog
      personalForm.reset();
      otpForm.reset();
      setCurrentStep('personal-info');
      setPersonalData(null);
      setIsOTPSent(false);
      onOpenChange(false);
      
      // Trigger success callback
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
    }
  };

  const handleBack = () => {
    setCurrentStep('personal-info');
    setIsOTPSent(false);
    otpForm.reset();
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center space-x-4 mb-6">
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          currentStep === 'personal-info' ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
        }`}>
          {currentStep === 'otp-verification' ? <CheckCircle className="w-4 h-4" /> : '1'}
        </div>
        <span className="ml-2 text-sm font-medium text-gray-700">Personal Info</span>
      </div>
      
      <div className={`h-px w-8 ${currentStep === 'otp-verification' ? 'bg-green-600' : 'bg-gray-300'}`} />
      
      <div className="flex items-center">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
          currentStep === 'otp-verification' ? 'bg-red-600 text-white' : 'bg-gray-300 text-gray-600'
        }`}>
          <Shield className="w-4 h-4" />
        </div>
        <span className="ml-2 text-sm font-medium text-gray-700">Verification</span>
      </div>
    </div>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-gray-900 mb-2">
            {currentStep === 'personal-info' ? 'Student Information' : 'Phone Verification'}
          </DialogTitle>
          <p className="text-center text-gray-600 text-sm">
            {currentStep === 'personal-info' 
              ? 'Please fill in your details to proceed with enrollment'
              : 'Enter the 6-digit code sent to your phone'
            }
          </p>
        </DialogHeader>

        {renderStepIndicator()}

        {currentStep === 'personal-info' && (
          <Form {...personalForm}>
            <form onSubmit={personalForm.handleSubmit(handlePersonalInfoSubmit)} className="space-y-4">
              <FormField
                control={personalForm.control}
                name="name"
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
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={personalForm.control}
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={personalForm.control}
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
                  control={personalForm.control}
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
              </div>

              <div className="pt-4">
                <Button 
                  type="submit" 
                  disabled={personalForm.formState.isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                >
                  {personalForm.formState.isSubmitting ? "Sending OTP..." : "Send Verification Code"}
                </Button>
              </div>
            </form>
          </Form>
        )}

        {currentStep === 'otp-verification' && (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <p className="text-sm text-gray-600 mb-4">
                We've sent a 6-digit verification code to<br />
                <span className="font-semibold text-gray-900">{personalData?.phone}</span>
              </p>
            </div>

            <Form {...otpForm}>
              <form onSubmit={otpForm.handleSubmit(handleOTPSubmit)} className="space-y-6">
                <FormField
                  control={otpForm.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-center block">Enter Verification Code</FormLabel>
                      <FormControl>
                        <div className="flex justify-center">
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
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-3">
                  <Button 
                    type="submit" 
                    disabled={otpForm.formState.isSubmitting || otpForm.watch('otp').length !== 6}
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 rounded-xl transition-all duration-300"
                  >
                    {otpForm.formState.isSubmitting ? "Verifying..." : "Verify & Continue"}
                  </Button>
                  
                  <div className="flex items-center justify-between">
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={handleBack}
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>
                    
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={resendOTP}
                      disabled={isResending}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      {isResending ? "Resending..." : "Resend Code"}
                    </Button>
                  </div>
                </div>
              </form>
            </Form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedStudentForm;