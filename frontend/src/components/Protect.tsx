import React, { useState } from 'react';
import SignIn from './SignIn';

interface ProtectProps {
  children: React.ReactNode;  
}

const Protect: React.FC<ProtectProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <>{children}</>  
      ) : (
        <SignIn onSuccess={() => setIsAuthenticated(true)} />
      )}
    </>
  );
};

export default Protect;
