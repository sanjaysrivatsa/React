import logo from './logo.svg';
import './App.css';
import { useState, createContext} from 'react';
//createContext() is a built-in function in reactjs to create a context(shared memory area)
import  {BrowserRouter, Routes, Route, Link} from 'react-router-dom'; 

import data from './VenueStatistics/VenueStatistics';
import DisplayMedia from './DisplayMedia/DisplayMedia';
import Players from './players/Players';
import Venue from './venues/Venues';
import Schedule from './schedule/Schedule';
import VenueStatistics from './VenueStatistics/VenueStatistics';
import Referees from './Referees/Referees';


//It is a javascript function. A functional component
//Another way of exporting
//props can be passed as parameter to a functional component.

//They are global within the component but making universal within the application.
export  let  countries ='India-Australia-NewZealand-Pakistan-Bangladesh-Afghanistan-SouthAfrica-England'
export  let boardNames='BCCI-ACB-NZCB-PCB-BCB-AFCB-SACB-TCCB'

//Create a blank context called mediaPartners
export  let mediaPartners=createContext();

function App(parameters) {
//Model

//Controller
//teamId - model/state/variable
//setTeamId - It is the setter method. Same as setter and getter methods in Spring Boot
//Implementation for the setter method setTeamId() will be automatically given.
//useState() - It is a built-in hook in reactjs. We will useState() to create a variable with
//optional initial value. Right now assume useState() as a built-in function for creating variables/state
//'Ind' is the initial value. Type of the initial value will determine the datatype of the state.
const  [teamId, setTeamId]=useState('Ind');
const  [teamName, setTeamName]=useState('India')
const [captainName, setCaptainName]=useState('Rohit Sharma')
sessionStorage.setItem("captainName", "Rohit Sharma") //OR
//sessionStorage.captainName="Rohit Sharma"

//Controller.
const changeCaption=(e)=>{

}


  return (
    <div className="App">
      <header className="App-header">
      <link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />
      <script
  src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script
  src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

      <mediaPartners.Provider  value="ESPN, StarSports, FoxSports, SkyNetwork, SkyEuro, AOL">
        <DisplayMedia />
      </mediaPartners.Provider>
        <h1 style={{color:'pink'}}>Champions Trophy 2025</h1>
        <h2>{countries}</h2>
        <h2>{boardNames}</h2>
        <p  style={{color:'violet'}}>Team registration</p>
        <h1>{parameters.boardName},&nbsp;{parameters.location}</h1>

        <form>
          <label>Team ID</label>&nbsp;&nbsp;<select name="teamID" size="1" value={teamId} 
            onChange={(e)=>{setTeamId(e.target.value)}}>
            <option  value="Ind"  >India</option>
            <option  value="Pak">Pakistan</option>
            <option  value="Aus">Australia</option>
            <option  value="NZ">New Zealand</option>
            <option  value="SA">South Africa</option>
            </select><br/>
            <label>Team name</label><input type="text" name="teamName"  value={teamName} onChange=
                {(e)=>setTeamName(e.target.value)} /><br/>
            <label>Captain name</label><input type="text" name="captainName" value={captainName} 
            onChange={(e)=>{
              setCaptainName(e.target.value)
              sessionStorage.setItem("captainName", e.target.value)}}
            /><br/>
            <input type="submit" value="Save" />
        </form>
        

        <BrowserRouter>
              <nav className='navbar bg-dark  navbar-brand'>
              <fieldset>
                <legend>Click to navigate</legend>
              <a href="/players">Players</a>&nbsp;&nbsp;
              <a href="/referees">Referees</a>&nbsp;&nbsp;
              <a href="/schedule">Schedule</a>&nbsp;&nbsp;
              <a href="/venues">Venues</a>&nbsp;&nbsp;
              <a href="/venuestats">Venue Statistics</a>&nbsp;&nbsp;<br/>
              </fieldset>
              </nav>
            <Routes>
                <Route path="players" element={<Players maxPlayers="16" minPlayers="12" />}></Route>
                <Route path="referees" element={<Referees 
                matchReferee='Chethan Sharma'  umpire1='R Venkataraghavan' umpire2='Marvan Attapattu' />}></Route>
                <Route path="schedule" element={<Schedule />}></Route>
                <Route path="venues" element={<Venue />}></Route>
                <Route path="venuestats" element={<VenueStatistics />}></Route>
            </Routes>
            <nav className='navbar bg-dark  navbar-brand'>
              <fieldset>
                <legend>Click to navigate</legend>
              <Link to="/players">Players</Link>&nbsp;&nbsp;
              <Link to="/referees">Referees</Link>&nbsp;&nbsp;
              <Link to="/schedule">Schedule</Link>&nbsp;&nbsp;
              <Link to="/venues">Venues</Link>&nbsp;&nbsp;
              <Link to="/venuestats">Venue Statistics</Link>&nbsp;&nbsp;<br/>
              </fieldset>
              </nav>
        </BrowserRouter>
      </header>
    </div>
  );
}
//export default App; One way of exporting

//Export multiple elements in a single export statement.

export  default  App;