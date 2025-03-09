import logo from './logo.svg';
import './App.css';
import { createContext, useState } from 'react';
import UserInfo from './UserInfo';
//Common memory area that is accessed by multiple pages
export const  sharedData=createContext();
function App() {
  const [firstName, setFirstName] = useState('Unknown');
  const [lastName, setLastName]=useState('Unknown');
  const [agree, setAgree]=useState(false);

  const updateFirstName=(event)=>{
    setFirstName(event.target.value);
  }
  const updateLastName=(event)=>{
    setLastName(event.target.value);
  }
  const updateAgree=(event) =>{
    setAgree(event.target.checked);
  }
  return (
    <div className="App">
      First name <input type="text" value={firstName} onChange={updateFirstName} /><br/>
      Last name <input type="text" value={lastName} onChange={updateLastName} /><br/>
      <input type="checkbox" onChange={updateAgree} /> Agree to T & C
      
      <br/><br/>
      <sharedData.Provider  value={firstName + " " + lastName}>
      {agree ? <UserInfo />: ""}
      </sharedData.Provider>
    </div>
  );
}

export default App;
