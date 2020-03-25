import React, { Component } from 'react';
import TopBar from './components/Top/TopBar';
import MiddleBar from './components/Top/MiddleBar';
import NavBar from './components/Top/NavBar';
import BottomFooter from './components/Footer/BottomFooter';
import MainFooter from './components/Footer/MainFooter';

class Routes extends Component {
    state = {  }
    render() { 
        return (
        <div>
        <TopBar/>
        <MiddleBar/>
        <NavBar/>
        <h3>Routes Body
        
        </h3>
        <MainFooter/>
        <BottomFooter/>
        </div>
          );
    }
}
 
export default Routes;