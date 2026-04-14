// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { motion } from "motion/react"
// import { BsRobot, BsCoin } from "react-icons/bs";
// import { HiOutlineLogout } from "react-icons/hi";
// import { FaUserAstronaut } from "react-icons/fa";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { ServerUrl } from '../App';
// import { setUserData } from '../redux/userSlice';
// import AuthModel from './AuthModel';
// function Navbar() {
//     const {userData} = useSelector((state)=>state.user)
//     const [showCreditPopup,setShowCreditPopup] = useState(false)
//     const [showUserPopup,setShowUserPopup] = useState(false)
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const [showAuth, setShowAuth] = useState(false);

//     const handleLogout = async () => {
//         try {
//             await axios.get(ServerUrl + "/api/auth/logout" , {withCredentials:true})
//             dispatch(setUserData(null))
//             setShowCreditPopup(false)
//             setShowUserPopup(false)
//             navigate("/")

//         } catch (error) {
//             console.log(error)
//         }
//     }
//   return (
//     <div className='bg-[#f3f3f3] flex justify-center px-4 pt-6'>
//         <motion.div 
//         initial={{opacity:0 , y:-40}}
//         animate={{opacity:1 , y:0}}
//         transition={{duration: 0.3}}
//         className='w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex justify-between items-center relative'>
//             <div className='flex items-center gap-3 cursor-pointer'>
//                 <div className='bg-black text-white p-2 rounded-lg'>
//                     <BsRobot size={18}/>

//                 </div>
//                 <h1 className='font-semibold hidden md:block text-lg'>InterviewIQ.AI</h1>
//             </div>

//             <div className='flex items-center gap-6  relative'>
//                 <div className='relative'>
//                     <button onClick={()=>{
//                         if(!userData){
//                             setShowAuth(true)
//                             return;
//                         }
//                         setShowCreditPopup(!showCreditPopup);
//                         setShowUserPopup(false)
//                     }} className='flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-md hover:bg-gray-200 transition'>
//                         <BsCoin size={20}/>
//                         {userData?.credits || 0}
//                     </button>

//                     {showCreditPopup && (
//                         <div className='absolute right-[-50px] mt-3 w-64 bg-white shadow-xl border border-gray-200 rounded-xl p-5 z-50'>
//                             <p className='text-sm text-gray-600 mb-4'>Need more credits to continue interviews?</p>
//                             <button onClick={()=>navigate("/pricing")} className='w-full bg-black text-white py-2 rounded-lg text-sm'>Buy more credits</button>

//                         </div>
//                     )}
//                 </div>

//                 <div className='relative'>
//                     <button
//                     onClick={()=>{
//                          if(!userData){
//                             setShowAuth(true)
//                             return;
//                         }
//                         setShowUserPopup(!showUserPopup);
//                         setShowCreditPopup(false)
//                     }} className='w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-semibold'>
//                         {userData ? userData?.name.slice(0,1).toUpperCase() : <FaUserAstronaut size={16}/>}
                        
//                     </button>

//                     {showUserPopup && (
//                         <div className='absolute right-0 mt-3 w-48 bg-white shadow-xl border border-gray-200 rounded-xl p-4 z-50'>
//                             <p className='text-md text-blue-500 font-medium mb-1'>{userData?.name}</p>

//                             <button onClick={()=>navigate("/history")} className='w-full text-left text-sm py-2 hover:text-black text-gray-600'>InterView History</button>
//                             <button onClick={handleLogout} 
//                             className='w-full text-left text-sm py-2 flex items-center gap-2 text-red-500'>
//                                 <HiOutlineLogout size={16}/>
//                                 Logout</button>
//                         </div>
//                     )}
//                 </div>

//             </div>



//         </motion.div>

//         {showAuth && <AuthModel onClose={()=>setShowAuth(false)}/>}
      
//     </div>
//   )
// }

// export default Navbar



import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion, AnimatePresence } from "motion/react"
import { BsRobot, BsCoin } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserAstronaut, FaHistory, FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ServerUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import AuthModel from './AuthModel';

const MotionDiv = motion.div;
const MotionButton = motion.button;

