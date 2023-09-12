import React, { useState } from 'react'
import Card from "react-bootstrap/Card";
import "../Projects/Projects.css"


function Project(props) {
    console.log(props)
    // imports the information for the current project
    const currentProject = useState(props)[0].projects;

    const title = currentProject.title; 
    const description = currentProject.description; 
    const image = currentProject.image; 
    const linkDeployment = currentProject.linkDeployment; 
    const linkRepository = currentProject.linkRepository;


    return (
        <Card style={{width: "18rem"}}>
            <Card.Img
                    varient="top"
                    src={require(`../../assets/images/${image}`)}
                    className='card-image'
            />
            <div className='project-container'>
                <Card.Body>
                    <Card.Title className='card-title'>{title}</Card.Title>
                    <Card.Text className='card-text'>{description}</Card.Text>
                    <Card.Link href={linkDeployment} target='_blank' className='card-link'>
                        Link
                    </Card.Link>
                    <br></br>
                    <Card.Link href={linkRepository} target='_blank' className='card-link'>
                        GitHub
                    </Card.Link>
                </Card.Body>
            </div>
        </Card>
    );
}


export default Project;