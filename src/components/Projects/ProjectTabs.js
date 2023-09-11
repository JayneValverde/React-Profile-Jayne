import React from "react";
import ".Projects.css";
import Projects from "./Projects";

function ProjectsTab() {

    return(
        <div className="projects-container">
            <div className="projects-wrapper">
                <h2>Projects</h2>
                <div className="project-wrapper">
                    {/* Loops through the projects.json object & rendering each project dinamically */}
                    {Projects.map( p => <Projects projects={p} key={p.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default ProjectsTab