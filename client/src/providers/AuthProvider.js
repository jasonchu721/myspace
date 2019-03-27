import React from 'react';
import axios from 'axios';

const AuthContext = React.createContext();
export const AuthConsumer  = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

  //function that handles the registration of a user. 
  //Makes a post request to "/api/auth" to create a user. 
  handleRegister = (user, history ) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data });
        history.push("/");
      })
  }

  //function that handles the login of a user. 
  //Makes a post request to "/api/auth/sign_in" to authenticate a user. 
  handleLogin = ( user, history ) => {
    axios.post("/api/auth/sign_in", user)
    .then( res => {
      this.setState({ user: res.data.data, });
      history.push("/");
    })  
  }

  //function handles the logout of a user. 
  //Makes a delete request to "/api/auth/sign_out" to logout a user.
  handleLogout = ( history ) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
        history.push('/login');
    })
  }    
  
render() {
  return (
    <AuthContext.Provider value= {{
      ...this.state,
      //helper boolean to quickly tell if the user is logged in our not
      authenticated: this.state.user !== null,
      handleRegister: this.handleRegister,
      handleLogin: this.handleLogin,
      handleLogout: this.handleLogout,
      //function that gets the user from our database and sets it to our user state
      setUser: (user) => this.setState({ user, }),
    }} >
      {this.props.children}
    </AuthContext.Provider>
    )
  }
}