// import Header from './Containers/Header'
import WelcomePage from './Containers/WelcomePage'
import About from './Containers/About'
import Portfolio from './Containers/Portfolio'
import Contact from './Containers/Contact'

import './style.css'
import { useEffect, useState } from 'react'

function App() {

  const [topp, setTopp] = useState('0px')
  const [page, setPage] = useState(0)

  const [daa, setDaa] = useState(0)

  const onScroll = () => {
      setDaa(window.scrollY*6)   
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)  
  },[])

  // useEffect(() => {
  //   console.log(daa)
  //   console.log(page)
  //   if(page==0 && daa>0){
  //     setTopp('100vh')
  //     setPage(1)
  //     setDaa(0)
  //   }
  //   else if(page==1 && daa<0){
  //     setTopp('0vh')
  //     setPage(0)
  //     setDaa(0)
  //   }
  //   else if(page==1 && daa>0){
  //     setTopp('200vh')
  //     setPage(2)
  //     setDaa(0)
  //   }
  //   else if(page==2 && daa<0){
  //     setTopp('100vh')
  //     setPage(1)
  //     setDaa(0)
  //   }
  // },[daa])
  const [scr , setScr] = useState('rotateX(0deg)')

  useEffect(() =>{
    console.log(window.innerHeight)
    console.log(daa)
    setScr(`perspective(1000px) translate3d(0px,-${(daa*200)/window.innerHeight}px ,-${(daa*200)/window.innerHeight}px) rotateX(${(daa*30)/window.innerHeight}deg)`)
    console.log(scr)
  },[daa])
  
  return (
    <div id="app" style={{
      bottom: topp
    }}>
      <WelcomePage scr={scr}/>  
      <About page={page}/>
      {/* <Contact scroll={scroll}/> */}
      <Portfolio />
    </div>
  );
}

export default App;
