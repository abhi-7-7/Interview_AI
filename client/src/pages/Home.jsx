// import React from 'react'
// import Navbar from '../components/Navbar'
// import { useSelector } from 'react-redux'
// import { motion } from "motion/react";
// import {
//   BsRobot,
//   BsMic,
//   BsClock,
//   BsBarChart,
//   BsFileEarmarkText
// } from "react-icons/bs";
// import { HiSparkles } from "react-icons/hi";
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import AuthModel from '../components/AuthModel';
// import hrImg from "../assets/HR.png";
// import techImg from "../assets/tech.png";
// import confidenceImg from "../assets/confi.png";
// import creditImg from "../assets/credit.png";
// import evalImg from "../assets/ai-ans.png";
// import resumeImg from "../assets/resume.png";
// import pdfImg from "../assets/pdf.png";
// import analyticsImg from "../assets/history.png";
// import Footer from '../components/Footer';


// function Home() {
//   const { userData } = useSelector((state) => state.user)
//   const [showAuth, setShowAuth] = useState(false);
//   const navigate = useNavigate()
//   const MotionDiv = motion.div;
//   const MotionButton = motion.button;
//   const Motionh1 = motion.h1;
//   const Motionh2 = motion.h2;

//   const Motionp = motion.p;

//   return (
//     <div className='min-h-screen bg-[#f3f3f3] flex flex-col'>
//       <Navbar />

//       <div className='flex-1 px-6 py-20'>
//         <div className='max-w-6xl mx-auto'>

//           <div className='flex justify-center mb-6'>
//             <div className='bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2'>
//               <HiSparkles size={16} className="bg-green-50 text-green-600" />
//               AI Powered Smart Interview Platform
//             </div>


//           </div>
//           <div className='text-center mb-28'>
//             <Motionh1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className='text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto'>
//               Practice Interviews with
//               <span className='relative inline-block'>
//                 <span className='bg-green-100 text-green-600 px-5 py-1 rounded-full'>
//                   AI Intelligence

//                 </span>
//               </span>



//             </Motionh1>

//             <Motionp
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className='text-gray-500 mt-6 max-w-2xl mx-auto text-lg'>
//               Role-based mock interviews with smart follow-ups,
//               adaptive difficulty and real-time performance evaluation.

//             </Motionp>

//             <div className='flex flex-wrap justify-center gap-4 mt-10'>
//               <MotionButton
//                 onClick={() => {
//                   if (!userData) {
//                     setShowAuth(true)
//                     return;
//                   }
//                   navigate("/interview")
//                 }}
//                 whileHover={{ opacity: 0.9, scale: 1.03 }}
//                 whileTap={{ opacity: 1, scale: 0.98 }}
//                 className='bg-black text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md'>
//                 Start Interview

//               </MotionButton>

//               <MotionButton
//                 onClick={() => {
//                   if (!userData) {
//                     setShowAuth(true)
//                     return;
//                   }
//                   navigate("/history")
//                 }}
//                 whileHover={{ opacity: 0.9, scale: 1.03 }}
//                 whileTap={{ opacity: 1, scale: 0.98 }}
//                 className='border border-gray-300 px-10 py-3 rounded-full hover:bg-gray-100 transition'>
//                 View History

//               </MotionButton>
//             </div>
//           </div>

//           <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-28'>
//             {
//               [
//                 {
//                   icon: <BsRobot size={24} />,
//                   step: "STEP 1",
//                   title: "Role & Experience Selection",
//                   desc: "AI adjusts difficulty based on selected job role."
//                 },
//                 {
//                   icon: <BsMic size={24} />,
//                   step: "STEP 2",
//                   title: "Smart Voice Interview",
//                   desc: "Dynamic follow-up questions based on your answers."
//                 },
//                 {
//                   icon: <BsClock size={24} />,
//                   step: "STEP 3",
//                   title: "Timer Based Simulation",
//                   desc: "Real interview pressure with time tracking."
//                 }
//               ].map((item, index) => (
//                 <MotionDiv key={index}
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 + index * 0.2 }}
//                   whileHover={{ rotate: 0, scale: 1.06 }}

