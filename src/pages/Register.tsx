
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import StudentDataForm from '@/components/StudentDataForm';
import { useStudentForm } from '@/hooks/useStudentForm';
import { Card } from '@/components/ui/card';

const Register = () => {
  const [formOpen, setFormOpen] = useState(true);
  const { showSuccessPopup, showSuccess, closeSuccess } = useStudentForm();
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent body scrolling when modal open (for a cleaner effect)
    if (formOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    }
  }, [formOpen]);

  const handleFormSuccess = () => {
    setFormOpen(false);
    showSuccess();
    // Redirect after delay
    setTimeout(() => {
      navigate('/enrollment');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <Card className="rounded-[2rem] shadow-[0_10px_32px_0_rgba(0,0,0,0.09),0_1.5px_12px_0_rgba(0,0,0,0.08)] border-0 bg-white/75 backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col items-center justify-center min-h-[580px]">
          <StudentDataForm
            open={formOpen}
            onOpenChange={setFormOpen}
            onSuccess={handleFormSuccess}
          />
        </Card>
      </div>
    </div>
  );
};

export default Register;
