// import Header from './Containers/Header'
import WelcomePage from './Containers/WelcomePage'
import About from './Containers/About'
import Portfolio from './Containers/Portfolio'
import Contact from './Containers/Contact'

import './style.css'
import { useState } from 'react'

function App() {

  const [bot, setBot] = useState('0')
  const [right, setRight] = useState('100vw')

  const goLeft = () => {
    setRight(0)
  }
  const goRight = () => {
    setRight('200vw')
  }
  const goDown = () => {
    setBot('100vh')
  }
  const backToWelcomePage = () => {
    setBot('0')
    setRight('100vw')
    console.log(bot)
  }
  
  return (
    <div id="app" style={{
      bottom:bot,
      right:right
      }}>
      <div className='firstRow'>
        <About backToWelcomePage={backToWelcomePage}/>
        <WelcomePage goLeft={goLeft} goRight={goRight} goDown={goDown} />
        <Contact backToWelcomePage={backToWelcomePage}/>
      </div>   
      <Portfolio backToWelcomePage={backToWelcomePage}/>
    </div>
  );
}

export default App;
