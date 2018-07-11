import React, { Component } from 'react';
import AppRoute from './AppRoute'
import Header from './Header'
import Footer from './Footer'
import Outro from './Outro'

import AppResolver from './libs/AppResolver'
import './styles/backgrounds.css'
class App extends Component{
  render(){
    let AR=new AppResolver();
    var allApps=AR.getAllApps();
    return(
      <div style={style} className='yellowGrid'>
        <Header/>
        <AppRoute apps={allApps}/>
        <Outro/>
        <Footer/>
      </div>
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