// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from "axios"
// import { ServerUrl } from '../App'
// import { FaArrowLeft } from 'react-icons/fa'
// function InterviewHistory() {
//     const [interviews, setInterviews] = useState([])
//     const navigate = useNavigate()

//     useEffect(() => {
//         const getMyInterviews = async () => {
//             try {
//                 const result = await axios.get(ServerUrl + "/api/interview/get-interview", { withCredentials: true })

//                 setInterviews(result.data)

//             } catch (error) {
//                 console.log(error)
//             }

//         }

//         getMyInterviews()

//     }, [])


//     return (
//         <div className='min-h-screen bg-linear-to-br from-gray-50 to-emerald-50 py-10' >
//             <div className='w-[90vw] lg:w-[70vw] max-w-[90%] mx-auto'>

//                 <div className='mb-10 w-full flex items-start gap-4 flex-wrap'>
//                     <button
//                         onClick={() => navigate("/")}
//                         className='mt-1 p-3 rounded-full bg-white shadow hover:shadow-md transition'><FaArrowLeft className='text-gray-600' /></button>

//                     <div>
//                         <h1 className='text-3xl font-bold flex-nowrap text-gray-800'>
//                             Interview History
//                         </h1>
//                         <p className='text-gray-500 mt-2'>
//                             Track your past interviews and performance reports
//                         </p>

//                     </div>
//                 </div>


//                 {interviews.length === 0 ?
//                     <div className='bg-white p-10 rounded-2xl shadow text-center'>
//                         <p className='text-gray-500'>
//                             No interviews found. Start your first interview.
//                         </p>

//                     </div>

//                     :

//                     <div className='grid gap-6'>
//                         {interviews.map((item, index) => (
//                             <div key={index}
//                             onClick={()=>navigate(`/report/${item._id}`)}
//                              className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100'>
//                                 <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//                                     <div>
//                                         <h3 className="text-lg font-semibold text-gray-800">
//                                             {item.role}
//                                         </h3>

//                                         <p className="text-gray-500 text-sm mt-1">
//                                             {item.experience} • {item.mode}
//                                         </p>

//                                         <p className="text-xs text-gray-400 mt-2">
//                                             {new Date(item.createdAt).toLocaleDateString()}
//                                         </p>
//                                     </div>

//                                     <div className='flex items-center gap-6'>

//                                         {/* SCORE */}
//                                         <div className="text-right">
//                                             <p className="text-xl font-bold text-emerald-600">
//                                                 {item.finalScore || 0}/10
//                                             </p>
//                                             <p className="text-xs text-gray-400">
//                                                 Overall Score
//                                             </p>
//                                         </div>

//                                         {/* STATUS BADGE */}
//                                         <span
//                                             className={`px-4 py-1 rounded-full text-xs font-medium ${item.status === "completed"
//                                                     ? "bg-emerald-100 text-emerald-700"
//                                                     : "bg-yellow-100 text-yellow-700"
//                                                 }`}
//                                         >
//                                             {item.status}
//                                         </span>


//                                     </div>
//                                 </div>

//                             </div>

//                         ))
//                         }

//                     </div>
//                 }
//             </div>

//         </div>
//     )
// }

// export default InterviewHistory





import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { ServerUrl } from '../App'
import { FaArrowLeft } from 'react-icons/fa'
import { BsBarChart, BsClock, BsFileEarmarkText } from 'react-icons/bs'

