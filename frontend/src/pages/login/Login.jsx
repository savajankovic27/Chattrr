import React from 'react'
import { Link } from 'react-router-dom';
import {useState} from 'react';
import useLogin from '../../hooks/useLogin';
import { useAuthContext } from '../../context/AuthContext';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {loading,login} = useLogin();

    const handleSubmit = async (e) =>{
      e.preventDefault();
      await login(username,password)
    }

    return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>Login to
            <span className = 'text-blue-500'> Chattrr </span>
          </h1>

          <form onSubmit = {handleSubmit}>
            <div>
                <label className='label p-2'>
                    <span className = 'text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="input input-bordered input-primary w-full max-w-xs" 
                  value = {username}
                  onChange = {(e) => setUsername(e.target.value)}
                />
            </div>

            <div>
                <label className='label'>
                    <span className = 'text-base label-text'>Password</span>
                </label>
                <input type="text" placeholder = 'Enter Password' className = 'input input-bordered input-primary w-full max-w-xs' 
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <Link to ='/signup' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                {"I don't have"} an account
            </Link>
            <div>
                <button className='btn btn-block btn-sm mt-2'
                  disabled={loading}
                > 
                  {loading ? <span className = 'loading loading-spinner'></span>: "Let's go!"}
                
                </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Login;


//STARTER CODE FOR THIS FILE ***************
// const Login = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//         <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//           <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//             <span className = 'text-blue-500'> Chattrr </span>
//           </h1>

//           <form>
//             <div>
//                 <label className='label p-2'>
//                     <span className = 'text-base label-text'>Username</span>
//                 </label>
//                 <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
//             </div>
//             <div>
//                 <label className='label'>
//                     <span className = 'text-base label-text'>Password</span>
//                 </label>
//                 <input type="text" placeholder = 'Enter Password' className = 'input input-bordered input-primary w-full max-w-xs' />
//             </div>
//             <a href ='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                 {"I don't have"} an account

//             </a>
//             <div>
//                 <button className='btn btn-block btn-sm mt-2'> Let's go! </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };
  
//   export default Login;
  