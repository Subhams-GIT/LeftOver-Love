// FormContext.js

import React, { createContext, useState, useContext } from 'react';

// Create a context for form data
const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    typeoffood: '',
    quantity: '',
    photo: null
  });

  const updateFormData = (newData) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom hook to use form data context
export const useFormContext = () => useContext(FormContext);
