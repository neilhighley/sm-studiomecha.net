import React,{Component} from 'react'
import './styles/twitterlink.css'


class TwitterLink extends Component{
    render(){
        
        if(this.props.type==="text"){
            return(
                <div className="twitterLink">
                <a href="twitter.com">twitter link</a>
                </div>
            )
        }else{
            return(
                <div className="twitterLink">
                <a href="twitter.com">[TWT]</a>
                </div>
            )
        }
    }
}

export default TwitterLink