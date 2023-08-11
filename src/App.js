import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PopularTours from './components/PopularTours'

import Storys from './components/Storys'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TransitionExample from './Test/TransitionExample'





const App = () => {
  return (
    <div className='container'>
    
    
        <Navbar/>
        <Header/>
        <PopularTours/>
        <Storys/>
        <Contact/>
        <Footer/>
    
        {/* <Test/> */}
        <TransitionExample/>
    </div>
  )
}

export default App