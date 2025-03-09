import React from 'react'
import ReactDOM from 'react-dom'
import {Route,Link,HashRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
const routs = (
   <Router>
<div className="App">  
                <ul className="App-header">  
                  <li>  
                      <Link to="/">Home</Link>  
                  </li>  
                  <li>  
                      <Link to="/about"> 
                        About Us 
                      </Link>  
                  </li>  
                  <li>  
                      <Link to="/contact"> 
                        Contact Us 
                      </Link>  
                  </li>  
                </ul>  
                <Switch>  
                  <Route exact path='/' 
                      component={App}> 
                  </Route>  
                  <Route exact path='/about'
                      component={AboutUs}> 
                  </Route>  
                  <Route exact path='/contact' 
                      component={ContactUs}> 
                  </Route>  
                </Switch>  
            </div>
   </Router>
);
ReactDOM.render(routs, document.getElementById('root'));