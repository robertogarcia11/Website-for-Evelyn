import React from 'react'
import NavBar from '../nav/NavBar';
import "../styles/Home.css";
import Blind from '../media/Blind.mp4'
import Pirata from '../images/pirata.png'
import rizz_Lord from '../images/rizz_Lord.png'




function Home() {
  return (
    
    <div className="home-container">

        <NavBar />
        <h1> Home </h1>

        <section id='homeContent'>

          <img src={rizz_Lord} width="300" height="400" alt="jaqueque" />
          <spacer>    
                &nbsp;
            </spacer>
          <video src={Blind} controls width="300" height="560" ></video>
          <spacer>    
                &nbsp;
            </spacer>
          <img src={Pirata} width="300" height="400" alt="pirata" />

        </section>


        <footer id="footer" class="footer">
          Created by <a href="https://github.com/robertogarcia11" target="_blank">Beto</a>, Powered by React Framework &copy;
        </footer>
        
       
    </div>
  )
}

export default Home