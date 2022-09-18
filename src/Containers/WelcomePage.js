function WelcomePage({toAboutSection, toPortfolioSection, toContactSection, welcomeZ, welcomeTransition}){

    return(
        <section id="welcomePage" style={{zIndex:welcomeZ, transition:welcomeTransition}}>
            <div className="welcomeContainer">
                <div className="welcomeMessage">
                    <div className="normalDiv">HELLO</div>
                    <div className="normalDiv" >I'M DANIEL KOZŁOWSKI</div>
                    <div className="buttonsContainer">
                        <button className="btn" onClick={toAboutSection} >ABOUT</button>
                        <button className="btn" onClick={toPortfolioSection}>PORTFOLIO</button>
                        <button className="btn" onClick={toContactSection}>CONTACT</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WelcomePage