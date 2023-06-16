import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { BsPencil, BsBook } from 'react-icons/bs';
import { AiOutlineCoffee } from 'react-icons/ai';
import { MdOutlineWorkOutline } from 'react-icons/md';
import './Tracker.css';


export const Tracker = () => {
    const [studyDays, setStudyDays] = useState('');
    const [cupsOfCoffee, setCupsOfCoffee] = useState('');
    const { ref, inView } = useInView();

    useEffect(() => {
        // Set number of Study Days
        const today = Date.now();
        const startDate = new Date(2022, 10, 14);
        const numOfStudyDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        setStudyDays(numOfStudyDays);
        // Set cups of coffee consumed
        const numOfCoffee = numOfStudyDays * 2;
        setCupsOfCoffee(numOfCoffee);
    }, []);

    return (
        <div
            className="tracker-section"
        >
            <div className="eighty-width tracker-container">
                <div className="tracker study-days">
                    <div className="tracker-description">
                        <h3
                            id="studyDays"
                            ref={ref}>
                            {inView &&
                                <CountUp
                                    start={0}
                                    end={studyDays}
                                    duration={4}
                                />}
                        </h3>
                        <BsPencil className='tracker-icon' />
                        <p>days studying to code</p>
                    </div>
                </div>
                <div className="tracker cups-of-coffee">
                    <div className="tracker-description">
                        <h3 id="cupsOfCoffee">
                            {inView &&
                                <CountUp
                                    start={0}
                                    end={cupsOfCoffee}
                                    duration={4}
                                />}
                        </h3>
                        <AiOutlineCoffee className='tracker-icon' />
                        <p>cups of coffee</p>
                    </div>
                </div>
                <div className="tracker no-of-projects">
                    <div className="tracker-description">
                        <h3 id="numberOfProjects">
                            {inView &&
                                <CountUp
                                    start={0}
                                    end={5}
                                    duration={4}
                                />}
                        </h3>
                        <BsBook className='tracker-icon' />
                        <p>projects published</p>
                    </div>
                </div>
                <div className="tracker prof-experience">
                    <div className="tracker-description">
                        <h3 id="yearsOfExper">
                            {inView &&
                                <CountUp
                                    start={0}
                                    end={4}
                                    duration={4}
                                />}
                        </h3>
                        <MdOutlineWorkOutline className='tracker-icon' />
                        <p>years of professional experiences</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
