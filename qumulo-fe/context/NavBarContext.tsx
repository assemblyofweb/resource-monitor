import React, { createContext, useContext, useState, ReactNode } from 'react';

interface NavBarContextProps {
  isOpen: boolean;
  toggleNavBar: () => void;
}

const NavBarContext = createContext<NavBarContextProps | undefined>(undefined);

export const NavBarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return <NavBarContext.Provider value={{ isOpen, toggleNavBar }}>{children}</NavBarContext.Provider>;
};

export const useNavBarContext = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error('useNavBarContext must be used within a NavBarProvider');
  }
  return context;
};
