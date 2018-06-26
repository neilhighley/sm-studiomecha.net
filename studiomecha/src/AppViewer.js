import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import AppResolver from './libs/AppResolver'

class AppViewer extends Component{
    constructor(props){
        super(props)
        let AR=new AppResolver();
        let routeId=this.props.match.params.id;
        let selectedApp=AR.getApp(routeId)
        this.state={app:selectedApp}
        console.log(selectedApp);
    }
    render(){
        return(
            <div className='app-container'>
            <div className='app-view'>
                <h1>App Viewer</h1>
                <img src={this.state.app.Image} alt={this.state.app.Description}/>
                <h1 className='title'>{this.state.app.Name}</h1>
                <p className='description'>{this.state.app.Description}</p>
                <p className='workDescription'>{this.state.app.WorkDescription}k</p>
                <p className='timeEstimate'>{this.state.app.TimeEstimate}</p>
            </div>
            <Link to='/apps'>All Apps</Link>
            </div>

        )
    }
}

export default AppViewer
