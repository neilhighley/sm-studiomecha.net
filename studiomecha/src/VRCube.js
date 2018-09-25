import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class VRCube extends Component{
    render(){
        return(
            <div>
                <Link to='./virtual/aframe'><img src="./images/vr_1.png" alt="virtual reality example"/></Link>
                <a href='VRAFrame-warehouse.html' target='_warehouse'>VR Warehouse (New Window)</a><br/>
                <a href='VRAFrame-kitchen.html' target='_kitchen'>VR Kitchen (New Window)</a><br/>
                <Link to='./virtual/aframe'>VR Example (This Window)</Link>
            </div>
        )
    }
}

export default VRCube