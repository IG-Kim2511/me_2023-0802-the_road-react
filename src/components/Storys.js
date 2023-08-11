import React from 'react'
import "./Storys.css";

import videoStory from "../assets/video.mp4";
import storyImg1 from "../assets/story-img-1.jpg";
import storyImg2 from "../assets/story-img-2.jpg";


const Storys = () => {
  return (
    <div>
    
    <section className="stories">
  
      <div className="video-container">
      
      {/* 🦄 autoPlay={true} */}
        <video
          className="bg-video"
          src={videoStory}
          autoPlay={true}
          muted
          loop
        ></video>
      </div>

      <div className="stories-wrapper">
        <div className="story-bg">
          <div className="story">
            <img
              className="story-image"
              src={storyImg1}
              alt="Customer image"
            />

            <div className="story-text">
              <h1 className="story-heading">These were the best of this year</h1>
              <p className="story-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia commodi vitae quod repellat consectetur
                necessitatibus laudantium facere autem illum. Praesentium
                ullam veritatis deleniti officia consequatur ipsam magnam
                laborum rem?
              </p>
            </div>
          </div>
        </div>

        <div className="story-bg">
          <div className="story">
            <img
              className="story-image"
              src={storyImg2}
              alt="Customer image"
            />
            <div className="story-text">
              <h1 className="story-heading">I enjoyed this great year</h1>
              <p className="story-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quia commodi vitae quod repellat consectetur
                necessitatibus laudantium facere autem illum. Praesentium
                ullam veritatis deleniti officia consequatur ipsam magnam
                laborum rem?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Storys