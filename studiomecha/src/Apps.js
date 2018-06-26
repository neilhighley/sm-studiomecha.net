import React, { Component } from 'react';

import {Switch,BrowserRouter,Route} from 'react-router-dom'
import AllApps from './AllApps'
import AppViewer from './AppViewer'

class Apps extends Component{
   render(){
     return(<BrowserRouter>
          <Switch>
            <Route exact path='/apps' component={AllApps}/>
            <Route path='/apps/:id' component={AppViewer}/>
          </Switch>
          </BrowserRouter>
          )
        }; 
      }

export default Apps;

  