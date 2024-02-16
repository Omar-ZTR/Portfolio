// import React, { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// import "./animCursor.css"
// function AnimCursor() {
//     const [x, setX] = useState(0);
//     const [y, setY] = useState(0);
//     useEffect(() => {
//         const handleMouseLeave = (e) => {
//             if (
//                 e.clientY <= 0 ||
//                 e.clientX <= 0 ||
//                 e.clientX >= window.innerWidth ||
//                 e.clientY >= window.innerHeight
//             ) {
//                 console.log("I'm out");
                
//                 setX(e.clientX - 330);
//                 console.log("sxxx", x);
//                 console.log("I'mppppp out", e.clientX-20);
//             }
//         };

//         document.addEventListener('mouseleave', handleMouseLeave);

//         // Cleanup the event listener when the component unmounts
//         return () => {
//             document.removeEventListener('mouseleave', handleMouseLeave);
//         };
//     }, []);
//     useEffect(() => {
//         const handleCursor = (e) => {
//             setX(e.clientX - 2);
//             setY(e.clientY - 2);
//             console.log(x)
//         };
       
//         window.addEventListener("mousemove", handleCursor);
//         return () => {
//             window.removeEventListener("mousemove", handleCursor);
//         };
//     }, []);
//     return (<>
//         <motion.div className='mouse' animate={{
//             x,
//             y,
//         }}></motion.div>
//         {/* <div className="cc"></div> */}
//     </>)
// }

// export default AnimCursor


import React, { useState, useEffect } from 'react';

const AnimCursor = () => {
  const [mouseXpercentage, setMouseXPercentage] = useState(0);
  const [mouseYpercentage, setMouseYPercentage] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const newMouseXpercentage = Math.round((event.pageX / windowWidth) * 100);
      const newMouseYpercentage = Math.round((event.pageY / windowHeight) * 100);

      setMouseXPercentage(newMouseXpercentage);
      setMouseYPercentage(newMouseYpercentage);
      console.log(mouseXpercentage)
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  const gradientStyle = {
    background: `radial-gradient(at ${mouseXpercentage}% ${mouseYpercentage}%, #3498db, #9b59b6)`,
  };

  return<><div className="radial-gradient" ></div></> ;
};

export default AnimCursor;
