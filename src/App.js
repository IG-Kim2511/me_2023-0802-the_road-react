import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PopularTours from './components/PopularTours'





const App = () => {
  return (
    <div className='container'>
    
    
        <Navbar/>
        <Header/>
        <PopularTours/>
    
    </div>
  )
}

export default App