import React from 'react'
import banner from '../assets/food.jpeg';
import { Link } from "react-router-dom";
import '../styles/Home.css';

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
            <h1>Tikka Masala</h1>
            <h3>main ave NORWALK, CT</h3>
            <p>indian takeout</p>
            <button>Order Now</button>
        </div>
    </div>
  );
}

export default Home;