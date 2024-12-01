import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    render(){
        return(
            <div className="homeText">
                <div className="homeCopy"> Find out how your business can benefit from digital and AI technology!<br/>
            Whether you are a Small Business, Sole Trader, or Micro StartUp we specialise in producing
            uncomplicated, yet powerful, consultancy and applications to help your business 
            get the most from the new digital landscape.<br/>
            There are many types of apps to help your business grow from branded measuring applications to bespoke expense tracking tools to simple store 
            fronts that help your customers find you.<br/>
            With over twenty years in the digital industry, you can be assured that we 
            will find the best solution for whatever you want to do with mobile. </div>
           <div className="homeFooter">            <Link to='/apps'>Show app examples &gt;&gt;&gt;&gt;&gt;</Link></div>
            </div>
        )
    }
}
export default Home;