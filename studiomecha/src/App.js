import React, { Component } from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Intro from './Intro'
import Header from './Header'
import Outro from './Outro'
import Footer from './Footer'

import ContactUs from './ContactUs'
import Augmented from './Augmented'
import Virtual from './Virtual'
import Home from './Home'
import AllApps from './AllApps'
import AppViewer from './AppViewer'

import AppResolver from './libs/AppResolver'
import './styles/backgrounds.css'
import SiteData from './libs/SiteData'

class App extends Component{
  
  render(){
    let AR=new AppResolver();
    let allApps=AR.getAllApps();
    let sd=new SiteData();
    return(
      <BrowserRouter>
      <div className='darkGrid fullSizePage'>
        <Header SiteData={sd}/>
                <Switch>
                    <Route exact path='/' component={Intro}/>
                    <Route path='/home' component={Intro}/>
                    <Route exact path='/contactus' component={Intro}/>
                </Switch>
                <div className="siteContent">
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/home' component={Home}/>
                    <Route exact path='/apps' render={()=><AllApps apps={allApps}/>} />
                    <Route path='/apps/:id' render={(props)=><AppViewer {...props} apps={allApps}/>}/> 
                    <Route exact path='/contactus' component={()=><ContactUs SiteData={sd}/>}/>
                    <Route path='/augmented' component={Augmented} />
                    <Route exact path='/virtual' component={Virtual}/>
                </Switch>
                </div>
        <Outro/>
        <Footer SiteData={sd}/>      
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
