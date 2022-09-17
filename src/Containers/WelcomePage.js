import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function WelcomePage({toAboutSection, toPortfolioSection}){

    return(
        <section id="welcomePage">
            {/* <div className="fakeDiv"></div> */}
            <div className="welcomeContainer">
                <div className="welcomeMessage">
                    <div className="normalDiv">HELLO</div>
                    <div className="normalDiv" >I'M DANIEL KOZŁOWSKI</div>
                    
                    <div className="buttonsContainer">
                        <button className="btn" onClick={toAboutSection} >ABOUT</button>
                        <button className="btn" onClick={toPortfolioSection}>PORTFOLIO</button>
                        <button className="btn">CONTACT</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WelcomePage