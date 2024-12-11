import React, { useState } from 'react';  
import { useAuth } from '../contexts/AuthContext';  

function LoginForm() {  
  const [isLogin, setIsLogin] = useState(true);  
  const [email, setEmail] = useState('');  
  const [password, setPassword] = useState('');  
  const { login, register } = useAuth();  

  const handleSubmit = async (e) => {  
    e.preventDefault();  
    if (isLogin) {  
      await login({ email, password });  
    } else {  
      await register({ email, password });  
    }  
  };  

  return (  
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">  
      <h2 className="text-2xl font-bold mb-6 text-center">  
        {isLogin ? 'Login' : 'Register'}  
      </h2>  
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
          {isLogin ? 'Login' : 'Register'}  
        </button>  
        <button  
          type="button"  
          onClick={() => setIsLogin(!isLogin)}  
          className="w-full text-blue-500 hover:text-blue-600"  
        >  
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}  
        </button>  
      </form>  
    </div>  
  );  
}  

export default LoginForm;  
