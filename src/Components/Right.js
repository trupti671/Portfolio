import React, { useEffect, useState } from "react";
import lappy from "../images/lappy.png";
import minilappy from "../images/minilappy.png";


function Right() {
  const [typa, setTypa] = useState({
    animation: "typing steps(20) 2s",
  });
  const [typa2, setTypa2] = useState({
    animation: "none",
    width: "0",
  });
  const [typa3, setTypa3] = useState({
    animation: "none",
    width: "0",
  });
  const [typa4, setTypa4] = useState({
    animation: "none",
    width: "0",
  });

  setTimeout(() => {
    setTypa2({
      animation: "typing steps(20) 2s",
    });
  }, 2000);

  setTimeout(() => {
    setTypa3({
      animation: "typing steps(20) 2s",
    });
  }, 4000);

  setTimeout(() => {
    setTypa4({
      animation: "typing steps(20) 2s",
    });
  }, 6000);

  const [para, setPara] = useState({
    opacity:'0'
  })

  

  useEffect(() => {
    setTimeout(() => {
      setPara({
       opacity:'1'
      })
    }, 100);
  }, [])
  

  return (
    <>
      <div className="right">
          <div className="bounce">
          <div className="or"></div>
        <div className="aboutme" style={para}>
          <p>🌟 I excel in <span>collaborative environments</span>, learning from seasoned
          developers and contributing <span>innovative</span> ideas. My work is a continual
          journey of growth in <span>technology</span>.</p>
          
          <p>💻 Experienced with diverse <span>tools</span> and <span>frameworks</span>, I eagerly tackle new
          challenges. Whether crafting <span>user interfaces</span> or optimizing <span>backend
          functionality</span>, I approach each project with enthusiasm and excellence.</p>
        </div>
          </div>
        {/* <img className="bg" src={bg} alt="" /> */}
        <div className="moblap">
        <div className="intro">
          <p style={typa}>
            <span>01</span>
            <span>&lt;</span> Hey there, I'm Trupti! <span>/&gt;</span>
          </p>
          <p style={typa2}>
            <span>02</span>
            <span>&lt;</span> I'm a Full Stack Web Developer{" "}
            <img src={minilappy} alt="mini laptop" /> <span>/&gt;</span>
          </p>
          <p style={typa3}>
            <span>03</span>
            <span>&lt;</span> with a passion for writing clean,{" "}
          </p>
          <p style={typa4}>
            <span>04</span>&nbsp; elegant & efficient code.{" "}
            <span>/&gt;</span>
          </p>
        </div>
        <div className="intro intro2">
          <p style={typa}>
            <span>01</span>
            <span>&lt;</span> Hey there, I'm Trupti! <span>/&gt;</span>
          </p>
          <p style={typa2}>
            <span>02</span>
            <span>&lt;</span> I'm a Full Stack Web Developer{" "}
            <img src={minilappy} alt="mini laptop" /> <span>/&gt;</span>
          </p>
          <p style={typa3}>
            <span>03</span>
            <span>&lt;</span> with a passion for writing clean,{" "}
          </p>
          <p style={typa4}>
            <span>04</span>&nbsp; elegant & efficient code.{" "}
            <span>/&gt;</span>
          </p>
        </div>
        <img src={lappy} alt="" />
        </div>
      </div>
    </>
  );
}

export default Right;
