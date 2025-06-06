
import { useState } from 'react';

export const useStudentForm = () => {
  const [showStudentForm, setShowStudentForm] = useState(false);

  const openForm = () => setShowStudentForm(true);
  const closeForm = () => setShowStudentForm(false);

  return {
    showStudentForm,
    openForm,
    closeForm,
    setShowStudentForm
  };
};
