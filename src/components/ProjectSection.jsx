import React, { useState } from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';
import project4 from '../assets/images/project4.png';
import project5 from '../assets/images/project5.png';
import project6 from '../assets/images/project6.png';
import project7 from '../assets/images/project7.png';

const ProjectsSection = () => {
    const projects = [
        {
            title: 'Flash Me!',
            deployedLink: 'https://flash-me-8481dc8f6f3f.herokuapp.com/',
            githubLink: 'https://github.com/cassidykovell/flash-me',
            imageSrc: project1,
            description: 'This site functions as a social media-like platform where users can create collections of flashcards and post them to their feeds. They can also view collections posted by other users on their feeds and revisit them under their profiles.',
        },
        {
            title: "With What's In The Fridge",
            deployedLink: 'https://with-whats-in-the-fridge.onrender.com/',
            githubLink: 'https://github.com/cassidykovell/with-whats-in-the-fridge',
            imageSrc: project7,
            description: 'This web application allows users to enter the ingredients in their fridge into their online "fridge" and have recipes returned that match precisely what they have at home. They can also add recipes to their own online cookbook, post their own recipes, and save other recipes they view on their feed.',
        },
        {
            title: 'Date Night Generator',
            deployedLink: 'https://cassidykovell.github.io/date-night/',
            githubLink: 'https://github.com/cassidykovell/date-night',
            imageSrc: project2,
            description: 'This site allows users to have a randomly generated cocktail recipe and a randomly generated dinner recipe to provide the user with fun and experimental date nights.',
        },
        {
            title: 'Weather App',
            deployedLink: 'https://cassidykovell.github.io/weather-website/',
            githubLink: 'https://github.com/cassidykovell/weather-website',
            imageSrc: project3,
            description: 'This application is a weather app. Users can enter their location and bring up the weather for that day and the entire week.',
        },
        {
            title: 'Daily Planner',
            deployedLink: 'https://cassidykovell.github.io/daily-planner/',
            githubLink: 'https://github.com/cassidykovell/daily-planner',
            imageSrc: project4,
            description: 'A user can add their daily plans to this site, and the data will be saved persistently. The current date and time will also be displayed.',
        },
        {
            title: 'Timed Coding Quiz',
            deployedLink: 'https://cassidykovell.github.io/timed-coding-quiz/',
            githubLink: 'https://github.com/cassidykovell/timed-coding-quiz',
            imageSrc: project5,
            description: 'A quiz to test users on their programming knowledge and skills.',
        },
        {
            title: 'CSS Cheat Sheet',
            deployedLink: 'https://cassidykovell.github.io/css-cheatsheet/',
            githubLink: 'https://github.com/cassidykovell/css-cheatsheet',
            imageSrc: project6,
            description: 'A site that displayed useful CSS code for developers.',
        },
    ];

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
            <div className="content">
            <div>
                <h1>{projects[currentProjectIndex].title}</h1>
                <p>{projects[currentProjectIndex].description}</p>
            </div>
                <div className="project-slideshow">
                    <div className="project-item">
                        <a href={projects[currentProjectIndex].deployedLink} target="_blank">
                            <div className="image-container">
                                <img className="img" src={projects[currentProjectIndex].imageSrc} alt={projects[currentProjectIndex].title} />
                                <div className="image-overlay">
                                    <p className="project-title">
                                        <a id="ptitle" href={projects[currentProjectIndex].deployedLink} target="_blank">Click to View!</a>
                                    </p>
                                    <a id="ibackground" href={projects[currentProjectIndex].githubLink} target="_blank" className="github-icon">
                                        <i className="fab fa-github" style={{ fontSize: "1.5rem" }}></i>
                                    </a>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div id="buttons">
                        <button onClick={goToPreviousProject} className="prev-button">Prev</button>
                        <button onClick={goToNextProject} className="next-button">Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
