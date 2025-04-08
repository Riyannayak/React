import React, { useState, useEffect } from 'react';

function Digitalclock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => clearInterval(timer)
  }, []);

  const formatTime = (time) => {
    return time.toLocaleTimeString(); 
  }

  return (
    <div className="flex items-center justify-center h-screen bg-teal-400">
    <div className="text-6xl text-stone-50 ">
      {formatTime(time)} <br /> <br />
      {time.toLocaleDateString()}


    </div>
  </div>
  )
}


export default Digitalclock

