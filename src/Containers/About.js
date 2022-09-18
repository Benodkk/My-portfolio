import { useState, useEffect } from "react"

function About({visibleAbout,opacityAbout, goBack}){
    

    return(
        <section id="about"
        style={{visibility: visibleAbout,
                opacity: opacityAbout}}>
            <div className="content">
                <div className="titleContainer">
                    <div className="goBack" onClick={goBack}>BACK</div>
                    <h1 >ABOUT ME</h1>
                    <div className="fakeDiv">BACK</div>
                </div>
                <div>
                    Welcome! My name is Daniel Kozłowski, I'm learning programming and I'm looking forward to start working as a developer.
                    I am also a civil engineer, but I decided to change the industry and try my hand at programming.
                </div>    
                <div className="redBorder"></div>
                <div>
                    I started my adventure in programming in February of 2022 and I've just got obsessed about it. 
                    I started my learning with few small courses then i found The Odin Project. They helped me to develop my skillls and showed me the path how to become a full stack developer.
                </div>    
                <div className="redBorder"></div>
                <div>

                </div>
                <div className="quote"><i>
                    “Any fool can write code that a computer can understand. Good programmers write code that humans can understand.”
                </i></div>
            </div>
        </section>
    )
}
export default About