import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
const routs = (
   < Router >
      <div>
         <Route path="/" component={App} />
         <Route path="/aboutus" component={ AboutUs } />
         <Route path="/contactus" component={ ContactUs } />
      </div>
   </Router >
);
ReactDOM.render(routs, document.getElementById('root'));