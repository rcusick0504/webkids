import React from 'react';
import axios from 'axios';
import './form.css';

class Form extends React.Component {
  state = { title: '', intro: '', description: '', benefits: '', location: '', contact: '', details: [] };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, intro, description, benefits, location, contact, details } = this.state;

    if (!title || !intro || !description || !benefits || !location || !contact || !details) {
      alert("All fields are required.");
      return;
    }

    axios.post('http://localhost:8000', { title, intro, description, benefits, location, contact })
      .then(res => {
        this.setState((prevState) => ({
          details: [...prevState.details, res.data],
          title: '', 
          intro: '', 
          description: '', 
          benefits: '', 
          location: '', 
          contact: ''
        }));
      })
      .catch(err => {
        console.error('Error submitting data:', err);
      });
  };

  render() {
    return (
      <div class='formy'>
        <h2>Post Job!</h2>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <div class='formy'>
            <label>
              <h3>Title</h3>
              <br></br>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div class='formy'>
            <label>
              <h3>Introduce Your Company!</h3>
              <br></br>
              <input
                type="text"
                name="intro"
                value={this.state.intro}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div class='formy'>
            <label>
              <h3>Description</h3>
              <br></br>
              <input
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div class='formy'>
            <label>
              <h3>Why should people work for you?</h3>
              <br></br>
              <input
                type="text"
                name="benefits"
                value={this.state.benefits}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div class='formy'>
            <label>
              <h3>Location</h3>
              <br></br>
              <input
                type="text"
                name="location"
                value={this.state.location}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <div class='formy'>
            <label>
              <h3>Contact</h3>
              <br></br>
              <input
                type="text"
                name="contact"
                value={this.state.contact}
                onChange={this.handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
