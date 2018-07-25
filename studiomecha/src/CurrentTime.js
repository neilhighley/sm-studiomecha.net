import React,{Component} from 'react'

class CurrentTime extends Component{
    constructor(props){
        super(props)
        this.state={ currentTime:'12:20',
         compStyle:{backgroundColor:'red',
                        color:'white' }}

    }
    render(){
        return(
            <div className='currentTime' style={this.state.compStyle}>{this.state.currentTime}</div>
        )
    }
}

export default CurrentTime;