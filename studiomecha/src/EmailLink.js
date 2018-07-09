import React,{Component} from 'react'

class EmailLink extends Component{
    render(){
        if(this.props.type==="text"){
            return(
            
                <a href="studiomecha.com">email link</a>
                
            )
        }else{
            return(
                <a href="stydiomecha.com">Email IMAGE</a>
            )
        }
    }
}

export default EmailLink