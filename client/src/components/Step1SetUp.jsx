// import React from 'react'
// import { motion } from "motion/react"
// import {
//     FaUserTie,
//     FaBriefcase,
//     FaFileUpload,
//     FaMicrophoneAlt,
//     FaChartLine,
// } from "react-icons/fa";
// import { useState } from 'react';
// import axios from "axios"
// import { ServerUrl } from '../App';
// import { useDispatch, useSelector } from 'react-redux';
// import { setUserData } from '../redux/userSlice';
// function Step1SetUp({ onStart }) {
//     const {userData}= useSelector((state)=>state.user)
//     const dispatch = useDispatch()
//     const [role, setRole] = useState("");
//     const [experience, setExperience] = useState("");
//     const [mode, setMode] = useState("Technical");
//     const [resumeFile, setResumeFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [projects, setProjects] = useState([]);
//     const [skills, setSkills] = useState([]);
//     const [resumeText, setResumeText] = useState("");
//     const [analysisDone, setAnalysisDone] = useState(false);
//     const [analyzing, setAnalyzing] = useState(false);


//     const handleUploadResume = async () => {
//         if (!resumeFile || analyzing) return;
//         setAnalyzing(true)

//         const formdata = new FormData()
//         formdata.append("resume", resumeFile)

//         try {
//             const result = await axios.post(ServerUrl + "/api/interview/resume", formdata, { withCredentials: true })

//             console.log(result.data)

//             setRole(result.data.role || "");
//             setExperience(result.data.experience || "");
//             setProjects(result.data.projects || []);
//             setSkills(result.data.skills || []);
//             setResumeText(result.data.resumeText || "");
//             setAnalysisDone(true);

//             setAnalyzing(false);

//         } catch (error) {
//             console.log(error)
//             setAnalyzing(false);
//         }
//     }

//     const handleStart = async () => {
//         setLoading(true)
//         try {
//            const result = await axios.post(ServerUrl + "/api/interview/generate-questions" , {role, experience, mode , resumeText, projects, skills } , {withCredentials:true}) 
//            console.log(result.data)
//            if(userData){
//             dispatch(setUserData({...userData , credits:result.data.creditsLeft}))
//            }
//            setLoading(false)
//            onStart(result.data)

//         } catch (error) {
//             console.log(error)
//             setLoading(false)
//         }
//     }
//     return (
//         <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4'>

//             <div className='w-full max-w-6xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden'>

//                 <motion.div
//                     initial={{ x: -80, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.7 }}
//                     className='relative bg-gradient-to-br from-green-50 to-green-100 p-12 flex flex-col justify-center'>

//                     <h2 className="text-4xl font-bold text-gray-800 mb-6">
//                         Start Your AI Interview
//                     </h2>

//                     <p className="text-gray-600 mb-10">
//                         Practice real interview scenarios powered by AI.
//                         Improve communication, technical skills, and confidence.
//                     </p>

//                     <div className='space-y-5'>

//                         {
//                             [
//                                 {
//                                     icon: <FaUserTie className="text-green-600 text-xl" />,
//                                     text: "Choose Role & Experience",
//                                 },
//                                 {
//                                     icon: <FaMicrophoneAlt className="text-green-600 text-xl" />,
//                                     text: "Smart Voice Interview",
//                                 },
//                                 {
//                                     icon: <FaChartLine className="text-green-600 text-xl" />,
//                                     text: "Performance Analytics",
//                                 },
//                             ].map((item, index) => (
//                                 <motion.div key={index}
//                                     initial={{ y: 30, opacity: 0 }}
//                                     animate={{ y: 0, opacity: 1 }}
//                                     transition={{ delay: 0.3 + index * 0.15 }}
//                                     whileHover={{ scale: 1.03 }}
//                                     className='flex items-center space-x-4 bg-white p-4 rounded-xl shadow-sm cursor-pointer'>
//                                     {item.icon}
//                                     <span className='text-gray-700 font-medium'>{item.text}</span>

//                                 </motion.div>
//                             ))
//                         }
//                     </div>



//                 </motion.div>



//                 <motion.div
//                     initial={{ x: 80, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.7 }}
//                     className="p-12 bg-white">

//                     <h2 className='text-3xl font-bold text-gray-800 mb-8'>
//                         Interview SetUp
//                     </h2>


//                     <div className='space-y-6'>

//                         <div className='relative'>
//                             <FaUserTie className='absolute top-4 left-4 text-gray-400' />

//                             <input type='text' placeholder='Enter role'
//                                 className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition'
//                                 onChange={(e) => setRole(e.target.value)} value={role} />
//                         </div>


//                         <div className='relative'>
//                             <FaBriefcase className='absolute top-4 left-4 text-gray-400' />

