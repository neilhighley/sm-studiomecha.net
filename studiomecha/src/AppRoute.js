import React,{Component} from 'react'
import {Switch,HashRouter,Route} from 'react-router-dom'

import Home from './Home'
import ContactUs from './ContactUs'

class AppRoute extends Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={ContactUs}/>
                </Switch>
          </HashRouter>
        )
    }
}

export default AppRoute;