function InterviewHistory() {
  const [interviews, setInterviews] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const getMyInterviews = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/interview/get-interview", { withCredentials: true })
        setInterviews(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    getMyInterviews()
  }, [])

  const getScoreColor = (score) => {
    if (score >= 7) return { color: "#22C55E", bg: "#F0FDF4", border: "#BBF7D0" }
    if (score >= 4) return { color: "#F59E0B", bg: "#FFFBEB", border: "#FDE68A" }
    return { color: "#EF4444", bg: "#FEF2F2", border: "#FECACA" }
  }

  return (
    <div
      className='min-h-screen py-10 px-4'
      style={{ background: "#F5F5F5", fontFamily: "'Inter', sans-serif" }}
    >
      <div className='max-w-3xl mx-auto'>

        {/* Header */}
        <div className='flex items-start gap-4 mb-10'>
          <button
            onClick={() => navigate("/")}
            className='mt-1 p-2.5 rounded-xl bg-white transition-all'
            style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <FaArrowLeft style={{ color: "#6B7280" }} size={14} />
          </button>
          <div>
            <h1 className='text-2xl font-semibold' style={{ color: "#303030", letterSpacing: "-0.01em" }}>
              Interview History
            </h1>
            <p className='text-sm mt-1' style={{ color: "#6B7280" }}>
              Track your past interviews and performance reports
            </p>
          </div>
        </div>

        {/* Summary bar */}
        {interviews.length > 0 && (
          <div
            className='grid grid-cols-3 gap-4 mb-8 p-5 rounded-2xl bg-white'
            style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
          >
            {[
              { icon: <BsFileEarmarkText size={16} />, value: interviews.length, label: "Total Interviews" },
              {
                icon: <BsBarChart size={16} />,
                value: (interviews.reduce((a, b) => a + (b.finalScore || 0), 0) / interviews.length).toFixed(1),
                label: "Avg Score"
              },
              {
                icon: <BsClock size={16} />,
                value: interviews.filter(i => i.status === "completed").length,
                label: "Completed"
              },
            ].map((stat) => (
              <div key={stat.label} className='text-center'>
                <div className='flex justify-center mb-1' style={{ color: "#1E3A8A" }}>{stat.icon}</div>
                <div className='text-xl font-semibold' style={{ color: "#1E3A8A" }}>{stat.value}</div>
                <div className='text-xs' style={{ color: "#9CA3AF" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* List */}
        {interviews.length === 0 ? (
          <div
            className='bg-white p-12 rounded-2xl text-center'
            style={{ border: "1px solid #E5E7EB", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
          >
            <div
              className='w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4'
              style={{ background: "#EFF6FF", color: "#1E3A8A" }}
            >
              <BsBarChart size={24} />
            </div>
            <p className='font-medium mb-1' style={{ color: "#303030" }}>No interviews yet</p>
            <p className='text-sm mb-6' style={{ color: "#9CA3AF" }}>
              Start your first AI interview to see results here
            </p>
            <button
              onClick={() => navigate("/interview")}
              className='px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all'
              style={{ background: "#F97316" }}
            >
              Start Interview
            </button>
          </div>
        ) : (
          <div className='flex flex-col gap-4'>
            {interviews.map((item, index) => {
              const scoreStyle = getScoreColor(item.finalScore || 0)
              return (
                <div
                  key={index}
                  onClick={() => navigate(`/report/${item._id}`)}
                  className='bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 group'
                  style={{
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(30,58,138,0.1)"
                    e.currentTarget.style.transform = "translateY(-2px)"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)"
                    e.currentTarget.style.transform = "translateY(0)"
                  }}
                >
                  <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-1'>
                        <h3 className="text-base font-semibold" style={{ color: "#303030" }}>
                          {item.role}
                        </h3>
                        <span
                          className='text-xs px-2.5 py-0.5 rounded-full font-medium'
                          style={{
                            background: item.status === "completed" ? "#F0FDF4" : "#FFFBEB",
                            color: item.status === "completed" ? "#22C55E" : "#F59E0B",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                      <p className="text-sm mt-0.5" style={{ color: "#6B7280" }}>
                        {item.experience} · {item.mode}
                      </p>
                      <p className="text-xs mt-2" style={{ color: "#9CA3AF" }}>
                        {new Date(item.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric', month: 'short', day: 'numeric'
                        })}
                      </p>
                    </div>

                    <div className='flex items-center gap-4'>
                      {/* Score circle */}
                      <div
                        className='flex flex-col items-center justify-center w-16 h-16 rounded-2xl'
                        style={{
                          background: scoreStyle.bg,
                          border: `1.5px solid ${scoreStyle.border}`
                        }}
                      >
                        <span className='text-xl font-bold' style={{ color: scoreStyle.color }}>
                          {item.finalScore || 0}
                        </span>
                        <span className='text-xs' style={{ color: scoreStyle.color, opacity: 0.7 }}>/ 10</span>
                      </div>

                      {/* Arrow */}
                      <div
                        className='w-8 h-8 rounded-xl flex items-center justify-center transition-all'
                        style={{ background: "#EFF6FF", color: "#1E3A8A" }}
                      >
                        <span className='text-xs font-bold'>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default InterviewHistory