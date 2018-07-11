import React,{Component} from 'react'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Apps from './Apps'
import ContactUs from './ContactUs'
import Augmented from './Augmented'
import Virtual from './Virtual'
import Home from './Home'

class AppRoute extends Component{
    constructor(props){
        super(props);
        console.log({propsInAppRoute:this.props})
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Apps} params={this.props.apps}/>
                    <Route path='/home' component={Home} params={this.props.apps}/>
                    <Route path='/apps' component={Apps} params={this.props.apps}/>
                    <Route exact path='/contactus' component={ContactUs} params={this.props.apps}/>
                    <Route exact path='/augmented' component={Augmented} params={this.props.apps}/>
                    <Route exact path='/virtual' component={Virtual} params={this.props.apps}/>
                </Switch>
          </BrowserRouter>
        )
    }
}

export default AppRoute;