//                             <input type='text' placeholder='Experience (e.g. 2 years)'
//                                 className='w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition'
//                                 onChange={(e) => setExperience(e.target.value)} value={experience} />



//                         </div>

//                         <select value={mode}
//                             onChange={(e) => setMode(e.target.value)}
//                             className='w-full py-3 px-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition'>

//                             <option value="Technical">Technical Interview</option>
//                             <option value="HR">HR Interview</option>

//                         </select>

//                         {!analysisDone && (
//                             <motion.div
//                                 whileHover={{ scale: 1.02 }}
//                                 onClick={() => document.getElementById("resumeUpload").click()}
//                                 className='border-2 border-dashed border-gray-300 rounded-xl p-8 text-center cursor-pointer hover:border-green-500 hover:bg-green-50 transition'>

//                                 <FaFileUpload className='text-4xl mx-auto text-green-600 mb-3' />

//                                 <input type="file"
//                                     accept="application/pdf"
//                                     id="resumeUpload"
//                                     className='hidden'
//                                     onChange={(e) => setResumeFile(e.target.files[0])} />

//                                 <p className='text-gray-600 font-medium'>
//                                     {resumeFile ? resumeFile.name : "Click to upload resume (Optional)"}
//                                 </p>

//                                 {resumeFile && (
//                                     <motion.button
//                                         whileHover={{ scale: 1.02 }}
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             handleUploadResume()
//                                         }}

//                                         className='mt-4 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition'>
//                                         {analyzing ? "Analyzing..." : "Analyze Resume"}



//                                     </motion.button>)}

//                             </motion.div>


//                         )}

//                         {analysisDone && (
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 className='bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4'>
//                                 <h3 className='text-lg font-semibold text-gray-800'>
//                                     Resume Analysis Result</h3>

//                                 {projects.length > 0 && (
//                                     <div>
//                                         <p className='font-medium text-gray-700 mb-1'>
//                                             Projects:</p>

//                                         <ul className='list-disc list-inside text-gray-600 space-y-1'>
//                                             {projects.map((p, i) => (
//                                                 <li key={i}>{p}</li>
//                                             ))}
//                                         </ul>
//                                     </div>
//                                 )}

//                                 {skills.length > 0 && (
//                                     <div>
//                                         <p className='font-medium text-gray-700 mb-1'>
//                                             Skills:</p>

//                                         <div className='flex flex-wrap gap-2'>
//                                             {skills.map((s, i) => (
//                                                 <span key={i} className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm'>{s}</span>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}

//                             </motion.div>
//                         )}


//                         <motion.button
//                         onClick={handleStart}
//                             disabled={!role || !experience || loading}
//                             whileHover={{ scale: 1.03 }}
//                             whileTap={{ scale: 0.95 }}
//                             className='w-full disabled:bg-gray-600 bg-green-600 hover:bg-green-700 text-white py-3 rounded-full text-lg font-semibold transition duration-300 shadow-md'>
//                             {loading ? "Staring...":"Start Interview"}


//                         </motion.button>
//                     </div>

//                 </motion.div>
//             </div>

//         </motion.div>
//     )
// }

// export default Step1SetUp




