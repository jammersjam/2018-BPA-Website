import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/navigation";
import Uber from "./uber.png";
import Lyft from "./lyft.png";
import Sidecar from "./sidecar.png";
import Map from "./map.jpg";

const App = () => (


  <Router>
    <div>
      <Route exact path="/" component={homeWindow} />
      <Route path="/transportation" component={transportWindow} />
      <Route path="/food" component={foodWindow} />
      <Route path="/attractions" component={attractionWindow} />
      <Route path="/dresscode" component={dressWindow} />
      <Route path="/maps" component={mapsWindows} />
    </div>
  </Router>
);


const homeWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
  </div>
);

const transportWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>

    <h1>Transportation</h1>
  </div>
);

const foodWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>

    <h1>Food</h1>
  </div>
);

const attractionWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
    <h1>Attractions</h1>
  </div>
);

const dressWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
    <h1>Dress Code</h1>
  </div>
);

const mapsWindows = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/attractions"><button class="attractions">🏛️ Attractions</button></Link>
    <Link to="/transportation"><button class="transport">🚌 Transportation</button></Link>
    <Link to="/maps"><button class="maps">🗺️ Maps</button></Link>
    <Link to="/food"><button class="food">🍕 Food</button></Link>
    <Link to="/dresscode"><button class="dresscode">👔 Dress Code</button></Link>
    <br/>
    <br/>
    <hr/>
    <br/>
    <h1>Maps</h1>
    <img class="map" src={Map}/>
    <br/>
    <br/>
    <hr/>
    <h2>The Hotel:</h2>
    <p> This years National Convention will be held at the Gaylord Palms Resort in Washington DC. Use the following interactive map to explore the surrounding area.</p>
    <iframe class="hotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.226301767285!2d-77.01896208465307!3d38.78144617958869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b0734d793d5d%3A0x7fccb753cbe0c4f7!2sGaylord+National+Resort+%26+Convention+Center%2C+Fort+Washington%2C+MD+20745!5e0!3m2!1sen!2sus!4v1541349162518" allowfullscreen></iframe>
    <br/>
    <br/>
    <hr/>
    <h2>The Mall Of America:</h2>
    <p> One of the most popular attractions in Washington D.C. is the Mall of America. Click the button below to view the list of stores availble in the mall and a map of all the attractions</p>
    <br/>
    <img class="mall" src="https://c1.staticflickr.com/4/3089/2729609040_a222c4942d_b.jpg"/>
    <a href="https://www.mallofamerica.com/directory" target="_blank"><button class="mallButton">View Map</button></a>
    <br/>
    <br/>
    <hr/>
  </div>
);


export default App;
