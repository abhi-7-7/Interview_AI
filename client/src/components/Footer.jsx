// import React from 'react'
// import { BsRobot } from 'react-icons/bs'

// function Footer() {
//   return (
//     <div className='bg-[#f3f3f3] flex justify-center px-4 pb-10 py-4 pt-10'>
//       <div className='w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 py-8 px-3 text-center'>
//         <div className='flex justify-center items-center gap-3 mb-3'>
//             <div className='bg-black text-white p-2 rounded-lg'><BsRobot size={16}/></div>
//             <h2 className='font-semibold'>InterviewIQ.AI</h2>
//         </div>
//         <p className='text-gray-500 text-sm max-w-xl mx-auto'>
//   AI-powered interview preparation platform designed to improve
//           communication skills, technical depth and professional confidence.
//         </p>


//       </div>
//     </div>
//   )
// }

// export default Footer


import React from 'react'
import { BsRobot } from 'react-icons/bs'
import { motion } from 'motion/react'

const MotionDiv = motion.div;

function Footer() {
  return (
    <div style={{ background: '#F5F5F5' }} className='flex justify-center px-4 pb-10 pt-10'>
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          width: '100%',
          maxWidth: '1200px',
          background: '#FFFFFF',
          borderRadius: '20px',
          border: '1px solid #E5E7EB',
          boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
          padding: '36px 24px',
          textAlign: 'center',
        }}>

        {/* Logo Row */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
            borderRadius: '12px',
            padding: '8px',
            color: 'white',
            boxShadow: '0 4px 12px rgba(30,58,138,0.2)',
          }}>
            <BsRobot size={16} />
          </div>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            color: '#1E3A8A',
            letterSpacing: '-0.2px',
          }}>
            InterviewIQ<span style={{ color: '#F97316' }}>.AI</span>
          </h2>
        </div>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '13px',
          color: '#9CA3AF',
          maxWidth: '440px',
          margin: '0 auto 20px',
          lineHeight: 1.7,
        }}>
          AI-powered interview preparation designed to improve
          communication skills, technical depth and professional confidence.
        </p>

        {/* Divider */}
        <div style={{ height: '1px', background: '#F3F4F6', maxWidth: '400px', margin: '0 auto 16px' }} />

        {/* Bottom copy */}
        <p style={{
          fontFamily: "'Poppins', sans-serif",
          fontSize: '12px',
          color: '#D1D5DB',
        }}>
          © {new Date().getFullYear()} InterviewIQ.AI · All rights reserved
        </p>
      </MotionDiv>
    </div>
  )
}

export default Footer