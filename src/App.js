import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navigation from "./Components/navigation";
import Uber from "./uber.png";
import Lyft from "./lyft.png";
import Sidecar from "./sidecar.png";
import Map from "./map.jpg";
import { Parallax, Background } from 'react-parallax';

const App = () => (


  <HashRouter>
    <div>
      <Route exact path="/" component={homeWindow} />
      <Route path="/transportation" component={transportWindow} />
      <Route path="/food" component={foodWindow} />
      <Route path="/attractions" component={attractionWindow} />
      <Route path="/dresscode" component={dressWindow} />
      <Route path="/maps" component={mapsWindows} />
    </div>
  </HashRouter>
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
    <Parallax blur={10} bgImage={require('./taxi.jpg')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1>Transportation</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
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
    <Parallax blur={10} bgImage={require('./pizza.jpeg')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1>Food</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
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
    <Parallax blur={10} bgImage={require('./whitehouse.JPG')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1>Attractions</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>

     
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
    <Parallax blur={10} bgImage={require('./suit.jpg')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1>Dress Code</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>  
    <h1>NLC Dress Code</h1>
    <p>In order to promote a professional atmosphere, BPA’s Board of Trustees has developed the following official dress code policy for the Business Professionals of America National Leadership Conference. Students, advisors and chaperones must follow the dress code. It is recommended that all guests follow established dress code policy.</p>
    <p>Members not dressed in required attire will not be allowed to participate in any session or any competitive event. Members not adhering to the Professional Dress Code will not be allowed on stage.</p>
    <p>Members refused entrance to an event will be given the opportunity to change into appropriate attire immediately and participate/compete in the event. Having changed into appropriate attire, the member will join testing in progress. No additional time will be given for time missed.</p>
    <p>Members also have the right to grieve the issue immediately after being refused entrance. Grievance of the Dress Code policy will not be accepted if not received in writing at Competitive Events headquarters within 15 minutes of the infraction in question.</p>

    <h2>Professional Dress Code</h2>
        <p><i>Required for the following events: General Sessions, all Competitive Events (judged, non-judged, and open), Campaign Rally, Caucuses, Workshops, National Leadership Academy.</i></p>
        <h3>Women:</h3>
        <ul>
              <li>Pant or skirt suit.</li>
              <li>Dress skirt or dress slacks with coordinated blouse and/or sweater.</li>
              <li>Business professional “dress.”</li>
              <li>BPA blazer with dress skirt or dress slacks and blouse or sweater.</li>
              <li>Dress shoes or dress sandals with heel are required with all of the above.</li>
              <li>Skirt length may be no greater than two inches above the top of the knee.</li>
              <li>This excludes all denim for any of the above.</li>
        </ul>
        <h3>Men:</h3>
        <ul>
              <li>Dress slacks, dress shirt, and tie.</li>
              <li>Suit, dress shirt, and tie.</li>
              <li>Sport coat, coordinated dress slacks, dress shirt, and tie.</li>
              <li>BPA blazer with dress slacks, dress shirt, and tie.</li>
              <li>Dress shoes and dress socks are required with all of the above.</li>
              <li>This excludes all denim for any of the above.</li>
        </ul>

    <h2>Casual Dress Code</h2>
        <p><i>Required for the following events: Tours, Special Events and Exhibit Hall.</i></p>
        <h3>Women:</h3>
        <ul>
              <li>Sportswear (jeans), pants, and shirt, T-shirt, and shorts.</li>
              <li>Footwear required with all of the above.</li>
        </ul>
        <h3>Men:</h3>
        <ul>
              <li>Sportswear (jeans), pants and shirt, T-shirt, and shorts.</li>
              <li>Footwear required with all of the above. </li>
        </ul>

    <h2>The following are unacceptable during BPA activities:</h2>
        <ul>
              <li>Strapless, spaghetti straps, tube tops, halter tops, midriff tops.</li>
              <li>Spandex, lycra, or transparent clothing.</li>
              <li>Cut-offs or ragged clothing.</li>
              <li>Clothing with inappropriate words and pictures.</li>
        </ul>
      <p><b>Swim suits</b> must be covered with appropriate attire while in any area except the swimming pool or designated sunbathing area.</p>
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
    <Parallax blur={10} bgImage={require('./map.jpg')} bgImageAlt="map" strength={500}>
           <div class="box">
            <h1>Maps</h1>
           </div>
           <div style={{ height: '300px' }} />
       </Parallax>
    <br/>
    <br/>
    <h2>The Hotel:</h2>
    <p> This years National Convention will be held at the Gaylord Palms Resort in Washington DC. Use the following interactive map to explore the surrounding area.</p>
    <iframe class="hotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.226301767285!2d-77.01896208465307!3d38.78144617958869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b0734d793d5d%3A0x7fccb753cbe0c4f7!2sGaylord+National+Resort+%26+Convention+Center%2C+Fort+Washington%2C+MD+20745!5e0!3m2!1sen!2sus!4v1541349162518" allowfullscreen></iframe>
    <br/>
    <br/>
    <hr/>

  </div>
);


export default App;