//                   className={`
//         relative bg-white rounded-3xl border-2 border-green-100 
//         hover:border-green-500 p-10 w-80 max-w-[90%] shadow-md hover:shadow-2xl 
//         transition-all duration-300
//         ${index === 0 ? "rotate-[-4deg]" : ""}
//         ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
//         ${index === 2 ? "rotate-[-3deg]" : ""}
//       `}>

//                   <div className='absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-green-500 text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg'>
//                     {item.icon}</div>
//                   <div className='pt-10 text-center'>
//                     <div className='text-xs text-green-600 font-semibold mb-2 tracking-wider'>{item.step}</div>
//                     <h3 className='font-semibold mb-3 text-lg'>{item.title}</h3>
//                     <p className='text-sm text-gray-500 leading-relaxed'>{item.desc}</p>
//                   </div>


//                 </MotionDiv>
//               ))
//             }
//           </div>


//           <div className='mb-32'>
//             <Motionh2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className='text-4xl font-semibold text-center mb-16'>
//               Advanced AI{" "}
//               <span className="text-green-600">Capabilities</span>

//             </Motionh2>

//             <div className='grid md:grid-cols-2 gap-10'>
//               {
//                 [
//                   {
//                     image: evalImg,
//                     icon: <BsBarChart size={20} />,
//                     title: "AI Answer Evaluation",
//                     desc: "Scores communication, technical accuracy and confidence."
//                   },
//                   {
//                     image: resumeImg,
//                     icon: <BsFileEarmarkText size={20} />,
//                     title: "Resume Based Interview",
//                     desc: "Project-specific questions based on uploaded resume."
//                   },
//                   {
//                     image: pdfImg,
//                     icon: <BsFileEarmarkText size={20} />,
//                     title: "Downloadable PDF Report",
//                     desc: "Detailed strengths, weaknesses and improvement insights."
//                   },
//                   {
//                     image: analyticsImg,
//                     icon: <BsBarChart size={20} />,
//                     title: "History & Analytics",
//                     desc: "Track progress with performance graphs and topic analysis."
//                   }
//                 ].map((item, index) => (
//                   <MotionDiv key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ scale: 1.02 }}
//                     className='bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all'>
//                     <div className='flex flex-col md:flex-row items-center gap-8'>
//                       <div className='w-full md:w-1/2 flex justify-center'>
//                         <img src={item.image} alt={item.title} className='w-full h-auto object-contain max-h-64' />
//                       </div>

//                       <div className='w-full md:w-1/2'>
//                         <div className='bg-green-50 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6'>
//                           {item.icon}
//                         </div>
//                         <h3 className='font-semibold mb-3 text-xl'>{item.title}</h3>
//                         <p className='text-gray-500 text-sm leading-relaxed'>{item.desc}</p>
//                       </div>

//                     </div>


//                   </MotionDiv>
//                 ))
//               }
//             </div>


//           </div>

//           <div className='mb-32'>
//             <Motionh2
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               className='text-4xl font-semibold text-center mb-16'>
//               Multiple Interview{" "}
//               <span className="text-green-600">Modes</span>

//             </Motionh2>

//             <div className='grid md:grid-cols-2 gap-10'>
//               {
//                 [
//                   {
//                     img: hrImg,
//                     title: "HR Interview Mode",
//                     desc: "Behavioral and communication based evaluation."
//                   },
//                   {
//                     img: techImg,
//                     title: "Technical Mode",
//                     desc: "Deep technical questioning based on selected role."
//                   },

//                   {
//                     img: confidenceImg,
//                     title: "Confidence Detection",
//                     desc: "Basic tone and voice analysis insights."
//                   },
//                   {
//                     img: creditImg,
//                     title: "Credits System",
//                     desc: "Unlock premium interview sessions easily."
//                   }
//                 ].map((mode, index) => (
//                   <MotionDiv key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     whileHover={{ y: -6 }}
//                     className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all">

//                     <div className='flex items-center justify-between gap-6'>
//                       <div className="w-1/2">
//                         <h3 className="font-semibold text-xl mb-3">
//                           {mode.title}
//                         </h3>

//                         <p className="text-gray-500 text-sm leading-relaxed">
//                           {mode.desc}
//                         </p>
//                       </div>

