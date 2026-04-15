// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import axios from "axios"
// import { ServerUrl } from '../App';
// import Step3Report from '../components/Step3Report';
// function InterviewReport() {
//   const {id} = useParams()
//   const [report,setReport] = useState(null);
   
//   useEffect(()=>{
//     const fetchReport = async () => {
//       try {
//         const result = await axios.get(ServerUrl + "/api/interview/report/" + id , {withCredentials:true})

//         console.log(result.data)
//         setReport(result.data)
//       } catch (error) {
//         console.log(error)
//       }
//     }

//     fetchReport()
//   },[])


//     if (!report) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p className="text-gray-500 text-lg">
//           Loading Report...
//         </p>
//       </div>
//     );
//   }

//   return <Step3Report report={report}/>
// }

// export default InterviewReport



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { ServerUrl } from '../App';
import Step3Report from '../components/Step3Report';

function InterviewReport() {
  const { id } = useParams()
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/interview/report/" + id, { withCredentials: true })
        console.log(result.data)
        setReport(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchReport()
  }, [])

  if (!report) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ background: "#F5F5F5", fontFamily: "'Inter', sans-serif" }}
      >
        {/* Spinner */}
        <div
          className="w-10 h-10 rounded-full border-2 animate-spin"
          style={{ borderColor: "#DBEAFE", borderTopColor: "#1E3A8A" }}
        />
        <p className="text-sm" style={{ color: "#6B7280" }}>Loading your report...</p>
      </div>
    );
  }

  return <Step3Report report={report} />
}

export default InterviewReport