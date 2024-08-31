import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-y-0 gap-x-20'>
        
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-slate-50 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                <span className='text-slate-100'>{desc1}</span>
                <br />
                <span className='text-blue-300 italic'>{desc2}</span>
            </p>

            {
                formtype === "signup" ?
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>) :
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }

            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-slate-700'></div>
                <p className='text-slate-700 font-medium  leading-[1.375rem]'>OR</p>
                <div className='w-full h-[1px] bg-slate-700'></div>
            </div>

            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-slate-100 border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle/>
                Sign in with Google
            </button>
        </div>

        <div className='relative w-11/12 max-w-[450px]'>
            <img src={frameImage} alt="pattern" width={558} height={584} loading='lazy' />
            <img src={image} alt="students" width={558} height={584} loading='lazy' className='absolute -top-4 right-4' />
        </div>

    </div>
  )
}

export default Template


// import React from 'react';
// import SignupForm from './SignupForm';
// import LoginForm from './LoginForm';

// const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      
//       {/* Form Section */}
//       <div className="md:w-1/2 bg-white p-5 rounded-lg shadow-lg text-center">
//         <h1 className="text-3xl font-bold mb-4 text-gray-800">{title}</h1>
//         <p className="text-gray-600 mb-6">
//           <span>{desc1}</span> <br />
//           <span>{desc2}</span>
//         </p>

//         {formtype === "signup" ? (
//           <SignupForm setIsLoggedIn={setIsLoggedIn} />
//         ) : (
//           <LoginForm setIsLoggedIn={setIsLoggedIn} />
//         )}

//         <div className="flex items-center my-6">
//           <div className="flex-grow h-px bg-gray-300"></div>
//           <p className="text-gray-600 mx-4">OR</p>
//           <div className="flex-grow h-px bg-gray-300"></div>
//         </div>

//         <button className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 hover:shadow-lg transition-all duration-300">
//           Sign in with Google
//         </button>
//       </div>

//       {/* Image Section */}
//       <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
//         <img 
//           src={image} 
//           alt="students" 
//           className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300" 
//           width={558} 
//           height={584} 
//           loading='lazy' 
//         />
//       </div>

//     </div>
//   );
// };

// export default Template;
