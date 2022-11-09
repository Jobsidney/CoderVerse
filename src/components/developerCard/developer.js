
import React, { useState } from "react";

function Developer() {
    const [slideUp , toggleSlideUp] = useState(false)
      
    return (
      <div className="container">
        <div className="cover">
          <img
            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1667967915~exp=1667968515~hmac=82986987260be47212fcd13a16dc34d93cc96256eea6e8321010d47eeef80a56"
            alt="Profile Pic"
          />
        </div>
        <div className={`body ${slideUp && `slideup`}`}>
          <div className="bodyWrapper">
          <img className={`avatar ${slideUp && `slideup`}`} src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1667967915~exp=1667968515~hmac=82986987260be47212fcd13a16dc34d93cc96256eea6e8321010d47eeef80a56" alt="" />
          <div className="profileDetails">
              <section className="profileName">Peter</section>
              <section className="profileEmail">1@gmail.com</section>
              <section className="profileLocation">KENYA</section>
              <button  className= "seeMoreButton" onClick={() => {toggleSlideUp(!slideUp)}}>{!slideUp ? 'See More' : 'See Less' }</button>
              <div className="moreDetails">
                  <p>I am a FullStack Developer!!
                  </p>
                  <ul className="skillsets">
                      <li>HTML</li>
                      <li>React</li>
                      <li>MySQL</li>
                      <li>Ruby</li>
                  </ul>
              </div>
  
          </div>
  
  
          </div>
          
        </div>
      </div>
    );

  }

  function Developer() {
    const [slideUp , toggleSlideUp] = useState(false)
      
    return (
      <div className="container">
        <div className="cover">
          <img
            src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1667967915~exp=1667968515~hmac=82986987260be47212fcd13a16dc34d93cc96256eea6e8321010d47eeef80a56"
            alt="Profile Pic"
          />
        </div>
        <div className={`body ${slideUp && `slideup`}`}>
          <div className="bodyWrapper">
          <img className={`avatar ${slideUp && `slideup`}`} src="https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1667967915~exp=1667968515~hmac=82986987260be47212fcd13a16dc34d93cc96256eea6e8321010d47eeef80a56" alt="" />
          <div className="profileDetails">
              <section className="profileName">John</section>
              <section className="profileEmail">2@gmail.com</section>
              <section className="profileLocation">KENYA</section>
              <button  className= "seeMoreButton" onClick={() => {toggleSlideUp(!slideUp)}}>{!slideUp ? 'See More' : 'See Less' }</button>
              <div className="moreDetails">
                  <p>I am a FullStack Developer!!
                  </p>
                  <ul className="skillsets">
                      <li>HTML</li>
                      <li>React</li>
                      <li>MySQL</li>
                      <li>Ruby</li>
                  </ul>
              </div>
  
          </div>
  
  
          </div>
          
        </div>
      </div>
    );

  }
  
  export default Developer;