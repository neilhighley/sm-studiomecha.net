import React, {Component} from 'react'
//import PropTypes from 'prop-types';
import AppResolver from './libs/AppResolver'

class AppViewer extends Component{
    constructor(props){
        super(props)
        let AR=new AppResolver();
        let selectedApp=AR.getApp(this.props.id)
        this.state={app:selectedApp}
    }


    render(){
        return(
            <div class='app-view'>
                <h1>App Viewer</h1>
                <img src={this.state.app.Image} alt={this.state.app.Description}/>
                <h1 class='title'>{this.state.app.Name}</h1>
                <p class='description'>{this.state.app.Description}</p>
                <p class='workDescription'>{this.state.app.WorkDescription}k</p>
                <p class='timeEstimate'>{this.state.app.TimeEstimate}</p>
            </div>
        )
    }
}

export default AppViewer
