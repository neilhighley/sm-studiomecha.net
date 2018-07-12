import React,{Component} from 'react'

import "./styles/intro.css"
class Intro extends Component{
    render(){
        return(
        <div className="intro">
           
           <div className="introPanel introBox1">
            <img src="./images/app1.png" alt="intro item"/>
            <div className="introContent">  
              <h1>Industrial</h1>
              <p>Custom Measurement and Calculation tools to aid in efficiency and improved accuracy in all jobs</p>
            </div>

           </div>
           <div className="introPanel introBox2">
           <img src="./images/app2.png" alt="intro item"/>
          <div className="introContent">
             <h1>Commercial</h1>
              <p>Create a simple app for your customers to find you, or a expense tracker for your staff</p>
           
            </div>
           </div>
        </div>)
    }
}

export default Intro