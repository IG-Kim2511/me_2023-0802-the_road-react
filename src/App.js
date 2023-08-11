import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PopularTours from './components/PopularTours'
import Test from './Test'





const App = () => {
  return (
    <div className='container'>
    
    
        <Navbar/>
        <Header/>
        <PopularTours/>
    
        {/* <Test/> */}
    </div>
  )
}

export default App