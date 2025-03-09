import './Players.css';
import  {countries, boardNames} from '../App';
import { Component } from 'react';
//import  App from '../App';

//Component is a built-in class
//export default - it makes this component a public component which can be used in any file inside this
//application. export default has to be mentioned mandatorily for both class components and functional 
//components
/*export default*/ class  Players extends Component{
    //constructor keyword is used to define a constructor. A constructor does not have return type
    //A constructor is executed only when object is created.
    constructor(){
        super(); //This must be in the first line of the constructor
        //Define the model or state. For ex:
        //state is a built-in object. state is available only for class components.
        //The state or model must be always defined within a constructor. In a state, data is stored in
        //key-value pairs.
        this.state={"playerName":"Virat Kohli", "matchesPlayed":250, "noOfHundreds":51, "noOfFifties":73, 
            "playerNameError": ""};
    }

    //Controller apis. v is the parameter.
    updateNoOfFifties=(v)=>{ //It is a custom function
        console.log('Updating no of fifites')
        this.setState({noOfFifties:v});
    }

    //In class component, it is allowing you to create a normal javascript function.
    checkPlayerName(playerName){
        if(playerName.length <= 4)
            this.setState({playerNameError: "Player name must be more than 4 characters long."});
        else
            this.setState({playerNameError: "Correct...."});
    }

    //render() is already defined in the Component class. We have to override it here. render() displays 
    //the view. Render is like run() method in the Thread class.
    render(){
        console.log("Hello")
        //View for displaying data
        return (<div className='container-fluid'  style={{backgroundColor:"teal"}}>
                <br/>{countries}<br/>
                {boardNames}<br/>
                <div className='row'> <div className='col-xs-6 col-sm-6'>

                <h1>Player info</h1><br/>
                <h1>Maximum players = {this.props.maxPlayers}<br/>
                Minimum players={this.props.minPlayers}</h1>
                <b>Player Name </b>&nbsp;&nbsp; {this.state.playerName}<br/>
                <b># of matches played </b>&nbsp;&nbsp; {this.state.matchesPlayed}<br/>
                <b># of Hundreds </b>&nbsp;&nbsp; {this.state.noOfHundreds}<br/>
                <b># of Fifties </b>&nbsp;&nbsp; {this.state.noOfFifties}<br/>
                </div>

                <div style={{backgroundColor: 'silver'}} className='col-xs-6 col-sm-6'>
                <form>
                    <label>Player name</label> &nbsp;&nbsp;<input type="text" name="playerName" 
                    value={this.state.playerName}  onChange={(a)=>this.setState({playerName: a.target.value})}  
                    onKeyUp={(playerName)=>this.checkPlayerName(playerName.target.value)} required/>
                    <b style={{color:'red'}}> {this.state.playerNameError}</b><br/>
                    <label>Matches played</label> &nbsp;&nbsp;<input type="number" name="matchesPlayed" 
                    value={this.state.matchesPlayed}  onChange={(a)=>this.setState({matchesPlayed: a.target.value})} required/><br/>
                    <label># no of Hundreds</label> &nbsp;&nbsp;<input type="number" name="noOfHundreds" 
                    value={this.state.noOfHundreds}  onChange={(a)=>this.setState({noOfHundreds: a.target.value})} required/><br/>
                    <label># no of Fifties</label> &nbsp;&nbsp;<input type="number" name="noOfFifties" 
                    value={this.state.noOfFifties}  onChange={(a)=>this.updateNoOfFifties(a.target.value)} required/><br/>
                    <br/>
                    
                    <input type="submit" value="Save"  className='btn btn-primary' />&nbsp;&nbsp;
                    <input type="reset" value="Reset" className='btn btn-warning' />&nbsp;&nbsp;
                    <input type="button" value="Cancel" className='btn btn-danger' />
                </form>
                </div>
                </div>
        </div>);
    }
}

export default Players; //Another way of exporting.