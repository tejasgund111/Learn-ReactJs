import React from 'react'
import Template from '../Components/Template'
import loginImg from "../assets/login.png"

function Login({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to futre-proof your career."
    image={loginImg}
    formtype="login"
    setIsLoggedIn={setIsLoggedIn}
    
    />
  )
}

export default Login

// import React from 'react';
// import Template from '../Components/Template';
// import loginImg from "../assets/login.png";

// function Login({ setIsLoggedIn }) {
//   return (
//     <Template
//       title="Welcome Back"
//       desc1="Build skills for today, tomorrow, and beyond."
//       desc2="Education to future-proof your career."
//       image={loginImg}
//       formtype="login"
//       setIsLoggedIn={setIsLoggedIn}
//     >
//       <p className='text-center text-gray-500 mt-4'>
//         Don’t have an account? <a href="/signup" className='text-blue-500 underline'>Sign up here</a>
//       </p>
//     </Template>
//   );
// }

// export default Login;
