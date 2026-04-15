// import React from 'react'
// import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// function Timer({ timeLeft, totalTime }) {
//     const percentage = (timeLeft/totalTime)*100
//   return (
//     <div className='w-20 h-20'>
//         <CircularProgressbar
//         value={percentage}
//         text={`${timeLeft}s`}
//         styles={buildStyles({
//           textSize: "28px",
//           pathColor: "#10b981",
//           textColor: "#ef4444",
//           trailColor: "#e5e7eb",
//         })}
//         />
      
//     </div>
//   )
// }

// export default Timer



import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Timer({ timeLeft, totalTime }) {
  const percentage = (timeLeft / totalTime) * 100;

  // Color shifts: green → amber → red as time runs out
  const pathColor =
    percentage > 50 ? '#22C55E' :
    percentage > 25 ? '#F59E0B' :
    '#EF4444';

  const textColor =
    percentage > 50 ? '#1E3A8A' :
    percentage > 25 ? '#D97706' :
    '#EF4444';

  return (
    <div style={{ width: '80px', height: '80px', position: 'relative' }}>
      {/* Soft glow ring */}
      <div style={{
        position: 'absolute',
        inset: '-4px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${pathColor}18 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />
      <CircularProgressbar
        value={percentage}
        text={`${timeLeft}s`}
        styles={buildStyles({
          textSize: '26px',
          pathColor,
          textColor,
          trailColor: '#E5E7EB',
          pathTransitionDuration: 0.8,
        })}
      />
    </div>
  )
}

export default Timer