import  './Schedule.css'; //.  current folder
import { Component } from 'react';
import Referees from '../Referees/Referees'; //..  parent folder or previous folder.
class Schedule  extends  Component{
    constructor(){

        super();
        this.state={matchDate: ['2025-03-03', '2025-04-03'], teams: ['Ind-Aus', 'SA-NZ'], 
            venue:['Dubai', 'Lahore'], time:['2PM', '230PM'], 
            mDate: '2025-03-09', team1: 'Unknown', team2: 'Unknown', mVenue: 'Unknown',
            addState : false, showReferee:false
        };
        //props is not available within the constructor of the class component.
    }

    //The life-cycle methods are automatically called by reactjs. They are called as call-back methods
    componentWillMount(){
        console.log('Component is mounting');
        console.log('The view is read only view. Changes are not accepted.');
    }
    componentDidMount(){
        console.log('Component completed mounting.... Ready to use...');
        console.log(this.props.noOfMatches);
        console.log(this.props.noOfVenues);
    }
    componentWillUpdate(){
        console.log('Component is getting updated....');
    }
    componentDidUpdate()
    {
        console.log('Component updation completed....');
    }

    componentWillUnmount(){
        //Write the code for saving the data in the component before unmounting it.
        console.log('Component is being unmounted...');
    }

    addData=(v)=>{
        v.preventDefault(); //Prevents the refresh of the page so that data is not lost.
        this.setState({
            matchDate: [...this.state.matchDate, this.state.mDate],
            teams: [...this.state.teams, `${this.state.team1}-${this.state.team2}`],
            venue: [...this.state.venue, this.state.mVenue],
        });
        return true;  //100*(20+5)
    }
    render(){
        return <div  className='container-fluid' style={{backgroundColor:'violet'}}>
            <p>Champions trophy schedule</p><br/>
            <div class='row'>
            <div className='col-xs-6'>
                <uL>
                    {
                        this.state.teams.map((team)=>{return <li>{team}</li>})
                    }
                </uL> &nbsp; &nbsp; <b>Venues List</b><br/>
                <select  name="venuesList">
                    {
                        this.state.venue.map((v) => { return <option value={v}>{v}</option>})
                    }
                </select>&nbsp;&nbsp;
                &nbsp; &nbsp; <br/><br/><b>Match dates</b><br/>
                <uL  type="square">
                    {
                        this.state.matchDate.map((match_date)=>{return <li>{match_date}</li>})
                    }
                </uL><br/>
                <input type="checkbox" checked={this.state.showReferee}  
                onChange={(refereeStatus)=>
                    {this.setState({showReferee:refereeStatus.target.checked})}} />
                    <label>Show referees list</label>
                <br/>
                {this.state.showReferee ? <fieldset>
                    <legend>List of referees</legend>
                <Referees matchReferee="Atul Wasnik" 
                umpire1="Kumar Dharmasena" umpire2="Michael Gough"/>
                </fieldset> : <b>Check/tick to display Referees</b>}
                </div>
             <div className='col-xs-6'>
                <h1 style={{wordWrap:'break-word'}}>Total # of matches= {this.props.noOfMatches} <br/>
                Total # of venues ={this.props.noOfVenues}</h1>
            <form  action="#" onSubmit={(e)=>this.addData(e)}>
                <label>Match date</label><input type="date" name="matchDate"  value={this.state.mDate} 
                onChange={(matchDate)=>this.setState({mDate:matchDate.target.value})}/><br/>

            <label>Team 1</label><input type="text" name="teamOne"  value={this.state.team1} 
                onChange={(teamOne)=>this.setState({team1:teamOne.target.value})}/><br/>

            <label>Team 2</label><input type="text" name="teamTwo"  value={this.state.team2} 
                onChange={(teamTwo)=>this.setState({team2:teamTwo.target.value})}/><br/>

            <label>Venue name</label><input type="text" name="matchVenue"  value={this.state.mVenue} 
                onChange={(matchVenue)=>this.setState({mVenue:matchVenue.target.value})}/><br/>
            <br/><input type="checkbox" name="buttonStatus" checked={this.state.addState} 
                onChange={ (buttonStatus)=>{this.setState({addState:buttonStatus.target.checked})}}/>
                <label>Agree to T&C</label><br/>
            <input type="submit" value="Add details"  disabled={!this.state.addState}/>
            </form>
            <b>Match date</b> {this.state.mDate}<br/>
            <b>Team 1</b> {this.state.team1}<br/>
            <b>Team 2</b> {this.state.team2}<br/>
            <b>Match venue</b> {this.state.mVenue}<br/>

            <b></b>
            </div>
            </div>
        </div>
    }
}

export  default Schedule;