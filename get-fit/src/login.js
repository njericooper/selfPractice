import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';

class Login extends Component { 
  
  constructor() {
    super();
    
    this.state = {
      user: null
    }
        
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  }
  
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }
  
  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }
  
  render() {
    return(
      <div className="login-area">
        {this.state.user ?
          <div>
            <img src={this.state.user.photoURL} />
            <button onClick={this.logout} className="button">Log Out</button>     
          </div>
          :
          <div>
            <button onClick={this.login} className="button">Log In</button>
          </div>
        }
      </div>
    );
  }
  
}

export default Login;