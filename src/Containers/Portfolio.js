import {projects} from '../allProjects'
import { useEffect, useState } from 'react'
import liveImg from '../Assets/live.png'
import repoImg from '../Assets/repo.png'


function Portfolio({visiblePortfolio, opacityPortfolio, goBack}){

    const [displayWhat, setDisplayWhat] = useState('p1')
    const [display, setDisplay] = useState('')

    const toDisplay = (e) => {
        setDisplayWhat(e.target.id)
    }

    useEffect(() => {
        setDisplay(projects.find(ele => ele.id==displayWhat))
    },[displayWhat])

    const activeEle = (e) => {
        if(displayWhat==e){
            return(
                'var(--greenTheme)'
            )
        }
    }

    return(
        <section id="portfolio"
            style={{visibility: visiblePortfolio,
            opacity: opacityPortfolio}}>
            
            <div className="content">
            <div className="titleContainer">
                    <div className="goBack" onClick={goBack}>BACK</div>
                    <h1>PORTFOLIO</h1>
                    <div className="fakeDiv">BACK</div>
                </div>
                <div className='projectsContainer'>
                    <ul>
                        {projects.map((ele) => {
                            return(
                                <li key={ele.id} id={ele.id} onClick={toDisplay} style={{color:activeEle(ele.id)}}>
                                    {ele.name}
                                </li>
                            )
                        })}
                    </ul>
                    <div className="redBorder"></div>
                    <div className="projectInfo">{display.description}</div>
                    <div className="projectDescription">
                        <img src={display.img}/>
                        <div className="projectLinks">
                            <a href={display.live}><img src={liveImg}/><div>Live</div></a>
                            <a href={display.repo}><img src={repoImg}/><div>Repo</div></a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </section>
    )
}
export default Portfolio