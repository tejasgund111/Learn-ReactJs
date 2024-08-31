import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';


const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "", lastname: "",
    email: "", password: "",
    confirmPassword: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [accountType, setAccountType] = useState("student");


  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account created successfully");
    // console.log(formData);

    const accountData = {
      ...formData
    };
    const finalData = {
      ...accountData,
      accountType
    };
    console.log("Printing full data >>>");
    console.log(finalData);
    
    navigate("/dashboard");
  }

  return (
    <div>

      <div className='flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
        <button 
         className={`${accountType === "student" ? "bg-slate-900 text-slate-50" : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={()=>setAccountType("student")}>Student</button>
        <button className={`${accountType === "instructor" ? "bg-slate-900 text-slate-50" : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={()=>setAccountType("instructor")}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        {/* firstname & lastname  */}
        <div className='flex justify-between gap-4 mt-[20px]'>

          <label className='w-full'>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>First Name <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              value={formData.firstname}
              placeholder='Enter First Name'
              className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
            />
          </label>

          <label className='w-full'>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Last Name <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              value={formData.lastname}
              placeholder='Enter Last Name'
              className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
            />
          </label>

        </div>

        <div>

          {/* email */}
          <div className='mt-[20px]'>
          <label className='w-full'>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Email Address <sup className='text-pink-200'>*</sup></p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              value={formData.email}
              placeholder='Enter Email Address'
              className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
            />
          </label>

          </div>

          {/* createpasword and confirmPassword  */}
          <div className='w-full flex justify-between gap-4 mt-[20px]'>

            <label className='w-full relative'>
              <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>
              <input
                required
                type={showPassword ? ("text") : ("password")}
                name="password"
                onChange={changeHandler}
                value={formData.password}
                placeholder='Enter Password'
                className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
              />
              <span onClick={() => setShowPassword((prev) => !prev)}
                className='absolute right-3 top-[38px] cursor-pointer'>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
              </span>
            </label>

            <label className='w-full relative'>
              <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Confirm Password <sup className='text-pink-200'>*</sup></p>
              <input
                required
                type={showConfirmPassword ? ("text") : ("password")}
                name="confirmPassword"
                onChange={changeHandler}
                value={formData.confirmPassword}
                placeholder='Enter Password'
                className='bg-slate-800 rounded-[0.5rem] text-slate-50 w-full p-[12px]'
              />
              <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                className='absolute right-3 top-[40px] cursor-pointer'>
                {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
              </span>
            </label>

          </div>

        </div>

        <button className='w-full bg-yellow-500 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-9'>Create Account</button>

      </form>

    </div>
  )
}

export default SignupForm


// import React, { useState } from 'react';
// import toast from 'react-hot-toast';
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useNavigate } from 'react-router-dom';

// const SignupForm = ({ setIsLoggedIn }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstname: "", lastname: "",
//     email: "", password: "",
//     confirmPassword: ""
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   function changeHandler(event) {
//     setFormData((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value
//     }));
//   }

//   function submitHandler(event) {
//     event.preventDefault();
//     if (formData.password !== formData.confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
//     setIsLoggedIn(true);
//     toast.success("Account successfully created");
//     console.log(formData);
//     navigate("/dashboard");
//   }

//   return (
//     <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6">
//       <div className="mb-8 flex space-x-4">
//         <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300">
//           Student
//         </button>
//         <button className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transform hover:-translate-y-1 transition-all duration-300">
//           Instructor
//         </button>
//       </div>

//       <form onSubmit={submitHandler} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <label className="block">
//             <p className="text-gray-700">First Name <sup className="text-red-500">*</sup></p>
//             <input
//               required
//               type="text"
//               name="firstname"
//               onChange={changeHandler}
//               value={formData.firstname}
//               placeholder="Enter First Name"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </label>

//           <label className="block">
//             <p className="text-gray-700">Last Name <sup className="text-red-500">*</sup></p>
//             <input
//               required
//               type="text"
//               name="lastname"
//               onChange={changeHandler}
//               value={formData.lastname}
//               placeholder="Enter Last Name"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//         </div>

//         <div className="mb-4">
//           <label className="block">
//             <p className="text-gray-700">Email Address <sup className="text-red-500">*</sup></p>
//             <input
//               required
//               type="email"
//               name="email"
//               onChange={changeHandler}
//               value={formData.email}
//               placeholder="Enter Email Address"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//           </label>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-6">
//           <label className="relative block">
//             <p className="text-gray-700">Create Password <sup className="text-red-500">*</sup></p>
//             <input
//               required
//               type={showPassword ? "text" : "password"}
//               name="password"
//               onChange={changeHandler}
//               value={formData.password}
//               placeholder="Enter Password"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <span 
//               onClick={() => setShowPassword(prev => !prev)} 
//               className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
//             >
//               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </span>
//           </label>

//           <label className="relative block">
//             <p className="text-gray-700">Confirm Password <sup className="text-red-500">*</sup></p>
//             <input
//               required
//               type={showPassword ? "text" : "password"}
//               name="confirmPassword"
//               onChange={changeHandler}
//               value={formData.confirmPassword}
//               placeholder="Confirm Password"
//               className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
//             />
//             <span 
//               onClick={() => setShowPassword(prev => !prev)} 
//               className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
//             >
//               {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//             </span>
//           </label>
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
//         >
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SignupForm;
