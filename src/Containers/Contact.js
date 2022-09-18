import repoImg from '../Assets/repo.png'
import emailImg from '../Assets/email.png'
import githubImg from '../Assets/github.png'

function Contact({visibleContact, opacityContact, goBack}){


    return(
        <section id='contact'
            style={{visibility: visibleContact,
            opacity: opacityContact}}>
            <div className="content">
                <div className="titleContainer">
                    <div className="goBack" onClick={goBack}>BACK</div>
                    <h1 >CONTACT</h1>
                    <div className="fakeDiv">BACK</div>
                </div>
                <div>
                    Feel free to contact me
                </div>    
                <div className="redBorder"></div>
                <div className="contactInfo">
                    <div className='emailInfo'>
                        <img src={emailImg}/>
                        <div className="email">daniel.kozlowski@vp.pl</div>
                    </div>
                    <div className='githubInfo'>
                        <img src={githubImg}/>   
                        <a href='https://github.com/Benodkk/my-portfolio' className='github'>github.com/Benodkk</a>
                    </div>
                </div>   
                <div className="redBorder"></div>
                <div className="repoInfo">
                    <a href='https://github.com/Benodkk/my-portfolio'><img src={repoImg}/><div>Repo to this project</div></a>
                </div>
            </div>
        </section>
    )
}
export default Contact