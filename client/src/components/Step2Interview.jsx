// import React from 'react'
// import maleVideo from "../assets/videos/male-ai.mp4"
// import femaleVideo from "../assets/videos/female-ai.mp4"
// import Timer from './Timer'
// import { motion } from "motion/react"
// import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
// import { useState } from 'react'
// import { useRef } from 'react'
// import { useEffect } from 'react'
// import axios from "axios"
// import { ServerUrl } from '../App'
// import { BsArrowRight } from 'react-icons/bs'

// function Step2Interview({ interviewData, onFinish }) {
//   const { interviewId, questions, userName } = interviewData;
//   const [isIntroPhase, setIsIntroPhase] = useState(true);

//   const [isMicOn, setIsMicOn] = useState(true);
//   const recognitionRef = useRef(null);
//   const [isAIPlaying, setIsAIPlaying] = useState(false);

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [answer, setAnswer] = useState("");
//   const [feedback, setFeedback] = useState("");
//   const [timeLeft, setTimeLeft] = useState(
//     questions[0]?.timeLimit || 60
//   );
//   const [selectedVoice, setSelectedVoice] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [voiceGender, setVoiceGender] = useState("female");
//   const [subtitle, setSubtitle] = useState("");


//   const videoRef = useRef(null);

//   const currentQuestion = questions[currentIndex];


//   useEffect(() => {
//     const loadVoices = () => {
//       const voices = window.speechSynthesis.getVoices();
//       if (!voices.length) return;

//       // Try known female voices first
//       const femaleVoice =
//         voices.find(v =>
//           v.name.toLowerCase().includes("zira") ||
//           v.name.toLowerCase().includes("samantha") ||
//           v.name.toLowerCase().includes("female")
//         );

//       if (femaleVoice) {
//         setSelectedVoice(femaleVoice);
//         setVoiceGender("female");
//         return;
//       }

//       // Try known male voices
//       const maleVoice =
//         voices.find(v =>
//           v.name.toLowerCase().includes("david") ||
//           v.name.toLowerCase().includes("mark") ||
//           v.name.toLowerCase().includes("male")
//         );

//       if (maleVoice) {
//         setSelectedVoice(maleVoice);
//         setVoiceGender("male");
//         return;
//       }

//       // Fallback: first voice (assume female)
//       setSelectedVoice(voices[0]);
//       setVoiceGender("female");
//     };

//     loadVoices();
//     window.speechSynthesis.onvoiceschanged = loadVoices;

//   }, [])

//   const videoSource = voiceGender === "male" ? maleVideo : femaleVideo;


//   /* ---------------- SPEAK FUNCTION ---------------- */
//   const speakText = (text) => {
//     return new Promise((resolve) => {
//       if (!window.speechSynthesis || !selectedVoice) {
//         resolve();
//         return;
//       }

//       window.speechSynthesis.cancel();

//       // Add natural pauses after commas and periods
//       const humanText = text
//         .replace(/,/g, ", ... ")
//         .replace(/\./g, ". ... ");

//       const utterance = new SpeechSynthesisUtterance(humanText);

//       utterance.voice = selectedVoice;

//       // Human-like pacing
//       utterance.rate = 0.92;     // slightly slower than normal
//       utterance.pitch = 1.05;    // small warmth
//       utterance.volume = 1;

//       utterance.onstart = () => {
//         setIsAIPlaying(true);
//         stopMic()
//         videoRef.current?.play();
//       };


//       utterance.onend = () => {
//         videoRef.current?.pause();
//         videoRef.current.currentTime = 0;
//         setIsAIPlaying(false);



//         if (isMicOn) {
//           startMic();
//         }
//         setTimeout(() => {
//           setSubtitle("");
//           resolve();
//         }, 300);
//       };


//       setSubtitle(text);

//       window.speechSynthesis.speak(utterance);
//     });
//   };


//   useEffect(() => {
//     if (!selectedVoice) {
//       return;
//     }
//     const runIntro = async () => {
//       if (isIntroPhase) {
//         await speakText(
//           `Hi ${userName}, it's great to meet you today. I hope you're feeling confident and ready.`
//         );

