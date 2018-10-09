import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../home'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>BPA Nationals</h1>
        </header>
        <button class="transport">🚌 Transportation</button>
        <button class="food">🍕 Food</button>
        <button class="attractions">🏛️ Attractions</button>
        <button class="dresscode">👔 Dress Code</button>
        <button class="hours">👱 My Trip</button>
      </div>
    );
  }
}

export default App;
