// import React from 'react'
// import { useState } from 'react'
// import Step1SetUp from '../components/Step1SetUp'
// import Step2Interview from '../components/Step2Interview'
// import Step3Report from '../components/Step3Report'

// function InterviewPage() {
//     const [step,setStep] = useState(1)
//     const [interviewData,setInterviewData] = useState(null)

//   return (
//     <div className='min-h-screen bg-gray-50'>
//         {step===1 && (
//             <Step1SetUp onStart={(data)=>{
//                 setInterviewData(data);
//             setStep(2)}}/>
//         )}

//          {step===2 && (
//             <Step2Interview interviewData={interviewData}
//             onFinish={(report)=>{setInterviewData(report);
//                 setStep(3)
//             }}
//             />
//         )}

//           {step===3 && (
//             <Step3Report report={interviewData}/>
//         )}

      
//     </div>
//   )
// }

// export default InterviewPage






import React from 'react'
import { useState } from 'react'
import Step1SetUp from '../components/Step1SetUp'
import Step2Interview from '../components/Step2Interview'
import Step3Report from '../components/Step3Report'

function InterviewPage() {
  const [step, setStep] = useState(1)
  const [interviewData, setInterviewData] = useState(null)

  return (
    <div className='min-h-screen' style={{ background: "#F5F5F5", fontFamily: "'Inter', sans-serif" }}>

      {/* Step progress bar */}
      {step < 3 && (
        <div className='w-full h-1' style={{ background: "#EEEEEE" }}>
          <div
            className='h-full transition-all duration-500'
            style={{
              width: step === 1 ? "33%" : "66%",
              background: "linear-gradient(to right, #1E3A8A, #3B82F6)"
            }}
          />
        </div>
      )}

      {step === 1 && (
        <Step1SetUp onStart={(data) => {
          setInterviewData(data);
          setStep(2)
        }} />
      )}

      {step === 2 && (
        <Step2Interview
          interviewData={interviewData}
          onFinish={(report) => {
            setInterviewData(report);
            setStep(3)
          }}
        />
      )}

      {step === 3 && (
        <Step3Report report={interviewData} />
      )}

    </div>
  )
}

export default InterviewPage