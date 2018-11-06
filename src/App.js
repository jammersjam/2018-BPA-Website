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
      <Route path="/home" component={homeWindow} />
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
    <Link to="/home"><button class="home">🏠 Home</button></Link>
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
    <Link to="/home"><button class="home">🏠 Home</button></Link>
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
    <Link to="/home"><button class="home">🏠 Home</button></Link>
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
    <div className="foodContent">
        //Place Content here
    </div>
  </div>
);

const attractionWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
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
     <div align="left">
     <p align="center"><i>Washington addresses indicate quadrants--NW, NE, SE, SW--starting at the U.S. Capital. The axes are North Capital, South Capital, and East Capitol streets, and the National Mall.</i></p>
     <p align="center"><i>Help keep the National Mall clean; place trash and recyclables in appropriate receptacles.</i></p>
     <p align="center"><i>Please be aware that many monuments, memorials, and museums have limited to no parking available.</i></p>
     <p align="center"><i>Always check ahead of time all monuments and memorials you wish to attend as many are undergoing renovation.</i></p>
     <h1 align="center">Smithsonians</h1>
     <ul>
             <li><b><i>Policies/Prohibited Items</i></b></li>
             <ul>
                  <li>Still and video photography is permitted for noncommercial in the museums and exhibitions, unless otherwise posted. The use of tripods, monopods, or selfie sticks in the museums and gardens is strictly prohibited.</li>
                  <li>Smoking is prohibited in all Smithsonian facilities.</li>
                  <li>Strollers are permitted in all museums*; a limited number of strollers are available for rent at the Zoo.</li>
                  <li>Service animals are welcome in the museums and the National Zoo. Pets are not permitted.</li>
                  <li><i>Some museums require visitors and/or bags to go through metal detectors or x-ray screenings. Please refer to the specific museum bellow to determine their policies. Those who are unable to go through the metal detector will be hand-screened with an electronic wand by security personnel.</i></li>
                  <li>While on Smithsonian premises <b>NO VISITOR SHALL:</b></li>
                  <ul>
                        <li>Carry firearms, other dangerous or deadly weapons, or explosives, either openly or concealed on the premises. The prohibition on firearms applies to all visitors, including those with firearm permits, but not to active law enforcement personnel authorized to carry firearms. Note: Kirpans (ceremonial knives) are religious articles of faith often worn by Sikhs. These knives are permitted in the museums as long as the blades are 2.5 inches or less in length, consistent with federal law (18 USC 930)</li>
                        <li>Display or carry placards, signs, or banners</li>
                        <li>Destroy, damage, or remove property</li>
                        <li>Climb upon any part of a building</li>
                        <li>Use loud, abusive, or otherwise improper language</li>
                        <li>Loiter, sleep, or participate in unwarranted assemblies</li>
                        <li>Create any hazard to persons or things</li>
                        <li>Perform obscene or indecent acts</li>
                        <li>Engage in disorderly conduct</li>
                        <li>Use, possess, or sell illegal drugs</li>
                        <li>Bring dogs or other animals, other than service animals</li>
                        <li>Take photographs for advertising or any other commercial purpose</li>
                        <li>Solicit for commercial or charitable purposes or distribute advertisements, pamphlets, handbills, and flyers</li>
                  </ul>
             </ul>
             <li><b><i>African American Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>1400 Constitution Ave NW, Washington, DC</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>Bags are required to be screened via x-ray machine.</i></li>
             </ul>
             <li><b><i>African Art Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>950 Independence Avenue, SW Washington, DC</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Air and Space Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>Independence Avenue and 6th Street, SW Washington, DC</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>Bags are required to be screened via x-ray machine.</i></li>
             </ul>
             <li><b><i>Air and Space Museum Udvar-Hazy Center</i></b></li>
             <ul>
                  <li><b>Address: </b>14390 Air and Space Museum Parkway, Chantilly, VA</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>American Art Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>8th and F Streets, NW Washington, DC</li>
                  <li><b>Hours: </b>11:30 a.m. - 7:00 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>American History Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>14th Street and Constitution Avenue, NW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>American Indian Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>4th Street  and Independence Avenue, SW Washington, DC</li>
                  <li><b>Hours: </b>10 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Anacostia Community Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>1901 Fort Place SE Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:00 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Archives of American Art</i></b></li>
             <ul>
                  <li><b>Address: </b>8th and F Streets, NW Washington, DC</li>
                  <li><b>Hours: </b>11:30 a.m. - 7:00 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Freer Gallery of Art</i></b></li>
             <ul>
                  <li><b>Address: </b>Jefferson Drive and 12th Street, SW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Hirshhorn</i></b></li>
             <ul>
                  <li><b>Address: </b>Independence Avenue at 7th Street, SW Washington, DC</li>
                  <li><b>Hours:</b></li>
                  <ul>
                        <li><b>Museum: </b>10 a.m. - 5:30 p.m.</li>
                        <li><b>Plaza: </b>7:30 a.m. - 5:30 p.m.</li>
                        <li><b>Sculpture Garden: </b>7:30 a.m. - dusk</li>
                  </ul>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>National Zoo</i></b></li>
             <ul>
                  <li><b>Address: </b>3001 Connecticut Ave., NW Washington, DC</li>
                  <li><b>Hours:</b></li>
                  <ul>
                        <li>9 a.m. - 6 p.m. daily</li>
                        <li>Grounds 8 a.m. - 7 p.m.</li>
                        <li>(Weather permitting)</li>
                  </ul>
                  <li><i>All bags will be checked by hand.</i></li>
                  <li><b>In addition to the above, while on Zoo premises, NO VISITOR SHALL:</b>
                  <ul>
                        <li>Kill, injure, or disturb any exhibit or research animal by any means except to secure personal safety</li>
                        <li>Pet, attempt to pet, handle, move, or remove exhibit or research animals</li>
                        <li>Feed exhibit or research animals, except in strict accordance with authorized signs</li>
                        <li>Catch, attempt to catch, trap, remove, or kill any free roaming animals inhabiting the premises</li>
                        <li>Go over, under, between, or otherwise cross any guardrail, fence, moat, wall, or any other safety barrier</li>
                        <li>Seat, stand, or hold children over any safety barrier</li>
                        <li>Throw or toss rocks, or any other missiles into, from, or while on premises</li>
                        <li>Bring strollers, baby carriages, or other conveyances, except wheel chairs, into exhibit buildings and public restrooms</li>
                        <li>Engage in ball games, or any athletic activity, except in places as may be officially designated for such purposes</li>
                        <li>Smoke or carry lighted cigarettes, cigars, or pipes into exhibit buildings, or to have a fire of any kind on the premises</li>
                        <li>Damage, deface, pick, or remove any herb, shrub, bush, tree, or turf, or portion thereof</li>
                  </ul>
                  </li>
             </ul>
             <li><b><i>Natural History Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>10th Street and Constitution Avenue, NW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Portrait Gallery</i></b></li>
             <ul>
                  <li><b>Address: </b>8th and F Streets, NW Washington, DC</li>
                  <li><b>Hours: </b>11:30 a.m. - 7:00 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Postal Museum</i></b></li>
             <ul>
                  <li><b>Address: </b>2 Massachusetts Avenue, NE Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>Visitors are required to walk through a metal detector.</i></li>
                  <li><i>Bags are required to be screened via x-ray machine.</i></li>
             </ul>
             <li><b><i>Renwick Gallery</i></b></li>
             <ul>
                  <li><b>Address: </b>1661 Pennsylvania Avenue, NW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
                  <li><b>*Note: </b>Strollers currently are not permitted in the Renwick galleries on Friday, Saturday and Sunday; holidays; and at other times when the galleries are especially crowded. Stroller parking is available at the 17th Street accessible entrance. This temporary measure is to protect the artworks.</li>
             </ul>
             <li><b><i>S. Dillon Ripley Center</i></b></li>
             <ul>
                  <li><b>Address: </b>1100 Jefferson Drive, SW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Sackler Gallery</i></b></li>
             <ul>
                  <li><b>Address: </b>1050 Independence Avenue, SW Washington, DC</li>
                  <li><b>Hours: </b>10:00 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Smithsonian Castle</i></b></li>
             <ul>
                  <li><b>Address: </b>1000 Jefferson Drive, SW Washington, DC</li>
                  <li><b>Hours: </b>8:30 a.m. - 5:30 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
             </ul>
             <li><b><i>Smithsonian Gardens</i></b></li>
             <ul>
                  <li><b>Address: </b>Smithsonian museum grounds Washington, DC</li>
                  <li><b>Hours: </b>Haupt Garden open daily dawn to dusk; all others open 24 hours</li>
             </ul>
             <li><b><i>United States Holocaust Memorial Museum</i></b></li>
             <ul>
                  <li>100 Raoul Wallenberg Pl SW, Washington, DC 20024</li>
                  <li>10 a.m. - 5:20 p.m.</li>
                  <li><i>All bags will be checked by hand.</i></li>
