import React from "react";
import ".Projects.css";
import Project from "../Projects/projects";
const YassFlix = require('../../assets/images/YassFlix.png');
const TimedQuiz = require('../../assets/images/Timed-quiz.png');
const PockChange = require('../../assets/images/PocketChange.png');
const SmogPassword = require('../../assets/images/SmogPassword.png');
const Scheduler = require('../../assets/images/Scheduler.png');
const NoteTaking = require('../../assets/images/NoteTaking.png');


// import data from "../Data/projects.json"

// function ProjectsTab() {
    
//     return(
//         <div className="projects-container">
//             <div className="projects-wrapper">
//                 <h2>Projects</h2>
//                 <div className="project-wrapper">
//                     {Projects.map( p => <Projects data={p} key={p.id} />)}
//                     {/* <Projects projects={data} screenshot={p.screenshot}/> */}

//                 </div>
//             </div> 
//         </div>
//     )
// }

function Portfolio() {
    const projects = [
        {
            "title": "YassFlix",
            "description": "An Application that allows users to search for movies & find out where to stream them ",
            "linkDeployment": "https://bosalinas.github.io/ShowBox/",
            "linkRepository": "https://github.com/bosalinas/ShowBox",
            "image": YassFlix
        },
        {
            "title": "Timed JavaScript-Quiz",
            "description": "A timed quiz made with JavaScript ",
            "linkDeployment": "https://jaynevalverde.github.io/JavaScript-Quiz/",
            "linkRepository": "https://github.com/JayneValverde/JavaScript-Quiz",
            "image": TimedQuiz
        },
        {
            "title": "Pocket Change",
            "description": "A money budgeting app to keep track of expenses - Powered by Sequelize & MySql",
            "linkDeployment": "https://powerful-fjord-96372-1e2a1c430418.herokuapp.com/",
            "linkRepository": "https://github.com/Vortexwarrior/pocket-chanj",
            "image": PockChange 
        },
        {
            "title": "Smoog Password Generator",
            "description": "Simple Password Generator",
            "linkDeployment": "https://jaynevalverde.github.io/smog-password-generator/",
            "linkRepository": "https://github.com/JayneValverde/smog-password-generator",
            "image": SmogPassword 
        },
        {
            "title": "Work Day Scheduler",
            "description": "Simple calender application that allows a user to save events for each hour of a typical workday",
            "linkDeployment": "https://jaynevalverde.github.io/Jaynes-work-day-calander/",
            "linkRepository": "https://github.com/JayneValverde/Jaynes-work-day-calander",
            "image": Scheduler  
        },
        {
            "title": "Work Day Scheduler",
            "description": "A note taking app that allows users to write and save notes - powered by express.js",
            "linkDeployment": "https://note-taking-app-jv-aaa688d69215.herokuapp.com/notes",
            "linkRepository": "https://github.com/JayneValverde/Note-taking-app",
            "image": NoteTaking
        },
    ];
    
    return (
        <section>
            <div className="center">
                <h1 className="page-header">Portfolio</h1>
            </div>
            <div>

                <ul className="flex-row mobil-row">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                </ul>

                <ul className="flex-row mobil-row">
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>

                <ul className="flex-row mobil-row">
                    <li className="padding">
                        <Project projects={projects[2]}></Project>
                    </li>
                </ul>

                <ul className="flex-row mobil-row">
                    <li className="padding">
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>

                <ul className="flex-row mobil-row">
                    <li className="padding">
                        <Project projects={projects[4]}></Project>
                    </li>
                </ul>

                <ul className="flex-row mobil-row">
                    <li className="padding">
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>

            </div>
        </section>
    );
};

export default Portfolio;