import React, { Component } from 'react';
import AppRoute from './AppRoute'
import Header from './Header'
import Footer from './Footer'
import './backgrounds.css'
class App extends Component{
  render(){
    return(
      <div style={style} className='yellowGrid'>
        <Header/>
        <AppRoute/>
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