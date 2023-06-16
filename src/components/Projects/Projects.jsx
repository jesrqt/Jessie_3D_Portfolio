import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from "swiper";
import { FiGithub } from 'react-icons/fi'
import './Projects.css';
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";


export const Projects = () => {
    return (
        <section id="projects">
            <div className="title project-title">
                <h2>Projects</h2>
            </div>
            <div className="project-section">
                <div className="eighty-width boxshadow slide-container">
                    <div className="slide-content">
                        <div className="card-wrapper">
                            <Swiper
                                effect={"coverflow"}
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={1}
                                spaceBetween={150}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 100,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: false,
                                }}
                                pagination={true}
                                initialSlide={1}
                                modules={[EffectCoverflow, Pagination]}
                                breakpoints={{
                                    450: {
                                        slidesPerView: 1.2,
                                    },
                                    600: {
                                        slidesPerView: "auto",
                                    }
                                }}
                                className="mySwiper"
                            >

                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="/image/Project_Pokedex.webp"
                                                    alt="Jessie created a Pokedex app using React" className="card-img" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h3 className="project-name">Pokédex</h3>
                                            <p className="project-description">Pokédex is a React app where users can browse first and second generation pokémons and check their statuses.
                                                Throught this project, Jessie showcased her ability to use fetch API and safely handle potential errors.</p>
                                            <button className="project-button">
                                                <a href="https://github.com/jesrqt/Pokedex"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <h4>Source Code</h4>
                                                    <FiGithub className="github-icon" />
                                                </a>
                                            </button>
                                            <button className='project-button'>
                                                <a href="https://genuine-treacle-21c99c.netlify.app/"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <h4>Deployed Website</h4>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="/image/Project_Jammming.webp"
                                                    alt="Jessie created a music app called Jammming" className="card-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <h3 className="project-name">Jammming</h3>
                                            <p className="project-description">Jammming is a React app where users can log into their Spotify account to search songs, albums, or artists and create their own playlists.
                                                Throught this project, Jessie showcased her ability to handle both GET and POST requests using fetch API.</p>
                                            <button className="project-button">
                                                <a href="https://github.com/jesrqt/Jammming"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <h4>Source Code</h4>
                                                    <FiGithub className="github-icon" />
                                                </a>
                                            </button>
                                            <button className='project-button'>
                                                <a href="https://tourmaline-crumble-d24e10.netlify.app/"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <h4>Deployed Website</h4>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="boxshadow card">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="/image/Project_Redux_Shop.webp"
                                                    alt="Web development project for an imaginary cat cafe called Purrcolator" className="card-img" />
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <h3 className="project-name">Redux Webshop</h3>
                                            <p className="project-description">Redux Webshop is built with React and Redux. Users can add or remove items in a shopping cart, which is automatically saved in a backend server in real time.
                                                Through this project, Jessie demonstrates her ability to manage states using Redux and handle API requests.</p>
                                            <button className="project-button">
                                                <a href="https://github.com/jesrqt/Redux_Webshop"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <h4>Source Code</h4>
                                                    <FiGithub className="github-icon" />
                                                </a>
                                            </button>
                                            <button className='project-button'>
                                                <a href="https://main--wonderful-bavarois-996dde.netlify.app/"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <h4>Deployed Website</h4>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="/image/Project_React_Form.webp"
                                                    alt="Jessie created a Pokedex app using React" className="card-img" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h3 className="project-name">React Form</h3>
                                            <p className="project-description">React Form is an React app where users can submit their user name and age. The intake is then reflected directly below the form.
                                                Through this project, Jessie learned how to develop a form for React applications.</p>
                                            <button className="project-button">
                                                <a href="https://github.com/jesrqt/React_Form"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <h4>Source Code</h4>
                                                    <FiGithub className="github-icon" />
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="card">
                                        <div className="image-content">
                                            <span className="overlay"></span>
                                            <div className="card-image">
                                                <img src="/image/Project_Purrcolator.webp"
                                                    alt="Jessie created a Pokedex app using React" className="card-img" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h3 className="project-name">Purrcolator</h3>
                                            <p className="project-description">Puurcolator is an imaginary cat cafe. 
                                            Throught this project, Jessie learned to develop a static website using HTML, CSS, and Javascript.</p>
                                            <button className="project-button">
                                                <a href="https://github.com/jesrqt/Purrcolator"
                                                    target="_blank"
                                                    rel="noreferrer">
                                                    <h4>Source Code</h4>
                                                    <FiGithub className="github-icon" />
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