//         await speakText(
//           "I'll ask you a few questions. Just answer naturally, and take your time. Let's begin."
//         );

//         setIsIntroPhase(false)
//       } else if (currentQuestion) {
//         await new Promise(r => setTimeout(r, 800));

//         // If last question (hard level)
//         if (currentIndex === questions.length - 1) {
//           await speakText("Alright, this one might be a bit more challenging.");
//         }

//         await speakText(currentQuestion.question);

//         if (isMicOn) {
//           startMic();
//         }
//       }

//     }

//     runIntro()


//   }, [selectedVoice, isIntroPhase, currentIndex])



//   useEffect(() => {
//     if (isIntroPhase) return;
//     if (!currentQuestion) return;
    
//     const timer = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           clearInterval(timer)
//           return 0;
//         }
//         return prev - 1

//       })
//     }, 1000);

//     return () => clearInterval(timer)

//   }, [isIntroPhase, currentIndex])

//   useEffect(() => {
//   if (!isIntroPhase && currentQuestion) {
//     setTimeLeft(currentQuestion.timeLimit || 60);
//   }
// }, [currentIndex]);


//   useEffect(() => {
//     if (!("webkitSpeechRecognition" in window)) return;

//     const recognition = new window.webkitSpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = true;
//     recognition.interimResults = false;

//     recognition.onresult = (event) => {
//       const transcript =
//         event.results[event.results.length - 1][0].transcript;

//       setAnswer((prev) => prev + " " + transcript);
//     };

//     recognitionRef.current = recognition;

//   }, []);


//   const startMic = () => {
//     if (recognitionRef.current && !isAIPlaying) {
//       try {
//         recognitionRef.current.start();
//       } catch { }
//     }
//   };

//   const stopMic = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop();
//     }
//   };
//   const toggleMic = () => {
//     if (isMicOn) {
//       stopMic();
//     } else {
//       startMic();
//     }
//     setIsMicOn(!isMicOn);
//   };


//   const submitAnswer = async () => {
//     if (isSubmitting) return;
//     stopMic()
//     setIsSubmitting(true)

//     try {
//       const result = await axios.post(ServerUrl + "/api/interview/submit-answer", {
//         interviewId,
//         questionIndex: currentIndex,
//         answer,
//         timeTaken:
//           currentQuestion.timeLimit - timeLeft,
//       } , {withCredentials:true})

//       setFeedback(result.data.feedback)
//       speakText(result.data.feedback)
//       setIsSubmitting(false)
//     } catch (error) {
// console.log(error)
// setIsSubmitting(false)
//     }
//   }

//   const handleNext =async () => {
//     setAnswer("");
//     setFeedback("");

//     if (currentIndex + 1 >= questions.length) {
//       finishInterview();
//       return;
//     }

//     await speakText("Alright, let's move to the next question.");

//     setCurrentIndex(currentIndex + 1);
//     setTimeout(() => {
//       if (isMicOn) startMic();
//     }, 500);

   
//   }

//   const finishInterview = async () => {
//     stopMic()
//     setIsMicOn(false)
//     try {
//       const result = await axios.post(ServerUrl+ "/api/interview/finish" , { interviewId} , {withCredentials:true})

//       console.log(result.data)
//       onFinish(result.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }


//    useEffect(() => {
//     if (isIntroPhase) return;
//     if (!currentQuestion) return;

//     if (timeLeft === 0 && !isSubmitting && !feedback) {
//       submitAnswer()
//     }
//   }, [timeLeft]);

//   useEffect(() => {
//     return () => {
//       if (recognitionRef.current) {
//         recognitionRef.current.stop();
//         recognitionRef.current.abort();
//       }

//       window.speechSynthesis.cancel();
//     };
//   }, []);







//   return (
//     <div className='min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-100 flex items-center justify-center p-4 sm:p-6'>
//       <div className='w-full max-w-350 min-h-[80vh] bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col lg:flex-row overflow-hidden'>

