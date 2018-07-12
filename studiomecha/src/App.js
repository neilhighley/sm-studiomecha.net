import React, { Component } from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
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


class App extends Component{
  render(){
    let AR=new AppResolver();
    let allApps=AR.getAllApps();
    return(
      <BrowserRouter>
      <div style={style} className='yellowGrid fullSizePage'>
        <Header/>
        <Intro/>
        
                <Switch>
                    <Route exact path='/' component={AllApps} params={allApps}/>
                    <Route path='/home' component={Home} params={allApps}/>
                    <Route exact path='/apps' component={AllApps} params= {allApps}/>
                    <Route path='/apps/:id' component={AppViewer} params= {allApps}/> 
                    <Route exact path='/contactus' component={ContactUs} params= {allApps}/>
                    <Route exact path='/augmented' component={Augmented} params= {allApps}/>
                    <Route exact path='/virtual' component={Virtual} params= {allApps}/>
                </Switch>
        <Outro/>
        <Footer/>      
      </div>
      </BrowserRouter>
    )
  }
}

export default App;

const style={
  display:'flex',
  alignContent:'center',
  alignItems:'center',
  flexDirection: 'column',
  backgroundColor:'#C1C1C1'
  
}