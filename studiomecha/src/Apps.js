import React, { Component } from 'react';

import {Switch,HashRouter,Route} from 'react-router-dom'
import AllApps from './AllApps'
import AppViewer from './AppViewer'

class Apps extends Component{
   render(){
     return(<HashRouter>
          <Switch>
            <Route exact path='/apps' component={AllApps}/>
            <Route path='/apps/:id' component={AppViewer}/>
          </Switch>
          </HashRouter>
          )
        }; 
      }

export default Apps;

  