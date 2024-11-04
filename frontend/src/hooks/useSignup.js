import { useState } from 'react'
import toast from 'react-hot-toast'
import SignUp from '../pages/signup/SignUp';


const useSignup = () => {
  const [loading,setLoading] = useState(false);

  const signup = async(fullName,username,password,confirmPassword,gender) => {
    const success = handleInputErrors({fullName,username,password,confirmPassword,gender})
    if(!success) return; 
  
    setLoading(true);
    try{
      const res = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({fullName,username,password,confirmPassword,gender}),
      })

      const data = await res.json();
      console.log(data)

    } catch (error){
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {loading, signup};
};

export default useSignup;

function handleInputErrors({fullName,username,password,confirmPassword,gender}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill in all fields man');
    return true;
  }

  if(password !== confirmPassword){
    toast.error('Passwords do not match');
    return true;
  }

  if(password.length < 6){
    toast.error('Password must be at least 6 characters');
    return true;
  }

  return true;
}