</li>
             </ul>
     </ul>
     <h1 align="center">Memorials/Monuments</h1>
     <h2 class="h2ul">Arlington National Cemetery</h2>
     <ul>
            <li><b><i>Women in Military Service for America Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>Memorial Ave & Schley Dr, Arlington, VA 22202</li>
                   <li><b>Hours: </b>8am – 5pm</li>
            </ul>
            <li><b><i>Arlington House (Robert E Lee Memorial)</i></b></li>
            <ul>
                   <li><b>Address: </b>321 Sherman Dr, Fort Myer, VA 22211</li>
                   <li><b>Hours: </b>CLOSED FOR REHABILITATION</li>
            </ul>
            <li><b><i>Tomb of the Unknowns</i></b></li>
            <ul>
                   <li><b>Address: </b>1 Wilson Ave, Fort Myer, VA 22211</li>
                   <li><b>Hours: </b>8a.m. - 5p.m.</li>
            </ul>
            <li><b><i>U.S. Marine Corps War Memorial (Iwo Jima Memorial)</i></b></li>
            <ul>
                   <li><b>Address: </b>Iwo Jima Memorial Access Rd, Arlington, United States</li>
                   <li><b>Hours: </b>6 a.m. - 12 a.m.</li>
            </ul>
      </ul>
      <h2 class="h2ul">Tidal Basin</h2>
      <ul>
            <li><b><i>Thomas Jefferson Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>701 E Basin Dr SW, Washington, DC 20242</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Franklin Delano Roosevelt Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>1850 West Basin Dr SW, Washington, DC 20242</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Martin Luther King, Jr. Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>1850 West Basin Dr SW, Washington, DC 20242</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
      </ul>
      <h2 class="h2ul">National Mall</h2>
      <ul>
            <li><b><i>Lincoln Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>2 Lincoln Memorial Cir NW, Washington, DC 20037</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Korean War Veterans Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>1964 Independence Ave SW, Washington, DC 20024</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Vietnam Veterans Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>5 Henry Bacon Dr SW, Washington, DC 20007</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Constitutional Gardens</i></b></li>
            <ul>
                   <li><b>Address: </b>Constitution Ave NW, Washington, DC 20024</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>World War II Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>1750 Independence Ave SW, Washington, DC 20024</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
            <li><b><i>Washington Monument</i></b></li>
            <ul>
                   <li><b>Address: </b>2 15th St NW, Washington, DC 20024</li>
                   <li><b>Hours: </b>9a.m. - 10p.m.</li>
            </ul>
            <li><b><i>The American Veterans Disabled for Life Memorial</i></b></li>
            <ul>
                   <li><b>Address: </b>150 Washington Ave SW, Washington, DC 20024</li>
                   <li><b>Hours: </b>Open 24/7</li>
            </ul>
      </ul>
    <h1 align="center">Government Buildings</h1>
    <p align="center"><i>Please be respectful of the appropriate etiquette at all times when on government grounds. Remember when at NLC you are not only representing your state and the national organization, but also yourself.</i></p>
    <ul>
            <li><b><i>United States Capital Building</i></b></li>
            <ul>
                   <li><a href="https://www.visitthecapitol.gov/" rel="nofollow" target="_blank">Capital Building Website</a></li>
                   <li><b>Address: </b>First St NE, Washington, DC 20515</li>
                   <li><b>Hours: </b>Monday - Saturday: 8:30a.m. - 4:30p.m.</li>
                   <li><b>Prohibited Items: </b></li>
                   <ul>
                          <li><i>Before entering the Capitol Visitor Center, all visitors are screened by a magnetometer and all items that are permitted inside the building are screened by an x-ray device.</i></li>
                          <li><i>The following items are strictly prohibited in the Capitol, including the Capitol Visitor Center:</i></li>
                          <ul>
                                <li>Liquid, including water</li>
                                <li>Food or beverages of any kind, including fruit and unopened packaged food</li>
                                <li>Aerosol containers</li>
                                <li>Non-aerosol spray (Prescriptions for medical needs are permitted.)</li>
                                <li>Any pointed object, e.g. knitting needles and letter openers (Pens and pencils are permitted.)</li>
                                <li>Any bag larger than 18" wide x 14" high x 8.5" deep</li>
                                <li>Electric stun guns, martial arts weapons or devices</li>
                                <li>Guns, replica guns, ammunition, and fireworks</li>
                                <li>Knives of any size</li>
                                <li>Mace and pepper spray</li>
                                <li>Razors and box cutters</li>
                         </ul>
                         <li><i>The following items are not allowed in the Senate and House Galleries:</i></li>
                         <ul>
                                <li>Battery-operated electronic devices (medical devices are permitted)</li>
                                <li>Cameras</li>
                                <li>Cans and bottles</li>
                                <li>Creams, lotions or perfume</li>
                                <li>Packages, briefcases, backpacks or suitcases</li>
                                <li>Strollers</li>
                                <li>Video recorders or any type of recording device</li>
                                <li><i>Each Gallery operates a checkstand where visitors may store these items securely while they are visiting that Gallery.</i></li>
                         </ul>
                  </ul>
                  <li><b>Tours: </b></li>
                  <ul>
                        <li><i>Advance reservations are recommended, but not required.</i></li>
                        <li>Small groups (of 15 and fewer people) can <a href="https://tours.visitthecapitol.gov/cvc#.WqlNZijwaHs" rel="nofollow" target="_blank">click here</a> to create an account and reserve a tour date and time. <i>Reservations are available 90 days in advance.</i></li>
                        <li>Tour services and organizations with groups of more than 15 participants should <a href="https://tours.visitthecapitol.gov/CVC/#.WqlNzyjwaHs" rel="nofollow" target="_blank">click here</a> to access the group section of the online reservation system. <i>Reservations for groups become available 120 days in advance.</i></li>
                        <li>Same-day passes are available at the Information Desks located on the lower level of the Visitor Center. During spring, summer and some holiday periods, the availability of same-day tour passes may be limited. There may be a wait to acquire passes. <i>Please plan accordingly and arrive early, if possible.</i></li>
                  </ul>
            </ul>
            <li><b><i></i></b></li>
            <ul>
                   <li><b>Address: </b></li>
                   <li><b>Hours: </b></li>
            </ul>
    </ul>
  </div></div>
);

