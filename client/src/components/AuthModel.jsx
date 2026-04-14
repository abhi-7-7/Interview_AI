// import React from 'react'
// import { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { FaTimes } from "react-icons/fa";
// import Auth from '../pages/Auth';

// function AuthModel({onClose}) {
//     const {userData} = useSelector((state)=>state.user)

//     useEffect(()=>{
//         if(userData){
//             onClose()
//         }

//     },[userData , onClose])

//   return (
//     <div className='fixed inset-0 z-[999] flex items-center justify-center bg-black/10 backdrop-blur-sm px-4'>
//         <div className='relative w-full max-w-md'>
//             <button onClick={onClose} className='absolute top-8 right-5 text-gray-800 hover:text-black text-xl'>
//              <FaTimes size={18}/>
//             </button>
//             <Auth isModel={true}/>


//         </div>

      
//     </div>
//   )
// }

// export default AuthModel




import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";
import Auth from '../pages/Auth';

const MotionDiv = motion.div;
const MotionButton = motion.button;

function AuthModel({ onClose }) {
  const { userData } = useSelector((state) => state.user)

  useEffect(() => {
    if (userData) { onClose() }
  }, [userData, onClose])

  return (
    <AnimatePresence>


      <MotionDiv
      
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          background: 'rgba(30,58,138,0.08)',
          backdropFilter: 'blur(6px)',
        }}>

        <MotionDiv
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '440px',
          }}>

          {/* Close Button */}
          <MotionButton
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '-14px',
              right: '-14px',
              width: '34px',
              height: '34px',
              background: 'white',
              border: '1px solid #E5E7EB',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#6B7280',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              transition: 'color 0.15s',
            }}>
            <FaTimes size={14} />
          </MotionButton>

          {/* Gradient badge strip at top */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(90deg, #1E3A8A, #3B82F6, #F97316)',
            borderRadius: '0 0 8px 8px',
            zIndex: 10,
          }} />

          <Auth isModel={true} />
        </MotionDiv>
      </MotionDiv>
    </AnimatePresence>
  )
}

export default AuthModel