import React from 'react';
import axios from 'axios';
import './home.css';

class Form extends React.Component {
    state = { details: [] };
  

  render() {
    return (
        <section class="about">
            <div class="about-text">
              <h2>ABOUT US</h2>
              <p>Hi! This is a website built for stay-at-home 
                parents looking for something to do all day. 
                Whether it is remote or in-person, our 
                listings are strictly part-time, so you are 
                able to have fun with your family, but also 
                have a project all to yourself.</p>
              <p>Have fun!</p>
              <h3 class='riley'>Riley</h3>
            </div>
        </section>
    );
  }
}

export default Form;
