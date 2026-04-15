// import React from 'react'
// import { FaArrowLeft } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import { motion } from "motion/react"
// import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
// import jsPDF from "jspdf"
// import autoTable from "jspdf-autotable"

// function Step3Report({ report }) {
//   if (!report) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-500 text-lg">Loading Report...</p>
//       </div>
//     );
//   }
//   const navigate = useNavigate()
//   const {
//     finalScore = 0,
//     confidence = 0,
//     communication = 0,
//     correctness = 0,
//     questionWiseScore = [],
//   } = report;

//   const questionScoreData = questionWiseScore.map((score, index) => ({
//     name: `Q${index + 1}`,
//     score: score.score || 0
//   }))

//   const skills = [
//     { label: "Confidence", value: confidence },
//     { label: "Communication", value: communication },
//     { label: "Correctness", value: correctness },
//   ];

//   let performanceText = "";
//   let shortTagline = "";

//   if (finalScore >= 8) {
//     performanceText = "Ready for job opportunities.";
//     shortTagline = "Excellent clarity and structured responses.";
//   } else if (finalScore >= 5) {
//     performanceText = "Needs minor improvement before interviews.";
//     shortTagline = "Good foundation, refine articulation.";
//   } else {
//     performanceText = "Significant improvement required.";
//     shortTagline = "Work on clarity and confidence.";
//   }

//   const score = finalScore;
//   const percentage = (score / 10) * 100;


//   const downloadPDF = () => {
//   const doc = new jsPDF("p", "mm", "a4");

//   const pageWidth = doc.internal.pageSize.getWidth();
//   const margin = 20;
//   const contentWidth = pageWidth - margin * 2;

//   let currentY = 25;

//   // ================= TITLE =================
//   doc.setFont("helvetica", "bold");
//   doc.setFontSize(20);
//   doc.setTextColor(34, 197, 94);
//   doc.text("AI Interview Performance Report", pageWidth / 2, currentY, {
//     align: "center",
//   });

//   currentY += 5;

//   // underline
//   doc.setDrawColor(34, 197, 94);
//   doc.line(margin, currentY + 2, pageWidth - margin, currentY + 2);

//   currentY += 15;

//   // ================= FINAL SCORE BOX =================
//   doc.setFillColor(240, 253, 244);
//   doc.roundedRect(margin, currentY, contentWidth, 20, 4, 4, "F");

//   doc.setFontSize(14);
//   doc.setTextColor(0, 0, 0);
//   doc.text(
//     `Final Score: ${finalScore}/10`,
//     pageWidth / 2,
//     currentY + 12,
//     { align: "center" }
//   );

//   currentY += 30;

//   // ================= SKILLS BOX =================
//   doc.setFillColor(249, 250, 251);
//   doc.roundedRect(margin, currentY, contentWidth, 30, 4, 4, "F");

//   doc.setFontSize(12);

//   doc.text(`Confidence: ${confidence}`, margin + 10, currentY + 10);
//   doc.text(`Communication: ${communication}`, margin + 10, currentY + 18);
//   doc.text(`Correctness: ${correctness}`, margin + 10, currentY + 26);

//   currentY += 45;

//   // ================= ADVICE =================
//   let advice = "";

//   if (finalScore >= 8) {
//     advice =
//       "Excellent performance. Maintain confidence and structure. Continue refining clarity and supporting answers with strong real-world examples.";
//   } else if (finalScore >= 5) {
//     advice =
//       "Good foundation shown. Improve clarity and structure. Practice delivering concise, confident answers with stronger supporting examples.";
//   } else {
//     advice =
//       "Significant improvement required. Focus on structured thinking, clarity, and confident delivery. Practice answering aloud regularly.";
//   }

//   doc.setFillColor(255, 255, 255);
//   doc.setDrawColor(220);
//   doc.roundedRect(margin, currentY, contentWidth, 35, 4, 4);

//   doc.setFont("helvetica", "bold");
//   doc.text("Professional Advice", margin + 10, currentY + 10);

//   doc.setFont("helvetica", "normal");
//   doc.setFontSize(11);

//   const splitAdvice = doc.splitTextToSize(advice, contentWidth - 20);
//   doc.text(splitAdvice, margin + 10, currentY + 20);

//   currentY += 50;

