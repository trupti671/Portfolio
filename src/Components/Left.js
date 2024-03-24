import React from "react";
import propic from "../images/propic.jpeg";
import homeg from "../images/homeg.png";
import homeo from "../images/homeo.png";
import skillsg from "../images/skillsg.png";
import skillso from "../images/skillso.png";
import projectg from "../images/projectg.png";
import projecto from "../images/projecto.png";
import worko from "../images/worko.png";
import workg from "../images/workg.png";
import contacto from "../images/contacto.png";
import contactg from "../images/contactg.png";

function Left() {
  return (
    <>
      <div className="left">
        <div className="propic">
          <img src={propic} alt="profile" />
        </div>
        <div className="navbar">
          <div className="homeMain">
          <div className="home">
            <img src={homeg} alt="" />
            <img className="grey" src={homeo} alt="" />
          </div>
          <p>Home</p>
          </div>
          <div className="homeMain">
          <div className="home">
            <img src={skillsg} alt="" />
            <img className="grey" src={skillso} alt="" />
          </div>
          <p>Skills</p>
          </div>
          <div className="homeMain">
          <div className="home">
            <img src={projectg} alt="" />
            <img className="grey" src={projecto} alt="" />
          </div>
          <p>Projects</p>
          </div>
          <div className="homeMain">
          <div className="home">
            <img src={workg} alt="" />
            <img className="grey" src={worko} alt="" />
          </div>
          <p>Experience</p>
          </div>
          <div className="homeMain">
          <div className="home">
            <img src={contactg} alt="" />
            <img className="grey" src={contacto} alt="" />
          </div>
          <p>Contact</p>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Left;
