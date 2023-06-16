import React, { Fragment, useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavBar.css';

const getHamburger = () => window.innerWidth <= 1000;

export const NavBar = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [hamburgerMenu, setHamburgerMenu] = useState(getHamburger())

    useEffect(() => {
        const onResize = () => {
            setHamburgerMenu(getHamburger())
        };
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize)
        }
    }, []);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };


    if (!hamburgerMenu) {
        return (
            <nav>
                <div className="eighty-width nav-container">
                    <NavLink to="/" id="logo">{'>'}_Jessie_in_IT</NavLink>
                    <ul>
                        <li>
                            <HashLink 
                            className="nav-link" 
                            smooth to="/#home">Home</HashLink>
                        </li>
                        <li>
                            <HashLink 
                            className="nav-link"
                            smooth to="/#about-me" >About Me</HashLink>
                        </li>
                        <li>
                            <HashLink 
                            className="nav-link"
                            smooth to="/#skills">Skills</HashLink>
                        </li>
                        <li>
                            <HashLink 
                            className="nav-link"
                            smooth to="/#experience">Experience</HashLink>
                        </li>
                        <li>
                            <HashLink
                            className="nav-link"
                            smooth to="/#projects">Projects</HashLink>
                        </li>
                        <li>
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

    if (hamburgerMenu) {
        return (
            <Fragment>
                <nav>
                    <div className="eighty-width nav-container">
                        <a href="https://jessieinit.com/" id="logo">{'>'}_Jessie_in_IT</a>
                        <button 
                        className="hamburger"
                        onClick={toggleMenu}>
                            {!isMenuVisible
                                ? <GiHamburgerMenu
                                    className="menuIcon"
                                />
                                : <GrClose
                                    className="closeIcon"
                                />
                            }
                        </button>
                    </div>
                </nav>

                <ul className={`menu ${isMenuVisible && "showMenu"}`}>
                    <li>
                        <HashLink 
                        className="menuItem" 
                        smooth to="/#home">Home</HashLink>
                    </li>
                    <li>
                        <HashLink 
                        className="menuItem"
                        smooth to="/#about-me">About Me</HashLink>
                    </li>
                    <li>
                        <HashLink
                        className="menuItem"
                        smooth to="/#skills">Skills</HashLink>
                    </li>
                    <li>
                        <HashLink 
                        className="menuItem"
                        smooth to="/#experience">Experience</HashLink>
                    </li>
                    <li>
                        <HashLink 
                        className="menuItem"
                        smooth to="/#projects">Projects</HashLink>
                    </li>
                    <li>
                        <NavLink className="menuItem" to="/blog">Blog</NavLink>
                    </li>
                </ul>
            </Fragment>
        )
    }

}
