import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div className="homeText">
                <div> Find out how your business can benefit from its own mobile app!<br/>
            Whether you are a Small Business, Sole Trader, or micro StartUp, we specialise in producing
            uncomplicated, yet powerful applications to help your business get the most from the new digital landscape.<br/>
            There are many types of apps to help your business grow from branded measuring applications to bespoke expense tracking tools to simple store fronts that help your customers find you.<br/>
            With over twenty years in the digital industry, you can be assured that we will find the best solution for whatever you want to do with mobile. </div>
            <br/>
            <Link to='/apps'>Show app examples >>>>></Link>
            </div>
        )
    }
}
export default Home;