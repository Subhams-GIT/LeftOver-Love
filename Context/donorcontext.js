import React, { createContext, useState, useContext } from 'react';

const DonorContext = createContext();

export const DonorProvider = ({ children }) => {
  const [points, setPoints] = useState(0);
  const [numberOfDonations, setNumberOfDonations] = useState(0);

  const incrementPoints = (value) => {
    setPoints(points + value);
  };

  const incrementDonations = () => {
    setNumberOfDonations(numberOfDonations + 1);
  };

  return (
    <DonorContext.Provider value={{ points, numberOfDonations, incrementPoints, incrementDonations }}>
      {children}
    </DonorContext.Provider>
  );
};

export const useDonor = () => {
  return useContext(DonorContext);
};
