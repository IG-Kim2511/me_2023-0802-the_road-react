import React, { useState } from 'react'
import './PopularTours.css'
import img_forest from '../assets/forest.jpg'
import img_river from '../assets/river.jpg'
import img_sea from '../assets/sea.jpg'

const PopularTours = () => {

 /* 🍀react 02 - js방식 , parentElement */
    const handleNavButtonClick = (event) => {
        const parentElement = event.currentTarget.parentElement.parentElement;
        parentElement.classList.toggle("change");
      };

    
    /* 🍀react 02 */
    const [iszIndex1, setIszIndex1] = useState(false)

    const styleZIndex = {  
          transform: 'translateZ(-5rem) translateX(3rem)',
            boxShadow: '0 2rem 4rem #777',
            opacity: 0.1,
            zIndex: 0,
        }
 
    const items = [
        {
        /*
            🦄react databinding image that imported from map loop with object
            "", {}으로 감쌀필요없이. img: img_forest, 이렇게 담백하게 데이터 만들면 됨 
        */

          img: img_forest,
          named: 'forest',
          days: 7,
          people: 20,
          guides: 4,
          diffi: 'medium',
          price: 499
        },
        {
          img: img_river,
          named: 'river',
          days: 2,
          people: 44,
          guides: 1,
          diffi: 'medium',
          price: 299
        },
        {
          img: img_sea,
          named: 'sea',
          days: 4,
          people: 55,
          guides: 8,
          diffi: 'easy',
          price: 399
        },
      ]; 

 


    
  return (
    <div>
     
        <section className="popular-tours">

        <h1 className="popular-tours-heading">The Most Popular Tours</h1>

        <div className="cards-wrapper">
          {items.map((item, i) => (            
            <div className="card" key={i}>
              <div className="front-side" style={iszIndex1 ? styleZIndex : null}>
                {/* Replace 'img' with 'item.img' */}
                <img src={item.img} alt={item.named} className="card-image" />
                {/* Use 'item.named' */}
                <h1 className="tour-name">{item.named}</h1>
                <ul className="card-list">
                  {/* Use 'item.days', 'item.people', etc. */}
                  <li className="card-list-item">{item.days} days tour</li>
                  <li className="card-list-item">Up to {item.people} people</li>
                  <li className="card-list-item">{item.guides} tour guides</li>
                  <li className="card-list-item">Sleep in private tents</li>
                  <li className="card-list-item">Difficulty: {item.diffi}</li>
                </ul>
                {/* <button className="navigation-button" onClick={() => setIszIndex1(!iszIndex1)}>price &gt;&gt;</button> */}
                <button className="navigation-button"  onClick={handleNavButtonClick}>price &gt;&gt;</button>
              
                
              
                </div>
              <div className="back-side center">
                <button className="navigation-button" onClick={handleNavButtonClick}>&lt;&lt; back</button>
                <h3 className="tour-price">${item.price}</h3>
                <button className="card-button">Booking</button>
              </div>
            </div>
          ))}



        </div>
        </section> 
    </div>
  )
}

export default PopularTours



// 🍀delete code

// <div className="card" >    

// <div className="front-side" style={
//     iszIndex
//     ?igloo
//     :null}>

//     <img src={img_forest} alt="Forest" className="card-image" />
//     <h1 className="tour-name">The wild forest</h1>
//     <ul className="card-list">
//     <li className="card-list-item">7 days tour</li>
//     <li className="card-list-item">Up to 20 people</li>
//     <li className="card-list-item">4 tour guides</li>
//     <li className="card-list-item">Sleep in private tents</li>
//     <li className="card-list-item">Difficulty: medium</li>
//     </ul>
// {/* 🍀react 02  */}
//     {/* <button className="navigation-button">price &gt;&gt;</button> */}
//     <button className="navigation-button" onClick={()=>{setIszIndex(!iszIndex)}}>price &gt;&gt;</button>
// </div>

// <div className="back-side center">
//      {/* 🍀react 02  */}
//     {/* <button className="navigation-button">&lt;&lt; back</button> */}
//     <button className="navigation-button" onClick={()=>{setIszIndex(!iszIndex)}}>&lt;&lt; back</button>

//     <h3 className="tour-price">$399</h3>
//     <button className="card-button">Booking</button>
// </div>

// </div>



// <div className="card">
// <div className="front-side">
//     <img src={img_river} alt="River" className="card-image" />
//     <h1 className="tour-name">Along the river</h1>
//     <ul className="card-list">
//     <li className="card-list-item">9 days tour</li>
//     <li className="card-list-item">Up to 30 people</li>
//     <li className="card-list-item">7 tour guides</li>
//     <li className="card-list-item">Sleep in private tents</li>
//     <li className="card-list-item">Difficulty: hard</li>
//     </ul>
//     <button className="navigation-button" onClick={()=>{setIszIndex(!iszIndex)}}>price &gt;&gt;</button>
// </div>
// <div className="back-side center">
// <button className="navigation-button" onClick={()=>{setIszIndex(!iszIndex)}}>&lt;&lt; back</button>

//     <h3 className="tour-price">$499</h3>
//     <button className="card-button">Booking</button>
// </div>
// </div>

// <div className="card">
// <div className="front-side">
//     <img src={img_sea} alt="Sea" className="card-image" />
//     <h1 className="tour-name">The island beach</h1>
//     <ul className="card-list">
//     <li className="card-list-item">5 days tour</li>
//     <li className="card-list-item">Up to 40 people</li>
//     <li className="card-list-item">8 tour guides</li>
//     <li className="card-list-item">Sleep in hotel</li>
//     <li className="card-list-item">Difficulty: easy</li>
//     </ul>
//     <button className="navigation-button" onClick={()=>{setIszIndex(!iszIndex)}}>price &gt;&gt;</button>
// </div>

// <div className="back-side center">

// <button className="navigation-button" onClick={()=>{setIszIndex(!iszIndex)}}>&lt;&lt; back</button>

//     <h3 className="tour-price">$599</h3>
//     <button className="card-button">Booking</button>
// </div>
// </div>