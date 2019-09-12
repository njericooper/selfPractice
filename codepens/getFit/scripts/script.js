//Make sure you go to Settings > Javascript > Add External Scripts/Pins

//Then "Search for React and ReactDOM"


class Log extends React.Component{
  
    /*constructor(){
      super();
    
    this.state = {
      user: null;
    }
    }
    */
    
    
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
      return (  
      <section>
          <div className="login-area">
            
              <div>
              <button onClick={this.logout} className="button">Log Out</button>
            </div>  
            
            <div>
              <button className="button">Log In</button>
            </div>
            
          </div>
          <h1>Get Fit</h1>
          
          <div>
            <form className="food-log-form">
            <div className="">
              <label htmlFor="date">Date</label>
            </div>  
            </form>  
          </div> 
          
    
          
      </section>
       );
    }
  }
  
    
  ReactDOM.render(
      <Log />,document.getElementById("site")
  );