import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class VRCube extends Component{
    render(){
        return(
            <div>
                <Link to='./virtual/aframe'><img src="./images/vr_1.png" alt="virtual reality example"/></Link>
                <a href='VRAFrame-standalone.html'>VR Example (New Window)</a>
                <Link to='./virtual/aframe'>VR Example (This Window)</Link>
            </div>
        )
    }
}

export default VRCube