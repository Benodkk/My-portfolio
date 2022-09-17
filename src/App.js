// import Header from './Containers/Header'
import WelcomePage from './Containers/WelcomePage'
import About from './Containers/About'
import Portfolio from './Containers/Portfolio'
import Contact from './Containers/Contact'

import './style.css'
import { useEffect, useState } from 'react'

function App() {


  const [visibleAbout, setVisibleAbout] = useState('hidden')
  const [opacityAbout, setOpacityAbout] = useState(0)

  const [visiblePortfolio, setVisiblePortfolio] = useState('hidden')
  const [opacityPortfolio, setOpacityPortfolio] = useState(0)

  const toAboutSection = () => {
    setVisibleAbout('visible')
    setOpacityAbout(1)
  }

  const toPortfolioSection = () => {
    setVisiblePortfolio('visible')
    setOpacityPortfolio(1)
  }
  return (
    <div id="app">
      <WelcomePage toAboutSection={toAboutSection} toPortfolioSection={toPortfolioSection}/>  
      <About visibleAbout={visibleAbout} opacityAbout={opacityAbout}/>
      <Portfolio visiblePortfolio={visiblePortfolio} opacityPortfolio={opacityPortfolio}/>      
      {/* <Contact scroll={scroll}/> */}

    </div>
  );
}

export default App;
