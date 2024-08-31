import React from 'react'
import signupImg from "../assets/signup.png"
import Template from '../Components/Template'

function Signup({setIsLoggedIn}) {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to futre-proof your career."
    image={signupImg}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup


// import React from 'react';
// import signupImg from "../assets/signup.png";
// import Template from '../Components/Template';

// function Signup({ setIsLoggedIn }) {
//   return (
//     <Template
//       title="Join Us Today"
//       desc1="Start your journey towards a brighter future."
//       desc2="Education tailored for your success."
//       image={signupImg}
//       formtype="signup"
//       setIsLoggedIn={setIsLoggedIn}
//     >
//       <p className='text-center text-gray-500 mt-4'>
//         Already have an account? <a href="/login" className='text-blue-500 underline'>Log in here</a>
//       </p>
//     </Template>
//   );
// }

// export default Signup;
