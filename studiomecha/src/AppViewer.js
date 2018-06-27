import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AppResolver from './libs/AppResolver'
import './AppContainer.css'
import AppItem from './AppItem'

class AppViewer extends Component{
    constructor(props){
        super(props)
        let AR=new AppResolver();
        let routeId=this.props.match.params.id;
        let selectedApp={...AR.getApp(routeId),text:'hello'}

        this.state={app:selectedApp}
    }
    render(){
        return(
            <div className='app-container'>
                <h1>App Viewer</h1>
                <AppItem data={this.state.app}/>
                <Link to='/apps'>All Apps</Link>
            </div>

        )
    }
}

export default AppViewer
