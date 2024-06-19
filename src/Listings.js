import React from 'react';
import axios from 'axios';
import './listings.css';

class Listings extends React.Component {
  state = { details: [] };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios.get('http://localhost:8000')
      .then(res => {
        this.setState({ details: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  clearData = () => {
    axios.delete('http://localhost:8000')
      .then(() => {
        this.fetchData(); 
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div class='listy'>
        <h2>Job Listings</h2>
        <br/>
        {this.state.details.map((output, id) => (
          <div key={id} class="job-listing">
          <h2>{output.title}</h2>
          <div class="section">
            <h3>Introduction</h3>
            <p>{output.intro}</p>
          </div>
          <div class="section">
            <h3>Description</h3>
            <p>{output.description}</p>
          </div>
          <div class="section">
            <h3>Benefits</h3>
            <p>{output.benefits}</p>
          </div>
          <div class="section">
            <h3>Location</h3>
            <p>{output.location}</p>
          </div>
          <div class="section">
            <h3>Contact</h3>
            <p>{output.contact}</p>
          </div>
        </div>
        ))}
      </div>
    );
  }
}

export default Listings;
