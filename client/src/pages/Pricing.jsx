// import React, { useState } from 'react'
// import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
// import { useNavigate } from 'react-router-dom'
// import { motion } from "motion/react";
// import axios from 'axios';
// import { ServerUrl } from '../App';
// import { useDispatch } from 'react-redux';
// import { setUserData } from '../redux/userSlice';
// function Pricing() {
//   const navigate = useNavigate()
//   const [selectedPlan, setSelectedPlan] = useState("free");
//   const [loadingPlan, setLoadingPlan] = useState(null);
//   const dispatch = useDispatch()
//   const MotionDiv = motion.div;
//   const MotionButton = motion.button;
//   const Motionh1 = motion.h1;
//   const Motionh2 = motion.h2;
//   const Motionp = motion.p;

//   const plans = [
//     {
//       id: "free",
//       name: "Free",
//       price: "₹0",
//       credits: 100,
//       description: "Perfect for beginners starting interview preparation.",
//       features: [
//         "100 AI Interview Credits",
//         "Basic Performance Report",
//         "Voice Interview Access",
//         "Limited History Tracking",
//       ],
//       default: true,
//     },
//     {
//       id: "basic",
//       name: "Starter Pack",
//       price: "₹100",
//       credits: 150,
//       description: "Great for focused practice and skill improvement.",
//       features: [
//         "150 AI Interview Credits",
//         "Detailed Feedback",
//         "Performance Analytics",
//         "Full Interview History",
//       ],
//     },
//     {
//       id: "pro",
//       name: "Pro Pack",
//       price: "₹500",
//       credits: 650,
//       description: "Best value for serious job preparation.",
//       features: [
//         "650 AI Interview Credits",
//         "Advanced AI Feedback",
//         "Skill Trend Analysis",
//         "Priority AI Processing",
//       ],
//       badge: "Best Value",
//     },
//   ];



//   const handlePayment = async (plan) => {
//     try {
//       setLoadingPlan(plan.id)

//       const amount =  
//       plan.id === "basic" ? 100 :
//       plan.id === "pro" ? 500 : 0;

//       const result = await axios.post(ServerUrl + "/api/payment/order" , {
//         planId: plan.id,
//         amount: amount,
//         credits: plan.credits,
//       },{withCredentials:true})
      

//       const options = {
//       key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//       amount: result.data.amount,
//       currency: "INR",
//       name: "InterviewIQ.AI",
//       description: `${plan.name} - ${plan.credits} Credits`,
//       order_id: result.data.id,

//       handler:async function (response) {
//         const verifypay = await axios.post(ServerUrl + "/api/payment/verify" ,response , {withCredentials:true})
//         dispatch(setUserData(verifypay.data.user))

//           alert("Payment Successful 🎉 Credits Added!");
//           navigate("/")

//       },
//       theme:{
//         color: "#10b981",
//       },

//       }

//       const rzp = new window.Razorpay(options)
//       rzp.open()

//       setLoadingPlan(null);
//     } catch (error) {
//      console.log(error)
//      setLoadingPlan(null);
//     }
//   }



//   return (
//     <div className='min-h-screen bg-gradient-to-br from-gray-50 to-emerald-50 py-16 px-6'>

//       <div className='max-w-6xl mx-auto mb-14 flex items-start gap-4'>

//         <button onClick={() => navigate("/")} className='mt-2 p-3 rounded-full bg-white shadow hover:shadow-md transition'>
//           <FaArrowLeft className='text-gray-600' />
//         </button>

//         <div className="text-center w-full">
//           <h1 className="text-4xl font-bold text-gray-800">
//             Choose Your Plan
//           </h1>
//           <p className="text-gray-500 mt-3 text-lg">
//             Flexible pricing to match your interview preparation goals.
//           </p>
//         </div>
//       </div>


//       <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>

//         {plans.map((plan) => {
//           const isSelected = selectedPlan === plan.id

//           return (
//             <MotionDiv key={plan.id}
//               whileHover={!plan.default && { scale: 1.03 }}
//               onClick={() => !plan.default && setSelectedPlan(plan.id)}

//               className={`relative rounded-3xl p-8 transition-all duration-300 border 
//                 ${isSelected
//                   ? "border-emerald-600 shadow-2xl bg-white"
//                   : "border-gray-200 bg-white shadow-md"
//                 }
//                 ${plan.default ? "cursor-default" : "cursor-pointer"}
//               `}
//             >

