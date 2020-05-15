import React from 'react';
import { Header, Image, Button } from 'semantic-ui-react'
import profilePicture from '../images/profile-picture.jpg'
import githubLogo from '../images/github-logo.png'
import linkedInLogo from '../images/linkedin-logo.png'
import resume from '../images/Valentine-Maillard-Resume.pdf'

const handleUpClick = (event) => {
    event.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

const AboutContainer = () => {

    return (
        <div className="about-me-container">
            <Header className="about-header">About me</Header>
            <div className="about-box">
                <div className="position-profile-box">
                    <Image className="profile-picture" src={profilePicture} alt='profile picture' />
                    <p className="name">VALENTINE MAILLARD</p>
                    <p className="profession">Software Engineer</p>
                    <div className="profession-separator"></div>
                    <p className="profession">Full Stack Web <br/>Developer</p>
                    <div className="websites-container">
                        <a href="https://www.linkedin.com/in/valentine-maillard/" target="_blank" rel="noopener noreferrer"><Image className="linkedin-profile" src={linkedInLogo} alt="linkedIn profile" /></a>
                        <a href="https://github.com/valentinem1" target="_blank" rel="noopener noreferrer"><Image className="github-profile" src={githubLogo} alt="github profile" /></a>
                    </div>
                    <a className="resume-download" href={resume} download>Download Resume</a>
                </div>
                <div className="bio-container">
                    <p className="bio">
                    Software Engineer with experience in Ruby on Rails and JavaScript frameworks and a background in Logistics Management and Transportation. Possess strong skills in project management, collaborative problem solving, multitasking and paying great attention to details.<br/><br/>
                    Programming was always something I was curious about but never got a chance to interact with it. While working at Whole Foods Market as a Dairy buyer, I've started to develop a greater interest in programming. I was interacting with technologies every day. As customers would call to know if a product was available I came to a realization that their website could be improved upon to show more details.<br/>
                    I decided to explore coding by teaching myself HTML & CSS and building a static website from bottom up. Full of enthusiasm, I decided to enroll in the Flatiron School Software Engineering Program to gain the necessary skills to become a Full Stack Web Developer. From the very first day of the program, I remember the feelings of joy and accomplishment of being able to produce lines of codes and was amazed by how powerful theses lines were.<br/>
                    I am ready to use my skills and technology to find solutions to real-world problems and building interactive, high-quality products that can improve the way people interact with information and one another around the globe. I am passionate and love to create software that delivers a deep and meaningful impact on people's lives.<br/><br/>
                    When I am not coding you can find me playing basketball, video games or at the dog park with my dog Shaq. Let's connect!<br/><br/>
                    Proficient: Ruby on Rails, JavaScript, React, Redux, PostgreSQL, Git, GitHub, Restful API, Stripe API, HTML, CSS, Semantic UI, Wix<br/><br/>
                    Knowledgeable: SQLite, Heroku<br/><br/>
                    Weakness: 🏀 NBA Lover...
                    </p>
                </div>
            </div>
                <Button className="back-to-top-btn" onClick={handleUpClick}>Back to Top <span className="arrow-up">↑</span></Button>
        </div>
    );
};

export default AboutContainer;