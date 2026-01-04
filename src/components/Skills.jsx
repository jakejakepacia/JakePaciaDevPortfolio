
import "./Skills.css";
import { useRef, useState } from "react";
import tonelLogo from "../assets/tonel-logo.png"


function Skills(){
      const [activeTab, setActiveTab] = useState("tab1");
      const [showPopup, setShowPopup] = useState(false);
    
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
            <div className="frontend-item">
                <img src={tonelLogo} />
                <p>Swift</p>
            </div>

             <div className="frontend-item">
                <img src={tonelLogo} />
                <p>Swift</p>
            </div>

             <div className="frontend-item">
                <img src={tonelLogo} />
                <p>Swift</p>
            </div>
          </div>
        }
        {activeTab === "tab2" && <div> </div>
       
        }
      </div>
    </div>
);
}

export default Skills;