//   // ================= QUESTION TABLE =================
//   autoTable(doc, {
//   startY: currentY,
//   margin: { left: margin, right: margin },
//   head: [["#", "Question", "Score", "Feedback"]],
//   body: questionWiseScore.map((q, i) => [
//     `${i + 1}`,
//     q.question,
//     `${q.score}/10`,
//     q.feedback,
//   ]),
//   styles: {
//     fontSize: 9,
//     cellPadding: 5,
//     valign: "top",
//   },
//   headStyles: {
//     fillColor: [34, 197, 94],
//     textColor: 255,
//     halign: "center",
//   },
//   columnStyles: {
//     0: { cellWidth: 10, halign: "center" }, // index
//     1: { cellWidth: 55 }, // question
//     2: { cellWidth: 20, halign: "center" }, // score
//     3: { cellWidth: "auto" }, // feedback
//   },
//   alternateRowStyles: {
//     fillColor: [249, 250, 251],
//   },
// });


//   doc.save("AI_Interview_Report.pdf");
// };

//   return (
//     <div className='min-h-screen bg-linear-to-br from-gray-50 to-green-50 px-4 sm:px-6 lg:px-10 py-8'>
//       <div className='mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
//         <div className='md:mb-10 w-full flex items-start gap-4 flex-wrap'>
//           <button
//             onClick={() => navigate("/history")}
//             className='mt-1 p-3 rounded-full bg-white shadow hover:shadow-md transition'><FaArrowLeft className='text-gray-600' /></button>

//           <div>
//             <h1 className='text-3xl font-bold flex-nowrap text-gray-800'>
//               Interview Analytics Dashboard
//             </h1>
//             <p className='text-gray-500 mt-2'>
//               AI-powered performance insights
//             </p>

//           </div>
//         </div>

//         <button onClick={downloadPDF} className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-300 font-semibold text-sm sm:text-base text-nowrap'>Download PDF</button>
//       </div>


//       <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>

//         <div className='space-y-6'>
//           <MotionDiv
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 text-center">

//             <h3 className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">
//               Overall Performance
//             </h3>
//             <div className='relative w-20 h-20 sm:w-25 sm:h-25 mx-auto'>
//               <CircularProgressbar
//                 value={percentage}
//                 text={`${score}/10`}
//                 styles={buildStyles({
//                   textSize: "18px",
//                   pathColor: "#10b981",
//                   textColor: "#ef4444",
//                   trailColor: "#e5e7eb",
//                 })}
//               />
//             </div>

//             <p className="text-gray-400 mt-3 text-xs sm:text-sm">
//               Out of 10
//             </p>

//             <div className="mt-4">
//               <p className="font-semibold text-gray-800 text-sm sm:text-base">
//                 {performanceText}
//               </p>
//               <p className="text-gray-500 text-xs sm:text-sm mt-1">
//                 {shortTagline}
//               </p>
//             </div>
//           </MotionDiv>

//           <MotionDiv
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className='bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8'>
//             <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-6">
//               Skill Evaluation
//             </h3>

//             <div className='space-y-5'>
//               {
//                 skills.map((s, i) => (
//                   <div key={i}>
//                     <div className='flex justify-between mb-2 text-sm sm:text-base'>

//                       <span>{s.label}</span>
//                       <span className='font-semibold text-green-600'>{s.value}</span>
//                     </div>

//                     <div className='bg-gray-200 h-2 sm:h-3 rounded-full'>
//                       <div className='bg-green-500 h-full rounded-full'
//                         style={{ width: `${s.value * 10}%` }}

//                       ></div>

//                     </div>


//                   </div>
//                 ))
//               }
//             </div>

//           </MotionDiv>


//         </div>

//         <div className='lg:col-span-2 space-y-6'>

//           <MotionDiv
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className='bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-8'>
//             <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-4 sm:mb-6">
//               Performance Trend
//             </h3>

//             <div className='h-64 sm:h-72'>

//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={questionScoreData}>
//                   <CartesianGrid strokeDasharray="3 3" />
//                   <XAxis dataKey="name" />
//                   <YAxis domain={[0, 10]} />
//                   <Tooltip />
//                   <Area type="monotone"
//                     dataKey="score"
//                     stroke="#22c55e"
//                     fill="#bbf7d0"
//                     strokeWidth={3} />


//                 </AreaChart>

