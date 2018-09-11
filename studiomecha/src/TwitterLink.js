import React,{Component} from 'react'
import './styles/twitterlink.css'


class TwitterLink extends Component{
    render(){
        
        if(this.props.type==="text"){
            return(
                <div className="twitterLink">
                <a href="http://www.twitter.com/studiomecha">twitter link</a>
                </div>
            )
        }else{
            return(
                <div className="twitterLink">
                <a href="http://www.twitter.com/studiomecha" target="smtwitter"><img alt='twitter link to @studiomecha' width={30} src='/images/87890-twitter-icon-50x50.png'></img></a>
                </div>
            )
        }
    }
}

export default TwitterLink