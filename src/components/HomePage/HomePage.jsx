import React from 'react';
import { Fragment } from 'react';
import { Hero } from '../Hero/Hero';
import { AboutMe } from '../AboutMe/AboutMe';
import { Tracker } from '../Tracker/Tracker';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { Projects } from '../Projects/Projects';


export const HomePage = () => {
    return (
        <Fragment>
            <Hero />
            <section id="about-me">
                <AboutMe />
                <Tracker />
            </section>
            <Skills />
            <Experience />
            <Projects />
        </Fragment>
    )
}