//               </ResponsiveContainer>


//             </div>


//           </MotionDiv>

//           <MotionDiv
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className='bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-8'>
//             <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-6">
//               Question Breakdown
//             </h3>
//             <div className='space-y-6'>
//               {questionWiseScore.map((q, i) => (
//                 <div key={i} className='bg-gray-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-200'>

//                   <div className='flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4'>
//                     <div>
//                       <p className="text-xs text-gray-400">
//                         Question {i + 1}
//                       </p>

//                       <p className="font-semibold text-gray-800 text-sm sm:text-base leading-relaxed">
//                         {q.question || "Question not available"}
//                       </p>
//                     </div>


//                     <div className='bg-green-100 text-green-600 px-3 py-1 rounded-full font-bold text-xs sm:text-sm w-fit'>
//                       {q.score ?? 0}/10
//                     </div>
//                   </div>

//                   <div className='bg-green-50 border border-green-200 p-4 rounded-lg'>
//                     <p className='text-xs text-green-600 font-semibold mb-1'>
//                       AI Feedback
//                     </p>
//                     <p className='text-sm text-gray-700 leading-relaxed'>

//                       {q.feedback && q.feedback.trim() !== ""
//                         ? q.feedback
//                         : "No feedback available for this question."}
//                     </p>
//                   </div>

//                 </div>
//               ))}
//             </div>

//           </MotionDiv>





//         </div>
//       </div>

//     </div>
//   )
// }

// export default Step3Report



import React from 'react'
import { FaArrowLeft, FaDownload, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';
import { BsRobot } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { motion } from "motion/react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  Area, AreaChart, CartesianGrid,
  ResponsiveContainer, Tooltip, XAxis, YAxis
} from "recharts"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"

// Score → semantic color

const MotionDiv = motion.div;
const MotionButton = motion.button;
const scoreColor = (s) => s >= 8 ? '#22C55E' : s >= 5 ? '#F59E0B' : '#EF4444';
const scoreLabel = (s) => s >= 8 ? 'Strong' : s >= 5 ? 'Average' : 'Weak';
const ScoreIcon = ({ score }) => {
  if (score >= 8) return <FaCheckCircle size={14} style={{ color: '#22C55E' }} />;
  if (score >= 5) return <FaExclamationTriangle size={14} style={{ color: '#F59E0B' }} />;
  return <FaTimesCircle size={14} style={{ color: '#EF4444' }} />;
};

// Custom chart tooltip
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    const s = payload[0].value;
    return (
      <div style={{
        background: 'white',
        border: '1px solid #E5E7EB',
        borderRadius: '10px',
        padding: '10px 14px',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        fontFamily: "'Poppins',sans-serif",
      }}>
        <p style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '4px' }}>{label}</p>
        <p style={{ fontSize: '16px', fontWeight: 700, color: scoreColor(s) }}>{s}<span style={{ fontSize: '11px', color: '#9CA3AF' }}>/10</span></p>
      </div>
    );
  }
  return null;
};

