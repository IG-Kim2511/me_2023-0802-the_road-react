import React from 'react'
import './PopularTours.css'
import img_forest from '../assets/forest.jpg'
import img_river from '../assets/river.jpg'
import img_sea from '../assets/sea.jpg'

const PopularTours = () => {
  return (
    <div>
     
        <section className="popular-tours">
        <h1 className="popular-tours-heading">The Most Popular Tours</h1>
        <div className="cards-wrapper">
            <div className="card">
            <div className="front-side">
                <img src={img_forest} alt="Forest" className="card-image" />
                <h1 className="tour-name">The wild forest</h1>
                <ul className="card-list">
                <li className="card-list-item">7 days tour</li>
                <li className="card-list-item">Up to 20 people</li>
                <li className="card-list-item">4 tour guides</li>
                <li className="card-list-item">Sleep in private tents</li>
                <li className="card-list-item">Difficulty: medium</li>
                </ul>
                <button className="navigation-button">price &gt;&gt;</button>
            </div>
            <div className="back-side center">
                <button className="navigation-button">&lt;&lt; back</button>
                <h3 className="tour-price">$399</h3>
                <button className="card-button">Booking</button>
            </div>
            </div>
            <div className="card">
            <div className="front-side">
                <img src={img_river} alt="River" className="card-image" />
                <h1 className="tour-name">Along the river</h1>
                <ul className="card-list">
                <li className="card-list-item">9 days tour</li>
                <li className="card-list-item">Up to 30 people</li>
                <li className="card-list-item">7 tour guides</li>
                <li className="card-list-item">Sleep in private tents</li>
                <li className="card-list-item">Difficulty: hard</li>
                </ul>
                <button className="navigation-button">price &gt;&gt;</button>
            </div>
            <div className="back-side center">
                <button className="navigation-button">&lt;&lt; back</button>
                <h3 className="tour-price">$499</h3>
                <button className="card-button">Booking</button>
            </div>
            </div>
            <div className="card">
            <div className="front-side">
                <img src={img_sea} alt="Sea" className="card-image" />
                <h1 className="tour-name">The island beach</h1>
                <ul className="card-list">
                <li className="card-list-item">5 days tour</li>
                <li className="card-list-item">Up to 40 people</li>
                <li className="card-list-item">8 tour guides</li>
                <li className="card-list-item">Sleep in hotel</li>
                <li className="card-list-item">Difficulty: easy</li>
                </ul>
                <button className="navigation-button">price &gt;&gt;</button>
            </div>
            <div className="back-side center">
                <button className="navigation-button">&lt;&lt; back</button>
                <h3 className="tour-price">$599</h3>
                <button className="card-button">Booking</button>
            </div>
            </div>
        </div>
        </section> 
    </div>
  )
}

export default PopularTours