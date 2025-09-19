
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from 'react-router-dom';

interface SuccessPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  message?: string;
  buttonText?: string;
  redirectTo?: string;
}

const SuccessPopup = ({ 
  open, 
  onOpenChange,
  title = "Registration Complete!",
  message = "Welcome aboard! Your registration was successful. You can now proceed to enrollment.",
  buttonText = "Continue to Enrollment",
  redirectTo = "/enrollment"
}: SuccessPopupProps) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    console.log(`SuccessPopup: Redirecting to ${redirectTo}`);
    onOpenChange(false);
    setTimeout(() => {
      navigate(redirectTo);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[420px] bg-white border border-gray-100 shadow-xl rounded-2xl p-0 gap-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{message}</DialogDescription>
        </DialogHeader>
        
        {/* Header with animated checkmark */}
        <div className="text-center pt-8 pb-6 px-6">
          <div className="mx-auto w-16 h-16 mb-6 relative">
            <div 
              className={`w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-700 ${
                open ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
              }`}
            >
              <CheckCircle 
                className={`w-8 h-8 text-white transform transition-all duration-500 delay-300 ${
                  open ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`} 
              />
            </div>
            {/* Pulse ring animation */}
            <div 
              className={`absolute inset-0 w-16 h-16 bg-green-500 rounded-full animate-ping opacity-20 ${
                open ? 'block' : 'hidden'
              }`}
              style={{ animationDuration: '2s', animationIterationCount: '3' }}
            />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
            {message}
          </p>
        </div>

        {/* Footer with button */}
        <div className="px-6 pb-6">
          <Button 
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-medium py-3 h-12 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
          >
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessPopup;