function Step3Report({ report }) {
  const navigate = useNavigate();

  if (!report) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F5F5F5',
        fontFamily: "'Poppins',sans-serif",
      }}>
        <p style={{ color: '#9CA3AF', fontSize: '16px' }}>Loading Report…</p>
      </div>
    );
  }

  const {
    finalScore = 0,
    confidence = 0,
    communication = 0,
    correctness = 0,
    questionWiseScore = [],
  } = report;

  const questionScoreData = questionWiseScore.map((score, index) => ({
    name: `Q${index + 1}`,
    score: score.score || 0,
  }));

  const skills = [
    { label: "Confidence", value: confidence, color: '#3B82F6' },
    { label: "Communication", value: communication, color: '#F97316' },
    { label: "Correctness", value: correctness, color: '#22C55E' },
  ];

  const performanceText =
    finalScore >= 8 ? "Ready for job opportunities." :
    finalScore >= 5 ? "Needs minor improvement." :
    "Significant improvement required.";

  const shortTagline =
    finalScore >= 8 ? "Excellent clarity and structured responses." :
    finalScore >= 5 ? "Good foundation — refine articulation." :
    "Work on clarity and confidence.";

  const percentage = (finalScore / 10) * 100;
  const mainColor = scoreColor(finalScore);

  const advice =
    finalScore >= 8
      ? "Excellent performance. Maintain confidence and structure. Continue refining clarity and supporting answers with strong real-world examples."
      : finalScore >= 5
      ? "Good foundation shown. Improve clarity and structure. Practice delivering concise, confident answers with stronger supporting examples."
      : "Significant improvement required. Focus on structured thinking, clarity, and confident delivery. Practice answering aloud regularly.";

  const downloadPDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;
    let y = 25;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.setTextColor(30, 58, 138);
    doc.text("AI Interview Performance Report", pageWidth / 2, y, { align: "center" });
    y += 5;
    doc.setDrawColor(30, 58, 138);
    doc.line(margin, y + 2, pageWidth - margin, y + 2);
    y += 15;

    doc.setFillColor(239, 246, 255);
    doc.roundedRect(margin, y, contentWidth, 20, 4, 4, "F");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(`Final Score: ${finalScore}/10`, pageWidth / 2, y + 12, { align: "center" });
    y += 30;

    doc.setFillColor(249, 250, 251);
    doc.roundedRect(margin, y, contentWidth, 30, 4, 4, "F");
    doc.setFontSize(12);
    doc.text(`Confidence: ${confidence}`, margin + 10, y + 10);
    doc.text(`Communication: ${communication}`, margin + 10, y + 18);
    doc.text(`Correctness: ${correctness}`, margin + 10, y + 26);
    y += 45;

    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(220);
    doc.roundedRect(margin, y, contentWidth, 35, 4, 4);
    doc.setFont("helvetica", "bold");
    doc.text("Professional Advice", margin + 10, y + 10);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    const splitAdvice = doc.splitTextToSize(advice, contentWidth - 20);
    doc.text(splitAdvice, margin + 10, y + 20);
    y += 50;

    autoTable(doc, {
      startY: y,
      margin: { left: margin, right: margin },
      head: [["#", "Question", "Score", "Feedback"]],
      body: questionWiseScore.map((q, i) => [`${i + 1}`, q.question, `${q.score}/10`, q.feedback]),
      styles: { fontSize: 9, cellPadding: 5, valign: "top" },
      headStyles: { fillColor: [30, 58, 138], textColor: 255, halign: "center" },
      columnStyles: {
        0: { cellWidth: 10, halign: "center" },
        1: { cellWidth: 55 },
        2: { cellWidth: 20, halign: "center" },
        3: { cellWidth: "auto" },
      },
      alternateRowStyles: { fillColor: [249, 250, 251] },
    });

    doc.save("AI_Interview_Report.pdf");
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F5F5F5',
      padding: '32px 24px',
      fontFamily: "'Poppins', sans-serif",
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <MotionButton
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => navigate("/history")}
              style={{
                width: '42px', height: '42px',
                borderRadius: '12px',
                background: 'white',
                border: '1px solid #E5E7EB',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
              <FaArrowLeft style={{ color: '#6B7280' }} />
            </MotionButton>
            <div>
              <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#1E3A8A', letterSpacing: '-0.4px', marginBottom: '3px' }}>
                Interview Analytics
              </h1>
              <p style={{ color: '#9CA3AF', fontSize: '13px' }}>AI-powered performance insights</p>
            </div>
          </div>

          <MotionButton
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(249,115,22,0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={downloadPDF}
            style={{
              background: 'linear-gradient(135deg, #F97316, #EA580C)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '12px 22px',
              fontSize: '14px',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: "'Poppins',sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 14px rgba(249,115,22,0.25)',
            }}>
            <FaDownload size={13} />
            Download PDF
          </MotionButton>
        </div>

        {/* ── Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px' }}>

          {/* ── LEFT COLUMN ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Score Card */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '28px 24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: '1px solid #E5E7EB',
                textAlign: 'center',
              }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '20px' }}>
                Overall Performance
              </p>

              <div style={{ width: '110px', height: '110px', margin: '0 auto 16px' }}>
                <CircularProgressbar
                  value={percentage}
                  text={`${finalScore}/10`}
                  styles={buildStyles({
                    textSize: '20px',
                    pathColor: mainColor,
                    textColor: '#1E3A8A',
                    trailColor: '#F3F4F6',
                    pathTransitionDuration: 1.2,
                  })}
                />
              </div>

              {/* Score badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: `${mainColor}18`,
                borderRadius: '999px',
                padding: '5px 14px',
                marginBottom: '16px',
              }}>
                <ScoreIcon score={finalScore} />
                <span style={{ fontSize: '12px', fontWeight: 700, color: mainColor }}>
                  {scoreLabel(finalScore)}
                </span>
              </div>

              <p style={{ fontWeight: 700, fontSize: '14px', color: '#303030', marginBottom: '6px' }}>{performanceText}</p>
              <p style={{ color: '#9CA3AF', fontSize: '12px' }}>{shortTagline}</p>
            </MotionDiv>

            {/* Skills Card */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: '1px solid #E5E7EB',
              }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '20px' }}>
                Skill Evaluation
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {skills.map((s, i) => (
                  <div key={i}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                      <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>{s.label}</span>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: scoreColor(s.value) }}>{s.value}/10</span>
                    </div>
                    <div style={{ background: '#F3F4F6', height: '7px', borderRadius: '999px', overflow: 'hidden' }}>
                      <MotionDiv
                        initial={{ width: 0 }}
                        animate={{ width: `${s.value * 10}%` }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                        style={{
                          height: '100%',
                          borderRadius: '999px',
                          background: `linear-gradient(90deg, ${s.color}, ${s.color}cc)`,
                        }} />
                    </div>
                  </div>
                ))}
              </div>
            </MotionDiv>

            {/* Advice Card */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{
                background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                borderRadius: '20px',
                padding: '22px',
                border: '1px solid #BFDBFE',
              }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '10px' }}>
                💡 AI Advice
              </p>
              <p style={{ fontSize: '13px', color: '#1E3A8A', lineHeight: 1.65 }}>{advice}</p>
            </MotionDiv>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Chart */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: '1px solid #E5E7EB',
              }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '20px' }}>
                Performance Trend
              </p>
              <div style={{ height: '220px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={questionScoreData}>
                    <defs>
                      <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.15} />
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                    <XAxis dataKey="name" tick={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                    <YAxis domain={[0, 10]} tick={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, fill: '#9CA3AF' }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="score"
                      stroke="#3B82F6"
                      strokeWidth={2.5}
                      fill="url(#scoreGrad)"
                      dot={{ fill: '#1E3A8A', r: 5, strokeWidth: 0 }}
                      activeDot={{ r: 7, fill: '#F97316' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </MotionDiv>

            {/* Question Breakdown */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '28px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                border: '1px solid #E5E7EB',
              }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '20px' }}>
                Question Breakdown
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {questionWiseScore.map((q, i) => {
                  const color = scoreColor(q.score ?? 0);
                  return (
                    <MotionDiv
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                      style={{
                        background: '#FAFAFA',
                        border: '1.5px solid #E5E7EB',
                        borderRadius: '16px',
                        padding: '18px 20px',
                        borderLeft: `4px solid ${color}`,
                      }}>
                      {/* Question header row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px', marginBottom: '10px' }}>
                        <div style={{ flex: 1 }}>
                          <p style={{ fontSize: '10px', color: '#9CA3AF', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: '4px' }}>
                            Question {i + 1}
                          </p>
                          <p style={{ fontSize: '14px', fontWeight: 600, color: '#303030', lineHeight: 1.5 }}>
                            {q.question || "Question not available"}
                          </p>
                        </div>
                        <div style={{
                          background: `${color}18`,
                          borderRadius: '10px',
                          padding: '8px 12px',
                          textAlign: 'center',
                          flexShrink: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '2px',
                        }}>
                          <span style={{ fontSize: '18px', fontWeight: 800, color, lineHeight: 1 }}>{q.score ?? 0}</span>
                          <span style={{ fontSize: '9px', color: '#9CA3AF', fontWeight: 600 }}>/ 10</span>
                        </div>
                      </div>

                      {/* Feedback */}
                      <div style={{
                        background: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '12px 14px',
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '6px' }}>
                          <BsRobot size={12} style={{ color: '#3B82F6' }} />
                          <p style={{ fontSize: '10px', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.6px' }}>
                            AI Feedback
                          </p>
                        </div>
                        <p style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.6 }}>
                          {q.feedback?.trim() || "No feedback available."}
                        </p>
                      </div>
                    </MotionDiv>
                  );
                })}
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step3Report