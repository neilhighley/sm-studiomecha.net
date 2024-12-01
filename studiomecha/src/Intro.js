import React,{Component} from 'react'

import "./styles/intro.css"
class Intro extends Component{
    render(){
        return(
        <div className="intro">
            <div className="introPanel introBox1">
                <img src="./images/industrial-tablets.png" alt="intro item"/>
                <div className="introContent">  
                    <h1>Industrial</h1>
                    <p>Whether it is construction, engineering or manufacturing, 
                        modernise your workforce with Custom Measurement and Calculation Tools as well as cutting edge AI tools and methods
                         to aid in efficiency and improved accuracy in all areas of your organisation.</p>
                </div>
            </div>
            <div className="introPanel introBox2">
                <img src="./images/phone-agent.png" alt="intro item"/>
                <div className="introContent">
                    <h1>Commercial</h1>
                    <p>Simple apps for your customers to see you, a expense tracker for your staff or great campaigns driven by a mobile presence.<br/>
                    Get advice on using the latest AI driven tools and technologies to lift your business to new heights.</p>
                </div>
            </div>
        </div>)
    }
}

export default Intro