import React,{Component} from 'react'
import './styles/getInTouch.css'
import {Link} from 'react-router-dom'

const EmailIcon=()=>{
    return(
        <img alt='Enveloper icon' src='./images/envelope-bgw.png'/>
    )
}
class GetInTouch extends Component{
    render(){
        return(
            <div className="getInTouch" title="drop us a line with your questions"><Link to='./contactus'>Get in touch <EmailIcon/></Link></div>
            )
    }
}

export default GetInTouch