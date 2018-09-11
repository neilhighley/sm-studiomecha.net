import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class VRCube extends Component{
    render(){
        return(
            <Link to='./virtual/aframe'><img src="./images/vr_1.png" alt="virtual reality example"/></Link>
        )
    }
}

export default VRCube