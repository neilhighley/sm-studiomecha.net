import React, { Component } from 'react';

import './styles/index.css'

class Header extends Component{
    render(){
        return(
            <div className="appHeader" style={style.main} >
            <h1 style={style.headerMain}>
               <a href='./'>Studio Mecha</a>
            </h1>
            <h2 style={style.headerSub}>Mighty Small Apps</h2>
            </div>
        )
    }
}

export default Header

const style={
    main:{
        width:'100%',
        alignContents:'flex-start',
        textTransform:'uppercase',
    },
    headerMain:{

    },
    headerSub:{
        
    }
  }