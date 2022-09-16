
function WelcomePage({goLeft, goRight, goDown}){

    return(
        <section id="welcomePage">
            <div className="welcomeContainer">
                <button className="leftBtn" onClick={goLeft}>ABOUT</button>
                <div className="welcomeMessage">
                    <div>Hi, I'm Daniel Kozłowski</div>
                    <div className="bigWelcome">WELCOME</div>
                    <div>on my page</div>
                </div>
                <button className="rightBtn" onClick={goRight}>CONTACT</button>
            </div>
            <div className="downBtnContainer">
                <button className="downBtn" onClick={goDown}>PORTFOLIO</button>
                <div className="arrowDown">
                    <div></div>
                </div>
            </div>
        </section>
    )
}
export default WelcomePage