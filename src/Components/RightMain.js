// import React from 'react'
import React, { useEffect, useState } from "react";
import Right from './Right'
import Skills from './Skills'
import Loader from './Loader'
import Projects from './Projects'

function RightMain() {

  const [typa, setTypa] = useState({
    animation: "typing steps(30) 4s "
  });

  const [skillbox, setSkillbox] = useState({
    opacity: "0",
    animation: "none",
  });

  useEffect(() => {
    console.log(window.innerHeight);
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setSkillbox({
          opacity: "1",
          // animation: "skillAni 0.1s ease-in-out",
          position:"fixed",
          zIndex:"5"
        });
      } else {
        setSkillbox({
          opacity: "0",
          animation: "none",
          position:"absolute",
          zIndex:"0"
        });
        
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="rightmain">
        <div className="loaderMain">
        <Loader/>
        </div>
        
        <Right/>
        
        <div className="spe">
        <div className="skillBox" style={skillbox}>
          <div className="intro introskills" >
            <p style={typa}>
              <span>01</span>
              <span>&lt;</span> Skills...!<span>/&gt;</span>
            </p>
          </div>
        </div>
        <Skills/>
        <Projects/>
        </div>
    </div>
    </>
  )
}

export default RightMain