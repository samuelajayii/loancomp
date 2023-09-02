import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideNav from './SideNav';
import reportWebVitals from './reportWebVitals';
import TopNav from './TopNav';
import Messaging from './Messaging';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Wallet from './Wallet';
import LocationContainer from './LocationContainer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div className='md:flex md:flex-row md:ml-2'>
        <SideNav />
        <div className='flex flex-col w-full mr-2'>
          <TopNav />
          <LocationContainer/>
          <Switch>
            <div className='bg-white py-4 px-5 rounded-xl flex h-full mb-3 w-full '>
            <Route exact path="/">
              <Messaging />
            </Route>
            <Route path="/wallet">
              <Wallet/>
            </Route>
            </div>
          </Switch>
        </div>
        
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
