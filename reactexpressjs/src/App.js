import logo from './logo.svg';
import './App.css';
import  {useEffect, useState} from 'react';
import axios  from 'axios';
function App() {
  const [usersData, setUsersData]=useState([{}]);
  const [userId,  setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const updateUserId =(event)=>
  {
    console.log(userId);
      setUserId(event.target.value);
  }
  const updatePassword=(event) =>{
    setPassword(event.target.value);
  }
  const updateEmail=(event) =>{
    setEmail(event.target.value);
  }

  const   insertUser=(event)=>{
    event.preventDefault();
  axios.post('http://localhost:9901/insert', 
  {uid:userId, password:password, emailid:email})
 .then(res => console.log(res));
  }
  useEffect(()=>{
    fetch('http://localhost:9901/getAll').then(response => response.json()).then(data => setUsersData(data));
  },[]);
  return (
    <div className="App"><center>
      <form onSubmit={insertUser}>
        <b>User ID</b><input type="text" value={userId} 
        onChange={updateUserId} /><br/>
        <b>Password</b><input type="password" value={password} 
        onChange={updatePassword} /><br/>
        <b>Email ID</b><input type="email" value={email} 
        onChange={updateEmail} /><br/>
        <input type="submit" value="Add" />&nbsp;&nbsp;
        <input type="reset" value="Reset" />
      </form></center>

       <ul>{
       usersData.map((user, i)=>{return <li key={i}>
        {user.userid}&nbsp;&nbsp;{user.email}
       </li>})
      }</ul>
      
      </div>
  );
}

export default App;
