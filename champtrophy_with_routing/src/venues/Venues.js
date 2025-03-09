import React, { useState } from 'react'
import './Venues.css'
import VenueStatistics  from '../VenueStatistics/VenueStatistics';
import axios from 'axios';
const Venue = () => {
 
    const [venueState, setVenueState] = useState(
        {
            venueName: "Wankhede stadium",
            matchesPlayed: 250,
            city: "Mumbai",
            country: "India"
        });
        const  [venueData, setVenueData]=useState([]);
        const save=(event)=>{
            event.preventDefault();
            console.log('Sending data.....');
            axios.post('http://localhost:8080/venues/addVenue', {venueName: venueState.venueName,
                matchesPlayed: venueState.matchesPlayed, city: venueState.city,
            country: venueState.country}).then (response => { console.log(response)})
        }
        const list=()=>{
            console.log('Retrieving data...');
            //Sends a GET request by default to the API. Calling the backend API
            //Catch the response sent from server, convert it into JSON. Then save it in a state.
            fetch('http://localhost:8080/venues/listVenues').then((response)=>response.json()).
            then(data =>setVenueData(data));
        }
    //const [venueError, setVenueError]=useState('Venue name must be more than 4 characters long.');
 //Using a single controller api, is more code efficent and gives good performance.
 //It is a common controller api.
    const updateValue = (e) => {
        const { name, value } = e.target;
        setVenueState((pre) => ({
            ...pre, [name]: value,
        }))
    }
 
    // const checkVenueName=(venueName)=>{
    //     if(venueName.target.value.length <= 4 )
    //         setVenueError('Venue name must be more than 4 characters long.');



    // }

    return (
        <div className='container-fluid v' style={{ backgroundColor: 'yellow' }}>
            <div className='row'><div className='col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6'>
                <h1 className='h2'>Venue info</h1>
                <b>Venue Name </b>&nbsp;&nbsp; {venueState.venueName}<br />
                <b># of matches played </b>&nbsp;&nbsp; {venueState.matchesPlayed}<br />
                <b>City </b>&nbsp;&nbsp; {venueState.city}<br />
                <b>Country </b>&nbsp;&nbsp; {venueState.country}<br />
 
            </div>
                <div style={{ backgroundColor: 'lime' }}><br/>
                    <form>
                        <label>Venue name </label> &nbsp;&nbsp;<input type='text' name='venueName' value={venueState.venueName} onChange={updateValue} /*onKeyUp={(venueName)=>checkVenueName(venueName)}*/ /><br />
                        <label>Matches played </label> &nbsp;&nbsp;<input type='text' name='matchesPlayed' value={venueState.matchesPlayed} onChange={updateValue} /><br />
                        <label>City </label> &nbsp;&nbsp;<input type='text' name='city' value={venueState.city} onChange={updateValue} /><br />
                        <label>Country </label> &nbsp;&nbsp;<input type='text' name='country' value={venueState.country} onChange={updateValue} /><br />
                        <button className='btn btn-primary' type='button' value="save" onClick={save}>Save</button> &nbsp;&nbsp;
                        <button className='btn btn-primary' type='button' value="list"  onClick={list}>List</button> &nbsp;&nbsp;
                        <button className='btn btn-warning' type='reset' value="reset">Reset</button>&nbsp; &nbsp;
                        <button className='btn btn-danger' type='button' value="cancel">Cancel</button><br />
                    </form>
                </div>
            </div>

            <table border="2px">
            <tr><td>Id</td><td>Venue name</td><td>Matches played</td><td>City</td><td>Country</td></tr>
                {
                
                venueData.map( (data, i)=>{ return  <tr key={i}><td>{i}</td> 
                <td>{data.venueName}</td><td> {data.matchesPlayed}</td>
                <td>{data.city}</td><td>{data.country}</td></tr>})
                }
            </table>
        </div>
    )
}

export default  Venue;