//         {/* video section */}
//         <div className='w-full lg:w-[35%] bg-white flex flex-col items-center p-6 space-y-6 border-r border-gray-200'>
//           <div className='w-full max-w-md rounded-2xl overflow-hidden shadow-xl'>
//             <video
//               src={videoSource}
//               key={videoSource}
//               ref={videoRef}
//               muted
//               playsInline
//               preload="auto"
//               className="w-full h-auto object-cover"
//             />
//           </div>

//           {/* subtitle */}
//           {subtitle && (
//             <div className='w-full max-w-md bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm'>
//               <p className='text-gray-700 text-sm sm:text-base font-medium text-center leading-relaxed'>{subtitle}</p>
//             </div>
//           )}


//           {/* timer Area */}
//           <div className='w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-md p-6 space-y-5'>
//             <div className='flex justify-between items-center'>
//               <span className='text-sm text-gray-500'>
//                 Interview Status
//               </span>
//               {isAIPlaying && <span className='text-sm font-semibold text-emerald-600'>
//                 {isAIPlaying ? "AI Speaking" : ""}
//               </span>}
//             </div>

//             <div className="h-px bg-gray-200"></div>

//             <div className='flex justify-center'>

//               <Timer timeLeft={timeLeft} totalTime={currentQuestion?.timeLimit} />
//             </div>

//             <div className="h-px bg-gray-200"></div>

//             <div className='grid grid-cols-2 gap-6 text-center'>
//               <div>
//                 <span className='text-2xl font-bold text-emerald-600'>{currentIndex + 1}</span>
//                 <span className='text-xs text-gray-400'>Current Questions</span>
//               </div>

//               <div>
//                 <span className='text-2xl font-bold text-emerald-600'>{questions.length}</span>
//                 <span className='text-xs text-gray-400'>Total Questions</span>
//               </div>
//             </div>


//           </div>
//         </div>

//         {/* Text section */}

//         <div className='flex-1 flex flex-col p-4 sm:p-6 md:p-8 relative'>
//           <h2 className='text-xl sm:text-2xl font-bold text-emerald-600 mb-6'>
//             AI Smart Interview
//           </h2>


//           {!isIntroPhase && (<div className='relative mb-6 bg-gray-50 p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm'>
//             <p className='text-xs sm:text-sm text-gray-400 mb-2'>
//               Question {currentIndex + 1} of {questions.length}
//             </p>

//             <div className='text-base sm:text-lg font-semibold text-gray-800 leading-relaxed '>{currentQuestion?.question}</div>
//           </div>)
//           }
//           <textarea
//             placeholder="Type your answer here..."
//             onChange={(e) => setAnswer(e.target.value)}
//             value={answer}
//             className="flex-1 bg-gray-100 p-4 sm:p-6 rounded-2xl resize-none outline-none border border-gray-200 focus:ring-2 focus:ring-emerald-500 transition text-gray-800" />


//          {!feedback ? ( <div className='flex items-center gap-4 mt-6'>
//             <MotionButton
//               onClick={toggleMic}
//               whileTap={{ scale: 0.9 }}
//               className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full bg-black text-white shadow-lg'>
//               {isMicOn ? <FaMicrophone size={20} /> : <FaMicrophoneSlash size={20}/>}
//             </MotionButton>

//             <MotionButton
//             onClick={submitAnswer}
//             disabled={isSubmitting}
//               whileTap={{ scale: 0.95 }}
//               className='flex-1 bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 sm:py-4 rounded-2xl shadow-lg hover:opacity-90 transition font-semibold disabled:bg-gray-500'>
//               {isSubmitting?"Submitting...":"Submit Answer"}

//             </MotionButton>

//           </div>):(
//             <motion.div 
//              initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             className='mt-6 bg-emerald-50 border border-emerald-200 p-5 rounded-2xl shadow-sm'>
//               <p className='text-emerald-700 font-medium mb-4'>{feedback}</p>

//               <button
//               onClick={handleNext}

