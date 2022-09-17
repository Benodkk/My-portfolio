import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function WelcomePage({scr}){

    // const [daa, setDaa] = useState('')

    // const onScroll = (e) => {
    //     setDaa(e.deltaY)   
    // }
    // useEffect(() => {
    //     window.addEventListener('wheel', onScroll)  
    // },[])
    // useEffect(() => {
    //     if(daa>0){
    //         scroll()
    //     }
    // },[daa])

    return(
        <section id="welcomePage"
        style={{transform: scr}}>
            {/* <div className="fakeDiv"></div> */}
            <div className="welcomeContainer">
                <div className="welcomeMessage">
                    <div>Hi, I'm Daniel Kozłowski</div>
                    <div className="bigWelcome">WELCOME</div>
                    <div>on my page</div>
                </div>
            </div>
        </section>
    )
}
export default WelcomePage