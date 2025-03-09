//Name of the props is parameters
import { useState, useContext} from "react";
import { countries, boardNames } from "../App";
import { mediaPartners } from "../App";
import DisplayMedia from "../DisplayMedia/DisplayMedia";
function  Referees(parameters){
    const  [refereesList, setRefereesList]=useState
    ([parameters.matchReferee, parameters.umpire1, parameters.umpire2]); //'Atul Wasnik', 'Kumar Dharmasena', 'Michael Gough'

    return (<div className="container-fluid" style={{backgroundColor:'brown'}}>
        <fieldset>
        <mediaPartners.Provider value="ESPN, StarSports, AOL, SkyEuro">
            <DisplayMedia />
        </mediaPartners.Provider></fieldset>
        <br/>{countries}<br/>
        {boardNames}
        <h1 style={{wordWrap:'break-word'}}>Refeerees list</h1>
        <select  size="7">
            {
                refereesList.map( (referee)=> { return  <option  value={referee.substring(0,3)}>
                    {referee}</option>})
            }
        </select>

        <form>
            <label>Coutnries</label> <input type="text"  name="countryNames" value={countries} 
            onChange={(countriesList)=>{countries=countriesList.target.value; }} />

        </form>
       </div>)
}

export default Referees;