import React from 'react'
import { motion, AnimatePresence } from "motion/react"
import {
  FaUserTie,
  FaBriefcase,
  FaFileUpload,
  FaMicrophoneAlt,
  FaChartLine,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";
import { BsRobot } from "react-icons/bs";
import { useState } from 'react';
import axios from "axios"
import { ServerUrl } from '../App';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../redux/userSlice';

const MotionDiv = motion.div;
const MotionButton = motion.button;
const FEATURES = [
  {
    icon: <FaUserTie size={16} />,
    title: "Choose Role & Experience",
    desc: "Tailored questions for your level",
  },
  {
    icon: <FaMicrophoneAlt size={16} />,
    title: "Smart Voice Interview",
    desc: "Real-time AI-powered evaluation",
  },
  {
    icon: <FaChartLine size={16} />,
    title: "Performance Analytics",
    desc: "Detailed feedback & scoring",
  },
];

function Step1SetUp({ onStart }) {
  const { userData } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [mode, setMode] = useState("Technical");
  const [resumeFile, setResumeFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [resumeText, setResumeText] = useState("");
  const [analysisDone, setAnalysisDone] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleUploadResume = async () => {
    if (!resumeFile || analyzing) return;
    setAnalyzing(true)
    const formdata = new FormData()
    formdata.append("resume", resumeFile)
    try {
      const result = await axios.post(ServerUrl + "/api/interview/resume", formdata, { withCredentials: true })
      setRole(result.data.role || "");
      setExperience(result.data.experience || "");
      setProjects(result.data.projects || []);
      setSkills(result.data.skills || []);
      setResumeText(result.data.resumeText || "");
      setAnalysisDone(true);
      setAnalyzing(false);
    } catch (error) {
      console.log(error)
      setAnalyzing(false);
    }
  }

  const handleStart = async () => {
    setLoading(true)
    try {
      const result = await axios.post(ServerUrl + "/api/interview/generate-questions", { role, experience, mode, resumeText, projects, skills }, { withCredentials: true })
      if (userData) {
        dispatch(setUserData({ ...userData, credits: result.data.creditsLeft }))
      }
      setLoading(false)
      onStart(result.data)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',
        padding: '24px 16px',
        fontFamily: "'Poppins', sans-serif",
      }}>

      <div style={{
        width: '100%',
        maxWidth: '1100px',
        background: 'white',
        borderRadius: '28px',
        boxShadow: '0 8px 48px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      }}>

        {/* ── LEFT PANEL ── */}
        <MotionDiv
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(160deg, #1E3A8A 0%, #1d4ed8 60%, #1E3A8A 100%)',
            padding: '52px 44px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>

          {/* Decorative circle */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '220px',
            height: '220px',
            borderRadius: '50%',
            background: 'rgba(59,130,246,0.15)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
            width: '160px',
            height: '160px',
            borderRadius: '50%',
            background: 'rgba(249,115,22,0.08)',
          }} />

          {/* Logo pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '999px',
            padding: '6px 14px 6px 8px',
            marginBottom: '32px',
            width: 'fit-content',
          }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '8px', padding: '5px' }}>
              <BsRobot size={14} color="white" />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '12px', fontWeight: 600 }}>InterviewIQ.AI</span>
          </div>

          <h2 style={{
            fontSize: '34px',
            fontWeight: 800,
            color: 'white',
            marginBottom: '14px',
            lineHeight: 1.2,
            letterSpacing: '-0.5px',
          }}>
            Start Your<br />
            <span style={{ color: '#F97316' }}>AI Interview</span>
          </h2>

          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '14px',
            lineHeight: 1.7,
            marginBottom: '36px',
            maxWidth: '300px',
          }}>
            Practice real interview scenarios powered by AI.
            Improve communication, technical skills, and confidence.
          </p>

          {/* Feature Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {FEATURES.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.12 }}
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '14px 16px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  cursor: 'default',
                  transition: 'background 0.2s',
                }}>
                <div style={{
                  background: 'rgba(249,115,22,0.2)',
                  borderRadius: '10px',
                  padding: '8px',
                  color: '#F97316',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ color: 'white', fontWeight: 600, fontSize: '13px', marginBottom: '2px' }}>{item.title}</p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px' }}>{item.desc}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* ── RIGHT PANEL ── */}
        <MotionDiv
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ padding: '52px 44px', background: 'white' }}>

          <h2 style={{
            fontSize: '26px',
            fontWeight: 800,
            color: '#1E3A8A',
            marginBottom: '6px',
            letterSpacing: '-0.4px',
          }}>
            Interview Setup
          </h2>
          <p style={{ fontSize: '13px', color: '#9CA3AF', marginBottom: '32px' }}>
            Fill in the details to generate your personalised questions
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

            {/* Role Input */}
            <div style={{ position: 'relative' }}>
              <FaUserTie style={{
                position: 'absolute', top: '50%', left: '14px',
                transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none',
              }} />
              <input
                type='text'
                placeholder='Job role (e.g. Frontend Developer)'
                value={role}
                onChange={(e) => setRole(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '40px',
                  paddingRight: '16px',
                  paddingTop: '13px',
                  paddingBottom: '13px',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: '12px',
                  fontSize: '14px',
                  color: '#303030',
                  outline: 'none',
                  fontFamily: "'Poppins',sans-serif",
                  background: '#FAFAFA',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Experience Input */}
            <div style={{ position: 'relative' }}>
              <FaBriefcase style={{
                position: 'absolute', top: '50%', left: '14px',
                transform: 'translateY(-50%)', color: '#9CA3AF', pointerEvents: 'none',
              }} />
              <input
                type='text'
                placeholder='Experience (e.g. 2 years)'
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '40px',
                  paddingRight: '16px',
                  paddingTop: '13px',
                  paddingBottom: '13px',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: '12px',
                  fontSize: '14px',
                  color: '#303030',
                  outline: 'none',
                  fontFamily: "'Poppins',sans-serif",
                  background: '#FAFAFA',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
                onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'; }}
                onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; }}
              />
            </div>

            {/* Mode Select */}
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              style={{
                width: '100%',
                padding: '13px 16px',
                border: '1.5px solid #E5E7EB',
                borderRadius: '12px',
                fontSize: '14px',
                color: '#303030',
                outline: 'none',
                fontFamily: "'Poppins',sans-serif",
                background: '#FAFAFA',
                cursor: 'pointer',
                appearance: 'none',
                boxSizing: 'border-box',
              }}>
              <option value="Technical">💻 Technical Interview</option>
              <option value="HR">🤝 HR Interview</option>
            </select>

            {/* Resume Upload */}
            <AnimatePresence>
              {!analysisDone && (
                <MotionDiv
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, height: 0 }}
                  whileHover={{ borderColor: '#3B82F6' }}
                  onClick={() => document.getElementById("resumeUpload").click()}
                  style={{
                    border: '2px dashed #E5E7EB',
                    borderRadius: '14px',
                    padding: '28px 20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: '#FAFAFA',
                    transition: 'all 0.2s',
                  }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '48px',
                    height: '48px',
                    background: '#EFF6FF',
                    borderRadius: '12px',
                    marginBottom: '12px',
                  }}>
                    <FaFileUpload size={20} style={{ color: '#3B82F6' }} />
                  </div>

                  <input
                    type="file"
                    accept="application/pdf"
                    id="resumeUpload"
                    style={{ display: 'none' }}
                    onChange={(e) => setResumeFile(e.target.files[0])}
                  />

                  <p style={{ color: '#303030', fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>
                    {resumeFile ? resumeFile.name : "Upload Resume"}
                  </p>
                  <p style={{ color: '#9CA3AF', fontSize: '12px' }}>
                    {resumeFile ? "Click 'Analyze' below" : "PDF format · Optional but recommended"}
                  </p>

                  {resumeFile && (
                    <MotionButton
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={(e) => { e.stopPropagation(); handleUploadResume() }}
                      style={{
                        marginTop: '14px',
                        background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        padding: '9px 22px',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontFamily: "'Poppins',sans-serif",
                        boxShadow: '0 4px 14px rgba(30,58,138,0.25)',
                      }}>
                      {analyzing ? "Analyzing…" : "Analyze Resume"}
                    </MotionButton>
                  )}
                </MotionDiv>
              )}
            </AnimatePresence>

            {/* Analysis Result */}
            <AnimatePresence>
              {analysisDone && (
                <MotionDiv
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{
                    background: '#F0FDF4',
                    border: '1.5px solid #BBF7D0',
                    borderRadius: '14px',
                    padding: '18px 20px',
                  }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
                    <FaCheckCircle size={16} style={{ color: '#22C55E' }} />
                    <h3 style={{ fontWeight: 700, fontSize: '14px', color: '#15803D' }}>
                      Resume Analysed
                    </h3>
                  </div>

                  {projects.length > 0 && (
                    <div style={{ marginBottom: '12px' }}>
                      <p style={{ fontWeight: 600, fontSize: '12px', color: '#374151', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Projects</p>
                      <ul style={{ margin: 0, paddingLeft: '18px' }}>
                        {projects.map((p, i) => (
                          <li key={i} style={{ fontSize: '13px', color: '#6B7280', marginBottom: '3px' }}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {skills.length > 0 && (
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '12px', color: '#374151', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Skills</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {skills.map((s, i) => (
                          <span key={i} style={{
                            background: '#DBEAFE',
                            color: '#1E40AF',
                            padding: '4px 12px',
                            borderRadius: '999px',
                            fontSize: '12px',
                            fontWeight: 600,
                          }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </MotionDiv>
              )}
            </AnimatePresence>

            {/* Start Button */}
            <MotionButton
              onClick={handleStart}
              disabled={!role || !experience || loading}
              whileHover={(!role || !experience || loading) ? {} : { scale: 1.02, boxShadow: '0 10px 28px rgba(249,115,22,0.35)' }}
              whileTap={(!role || !experience || loading) ? {} : { scale: 0.97 }}
              style={{
                width: '100%',
                padding: '15px',
                background: (!role || !experience || loading)
                  ? '#E5E7EB'
                  : 'linear-gradient(135deg, #F97316, #EA580C)',
                color: (!role || !experience || loading) ? '#9CA3AF' : 'white',
                border: 'none',
                borderRadius: '14px',
                fontSize: '15px',
                fontWeight: 700,
                cursor: (!role || !experience || loading) ? 'not-allowed' : 'pointer',
                fontFamily: "'Poppins',sans-serif",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '9px',
                boxShadow: (!role || !experience || loading) ? 'none' : '0 6px 20px rgba(249,115,22,0.25)',
                transition: 'all 0.25s',
                letterSpacing: '0.2px',
              }}>
              {loading
                ? <><span style={{ fontSize: '13px' }}>⏳</span> Starting…</>
                : <><FaRocket size={15} /> Start Interview</>
              }
            </MotionButton>
          </div>
        </MotionDiv>
      </div>
    </MotionDiv>
  )
}

export default Step1SetUp