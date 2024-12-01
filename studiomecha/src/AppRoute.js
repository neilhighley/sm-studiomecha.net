import React,{Component} from 'react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import ContactUs from './ContactUs'
import Augmented from './Augmented'
import Virtual from './Virtual'
import Home from './Home'
import AllApps from './AllApps'
import AppViewer from './AppViewer'
import ArtificialIntelligence from './ArtificialIntelligence'

class AppRoute extends Component{
    constructor(props){
        super(props);
        console.log({propsInAppRoute:this.props})
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={AllApps} params={this.props.apps}/>
                    <Route path='/home' component={Home} params={this.props.apps}/>
                    <Route exact path='/apps' component={AllApps}  {...this.props.apps}/>
                    <Route path='/apps/:id' component={AppViewer} {...this.props.apps}/> 
                    <Route exact path='/contactus' component={ContactUs} params={this.props.apps}/>
                    <Route exact path='/augmented' component={Augmented} params={this.props.apps}/>
                    <Route exact path='/virtual' component={Virtual} params={this.props.apps}/>
                    <Route exact path='/ai' component={ArtificialIntelligence} params={this.props.apps}/>
                </Switch>
          </BrowserRouter>
        )
    }
}

export default AppRoute;