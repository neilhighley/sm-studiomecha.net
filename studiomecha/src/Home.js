import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Intro from './Intro'
class Home extends Component{
    render(){
        return(
            <div>
                <Intro/>
                <div>We're Home</div>
                <Link to='/apps'>Show all apps</Link>
            </div>
        )
    }
}
export default Home;