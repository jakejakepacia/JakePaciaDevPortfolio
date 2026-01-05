
import "./Skills.css";
import { useRef, useState } from "react";
import tonelLogo from "../assets/tonel-logo.png"
import swiftIcon from "../assets/swift-icon.png"
import reactIcon from "../assets/react-icon.png"
import csharpIcon from "../assets/c-sharp.png"

function Skills(){
      const [activeTab, setActiveTab] = useState("tab1");
      const [showPopup, setShowPopup] = useState(false);
    
      const skills = [
        {
          id: 1,
          name: "React",
          icon: reactIcon
        },
        {
          id: 2,
          name: "Swift",
          icon: swiftIcon
        },
        {
          id: 3,
          name: "C#",
          icon: csharpIcon
        }
      ]

return(
  <div className="container">
    <p><strong>Skills</strong></p>
      {/* Tab Buttons */}
      <div className="tabs-header">
        <button
          className={activeTab === "tab1" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("tab1")}
        >
          Front End
        </button>

        <button
          className={activeTab === "tab2" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("tab2")}
        >
          Back End
        </button>

         <button
          className={activeTab === "tab3" ? "tab-btn active" : "tab-btn"}
          onClick={() => setActiveTab("tab3")}
        >
          Other
        </button>

      </div>

      {/* Content */}
      <div className="tabs-content">
        {activeTab === "tab1" && 
          <div className="frontend-skills">
            {skills.map((skill) => (
              <div className="frontend-item">
                <img src={skill.icon} />
                <p>{skill.name}</p>
               </div>
          ))} 
          </div>
        }
        {activeTab === "tab2" && <div> </div>
       
        }
      </div>
    </div>
);
}

export default Skills;