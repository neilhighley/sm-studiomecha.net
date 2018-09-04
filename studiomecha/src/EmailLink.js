import React,{Component} from 'react'
import './styles/emaillink.css'

class EmailLink extends Component{
    render(){
        if(this.props.type==="text"){
            return(
                <div className="emailLink">
                    <a href="studiomecha.com">email link</a>
                </div>
            )
        }else{
            return(
                <div className="emailLink">
                    <a href="./contactus"><img src="/images/envelope-bgw.png" width="30" alt="email envelope"/></a>
                </div>
            )
        }
    }
}

export default EmailLink