import React,{Component} from 'react'
import './styles/getInTouch.css'

const EmailIcon=()=>{
    return(
        <img alt='Enveloper icon' src='./images/envel.png'/>
    )
}
class GetInTouch extends Component{
    render(){
        return(
            <div className="getInTouch" title="drop us a line with your questions"><a href='./contactus'>Get in touch <EmailIcon/></a></div>
            )
    }
}

export default GetInTouch