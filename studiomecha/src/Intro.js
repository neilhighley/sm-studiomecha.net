import React,{Component} from 'react'

import "./styles/intro.css"
class Intro extends Component{
    render(){
        return(
        <div className="intro">
            <div className="introPanel introBox1">
                <img src="./images/intro_1.png" alt="intro item"/>
                <div className="introContent">  
                    <h1>Industrial</h1>
                    <p>Whether it is construction, engineering or manufacturing, modernise your workforce with Custom Measurement and Calculation Tools to aid in efficiency and improved accuracy in all jobs.</p>
                </div>
            </div>
            <div className="introPanel introBox2">
                <img src="./images/intro_2.png" alt="intro item"/>
                <div className="introContent">
                    <h1>Commercial</h1>
                    <p>Simple apps for your customers to see you, a expense tracker for your staff or great campaigns driven by a mobile presence</p>
                </div>
            </div>
        </div>)
    }
}

export default Intro