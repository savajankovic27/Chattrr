import React from 'react'
import GenderCheckbox from './GenderCheckbox';

const SignUp = () => {
    return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
            Sign Up for <span className='text-blue-500'>Chattrr</span>
          </h1>
  
          <form>
            <div>
              <label className='label p-2'>
                <span className='text-base label-text'>Full Name</span>
              </label>
              <input type="text" placeholder = 'John Doe' className = 'input input-bordered input-primary w-full max-w-xs' />
            </div>

            <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder = 'johndoe' className = 'input input-bordered input-primary w-full max-w-xs' />
            </div>

            <div>
                <label className='label'>
                    <span className = 'text-base label-text'>Password</span>
                </label>
                <input type="text" placeholder = 'Enter Password' className = 'input input-bordered input-primary w-full max-w-xs' />
            </div>

            <div>
                <label className='label'>
                    <span className = 'text-base label-text'>Confirm Password</span>
                </label>
                <input type="text" placeholder = 'Confirm Password' className = 'input input-bordered input-primary w-full max-w-xs' />
            </div>

            <GenderCheckbox/>

            <a href ='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account?
            </a>
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