import { SkillCard } from './SkillCard';
import { cardInfo } from './cardInfo';
import { useState } from 'react';

import './Skills.css'


export const Skills = () => {
    const [flipped, setFlipped] = useState("");

    const flipBackHandler = (id) => {
        setFlipped(id)
    };

    const flipFrontHandler = () => {
        setFlipped("");
    };


    return (
        <section id="skills">
            <div className="title skills-title">
                <h2>Skills</h2>
            </div>
            <div className="skill-card-container">
                <div className="eighty-width skills-container">
                    {cardInfo.map(skill => <SkillCard 
                    onFlipFront={flipFrontHandler}
                    onFlipBack={flipBackHandler}
                    flipped={flipped}
                    key={skill.id}
                    id={skill.id}
                    divClassName={skill.divClassName}
                    imgClassName={skill.imgClassName}
                    imgId={skill.imgId}
                    imgSrc={skill.imgSrc}
                    imgAlt={skill.imgAlt}
                    skillDesc={skill.skillDesc}
                    />)}
                </div>
            </div>
        </section>
    )
}
