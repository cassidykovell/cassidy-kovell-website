import React, { useState } from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';

const ProjectsSection = () => {
    const projects =  [
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
        },];


    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const goToPreviousProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const goToNextProject = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <section id="section2">
            <h3>Projects</h3>
            <div className="content" id="deployed">
                <div className="project-slideshow">
                    <div className="project-item">
                        <a href={projects[currentProjectIndex].deployedLink} target="_blank">
                            <img src={projects[currentProjectIndex].imageSrc} alt={projects[currentProjectIndex].title} />
                        </a>
                        <p className="project-title">
                            <a href={projects[currentProjectIndex].deployedLink} target="_blank">{projects[currentProjectIndex].title}</a>
                        </p>
                        <a href={projects[currentProjectIndex].githubLink} target="_blank" className="github-icon">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                    <button onClick={goToPreviousProject} className="prev-button">Prev</button>
                    <button onClick={goToNextProject} className="next-button">Next</button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;