import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class AllApps extends Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/apps/1' props={{id:1}}>App one</Link></li>
                    <li><Link to='/apps/2'>App two</Link></li>
                    <li><Link to='/apps/3'>App three</Link></li>
                </ul>
            </div>
        )
    }
}

export default AllApps