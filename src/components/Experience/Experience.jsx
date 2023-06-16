import React from 'react'
import './Experience.css';

export const Experience = () => {
    return (
        <section id="experience">
            <div className="title experience-title">
                <h2>Experience & Education </h2>
            </div>
            <div className="timeline-section">
                <div className="eighty-width boxshadow timeline-container">
                    <div className="timeline">
                        <div className="left-bar"></div>
                        <div className="timeline-entry">
                            <div className="timeline-icons uni-icon">
                            </div>
                            <div className="timeline-desc-container">
                                <h4>2022-2023</h4>
                                <h3>Codecademy Front-End Engineer Certificate</h3>
                                <ul>
                                    <li>Became proficient in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript
                                    </strong>, and <strong>Git</strong></li>
                                    <li>Learned fundamentals of web design such as wireframing, prototyping with <strong>Figma</strong>,
                                        color theory, and accessible design</li>
                                    <li>Built multiple projects based on the above mentioned technologies</li>
                                </ul>
                                <button
                                className="basic-button">
                                    <a
                                    href="https://join.codecademy.com/learn/paths/front-end-engineer-career-path-b/"
                                    target="_blank"
                                    rel="noreferrer">Learn More</a></button>
                            </div>
                        </div>
                        <div className="timeline-entry">
                            <div className="timeline-icons work-icon">
                            </div>
                            <div className="timeline-desc-container">
                                <h4>2019-2020</h4>
                                <h3>Associate Market Manager</h3>
                                <ul>
                                    <li>Responsible for 100 key clients in three geographic areas in Japan</li>
                                    <li>Gained experience in sales negotiations and relationship management with high-stakes clients</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-entry">
                            <div className="timeline-icons work-icon">
                            </div>
                            <div className="timeline-desc-container">
                                <h4>2016-2019</h4>
                                <h3>Market Associate</h3>
                                <ul>
                                    <li>Responsible for 10,000 long-tail clients across Japan, Guam, Saipan, and Palau</li>
                                    <li>Gained experience in full-cycle sales activities from acquisition to account management</li>
                                </ul>
                            </div>
                        </div>
                        <div className="timeline-entry">
                            <div className="timeline-icons uni-icon">
                            </div>
                            <div className="timeline-desc-container">
                                <h4>2012-2016</h4>
                                <h3>MA in History of Art</h3>
                                <ul>
                                    <li>Acquired visual analytical skills and sharp eyes for design and aesthetics</li>
                                    <li>Polished cultural and emotional intelligence through many volunteering activities overseas</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
