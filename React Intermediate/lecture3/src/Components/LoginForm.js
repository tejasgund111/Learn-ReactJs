import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "", password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prev) => (
            {
                ...prev,
                [name]: value
            }
        ));
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        console.log(formData);
        navigate('/dashboard');
    }

    return (
        <form onSubmit={submitHandler} 
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>
                    Enter Email Address <sub className='text-pink-200'>*</sub>
                </p>
                <input
                    required
                    name='email'
                    type="email"
                    value={formData.email}
                    onChange={changeHandler}
                    placeholder='Enter email id'
                    className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]' />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>
                    Enter Password <sub className='text-pink-200'>*</sub>
                </p>
                <input
                    required
                    name='password'
                    type={showPassword ? ("text") : ("password")}
                    value={formData.password}
                    onChange={changeHandler}
                    placeholder='Enter password'
                    className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]' />

                <span onClick={() => setShowPassword((prev) => !prev)}
                    className='absolute right-3 top-[38px] cursor-pointer'>
                    {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                </span>

                <Link to="/#">
                    <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot Password</p>
                </Link>
            </label>

            <button className='bg-yellow-500 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-5'>Sign In</button>

        </form>
    )
}

export default LoginForm


// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { Link, useNavigate } from 'react-router-dom';

// const LoginForm = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "", 
//     password: ""
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   function changeHandler(event) {
//     const { name, value } = event.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   }

//   function submitHandler(event) {
//     event.preventDefault();
//     setIsLoggedIn(true);
//     toast.success("Logged In");
//     console.log(formData);
//     navigate('/dashboard');
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6">
//       <form onSubmit={submitHandler} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <div className="mb-6">
//           <label className="block mb-2">
//             <p className="text-gray-700">Email Address <sup className="text-red-500">*</sup></p>
//             <input
//               required
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={changeHandler}
//               placeholder="Enter email id"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//         </div>

//         <div className="mb-6 relative">
//           <label className="block mb-2">
//             <p className="text-gray-700">Password <sup className="text-red-500">*</sup></p>
//             <input
//               required
//               name="password"
//               type={showPassword ? "text" : "password"}
//               value={formData.password}
//               onChange={changeHandler}
//               placeholder="Enter password"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <span 
//               onClick={() => setShowPassword((prev) => !prev)} 
//               className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
//             >
//               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </span>
//           </label>

//           <Link to="/#" className="text-blue-500 hover:text-blue-700 text-sm underline">
//             Forgot Password?
//           </Link>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
//         >
//           Sign In
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;
