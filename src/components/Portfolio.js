import React from 'react'
import netflix from "../images/netflix.png"
import cityGuide from "../images/city-guide-app.png"
import mernBlog from "../images/mern-blog.png"
import taskManager from "../images/task-manager.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
// react popupbox
import {  PopupboxContainer, PopupboxManager  } from "react-popupbox"
import "react-popupbox/dist/react-popupbox.css"


const Portfolio = () => {

    const openPopupboxNetflix = () => {
        const content = (
                    <>
                    <img className="portfolio-image-popupbox" src= {netflix} alt="netflix clone ..."/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <b>Github:</b><a className="hyper-text" onClick={() => window.open('https://github.com/oussamarachdi/MyPortfolio')}>https://github.com/oussamarachdi/MyPortfolio</a>
                    </>
            
        )
        PopupboxManager.open({content})
    }
    const PopupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: 'Netflix Clone'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }


    const openPopupboxCityGuide = () => {
        const content = (
                    <>
                    <img className="portfolio-image-popupbox" src= {cityGuide} alt="City Guide ..."/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <b>Github:</b><a className="hyper-text" onClick={() => window.open('facebook.com')}>facebook.com</a>
                    </>
            
        )
        PopupboxManager.open({content})
    }
    const PopupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: 'City Guide'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxMernBLog = () => {
        const content = (
                    <>
                    <img className="portfolio-image-popupbox" src= {mernBlog} alt="mernBlog ..."/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <b>Github:</b><a className="hyper-text" onClick={() => window.open('facebook.com')}>facebook.com</a>
                    </>
            
        )
        PopupboxManager.open({content})
    }
    const PopupboxConfigMernBlog = {
        titleBar: {
            enable: true,
            text: 'Mern Blog'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    const openPopupboxTaskManager = () => {
        const content = (
                    <>
                    <img className="portfolio-image-popupbox" src= {taskManager} alt="Task Manager ..."/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <b>Github:</b><a className="hyper-text" onClick={() => window.open('facebook.com')}>facebook.com</a>
                    </>
            
        )
        PopupboxManager.open({content})
    }
    const PopupboxConfigTaskManager = {
        titleBar: {
            enable: true,
            text: 'Task Manager'
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row  justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                        <img className="portfolio-image" src={netflix} alt="Netflix Clone ..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/*  */}

                <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                        <img className="portfolio-image" src={cityGuide} alt="City Guide ..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                {/*  */}
                    <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                        <img className="portfolio-image" src={taskManager} alt="Task Manger ..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>

                {/*  */}

                    <div className="portfolio-image-box" onClick={openPopupboxMernBLog}>
                        <img className="portfolio-image" src={mernBlog} alt="Mern Blog ..."/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>

            </div>
            <PopupboxContainer {...PopupboxConfigNetflix} />
            <PopupboxContainer {...PopupboxConfigMernBlog} />
            <PopupboxContainer {...PopupboxConfigTaskManager} />
            <PopupboxContainer {...PopupboxConfigCityGuide} />
        </div>
    )
}

export default Portfolio
