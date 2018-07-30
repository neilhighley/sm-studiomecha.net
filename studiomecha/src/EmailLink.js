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
                    <a href="stydiomecha.com">[EML]</a>
                </div>
            )
        }
    }
}

export default EmailLink