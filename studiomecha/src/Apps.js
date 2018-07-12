import React, { Component } from 'react';

import {Switch,BrowserRouter,Route} from 'react-router-dom'
import AllApps from './AllApps'
import AppViewer from './AppViewer'
class Apps extends Component{

   render(){
     return(
          <div>All apps</div>
          // <BrowserRouter>
          // <Switch>
          //   <Route exact path='/' component={AllApps} {...this.props.apps}/>
           
          // </Switch>
          // </BrowserRouter>
          )
        }; 
      }

export default Apps;

  