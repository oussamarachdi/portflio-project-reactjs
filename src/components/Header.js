import React from 'react'
import  Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>web development and websites promotions</h1>
                <Typed  
                    className="typed-text"
                    strings = {["Web Design", "Web Development", "Facebook Ads Services", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a className="btn-main-offer" href="/">Contact me</a>
            </div>
        </div>
    )
}

export default Header
