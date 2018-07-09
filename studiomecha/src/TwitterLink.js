import React,{Component} from 'react'

class TwitterLink extends Component{
    render(){
        if(this.props.type==="text"){
            return(
            
                <a href="twitter.com">twitter link</a>
                
            )
        }else{
            return(
                <a href="twitter.com">twitter IMAGE</a>
            )
        }
    }
}

export default TwitterLink