import React, { Component } from "react";
import withFirebaseAuth from "react-auth-firebase";
import firebase from "./firebase";
import "./App.css";
import Navigation from "./Components/navigation";
import Home from './home'


// const email = "test@test.com";
// const password = "password";

class App extends Component {
  state = {
    email: `test@test.com`,
    password: `password`
  };
  render() {
    // console.log(this.props);

    const {
      signInWithEmail,
      signUpWithEmail,
      signInWithGoogle,
      googleAccessToken,
      user,
      error,
      signOut
    } = this.props;
    const { email, password } = this.state;
    if (user) {
      return <Home user={user} error={error} signOut={signOut} />;
    }
    return (
      <div>
      <header className="App-header">
      <h1 class="titleMain">BPA Nationals</h1>
      </header>
      <h1 className="title">Sign In / SignUp</h1>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            onChange={e =>
              this.setState({
                email: e.target.value
              })
            }
            value={email}
          />{" "}
          <br />
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
            value={password}
          />{" "}
          <br />
          <button className="signin"
            type="submit"
            onClick={() => signUpWithEmail(email, password)}
          >
            Sign Up
          </button>

          {!user && (
            <button className="signin"
              type="submit"
              onClick={() => signInWithEmail(email, password)}
            >
              Sign In
            </button>
          )}
        </form>
        <br />
        <button className="Google" onClick={signInWithGoogle}>Google</button> <br />
      </div>
    );
  }
}

const authConfig = {
  email: {
    verifyOnSignup: false,
    saveUserInDatabase: true
  },
  google: {
    // scopes: ["admin.datatransfer", "contacts.readonly"], // optional
    // customParams: {
    //   login_hint: "user@example.com"
    // },
    // redirect: true, // default is popup: true, redirect: true,
    returnAccessToken: true,
    // scopes: [], // array
    saveUserInDatabase: true
  }
};

// export default App;
export default withFirebaseAuth(App, firebase, authConfig);