//                className='w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-3 rounded-xl shadow-md hover:opacity-90 transition flex items-center justify-center gap-1'>
//                 Next Question <BsArrowRight size={18}/>
//               </button>

//             </motion.div>
//           )}
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Step2Interview




import React from 'react'
import maleVideo from "../assets/videos/male-ai.mp4"
import femaleVideo from "../assets/videos/female-ai.mp4"
import Timer from './Timer'
import { motion, AnimatePresence } from "motion/react"
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import { BsArrowRight, BsRobot } from 'react-icons/bs'
import { useState, useRef, useEffect } from 'react'
import axios from "axios"
import { ServerUrl } from '../App'

const MotionDiv = motion.div;
const MotionButton = motion.button;

function Step2Interview({ interviewData, onFinish }) {


  const { interviewId, questions, userName } = interviewData;
  const [isIntroPhase, setIsIntroPhase] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const recognitionRef = useRef(null);
  const [isAIPlaying, setIsAIPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState("");
  const [timeLeft, setTimeLeft] = useState(questions[0]?.timeLimit || 60);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [voiceGender, setVoiceGender] = useState("female");
  const [subtitle, setSubtitle] = useState("");
  const videoRef = useRef(null);
  const isMicOnRef = useRef(true);
  const isAIPlayingRef = useRef(false);
  const isRecognizingRef = useRef(false);
  const lastTranscriptRef = useRef("");
  const lastTranscriptAtRef = useRef(0);
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    isMicOnRef.current = isMicOn;
  }, [isMicOn]);

  useEffect(() => {
    isAIPlayingRef.current = isAIPlaying;
  }, [isAIPlaying]);

  useEffect(() => {
    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      const femaleVoice = voices.find(v =>
        v.name.toLowerCase().includes("zira") ||
        v.name.toLowerCase().includes("samantha") ||
        v.name.toLowerCase().includes("female")
      );
      if (femaleVoice) { setSelectedVoice(femaleVoice); setVoiceGender("female"); return; }
      const maleVoice = voices.find(v =>
        v.name.toLowerCase().includes("david") ||
        v.name.toLowerCase().includes("mark") ||
        v.name.toLowerCase().includes("male")
      );
      if (maleVoice) { setSelectedVoice(maleVoice); setVoiceGender("male"); return; }
      setSelectedVoice(voices[0]); setVoiceGender("female");
    };
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  const videoSource = voiceGender === "male" ? maleVideo : femaleVideo;

  const startMic = () => {
    if (recognitionRef.current && isMicOnRef.current && !isAIPlayingRef.current && !isRecognizingRef.current) {
      try {
        recognitionRef.current.start();
      } catch {
        return;
      }
    }
  };

  const stopMic = () => {
    if (recognitionRef.current) {
      isRecognizingRef.current = false;
      recognitionRef.current.stop();
    }
  };

  /* eslint-disable react-hooks/exhaustive-deps */
  const speakText = (text) => {
    return new Promise((resolve) => {
      if (!window.speechSynthesis || !selectedVoice) { resolve(); return; }
      window.speechSynthesis.cancel();
      const humanText = text.replace(/,/g, ", ... ").replace(/\./g, ". ... ");
      const utterance = new SpeechSynthesisUtterance(humanText);
      utterance.voice = selectedVoice;
      utterance.rate = 0.92; utterance.pitch = 1.05; utterance.volume = 1;
      utterance.onstart = () => { setIsAIPlaying(true); stopMic(); videoRef.current?.play(); };
      utterance.onend = () => {
        videoRef.current?.pause();
        videoRef.current.currentTime = 0;
        setIsAIPlaying(false);
        if (isMicOnRef.current) startMic();
        setTimeout(() => { setSubtitle(""); resolve(); }, 300);
      };
      setSubtitle(text);
      window.speechSynthesis.speak(utterance);
    });
  };

  useEffect(() => {
    if (!selectedVoice) return;
    const runIntro = async () => {
      if (isIntroPhase) {
        await speakText(`Hi ${userName}, it's great to meet you today. I hope you're feeling confident and ready.`);
        await speakText("I'll ask you a few questions. Just answer naturally, and take your time. Let's begin.");
        setIsIntroPhase(false);
      } else if (currentQuestion) {
        await new Promise(r => setTimeout(r, 800));
        if (currentIndex === questions.length - 1) await speakText("Alright, this one might be a bit more challenging.");
        await speakText(currentQuestion.question);
        if (isMicOnRef.current) startMic();
      }
    };
    runIntro();
  }, [selectedVoice, isIntroPhase, currentIndex]);

  useEffect(() => {
    if (isIntroPhase || !currentQuestion) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => { if (prev <= 1) { clearInterval(timer); return 0; } return prev - 1; });
    }, 1000);
    return () => clearInterval(timer);
  }, [isIntroPhase, currentIndex]);

  useEffect(() => {
    if (!isIntroPhase && currentQuestion) setTimeLeft(currentQuestion.timeLimit || 60);
  }, [currentIndex]);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) return;
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US"; recognition.continuous = true; recognition.interimResults = false;
    recognition.onstart = () => {
      isRecognizingRef.current = true;
    };
    recognition.onend = () => {
      isRecognizingRef.current = false;
    };
    recognition.onresult = (event) => {
      if (!isMicOnRef.current) return;
      const parts = [];
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        if (result.isFinal) {
          parts.push(result[0].transcript);
        }
      }
      const transcript = parts.join(" ").trim();
      if (!transcript) return;

      const now = Date.now();
      if (
        transcript.toLowerCase() === lastTranscriptRef.current.toLowerCase() &&
        now - lastTranscriptAtRef.current < 1500
      ) {
        return;
      }

      lastTranscriptRef.current = transcript;
      lastTranscriptAtRef.current = now;
      setAnswer(prev => (prev ? `${prev} ${transcript}` : transcript));
    };
    recognitionRef.current = recognition;
  }, []);

  const toggleMic = () => {
    setIsMicOn((prev) => {
      const next = !prev;
      isMicOnRef.current = next;
      if (next) {
        startMic();
      } else {
        stopMic();
      }
      return next;
    });
  };

  const submitAnswer = async () => {
    if (isSubmitting) return;
    stopMic(); setIsSubmitting(true);
    try {
      const result = await axios.post(ServerUrl + "/api/interview/submit-answer", {
        interviewId, questionIndex: currentIndex, answer,
        timeTaken: currentQuestion.timeLimit - timeLeft,
      }, { withCredentials: true });
      setFeedback(result.data.feedback);
      speakText(result.data.feedback);
      setIsSubmitting(false);
    } catch (error) { console.log(error); setIsSubmitting(false); }
  };

  const handleNext = async () => {
    setAnswer(""); setFeedback("");
    if (currentIndex + 1 >= questions.length) { finishInterview(); return; }
    await speakText("Alright, let's move to the next question.");
    setCurrentIndex(currentIndex + 1);
    setTimeout(() => { if (isMicOnRef.current) startMic(); }, 500);
  };

  const finishInterview = async () => {
    stopMic(); setIsMicOn(false);
    try {
      const result = await axios.post(ServerUrl + "/api/interview/finish", { interviewId }, { withCredentials: true });
      onFinish(result.data);
    } catch (error) { console.log(error); }
  };

  useEffect(() => {
    if (!isIntroPhase && currentQuestion && timeLeft === 0 && !isSubmitting && !feedback) submitAnswer();
  }, [timeLeft]);
  /* eslint-enable react-hooks/exhaustive-deps */

  useEffect(() => {
    return () => {
      recognitionRef.current?.stop();
      recognitionRef.current?.abort();
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#F5F5F5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      fontFamily: "'Poppins', sans-serif",
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        minHeight: '80vh',
        background: 'white',
        borderRadius: '28px',
        boxShadow: '0 8px 48px rgba(0,0,0,0.09)',
        border: '1px solid #E5E7EB',
        display: 'flex',
        flexDirection: 'row',
        overflow: 'hidden',
      }}>

        {/* ── LEFT: Video + Status Panel ── */}
        <div style={{
          width: '320px',
          flexShrink: 0,
          background: 'linear-gradient(180deg, #1E3A8A 0%, #1d4ed8 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '28px 20px',
          gap: '20px',
        }}>

          {/* Brand pill */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '999px',
            padding: '5px 14px 5px 8px',
            alignSelf: 'flex-start',
          }}>
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '7px', padding: '4px' }}>
              <BsRobot size={13} color="white" />
            </div>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', fontWeight: 600 }}>
              InterviewIQ<span style={{ color: '#F97316' }}>.AI</span>
            </span>
          </div>

          {/* Video */}
          <div style={{
            width: '100%',
            borderRadius: '18px',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            border: '2px solid rgba(255,255,255,0.12)',
            position: 'relative',
          }}>
            <video
              src={videoSource}
              key={videoSource}
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            {/* AI Speaking badge */}
            <AnimatePresence>
              {isAIPlaying && (
                <MotionDiv
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(249,115,22,0.9)',
                    backdropFilter: 'blur(4px)',
                    borderRadius: '999px',
                    padding: '4px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                  {/* Animated dots */}
                  {[0, 1, 2].map(i => (
                    <MotionDiv key={i}
                      animate={{ scaleY: [1, 1.8, 1] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                      style={{ width: '3px', height: '10px', background: 'white', borderRadius: '2px' }} />
                  ))}
                  <span style={{ color: 'white', fontSize: '11px', fontWeight: 600 }}>Speaking</span>
                </MotionDiv>
              )}
            </AnimatePresence>
          </div>

          {/* Subtitle */}
          <AnimatePresence>
            {subtitle && (
              <MotionDiv
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  width: '100%',
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '14px',
                  padding: '12px 14px',
                }}>
                <p style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '12px',
                  lineHeight: 1.6,
                  textAlign: 'center',
                }}>{subtitle}</p>
              </MotionDiv>
            )}
          </AnimatePresence>

          {/* Status card */}
          <div style={{
            width: '100%',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '18px',
            padding: '20px 16px',
          }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '16px' }}>
              Interview Status
            </p>

            {/* Timer */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '18px' }}>
              <Timer timeLeft={timeLeft} totalTime={currentQuestion?.timeLimit} />
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '0 0 16px' }} />

            {/* Q progress */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', textAlign: 'center' }}>
              <div style={{
                background: 'rgba(249,115,22,0.15)',
                borderRadius: '12px',
                padding: '12px 8px',
              }}>
                <p style={{ color: '#F97316', fontSize: '24px', fontWeight: 800, lineHeight: 1 }}>{currentIndex + 1}</p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', marginTop: '4px' }}>Current Q</p>
              </div>
              <div style={{
                background: 'rgba(255,255,255,0.07)',
                borderRadius: '12px',
                padding: '12px 8px',
              }}>
                <p style={{ color: 'white', fontSize: '24px', fontWeight: 800, lineHeight: 1 }}>{questions.length}</p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '10px', marginTop: '4px' }}>Total Qs</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Q&A Panel ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          padding: '36px 40px',
          minWidth: 0,
        }}>

          {/* Header */}
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{
              fontSize: '22px',
              fontWeight: 800,
              color: '#1E3A8A',
              letterSpacing: '-0.4px',
              marginBottom: '4px',
            }}>
              AI Smart Interview
            </h2>
            <p style={{ color: '#9CA3AF', fontSize: '13px' }}>
              {isIntroPhase ? 'Preparing your session…' : `Question ${currentIndex + 1} of ${questions.length}`}
            </p>
          </div>

          {/* Question Card */}
          <AnimatePresence mode="wait">
            {!isIntroPhase && (
              <MotionDiv
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  background: '#EFF6FF',
                  border: '1.5px solid #BFDBFE',
                  borderRadius: '16px',
                  padding: '20px 22px',
                  marginBottom: '20px',
                }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#3B82F6', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                  Question {currentIndex + 1}
                </p>
                <p style={{ fontSize: '16px', fontWeight: 600, color: '#1E3A8A', lineHeight: 1.55 }}>
                  {currentQuestion?.question}
                </p>
              </MotionDiv>
            )}
          </AnimatePresence>

          {/* Answer Textarea */}
          <textarea
            placeholder="Speak your answer or type here…"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
            style={{
              flex: 1,
              minHeight: '160px',
              background: '#FAFAFA',
              border: '1.5px solid #E5E7EB',
              borderRadius: '16px',
              padding: '18px 20px',
              resize: 'none',
              outline: 'none',
              fontSize: '14px',
              color: '#303030',
              fontFamily: "'Poppins',sans-serif",
              lineHeight: 1.7,
              transition: 'border-color 0.2s, box-shadow 0.2s',
              marginBottom: '20px',
            }}
            onFocus={e => { e.target.style.borderColor = '#3B82F6'; e.target.style.boxShadow = '0 0 0 3px rgba(59,130,246,0.1)'; }}
            onBlur={e => { e.target.style.borderColor = '#E5E7EB'; e.target.style.boxShadow = 'none'; }}
          />

          {/* Action Row */}
          <AnimatePresence mode="wait">
            {!feedback ? (
              <MotionDiv
                key="actions"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>

                {/* Mic toggle */}
                <MotionButton
                  onClick={toggleMic}
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    border: 'none',
                    background: isMicOn
                      ? 'linear-gradient(135deg, #1E3A8A, #3B82F6)'
                      : '#F3F4F6',
                    color: isMicOn ? 'white' : '#9CA3AF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    boxShadow: isMicOn ? '0 4px 16px rgba(30,58,138,0.3)' : 'none',
                    transition: 'all 0.2s',
                  }}>
                  {isMicOn ? <FaMicrophone size={18} /> : <FaMicrophoneSlash size={18} />}
                </MotionButton>

                {/* Submit */}
                <MotionButton
                  onClick={submitAnswer}
                  disabled={isSubmitting}
                  whileHover={isSubmitting ? {} : { scale: 1.02, boxShadow: '0 8px 24px rgba(249,115,22,0.35)' }}
                  whileTap={isSubmitting ? {} : { scale: 0.97 }}
                  style={{
                    flex: 1,
                    padding: '15px',
                    background: isSubmitting ? '#E5E7EB' : 'linear-gradient(135deg, #F97316, #EA580C)',
                    color: isSubmitting ? '#9CA3AF' : 'white',
                    border: 'none',
                    borderRadius: '14px',
                    fontSize: '15px',
                    fontWeight: 700,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    fontFamily: "'Poppins',sans-serif",
                    boxShadow: isSubmitting ? 'none' : '0 4px 16px rgba(249,115,22,0.25)',
                    transition: 'all 0.2s',
                  }}>
                  {isSubmitting ? "Submitting…" : "Submit Answer"}
                </MotionButton>
              </MotionDiv>
            ) : (
              <MotionDiv
                key="feedback"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  background: '#F0FDF4',
                  border: '1.5px solid #BBF7D0',
                  borderRadius: '16px',
                  padding: '20px 22px',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <div style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 6px #22C55E',
                  }} />
                  <p style={{ fontSize: '11px', fontWeight: 700, color: '#15803D', textTransform: 'uppercase', letterSpacing: '0.7px' }}>
                    AI Feedback
                  </p>
                </div>
                <p style={{ color: '#374151', fontSize: '14px', lineHeight: 1.65, marginBottom: '18px' }}>
                  {feedback}
                </p>
                <MotionButton
                  onClick={handleNext}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    width: '100%',
                    padding: '13px',
                    background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    fontFamily: "'Poppins',sans-serif",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 4px 16px rgba(30,58,138,0.25)',
                  }}>
                  {currentIndex + 1 >= questions.length ? 'Finish Interview' : 'Next Question'}
                  <BsArrowRight size={16} />
                </MotionButton>
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Step2Interview