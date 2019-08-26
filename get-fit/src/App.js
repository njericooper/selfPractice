import React from 'react';
import './index.css';
import './App.css';


class Title extends React.Component {

  render() {
    return (
      <div>
        <h1>Get Fit</h1>
        <h2>Enter your calorie deficit goal below</h2>
      </div>
  
      
    );
  }
  
}

/*function App() {
  return (
    <div>
      <h1>Get Fit</h1>
      <h2>Enter your calorie deficit goal below</h2>
    </div>

    
  );
}*/

//export default App;


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
} 



export {NameForm, Title}; 