const dressWindow = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
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

              <p>Pant or skirt suit.</p>
              <p>Dress skirt or dress slacks with coordinated blouse and/or sweater.</p>
              <p>Business professional “dress.”</p>
              <p>BPA blazer with dress skirt or dress slacks and blouse or sweater.</p>
              <p>Dress shoes or dress sandals with heel are required with all of the above.</p>
              <p>Skirt length may be no greater than two inches above the top of the knee.</p>
              <p>This excludes all denim for any of the above.</p>

        <h3>Men:</h3>

              <p>Dress slacks, dress shirt, and tie.</p>
              <p>Suit, dress shirt, and tie.</p>
              <p>Sport coat, coordinated dress slacks, dress shirt, and tie.</p>
              <p>BPA blazer with dress slacks, dress shirt, and tie.</p>
              <p>Dress shoes and dress socks are required with all of the above.</p>
              <p>This excludes all denim for any of the above.</p>


    <h2>Casual Dress Code</h2>
        <p><i>Required for the following events: Tours, Special Events and Exhibit Hall.</i></p>
        <h3>Women:</h3>

              <p>Sportswear (jeans), pants, and shirt, T-shirt, and shorts.</p>
              <p>Footwear required with all of the above.</p>

        <h3>Men:</h3>

              <p>Sportswear (jeans), pants and shirt, T-shirt, and shorts.</p>
              <p>Footwear required with all of the above. </p>


    <h2>The following are unacceptable during BPA activities:</h2>

              <p>Strapless, spaghetti straps, tube tops, halter tops, midriff tops.</p>
              <p>Spandex, lycra, or transparent clothing.</p>
              <p>Cut-offs or ragged clothing.</p>
              <p>Clothing with inappropriate words and pictures.</p>

      <p><b>Swim suits</b> must be covered with appropriate attire while in any area except the swimming pool or designated sunbathing area.</p>
  </div>
);

const mapsWindows = () => (
  <div className="App">
    <header className="App-header">
    <h1>BPA Nationals</h1>
    </header>
    <Link to="/home"><button class="home">🏠 Home</button></Link>
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
    <h2>Gaylord Palms Resort:</h2>
    <p> This years National Convention will be held at the Gaylord Palms Resort in Washington DC. Use the following interactive map to explore the surrounding area.</p>
    <iframe class="hotel" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.226301767285!2d-77.01896208465307!3d38.78144617958869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b0734d793d5d%3A0x7fccb753cbe0c4f7!2sGaylord+National+Resort+%26+Convention+Center%2C+Fort+Washington%2C+MD+20745!5e0!3m2!1sen!2sus!4v1541349162518" allowfullscreen></iframe>
    <br/>
    <br/>
    <hr/>
  </div>
);


export default App;
