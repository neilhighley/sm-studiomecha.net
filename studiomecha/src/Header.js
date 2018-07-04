import React, { Component } from 'react';

import Styles from './index.css'

class Header extends Component{
    render(){
        return(
            <div style={style.main} className={Styles.appHeader}>
            <h1>
               Studio Mecha
            </h1>
            <h2>Mighty Small Apps</h2>
            </div>
        )
    }
}

export default Header

const style={
    main:{
        width:'100%',
        alignContents:'flex-start'
    }
  }