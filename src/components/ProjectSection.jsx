import React from 'react';
import project1 from '../assets/images/project1.png';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Flash Me!',
            deployedLink: 'https://flash-me-8481dc8f6f3f.herokuapp.com/',
            githubLink: 'https://github.com/cassidykovell/flash-me',
            imageSrc: project1,
        },
    ];

    const handleMouseEnter = (index) => {
        const titleElement = document.getElementById(`title-${index}`);
        const githubIcon = document.getElementById(`github-${index}`);
        titleElement.style.display = 'block';
        githubIcon.style.display = 'block';
    };

    const handleMouseLeave = (index) => {
        const titleElement = document.getElementById(`title-${index}`);
        const githubIcon = document.getElementById(`github-${index}`);
        titleElement.style.display = 'none';
        githubIcon.style.display = 'none';
    };

    return (
        <section id="section2">
            <h3>Projects</h3>
            <div className="content" id="deployed">
                {projects.map((project, index) => (
                    <div key={index} className="project-item" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                        <a href={project.deployedLink} target="_blank">
                            <img src={project.imageSrc.default} alt={project.title} />
                        </a>
                        <p className="project-title" id={`title-${index}`}>
                            <a href={project.deployedLink} target="_blank">{project.title}</a>
                        </p>
                        <a href={project.githubLink} target="_blank" className="github-icon" id={`github-${index}`}>
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;