function Navbar() {
  const { userData } = useSelector((state) => state.user)
  const [showCreditPopup, setShowCreditPopup] = useState(false)
  const [showUserPopup, setShowUserPopup] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showAuth, setShowAuth] = useState(false);

  const handleLogout = async () => {
    try {
      await axios.get(ServerUrl + "/api/auth/logout", { withCredentials: true })
      dispatch(setUserData(null))
      setShowCreditPopup(false)
      setShowUserPopup(false)
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      style={{ background: '#F5F5F5' }}
      className='flex justify-center px-4 pt-6'>
      <MotionDiv
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        style={{
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
        }}
        className='w-full max-w-6xl px-8 py-4 flex justify-between items-center relative'>

        {/* Logo */}
        <div
          className='flex items-center gap-3 cursor-pointer group'
          onClick={() => navigate('/')}>
          <div style={{
            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
            borderRadius: '12px',
            padding: '8px',
            color: 'white',
            boxShadow: '0 4px 12px rgba(30,58,138,0.25)',
          }}>
            <BsRobot size={18} />
          </div>
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '17px',
            color: '#1E3A8A',
            letterSpacing: '-0.3px',
          }} className='hidden md:block'>
            InterviewIQ<span style={{ color: '#F97316' }}>.AI</span>
          </h1>
        </div>

        {/* Right Controls */}
        <div className='flex items-center gap-3 relative'>

          {/* Credits Button */}
          <div className='relative'>
            <MotionButton
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => {
                if (!userData) { setShowAuth(true); return; }
                setShowCreditPopup(!showCreditPopup);
                setShowUserPopup(false)
              }}
              style={{
                background: showCreditPopup ? '#FFF7ED' : '#F5F5F5',
                border: `1px solid ${showCreditPopup ? '#FDBA74' : '#E5E7EB'}`,
                borderRadius: '999px',
                padding: '8px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
                color: '#303030',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}>
              <BsCoin size={17} style={{ color: '#F97316' }} />
              {userData?.credits ?? 0}
            </MotionButton>

            <AnimatePresence>
              {showCreditPopup && (
                <MotionDiv
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'absolute',
                    right: '-50px',
                    top: 'calc(100% + 12px)',
                    width: '260px',
                    background: 'white',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    padding: '20px',
                    zIndex: 50,
                  }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '12px',
                  }}>
                    <div style={{
                      background: '#FFF7ED',
                      borderRadius: '10px',
                      padding: '8px',
                    }}>
                      <BsCoin size={20} style={{ color: '#F97316' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '18px', color: '#303030', lineHeight: 1 }}>{userData?.credits ?? 0}</p>
                      <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: '11px', color: '#9CA3AF' }}>Credits remaining</p>
                    </div>
                  </div>
                  <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '14px', fontFamily: "'Poppins',sans-serif" }}>
                    Need more credits to continue your interviews?
                  </p>
                  <MotionButton
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/pricing")}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #F97316, #EA580C)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '10px',
                      fontFamily: "'Poppins',sans-serif",
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 12px rgba(249,115,22,0.3)',
                    }}>
                    <FaShoppingCart size={13} />
                    Buy more credits
                  </MotionButton>
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>

          {/* User Avatar Button */}
          <div className='relative'>
            <MotionButton
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (!userData) { setShowAuth(true); return; }
                setShowUserPopup(!showUserPopup);
                setShowCreditPopup(false)
              }}
              style={{
                width: '38px',
                height: '38px',
                background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
                borderRadius: '50%',
                border: '2px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(30,58,138,0.2)',
              }}>
              {userData ? userData?.name.slice(0, 1).toUpperCase() : <FaUserAstronaut size={16} />}
            </MotionButton>

            <AnimatePresence>
              {showUserPopup && (
                <MotionDiv
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: 'calc(100% + 12px)',
                    width: '210px',
                    background: 'white',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    padding: '16px',
                    zIndex: 50,
                  }}>
                  {/* User Name Badge */}
                  <div style={{
                    background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                    borderRadius: '10px',
                    padding: '10px 12px',
                    marginBottom: '12px',
                  }}>
                    <p style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontWeight: 700,
                      fontSize: '14px',
                      color: '#1E3A8A',
                    }}>{userData?.name}</p>
                    <p style={{ fontSize: '11px', color: '#3B82F6', fontFamily: "'Poppins',sans-serif" }}>
                      {userData?.email?.slice(0, 22)}{userData?.email?.length > 22 ? '…' : ''}
                    </p>
                  </div>

                  <MotionButton
                    whileHover={{ background: '#F5F5F5' }}
                    onClick={() => navigate("/history")}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '9px 10px',
                      borderRadius: '9px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '13px',
                      color: '#303030',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'background 0.15s',
                    }}>
                    <FaHistory size={13} style={{ color: '#6B7280' }} />
                    Interview History
                  </MotionButton>

                  <div style={{ height: '1px', background: '#F3F4F6', margin: '8px 0' }} />

                  <MotionButton
                    whileHover={{ background: '#FEF2F2' }}
                    onClick={handleLogout}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '9px 10px',
                      borderRadius: '9px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: '13px',
                      color: '#EF4444',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      transition: 'background 0.15s',
                    }}>
                    <HiOutlineLogout size={15} />
                    Logout
                  </MotionButton>
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>
        </div>
      </MotionDiv>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
    </div>
  )
}

export default Navbar