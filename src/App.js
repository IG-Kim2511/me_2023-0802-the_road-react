import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PopularTours from './components/PopularTours'
import Test from './Test'
import Storys from './components/Storys'
import Contact from './components/Contact'
import Footer from './components/Footer'





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
    </div>
  )
}

export default App