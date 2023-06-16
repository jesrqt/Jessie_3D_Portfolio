import React from 'react'
import { Fragment } from 'react'
import './AboutMe.css';
import { Button } from '../UI/Button';

export const AboutMe = () => {
    return (
        <Fragment>
            <div
                className="title about-me-title"
                id="about-me">
                <h2>About Me</h2>
            </div>
            <div className="about-me-section">
                <div className="eighty-width about-me-container">
                    <div className="jessie-img-about-me"></div>
                    <div className="boxshadow self-desc">
                        <p>I'm an aspiring front-end developer in Frankfurt, Germany. I completed a certification for front-end
                            development with Codecademy and proficient in HTML, CSS, JavaScript, Git, and React. Looking
                            forward to working with you!</p>
                        <Button
                            className="basic-button about-me-button"
                            href="/"
                        >Learn More</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
