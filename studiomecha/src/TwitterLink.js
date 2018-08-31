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
                <a href="twitter.com"><img alt='twitter link' width={30} src='/images/87890-twitter-icon-50x50.png'></img></a>
                </div>
            )
        }
    }
}

export default TwitterLink