//               {/* Badge */}
//               {plan.badge && (
//                 <div className="absolute top-6 right-6 bg-emerald-600 text-white text-xs px-4 py-1 rounded-full shadow">
//                   {plan.badge}
//                 </div>
//               )}

//               {/* Default Tag */}
//               {plan.default && (
//                 <div className="absolute top-6 right-6 bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full">
//                   Default
//                 </div>
//               )}

//               {/* Plan Name */}
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {plan.name}
//               </h3>

//               {/* Price */}
//               <div className="mt-4">
//                 <span className="text-3xl font-bold text-emerald-600">
//                   {plan.price}
//                 </span>
//                 <p className="text-gray-500 mt-1">
//                   {plan.credits} Credits
//                 </p>
//               </div>

//               {/* Description */}
//               <p className="text-gray-500 mt-4 text-sm leading-relaxed">
//                 {plan.description}
//               </p>

//               {/* Features */}
//               <div className="mt-6 space-y-3 text-left">
//                 {plan.features.map((feature, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <FaCheckCircle className="text-emerald-500 text-sm" />
//                     <span className="text-gray-700 text-sm">
//                       {feature}
//                     </span>
//                   </div>
//                 ))}
//               </div>

//               {!plan.default &&
//                 <button
//                 disabled={loadingPlan === plan.id}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     if (!isSelected) {
//                       setSelectedPlan(plan.id)
//                     } else {
//                       handlePayment(plan)
//                     }
//                   }} className={`w-full mt-8 py-3 rounded-xl font-semibold transition ${isSelected
//                     ? "bg-emerald-600 text-white hover:opacity-90"
//                     : "bg-gray-100 text-gray-700 hover:bg-emerald-50"
//                     }`}>
//                   {loadingPlan === plan.id
//                     ? "Processing..."
//                     : isSelected
//                       ? "Proceed to Pay"
//                       : "Select Plan"}

//                 </button>
//               }
//             </MotionDiv>
//           )
//         })}
//       </div>

//     </div>
//   )
// }

// export default Pricing




