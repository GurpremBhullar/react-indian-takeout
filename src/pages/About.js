import React from 'react'
import AboutImage from '../assets/sandwich.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${AboutImage})` }}>

      </div>

      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Your Favorite Saturday Food 
          What you taste first thing in the morning on Monday when you remember,
          the leftovers you had from Saturday night which you probably shouldnt
          of ate Sunday Night.
          Something you crave during lunch, so much so that your willing to.
          Walk into your bosses office and complain about something.
          Just about anything so you can somehow lead this conversation to why.
          The company needs to create a budget for our wonderful Indian Takeout,
          Its that good.
          Dont work another day without the wonderful joy of our 5.99 Lunch specials,
          combined with a handful of model sentence structures,
          to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum is therefore always free from repetition,
          injected humour, or non-characteristic words etc
        </p>
      </div>
    </div>
  )
}

export default About;