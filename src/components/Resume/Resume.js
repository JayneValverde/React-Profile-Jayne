import React from 'react';
import "./Resume.css";

const Resume = () => {
    return (
        <section id='resume'>

            <div className='container'>
                <div className='row'>
                    <h1 className='Contact' style={{ fontSize: "3.8rem" }}>RESUME</h1>
                </div>
            </div>

            <div className='resume-row'>
                <div className='resume-download'>
                    <a href=''>Download Resume </a>
                </div>
            </div>

            <div className='skills-row'>
                <div className='resume-skills'>
                    <h4>Skills</h4>
                    <ul className='list-inline'>
                        <li className='list-inline-item'>HTML/CSS/Bootstrap</li>
                        <li className='list-inline-item'>JavaScript/jQuery</li>
                        <li className='list-inline-item'>Node.js</li>
                        <li className='list-inline-item'>React</li>
                        <li className='list-inline-item'>MYSQL</li>
                        <li className='list-inline-item'>NoSQL</li>
                        <li className='list-inline-item'> Git</li>
                        <li className='list-inline-item'>Heroku</li>
                        <li className='list-inline-item'>Node.js</li>
                        <li className='list-inline-item'>Express.js</li>
                        <li className='list-inline-item'>Rest APIs</li>
                        <li className='list-inline-item'>JSON</li>
                        <li className='list-inline-item'>Object Oriented Programming</li>
                        <li className='list-inline-item'>Progressive Web Applicaitons</li>
                    </ul>
                </div>
            </div>

        </section>
    );
};

export default Resume;