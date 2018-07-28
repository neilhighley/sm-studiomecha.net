import React,{Component} from 'react'
import {format} from 'date-fns'
import PropTypes from 'prop-types';

class CurrentTime extends Component{
    constructor(props){
        super(props)
        this.state={ currentTime:'',
         compStyle:{backgroundColor:props.BgColor,
                        color:props.Color }};
        setTimeout(()=>{
           this.setState({currentTime:format(new Date(),'HH:mm')})     
        }, 1000);

    }
    
    render(){
        return(
            <div className='currentTime' style={this.state.compStyle}>{this.state.currentTime}</div>
        )
    }
}
CurrentTime.defaultProps={
    Color:"#FFF",
    BgColor:"rgba(100,20,20,0.5)"
}
CurrentTime.propTypes={
    Color:PropTypes.string,
    BgColor:PropTypes.string
}

export default CurrentTime;