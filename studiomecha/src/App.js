import React, { Component } from 'react';
import AppRoute from './AppRoute'
import Header from './Header'

class App extends Component{
  render(){
    return(
      <div style={{display:'flex',alignContent:'center',alignItems:'center',flexDirection: 'column'}}>
        <Header/>
        <AppRoute/>
      </div>
    )
  }
}

export default App;