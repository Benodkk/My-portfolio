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

  const [visibleContact, setVisibleContact] = useState('hidden')
  const [opacityContact, setOpacityContact] = useState(0)

  const toAboutSection = () => {
    setVisibleAbout('visible')
    setOpacityAbout(1)
  }

  const toPortfolioSection = () => {
    setVisiblePortfolio('visible')
    setOpacityPortfolio(1)
  }

  const toContactSection = () => {
    setVisibleContact('visible')
    setOpacityContact(1)
  }

  const goBack = () => {
    setVisibleAbout('hidden')
    setOpacityAbout(0)
    setVisiblePortfolio('hidden')
    setOpacityPortfolio(0)
    setVisibleContact('hidden')
    setOpacityContact(0)
  }
  return (
    <div id="app">
      <WelcomePage toAboutSection={toAboutSection} toPortfolioSection={toPortfolioSection} toContactSection={toContactSection}/>  
      <About visibleAbout={visibleAbout} opacityAbout={opacityAbout} goBack={goBack}/>
      <Portfolio visiblePortfolio={visiblePortfolio} opacityPortfolio={opacityPortfolio} goBack={goBack}/>      
      <Contact visibleContact={visibleContact} opacityContact={opacityContact} goBack={goBack}/>

    </div>
  );
}

export default App;
