
import { useState } from 'react';

export const useStudentForm = () => {
  const [showStudentForm, setShowStudentForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const openForm = () => {
    console.log('useStudentForm: Opening student form');
    setShowStudentForm(true);
  };
  
  const closeForm = () => {
    console.log('useStudentForm: Closing student form');
    setShowStudentForm(false);
  };

  const showSuccess = () => {
    console.log('useStudentForm: Showing success popup');
    setShowSuccessPopup(true);
  };

  const closeSuccess = () => {
    console.log('useStudentForm: Closing success popup');
    setShowSuccessPopup(false);
  };

  return {
    showStudentForm,
    showSuccessPopup,
    openForm,
    closeForm,
    showSuccess,
    closeSuccess,
    setShowStudentForm,
    setShowSuccessPopup
  };
};
