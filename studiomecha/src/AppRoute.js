import React,{Component} from 'react'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Apps from './Apps'
import ContactUs from './ContactUs'

class AppRoute extends Component{
    constructor(props){
        super(props);
        console.log({propsInAppRoute:this.props})
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Apps} params={this.props.apps} anotherValue="1"/>
                    <Route path='/apps' component={Apps} params={this.props.apps} anotherValue="2"/>
                    <Route path='/contact' component={ContactUs}/>
                </Switch>
          </BrowserRouter>
        )
    }
}

export default AppRoute;