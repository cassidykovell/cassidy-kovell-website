import React from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Flash Me!',
            deployedLink: 'https://flash-me-8481dc8f6f3f.herokuapp.com/',
            githubLink: 'https://github.com/cassidykovell/flash-me',
            imageSrc: project1,
        },
        {
            title: 'Date Night Generator',
            deployedLink: 'https://cassidykovell.github.io/date-night/',
            githubLink: 'https://github.com/cassidykovell/date-night',
            imageSrc: project2,
        },
        {
            title: 'Weather App',
            deployedLink: 'https://cassidykovell.github.io/weather-website/',
            githubLink: 'https://github.com/cassidykovell/weather-website',
            imageSrc: project3,
        },
        {
            title: 'Daily Planner',
            deployedLink: 'https://cassidykovell.github.io/daily-planner/',
            githubLink: 'https://github.com/cassidykovell/daily-planner',
            imageSrc: project4,
        },
        {
            title: 'Timed Coding Quiz',
            deployedLink: 'https://cassidykovell.github.io/timed-coding-quiz/',
            githubLink: 'https://github.com/cassidykovell/timed-coding-quiz',
            imageSrc: project5,
        },
        {
            title: 'CSS Cheat Sheet',
            deployedLink: 'https://cassidykovell.github.io/css-cheatsheet/',
            githubLink: 'https://github.com/cassidykovell/css-cheatsheet',
            imageSrc: project6,
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
                            <img src={project.imageSrc} alt={project.title} />
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