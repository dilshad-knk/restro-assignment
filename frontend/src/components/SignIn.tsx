import React, { useState } from 'react';
import instance from '../axios/axios';
import { useNavigate } from 'react-router-dom';

interface SigninProps {
  onSuccess: () => void;
}

const SignIn: React.FC<SigninProps> = ({ onSuccess }) => {
  const [password, setPassword] = useState('');
  const [username, setusername] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
   
    try {
       const result = instance.post("/admin-validation",{username,password})

     
      onSuccess()
        
    } catch (error) {
      console.log(error)

      setError('something went wrong')
  
    }
  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl space-y-4 font-bold mb-4">Admin Access</h2>
         <input
          type="username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          placeholder="Enter username"
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          className="w-full p-2 mb-4 border rounded"
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;

