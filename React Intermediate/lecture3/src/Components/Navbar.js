import React from 'react'
import logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast';

function Navbar(props) {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    return (
        <div className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>

            <Link to="/">
                <img src={logo} alt="Logo" width={160} height={32} loading='lazy' />
            </Link>

            <nav>
                <ul className='text-slate-100 flex gap-x-6'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>

            {/* login - signup - logout - dashboard  */}

            <div className='flex items-center gap-x-4 '>
                {!isLoggedIn &&
                    <Link to='/login'>
                        <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700'>
                            Log In
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link to='/signup'>
                        <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700'>
                            Sign Up
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to='/'>
                        <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700' 
                        onClick={() => {
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>
                            Log Out
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link to='/dashboard'>
                        <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border border-slate-700'>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar


// import React from 'react';
// import logo from "../assets/Logo.svg";
// import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';

// function Navbar({ isLoggedIn, setIsLoggedIn }) {
//     return (
//         <div className='flex items-center justify-between bg-gray-800 p-4 shadow-lg'>
//             {/* Logo */}
//             <Link to="/">
//                 <img
//                     src={logo}
//                     alt="Logo"
//                     width={160}
//                     height={32}
//                     loading='lazy'
//                     className='hover:scale-105 transition-transform duration-300'
//                 />
//             </Link>

//             {/* Navigation Links */}
//             <nav>
//                 <ul className='flex gap-6 text-white'>
//                     <li className='hover:text-yellow-400 transition-colors duration-300'>
//                         <Link to='/'>Home</Link>
//                     </li>
//                     <li className='hover:text-yellow-400 transition-colors duration-300'>
//                         <Link to='/'>About</Link>
//                     </li>
//                     <li className='hover:text-yellow-400 transition-colors duration-300'>
//                         <Link to='/'>Contact</Link>
//                     </li>
//                 </ul>
//             </nav>

//             {/* Authentication Buttons */}
//             <div className='flex items-center gap-4'>
//                 {!isLoggedIn && (
//                     <>
//                         <Link to='/login'>
//                             <button className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300'>
//                                 Login
//                             </button>
//                         </Link>
//                         <Link to='/signup'>
//                             <button className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 hover:shadow-lg transition-all duration-300'>
//                                 Sign Up
//                             </button>
//                         </Link>
//                     </>
//                 )}
//                 {isLoggedIn && (
//                     <>
//                         <Link to='/'>
//                             <button
//                                 onClick={() => {
//                                     setIsLoggedIn(false);
//                                     toast.success("Logged Out");
//                                 }}
//                                 className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 hover:shadow-lg transition-all duration-300'
//                             >
//                                 Log Out
//                             </button>
//                         </Link>
//                         <Link to='/dashboard'>
//                             <button className='px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 hover:shadow-lg transition-all duration-300'>
//                                 Dashboard
//                             </button>
//                         </Link>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Navbar;
