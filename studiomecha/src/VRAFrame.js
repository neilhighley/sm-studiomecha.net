import React,{Component} from 'react'
import {Link} from 'react-router-dom'


class VRAFrame extends Component{
    render(){
        return(
            <div>
                <p>A Frame Example</p>
                <Link to='/home'>Back Home</Link>
            </div>
        )
    }
}
export default VRAFrame