import React, { Component } from 'react';
import AppRoute from './AppRoute'
import Header from './Header'

class App extends Component{
  render(){
    return(
      <div>
        <Header/>
        <AppRoute/>
      </div>
    )
  }
}

export default App;