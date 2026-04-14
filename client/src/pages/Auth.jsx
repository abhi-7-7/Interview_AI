// import React from 'react'
// import { BsRobot } from "react-icons/bs";
// import { IoSparkles } from "react-icons/io5";
// import { motion } from "motion/react"
// import { FcGoogle } from "react-icons/fc";
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../utils/firebase';
// import axios from 'axios';
// import { ServerUrl } from '../App';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../redux/userSlice';
// import { useNavigate } from 'react-router-dom';
// function Auth({isModel = false}) {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const MotionDiv = motion.div;
//     const MotionButton = motion.button;

//     const handleGoogleAuth = async () => {
//         try {
//             const response = await signInWithPopup(auth,provider)
//             let User = response.user
//             let name = User.displayName
//             let email = User.email
//             const result = await axios.post(ServerUrl + "/api/auth/google" , {name , email} , {withCredentials:true})
//             dispatch(setUserData(result.data))
//             if (!isModel) navigate("/")
            


            
//         } catch (error) {
//             console.log(error)
//               dispatch(setUserData(null))
//         }
//     }
//   return (
//     <div className={`
//       w-full 
//       ${isModel ? "py-4" : "min-h-screen bg-[#f3f3f3] flex items-center justify-center px-6 py-20"}
//     `}>
//         <MotionDiv 
//         initial={{opacity:0 , y:-40}} 
//         animate={{opacity:1 , y:0}} 
//         transition={{duration:1.05}}
//         className={`
//         w-full 
//         ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-[32px]"}
//         bg-white shadow-2xl border border-gray-200
//       `}>
//             <div className='flex items-center justify-center gap-3 mb-6'>
//                 <div className='bg-black text-white p-2 rounded-lg'>
//                     <BsRobot size={18}/>

//                 </div>
//                 <h2 className='font-semibold text-lg'>InterviewIQ.AI</h2>
//             </div>

//             <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug mb-4'>
//                 Continue with
//                 <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gap-2'>
//                     <IoSparkles size={16}/>
//                     AI Smart Interview

//                 </span>
//             </h1>

//             <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'>
//                 Sign in to start AI-powered mock interviews,
//         track your progress, and unlock detailed performance insights.
//             </p>


//             <MotionButton
//             onClick={handleGoogleAuth}
//             whileHover={{opacity:0.9 , scale:1.03}}
//             whileTap={{opacity:1 , scale:0.98}}
//             className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md '>
//                 <FcGoogle size={20}/>
//                 Continue with Google

   
//             </MotionButton>
//         </MotionDiv>

      
//     </div>
//   )
// }

// export default Auth


import React from 'react'
import { BsRobot } from "react-icons/bs";
import { IoSparkles } from "react-icons/io5";
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

function Auth({ isModel = false }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const MotionDiv = motion.div;
  const MotionButton = motion.button;

  const handleGoogleAuth = async () => {
    try {
      const response = await signInWithPopup(auth, provider)
      let User = response.user
      let name = User.displayName
      let email = User.email
      const result = await axios.post(ServerUrl + "/api/auth/google", { name, email }, { withCredentials: true })
      dispatch(setUserData(result.data))
      if (!isModel) navigate("/")
    } catch (error) {
      console.log(error)
      dispatch(setUserData(null))
    }
  }

  return (
    <div className={`
      w-full font-['Inter',sans-serif]
      ${isModel ? "py-4" : "min-h-screen bg-[#F5F5F5] flex items-center justify-center px-6 py-20"}
    `}>
      <MotionDiv
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`
          w-full relative overflow-hidden
          ${isModel ? "max-w-md p-8 rounded-2xl" : "max-w-md p-10 rounded-2xl"}
          bg-white border border-gray-200
        `}
        style={{ boxShadow: "0 4px 32px rgba(0,0,0,0.08)" }}
      >
        {/* Top gradient accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
          style={{ background: "linear-gradient(to right, #1E3A8A, #3B82F6, #14B8A6)" }}
        />

        {/* Logo mark */}
        <div className="flex items-center justify-center gap-3 mb-7 mt-2">
          <div
            className="flex items-center justify-center w-9 h-9 rounded-xl"
            style={{ background: "#1E3A8A" }}
          >
            <BsRobot size={18} color="white" />
          </div>
          <span className="font-semibold text-base" style={{ color: "#303030", letterSpacing: "-0.01em" }}>
            InterviewIQ.AI
          </span>
        </div>

        {/* Gradient badge */}
        <div className="flex justify-center mb-5">
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white"
            style={{ background: "linear-gradient(to right, #14B8A6, #3B82F6)" }}
          >
            <IoSparkles size={12} />
            AI-Powered Interview Platform
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-semibold text-center mb-3 leading-snug" style={{ color: "#303030" }}>
          Ace your next interview
        </h1>

        {/* Sub */}
        <p className="text-center text-sm leading-relaxed mb-8" style={{ color: "#6B7280" }}>
          Sign in to access AI mock interviews, track your progress,
          and get detailed performance insights.
        </p>

        {/* 3 mini feature pills */}
        <div className="flex justify-center gap-2 flex-wrap mb-8">
          {["Smart Questions", "Real-time Feedback", "PDF Reports"].map((f) => (
            <span
              key={f}
              className="text-xs px-3 py-1 rounded-full border"
              style={{ color: "#1E3A8A", borderColor: "#BFDBFE", background: "#EFF6FF" }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <MotionButton
          onClick={handleGoogleAuth}
          whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(249,115,22,0.25)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-white text-sm transition-all"
          style={{ background: "#F97316" }}
        >
          <FcGoogle size={20} />
          Continue with Google
        </MotionButton>

        <p className="text-center text-xs mt-5" style={{ color: "#9CA3AF" }}>
          By continuing, you agree to our Terms & Privacy Policy.
        </p>
      </MotionDiv>
    </div>
  )
}

export default Auth