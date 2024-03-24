// import React from 'react'
import React, { useEffect, useState } from "react";
import ai from "../images/ai.png";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import reactjs from "../images/reactjs.png";
import tcss from "../images/tcss.png";
import nodejs from "../images/nodejs.png";
import mongodb from "../images/mongodb.png";
import github from "../images/github.png";
import git from "../images/git.png";
import expressjs from "../images/expressjs.png";

function Skills() {
  
  
 
  
  useEffect(() => {
    console.log(window.innerHeight);
    const handleScroll = () => {
      
        setTimeout(() => {
          setAiImg({
            opacity: "1"
          })
          setTimeout(() => {
            setSk1({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(72deg) translateY(-280px) rotate(-72deg)",
              opacity: '1',
              animation: "skillShow 30s ease-in-out infinite"
            })
            setSkp1({
              animation: "skillPara 30s ease-in-out infinite"
            })
            
          }, 500);
          setTimeout(() => {
            setSk2({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(144deg) translateY(-280px) rotate(-144deg)",
              opacity: '1',
              animation: "skillShow2 30s ease-in-out infinite"
            })
            setSkp2({
              animation: "skillPara2 30s ease-in-out infinite"
            })
          }, 700);
          setTimeout(() => {
            setSk3({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(216deg) translateY(-280px) rotate(-216deg)",
              opacity: '1',
              animation: "skillShow3 30s ease-in-out infinite"
            })
            setSkp3({
              animation: "skillPara3 30s ease-in-out infinite"
            })
          }, 900);
          setTimeout(() => {
            setSk4({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(288deg) translateY(-280px) rotate(-288deg)",
              opacity: '1',
              animation: "skillShow4 30s ease-in-out infinite"
            })
            setSkp4({
              animation: "skillPara4 30s ease-in-out infinite"
            })
          }, 1100);
          setTimeout(() => {
            setSk5({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(360deg) translateY(-280px) rotate(-360deg)",
              opacity: '1',
              animation: "skillShow5 30s ease-in-out infinite"
            })
            setSkp5({
              animation: "skillPara5 30s ease-in-out infinite"
            })
          }, 1300);
          setTimeout(() => {
            setSk6({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(36deg) translateY(-280px) rotate(-36deg)",
              opacity: '1',
              animation: "skillShow6 30s ease-in-out infinite"
            })
            setSkp6({
              animation: "skillPara6 30s ease-in-out infinite"
            })
          }, 1500);
          setTimeout(() => {
            setSk7({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(108deg) translateY(-280px) rotate(-108deg)",
              opacity: '1',
              animation: "skillShow7 30s ease-in-out infinite"
            })
            setSkp7({
              animation: "skillPara7 30s ease-in-out infinite"
            })
          }, 1700);
          setTimeout(() => {
            setSk8({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(180deg) translateY(-280px) rotate(-180deg)",
              opacity: '1',
              animation: "skillShow8 30s ease-in-out infinite"
            })
            setSkp8({
              animation: "skillPara8 30s ease-in-out infinite"
            })
          }, 1900);
          setTimeout(() => {
            setSk9({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(252deg) translateY(-280px) rotate(-252deg)",
              opacity: '1',
              animation:" skillShow9 30s ease-in-out infinite"
            })
            setSkp9({
              animation: "skillPara9 30s ease-in-out infinite"
            })
          }, 2100);
          setTimeout(() => {
            setSk10({
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(324deg) translateY(-280px) rotate(-324deg)",
              opacity: '1',
              animation: "skillShow10 30s ease-in-out infinite"
            })
            setSkp10({
              animation: "skillPara10 30s ease-in-out infinite"
            })
          }, 2300);
        }, 1000);
      }
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Other code remains the same

  const [aiImg, setAiImg] = useState({
    opacity: '0',
    filter: 'brightness(50%)'
  })

const [sk1, setSk1] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})

const [skp1, setSkp1] = useState({
  animation: "none"
})
const [sk2, setSk2] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})
const [skp2, setSkp2] = useState({
  animation: "none"
})
const [sk3, setSk3] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})
const [skp3, setSkp3] = useState({
  animation: "none"
})
const [sk4, setSk4] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})
const [skp4, setSkp4] = useState({
  animation: "none"
})
const [sk5, setSk5] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})
const [skp5, setSkp5] = useState({
  animation: "none"
})
const [sk6, setSk6] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})
const [skp6, setSkp6] = useState({
  animation: "none"
})
const [sk7, setSk7] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})
const [skp7, setSkp7] = useState({
  animation: "none"
})
const [sk8, setSk8] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})
const [skp8, setSkp8] = useState({
  animation: "none"
})
const [sk9, setSk9] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})
const [skp9, setSkp9] = useState({
  animation: "none"
})
const [sk10, setSk10] = useState({
  top: "auto",
  left: "auto",
  transform: "none",
  opacity: '0'
})
const [skp10, setSkp10] = useState({
  animation: "none"
})


// Other code remains the same



  return (
    <>
      <div className="skills">
        

        <div className="skillMain">
          <img className="ai" src={ai} alt="Processor" style={aiImg}/>
          <div className="skillIcons">
            <div className="skillInfo" style={sk1}>
              <img src={html} alt="HTML 5" />
              <p style={skp1}>HTML 5</p>
            </div>
            <div className="skillInfo" style={sk2}>
              <img src={css} alt="HTML 5" />
              <p style={skp2}>CSS</p>
            </div>
            <div className="skillInfo" style={sk3}>
              <img src={js} alt="HTML 5" />
              <p style={skp3}>JavaScript</p>
            </div>
            <div className="skillInfo" style={sk4}>
              <img src={reactjs} alt="HTML 5" />
              <p style={skp4}>React JS</p>
            </div>
            <div className="skillInfo" style={sk5}>
              <img src={tcss} alt="HTML 5" />
              <p style={skp5}>Tailwind CSS</p>
            </div>

            <div className="skillInfo" style={sk6}>
              <img src={nodejs} alt="HTML 5" />
              <p style={skp6}>Node JS</p>
            </div>
            <div className="skillInfo" style={sk7}>
              <img src={mongodb} alt="HTML 5" />
              <p style={skp7}>Mongo DB</p>
            </div>
            <div className="skillInfo" style={sk8}>
              <img src={github} alt="HTML 5" />
              <p style={skp8}>GitHub</p>
            </div>
            <div className="skillInfo" style={sk9}>
              <img src={git} alt="HTML 5" />
              <p style={skp9}>Git</p>
            </div>
            <div className="skillInfo" style={sk10}>
              <img src={expressjs} alt="HTML 5" />
              <p style={skp10}>Express JS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
