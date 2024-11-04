import React from 'react'
import GenderCheckbox from './GenderCheckbox';
import Login from '../login/Login';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import signup from '../../hooks/useSignup';


const SignUp = () => {
    // Obtaining the user input as a constructor
    const [inputs,setInputs] = useState({
      fullName: "",
      username: "",
      password: "",
      confirmPassword: "",
      gender: ""
    });

    const {loading,signup} = useSignup()

    const handleCheckboxChange = (gender) => {
      setInputs({...inputs,gender});
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(inputs);
      await signup(inputs);
    };

    return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up for <span className='text-blue-500'>Chattrr</span>
          </h1>
  
          <form onSubmit = {handleSubmit}>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input type="text" placeholder = 'John Doe' className = 'input input-bordered input-primary w-full max-w-xs' 
                value={inputs.fullName}
                // will only update the full name that is coming from the value that the user has put in 
                onChange={(e) => setInputs({...inputs,fullName: e.target.value})}
              />
            </div>

            <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder = 'johndoe' className = 'input input-bordered input-primary w-full max-w-xs' 
                  value = {inputs.username}
                  // will only update the username in the database
                  onChange = {(e) => setInputs({...inputs, username: e.target.value})}
                />
            </div>

            <div>
                <label className='label'>
                    <span className = 'text-base label-text'>Password</span>
                </label>
                <input type="text" placeholder = 'Enter Password' className = 'input input-bordered input-primary w-full max-w-xs' 
                  value = {inputs.password}
                  // will only update the... you guessed it, password that the user inputs for the database
                  onChange = {(e) => setInputs({...inputs,password: e.target.value})}
                />
            </div>

            <div>
                <label className='label'>
                    <span className = 'text-base label-text'>Confirm Password</span>
                </label>
                <input type="text" placeholder = 'Confirm Password' className = 'input input-bordered input-primary w-full max-w-xs' 
                  value = {inputs.confirmPassword}
                  // confirming password
                  onChange = {(e) => setInputs({...inputs,confirmPassword: e.target.value})}
                />
            </div>

            <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender}/>

            <Link to = {'/login'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account?
            </Link>
            <div>
                <button className='btn btn-block btn-sm mt-2'> Let's go! </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignUp;

  //SIGN UP TEMPLATE

// const SignUp = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//           <h1 className='text-3xl font-semibold text-center text-gray-300'>
//             Sign Up for <span className='text-blue-500'>Chattrr</span>
//           </h1>
  
//           <form>
//             <div>
//               <label className='label p-2'>
//                 <span className='text-base label-text'>Full Name</span>
//               </label>
//               <input type="text" placeholder = 'John Doe' className = 'input input-bordered input-primary w-full max-w-xs' />
//             </div>

//             <div>
//             <label className='label p-2'>
//                 <span className='text-base label-text'>Username</span>
//                 </label>
//                 <input type="text" placeholder = 'johndoe' className = 'input input-bordered input-primary w-full max-w-xs' />
//             </div>

//             <div>
//                 <label className='label'>
//                     <span className = 'text-base label-text'>Password</span>
//                 </label>
//                 <input type="text" placeholder = 'Enter Password' className = 'input input-bordered input-primary w-full max-w-xs' />
//             </div>

//             <div>
//                 <label className='label'>
//                     <span className = 'text-base label-text'>Confirm Password</span>
//                 </label>
//                 <input type="text" placeholder = 'Confirm Password' className = 'input input-bordered input-primary w-full max-w-xs' />
//             </div>

//             <GenderCheckbox/>

//             <a href ='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                 Already have an account?
//             </a>
//             <div>
//                 <button className='btn btn-block btn-sm mt-2'> Let's go! </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default SignUp;