//                       {/* RIGHT IMAGE */}
//                       <div className="w-1/2 flex justify-end">
//                         <img
//                           src={mode.img}
//                           alt={mode.title}
//                           className="w-28 h-28 object-contain"
//                         />
//                       </div>



//                     </div>


//                   </MotionDiv>
//                 ))
//               }
//             </div>


//           </div>

//         </div>
//       </div>

//       {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}

//         <Footer/>

//     </div>
//   )
// }

// export default Home




import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { motion } from "motion/react";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText
} from "react-icons/bs";
import { HiSparkles } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import AuthModel from '../components/AuthModel';
import hrImg from "../assets/HR.png";
import techImg from "../assets/tech.png";
import confidenceImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import evalImg from "../assets/ai-ans.png";
import resumeImg from "../assets/resume.png";
import pdfImg from "../assets/pdf.png";
import analyticsImg from "../assets/history.png";
import Footer from '../components/Footer';
import { ServerUrl } from '../App';

function Home() {
  const { userData } = useSelector((state) => state.user)
  const [showAuth, setShowAuth] = useState(false);
  const [myInterviews, setMyInterviews] = useState([]);
  const navigate = useNavigate()
  const MotionDiv = motion.div;
  const MotionButton = motion.button;
  const Motionh1 = motion.h1;
  const Motionh2 = motion.h2;
  const Motionp = motion.p;

  useEffect(() => {
    const getInterviews = async () => {
      if (!userData) {
        setMyInterviews([])
        return;
      }
      try {
        const result = await axios.get(ServerUrl + "/api/interview/get-interview", { withCredentials: true })
        setMyInterviews(Array.isArray(result.data) ? result.data : [])
      } catch {
        setMyInterviews([])
      }
    }
    getInterviews()
  }, [userData])

  const liveStats = useMemo(() => {
    if (!userData) {
      return [
        { value: "Live", label: "AI Interview Engine" },
        { value: "Secure", label: "Google Auth + JWT" },
        { value: "Role-Based", label: "Adaptive Questions" },
      ]
    }

    const completed = myInterviews.filter((i) => i.status === "completed")
    const total = myInterviews.length
    const avgScore = completed.length
      ? (completed.reduce((sum, i) => sum + (i.finalScore || 0), 0) / completed.length).toFixed(1)
      : "0.0"
    const bestScore = completed.length
      ? Math.max(...completed.map((i) => Number(i.finalScore || 0))).toFixed(1)
      : "0.0"

    return [
      { value: `${total}`, label: "Total Interviews" },
      { value: `${avgScore}/10`, label: "Average Score" },
      { value: `${bestScore}/10`, label: "Best Score" },
    ]
  }, [myInterviews, userData])

  return (
    <div className='min-h-screen flex flex-col' style={{ background: "#F5F5F5", fontFamily: "'Inter', sans-serif" }}>
      <Navbar />

      <div className='flex-1 px-6 py-20'>
        <div className='max-w-6xl mx-auto'>

          {/* ── HERO ── */}
          <div className='flex justify-center mb-6'>
            <div
              className='text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-2'
              style={{
                background: "linear-gradient(to right, #EFF6FF, #F0FDFA)",
                color: "#1E3A8A",
                border: "1px solid #BFDBFE"
              }}
            >
              <HiSparkles size={14} style={{ color: "#3B82F6" }} />
              AI Powered Smart Interview Platform
            </div>
          </div>

          <div className='text-center mb-28'>
            <Motionh1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-5xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto'
              style={{ color: "#303030", letterSpacing: "-0.02em" }}
            >
              Practice Interviews with{" "}
              <span
                className='px-4 py-1 rounded-full'
                style={{ background: "#EFF6FF", color: "#1E3A8A" }}
              >
                AI Intelligence
              </span>
            </Motionh1>

            <Motionp
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='mt-6 max-w-2xl mx-auto text-lg'
              style={{ color: "#6B7280" }}
            >
              Role-based mock interviews with smart follow-ups,
              adaptive difficulty and real-time performance evaluation.
            </Motionp>

            <div className='flex flex-wrap justify-center gap-4 mt-10'>
              <MotionButton
                onClick={() => {
                  if (!userData) { setShowAuth(true); return; }
                  navigate("/interview")
                }}
                whileHover={{ scale: 1.03, boxShadow: "0 8px 24px rgba(249,115,22,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className='px-10 py-3.5 rounded-xl font-semibold text-white text-sm transition-all'
                style={{ background: "#F97316" }}
              >
                Start Interview
              </MotionButton>

              <MotionButton
                onClick={() => {
                  if (!userData) { setShowAuth(true); return; }
                  navigate("/history")
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className='px-10 py-3.5 rounded-xl font-semibold text-sm transition-all'
                style={{
                  background: "white",
                  border: "1px solid #E5E7EB",
                  color: "#303030"
                }}
              >
                View History
              </MotionButton>
            </div>

            {/* Trust stats */}
            <div className='flex flex-wrap justify-center gap-8 mt-12'>
              {liveStats.map((stat) => (
                <div key={stat.label} className='text-center'>
                  <div className='text-2xl font-semibold' style={{ color: "#1E3A8A" }}>{stat.value}</div>
                  <div className='text-xs mt-0.5' style={{ color: "#9CA3AF" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── STEP CARDS ── */}
          <div className='flex flex-col md:flex-row justify-center items-center gap-10 mb-28'>
            {[
              {
                icon: <BsRobot size={22} />,
                step: "STEP 1",
                title: "Role & Experience Selection",
                desc: "AI adjusts difficulty based on selected job role."
              },
              {
                icon: <BsMic size={22} />,
                step: "STEP 2",
                title: "Smart Voice Interview",
                desc: "Dynamic follow-up questions based on your answers."
              },
              {
                icon: <BsClock size={22} />,
                step: "STEP 3",
                title: "Timer Based Simulation",
                desc: "Real interview pressure with time tracking."
              }
            ].map((item, index) => (
              <MotionDiv key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + index * 0.2 }}
                whileHover={{ rotate: 0, scale: 1.05, y: -4 }}
                className={`
                  relative bg-white rounded-2xl p-10 w-80 max-w-[90%] transition-all duration-300
                  ${index === 0 ? "rotate-[-4deg]" : ""}
                  ${index === 1 ? "rotate-[3deg] md:-mt-6" : ""}
                  ${index === 2 ? "rotate-[-3deg]" : ""}
                `}
                style={{
                  border: "2px solid #DBEAFE",
                  boxShadow: index === 1 ? "0 8px 32px rgba(30,58,138,0.12)" : "0 4px 20px rgba(0,0,0,0.05)"
                }}
              >
                {/* Icon bubble */}
                <div
                  className='absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-2xl flex items-center justify-center'
                  style={{
                    background: "white",
                    border: "2px solid #1E3A8A",
                    color: "#1E3A8A",
                    boxShadow: "0 4px 12px rgba(30,58,138,0.15)"
                  }}
                >
                  {item.icon}
                </div>

                <div className='pt-8 text-center'>
                  <div className='text-xs font-bold mb-2 tracking-widest' style={{ color: "#3B82F6" }}>
                    {item.step}
                  </div>
                  <h3 className='font-semibold mb-3 text-base' style={{ color: "#303030" }}>
                    {item.title}
                  </h3>
                  <p className='text-sm leading-relaxed' style={{ color: "#6B7280" }}>
                    {item.desc}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>

          {/* ── CAPABILITIES ── */}
          <div className='mb-32'>
            <Motionh2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-4'
              style={{ color: "#303030", letterSpacing: "-0.02em" }}
            >
              Advanced AI{" "}
              <span style={{ color: "#1E3A8A" }}>Capabilities</span>
            </Motionh2>
            <p className='text-center text-sm mb-14' style={{ color: "#9CA3AF" }}>
              Everything you need to prepare and perform at your best
            </p>

            <div className='grid md:grid-cols-2 gap-8'>
              {[
                {
                  image: evalImg,
                  icon: <BsBarChart size={18} />,
                  title: "AI Answer Evaluation",
                  desc: "Scores communication, technical accuracy and confidence in real time."
                },
                {
                  image: resumeImg,
                  icon: <BsFileEarmarkText size={18} />,
                  title: "Resume Based Interview",
                  desc: "Project-specific questions generated from your uploaded resume."
                },
                {
                  image: pdfImg,
                  icon: <BsFileEarmarkText size={18} />,
                  title: "Downloadable PDF Report",
                  desc: "Detailed strengths, weaknesses and improvement insights."
                },
                {
                  image: analyticsImg,
                  icon: <BsBarChart size={18} />,
                  title: "History & Analytics",
                  desc: "Track progress with performance graphs and topic analysis."
                }
              ].map((item, index) => (
                <MotionDiv key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(30,58,138,0.1)" }}
                  className='bg-white rounded-2xl p-8 transition-all duration-300'
                  style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                >
                  <div className='flex flex-col md:flex-row items-center gap-8'>
                    <div className='w-full md:w-1/2 flex justify-center'>
                      <img src={item.image} alt={item.title} className='w-full h-auto object-contain max-h-56' />
                    </div>
                    <div className='w-full md:w-1/2'>
                      <div
                        className='w-10 h-10 rounded-xl flex items-center justify-center mb-5'
                        style={{ background: "#EFF6FF", color: "#1E3A8A" }}
                      >
                        {item.icon}
                      </div>
                      <h3 className='font-semibold mb-2 text-lg' style={{ color: "#303030" }}>
                        {item.title}
                      </h3>
                      <p className='text-sm leading-relaxed' style={{ color: "#6B7280" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* ── INTERVIEW MODES ── */}
          <div className='mb-32'>
            <Motionh2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className='text-4xl font-semibold text-center mb-4'
              style={{ color: "#303030", letterSpacing: "-0.02em" }}
            >
              Multiple Interview{" "}
              <span style={{ color: "#1E3A8A" }}>Modes</span>
            </Motionh2>
            <p className='text-center text-sm mb-14' style={{ color: "#9CA3AF" }}>
              Tailored experiences for every stage of your journey
            </p>

            <div className='grid md:grid-cols-2 gap-8'>
              {[
                { img: hrImg, title: "HR Interview Mode", desc: "Behavioral and communication based evaluation." },
                { img: techImg, title: "Technical Mode", desc: "Deep technical questioning based on selected role." },
                { img: confidenceImg, title: "Confidence Detection", desc: "Basic tone and voice analysis insights." },
                { img: creditImg, title: "Credits System", desc: "Unlock premium interview sessions easily." }
              ].map((mode, index) => (
                <MotionDiv key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(30,58,138,0.1)" }}
                  className="bg-white rounded-2xl p-8 transition-all duration-300"
                  style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                >
                  <div className='flex items-center justify-between gap-6'>
                    <div className="flex-1">
                      {/* small label */}
                      <div className="text-xs font-semibold mb-3 tracking-widest uppercase" style={{ color: "#3B82F6" }}>
                        Mode {index + 1}
                      </div>
                      <h3 className="font-semibold text-lg mb-2" style={{ color: "#303030" }}>
                        {mode.title}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                        {mode.desc}
                      </p>
                    </div>
                    <div className="flex-shrink-0 w-24 h-24 flex items-center justify-end">
                      <img src={mode.img} alt={mode.title} className="w-24 h-24 object-contain" />
                    </div>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>

          {/* ── CTA BANNER ── */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='rounded-2xl p-10 text-center mb-20'
            style={{ background: "#1E3A8A" }}
          >
            <h2 className='text-3xl font-semibold mb-3 text-white'>
              Ready to ace your next interview?
            </h2>
            <p className='mb-8 text-sm' style={{ color: "#93C5FD" }}>
              Join thousands of candidates who improved with InterviewIQ.AI
            </p>
            <MotionButton
              onClick={() => { if (!userData) { setShowAuth(true); return; } navigate("/interview") }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 28px rgba(249,115,22,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className='px-10 py-3.5 rounded-xl font-semibold text-white text-sm'
              style={{ background: "#F97316" }}
            >
              Start Free Interview →
            </MotionButton>
          </MotionDiv>

        </div>
      </div>

      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
      <Footer />
    </div>
  )
}

export default Home