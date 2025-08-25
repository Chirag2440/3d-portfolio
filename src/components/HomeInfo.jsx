import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from  '../assets/icons';



const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain"/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Chirag</span> 🙏
            <br />
            A Web Developer From India.
        </h1>
    ),
    2: (
        <InfoBox
          text="A driven and resourceful entry-level Web Developer with hands-on experience in creating and deploying responsive web applications through personal projects."
          link="/about"
          btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
          text="Led Multiple Projects to Success over the Years. Curios about the impact?"
          link="/projects"
          btnText="Visit My Portfolio"
        />
    ),
    4: (
       <InfoBox
          text="Need a Project done or looking for a dev? I'm just a few keystrokes away"
          link="/contact"
          btnText="Let's Talk"
        />
    )
}

const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo