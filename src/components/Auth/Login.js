import React, { useState } from 'react';  
import { useAuth } from '../Contexts/AuthContext';  

function Login() {  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const { login } = useAuth();  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    await login({ email, password });  
  };  

  return (  
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-md">  
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>  
      <form onSubmit={handleSubmit} className="space-y-4">  
        <div>  
          <label className="block text-gray-700 mb-2">Email</label>  
          <input  
            type="email"  
            value={email}  
            onChange={(e) => setEmail(e.target.value)}  
            className="w-full p-2 border rounded-md"  
            required  
          />  
        </div>  
        <div>  
          <label className="block text-gray-700 mb-2">Password</label>  
          <input  
            type="password"  
            value={password}  
            onChange={(e) => setPassword(e.target.value)}  
            className="w-full p-2 border rounded-md"  
            required  
          />  
        </div>  
        <button  
          type="submit"  
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"  
        >  
          Login  
        </button>  
      </form>  
    </div>  
  );  
}  

export default Login;  
