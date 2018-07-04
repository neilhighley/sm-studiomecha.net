import React,{Component} from 'react'
import {Switch,BrowserRouter,Route} from 'react-router-dom'
import Apps from './Apps'
//import Home from './Home'
import ContactUs from './ContactUs'

class AppRoute extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Apps}/>
                    <Route path='/apps' component={Apps}/>
                    <Route path='/contact' component={ContactUs}/>
                </Switch>
          </BrowserRouter>
        )
    }
}

export default AppRoute;