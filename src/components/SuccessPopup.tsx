
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
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
  title = "Successful Registration",
  message = "Thank you! You have successfully registered on our website. You can now proceed to the payment process.",
  buttonText = "Continue",
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
      <DialogContent className="sm:max-w-[400px] bg-gradient-to-br from-white via-red-50 to-white border-0 shadow-2xl">
        <DialogHeader className="text-center space-y-4 pt-4">
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-900">
              {title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed px-2">
              {message}
            </p>
          </div>
        </DialogHeader>

        <div className="pb-4 pt-2">
          <Button 
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessPopup;