import React, { useState } from 'react'
import { FaArrowLeft, FaCheckCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { motion } from "motion/react";
import axios from 'axios';
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function Pricing() {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState("free");
  const [loadingPlan, setLoadingPlan] = useState(null);
  const dispatch = useDispatch()
  const MotionDiv = motion.div;
  const MotionButton = motion.button;

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "₹0",
      period: "forever",
      credits: 100,
      description: "Perfect for beginners starting interview preparation.",
      features: [
        "100 AI Interview Credits",
        "Basic Performance Report",
        "Voice Interview Access",
        "Limited History Tracking",
      ],
      default: true,
    },
    {
      id: "basic",
      name: "Starter Pack",
      price: "₹100",
      period: "one-time",
      credits: 150,
      description: "Great for focused practice and skill improvement.",
      features: [
        "150 AI Interview Credits",
        "Detailed Feedback",
        "Performance Analytics",
        "Full Interview History",
      ],
    },
    {
      id: "pro",
      name: "Pro Pack",
      price: "₹500",
      period: "one-time",
      credits: 650,
      description: "Best value for serious job seekers.",
      features: [
        "650 AI Interview Credits",
        "Advanced AI Feedback",
        "Skill Trend Analysis",
        "Priority AI Processing",
      ],
      badge: "Best Value",
    },
  ];

  const handlePayment = async (plan) => {
    try {
      setLoadingPlan(plan.id)
      const amount = plan.id === "basic" ? 100 : plan.id === "pro" ? 500 : 0;
      const result = await axios.post(ServerUrl + "/api/payment/order", {
        planId: plan.id,
        amount,
        credits: plan.credits,
      }, { withCredentials: true })

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: result.data.amount,
        currency: "INR",
        name: "InterviewIQ.AI",
        description: `${plan.name} - ${plan.credits} Credits`,
        order_id: result.data.id,
        handler: async function (response) {
          const verifypay = await axios.post(ServerUrl + "/api/payment/verify", response, { withCredentials: true })
          dispatch(setUserData(verifypay.data.user))
          alert("Payment Successful 🎉 Credits Added!");
          navigate("/")
        },
        theme: { color: "#1E3A8A" },
      }

      const rzp = new window.Razorpay(options)
      rzp.open()
      setLoadingPlan(null);
    } catch (error) {
      console.log(error)
      setLoadingPlan(null);
    }
  }

  return (
    <div
      className='min-h-screen py-16 px-6'
      style={{ background: "#F5F5F5", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Header */}
      <div className='max-w-5xl mx-auto mb-14 flex items-start gap-4'>
        <button
          onClick={() => navigate("/")}
          className='mt-2 p-2.5 rounded-xl bg-white transition-all'
          style={{ border: "1px solid #E5E7EB", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
        >
          <FaArrowLeft style={{ color: "#6B7280" }} size={14} />
        </button>

        <div className="flex-1 text-center">
          <div
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#EFF6FF", color: "#1E3A8A", border: "1px solid #BFDBFE" }}
          >
            Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl font-semibold" style={{ color: "#303030", letterSpacing: "-0.02em" }}>
            Choose Your Plan
          </h1>
          <p className="mt-3 text-base" style={{ color: "#6B7280" }}>
            Flexible pricing to match your interview preparation goals.
          </p>
        </div>
      </div>

      {/* Plans grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-5xl mx-auto'>
        {plans.map((plan, i) => {
          const isSelected = selectedPlan === plan.id
          const isPro = plan.id === "pro"

          return (
            <MotionDiv key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={!plan.default ? { y: -4 } : {}}
              onClick={() => !plan.default && setSelectedPlan(plan.id)}
              className="relative rounded-2xl p-7 transition-all duration-300"
              style={{
                background: isPro ? "#1E3A8A" : "white",
                border: isSelected && !isPro
                  ? "2px solid #1E3A8A"
                  : "1px solid #E5E7EB",
                boxShadow: isPro
                  ? "0 12px 40px rgba(30,58,138,0.25)"
                  : isSelected
                    ? "0 8px 28px rgba(30,58,138,0.12)"
                    : "0 4px 20px rgba(0,0,0,0.05)",
                cursor: plan.default ? "default" : "pointer",
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-4 py-1 rounded-full font-semibold text-white"
                  style={{ background: "#F97316" }}
                >
                  {plan.badge}
                </div>
              )}

              {plan.default && (
                <div
                  className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full font-medium"
                  style={{ background: "#F3F4F6", color: "#6B7280" }}
                >
                  Current
                </div>
              )}

              {/* Plan header */}
              <h3 className="text-base font-semibold mb-4" style={{ color: isPro ? "white" : "#303030" }}>
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-4xl font-bold" style={{ color: isPro ? "white" : "#1E3A8A" }}>
                  {plan.price}
                </span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                  style={{
                    background: isPro ? "rgba(255,255,255,0.15)" : "#EFF6FF",
                    color: isPro ? "white" : "#1E3A8A"
                  }}
                >
                  {plan.credits} Credits
                </span>
                <span className="text-xs" style={{ color: isPro ? "#93C5FD" : "#9CA3AF" }}>
                  · {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div
                className="my-5 h-px"
                style={{ background: isPro ? "rgba(255,255,255,0.15)" : "#F3F4F6" }}
              />

              {/* Description */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: isPro ? "#93C5FD" : "#6B7280" }}>
                {plan.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-7">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <FaCheckCircle
                      size={13}
                      style={{ color: isPro ? "#34D399" : "#22C55E", flexShrink: 0 }}
                    />
                    <span className="text-sm" style={{ color: isPro ? "#E0F2FE" : "#374151" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              {!plan.default && (
                <button
                  disabled={loadingPlan === plan.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isSelected) {
                      setSelectedPlan(plan.id)
                    } else {
                      handlePayment(plan)
                    }
                  }}
                  className="w-full py-3 rounded-xl font-semibold text-sm transition-all"
                  style={
                    isPro
                      ? { background: "#F97316", color: "white" }
                      : isSelected
                        ? { background: "#1E3A8A", color: "white" }
                        : { background: "#F3F4F6", color: "#303030" }
                  }
                  onMouseEnter={e => {
                    if (!loadingPlan) e.currentTarget.style.opacity = "0.9"
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.opacity = "1"
                  }}
                >
                  {loadingPlan === plan.id
                    ? "Processing..."
                    : isSelected
                      ? "Proceed to Pay →"
                      : "Select Plan"}
                </button>
              )}
            </MotionDiv>
          )
        })}
      </div>

      {/* Trust line */}
      <p className='text-center text-xs mt-10' style={{ color: "#9CA3AF" }}>
        Secure payments via Razorpay · Credits never expire · No hidden charges
      </p>
    </div>
  )
}

export default Pricing