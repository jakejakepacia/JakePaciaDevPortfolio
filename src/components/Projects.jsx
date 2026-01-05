import tonelLogo from "../assets/tonel-logo.png"
import "./Projects.css";
import Popup from "./Popup";
import TonelyoKeyFeatures from "./TonelyoFeatures";
import { useRef, useState } from "react";
import toneldemo from "../assets/tonelvideo.mp4";
import VideoPlayer from "./VideoPlayer"; // default export matches

function Projects(){

const [showPopup, setShowPopup] = useState(false);
const projects = [
  {
    id: 1,
    title: "Tonelyo",
    description: "Customer app for ordering catering",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />
  },
  {
    id: 2,
    title: "Poteyo",
    description: "Some other description",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />
  },
  {
    id: 3,
    title: "Kwizinyo",
    description: "Some other description",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />
  },
   {
    id: 4,
    title: "MyPOS",
    description: "Some other description",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />
  },
   {
    id: 5,
    title: "FromAnonymous",
    description: "Some other description",
    logo: tonelLogo,
    video: toneldemo,
    features: <TonelyoKeyFeatures />
  }
];

const [selectedProject, setSelectedProject] = useState(null);


    return(
        <div className="container">
            <p><strong>Projects</strong></p>
            {/* <div className="project-items" >
                <div className="project-item" onClick={() => setShowPopup(true)}>
                  <img src={tonelLogo} />
                      <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>

                </div>

                <Popup show={showPopup} onClose={() => setShowPopup(false)}>
               <h2>Clientyo</h2>
               <div className="pop-up-body">
                 <VideoPlayer src={toneldemo} />
                <TonelyoKeyFeatures />
               </div>

              </Popup>
                <div className="project-item" onClick={() => setShowPopup(true)}>
                  <img src={tonelLogo} />
                      <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>

                <div className="project-item">
                  <img src={tonelLogo} />
                  <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>
                 <div className="project-item">
                  <img src={tonelLogo} />
                  <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>
                 <div className="project-item">
                  <img src={tonelLogo} />
                  <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>
                    <div className="project-item">
                  <img src={tonelLogo} />
                  <hr />
                  <p><strong>Tonelyo</strong>
                    <br />
                    Customer app for ordering catering
                  </p>
                </div>
            </div> */}
            <div className="project-items">
  {projects.map((project) => (
    <div
      key={project.id}
      className="project-item"
      onClick={() => setSelectedProject(project)}
    >
      <img src={project.logo} />
      <hr />
      <p className="description-p">
        <strong>{project.title}</strong><br />
        {project.description}
      </p>
    </div>
  ))}
</div>

<Popup
  show={!!selectedProject}
  onClose={() => setSelectedProject(null)}
>
  {selectedProject && (
    <>
      <h2>{selectedProject.title}</h2>
      <div className="pop-up-body">
        <VideoPlayer src={selectedProject.video} />
        {selectedProject.features}
      </div>
    </>
  )}
</Popup>


        </div>
    );
}

export default Projects;