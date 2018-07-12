import React from 'react'
import Header from '../Header'
import Intro from '../Intro'
import Outro from '../Outro'
import Footer from '../Footer'

const AppTemplate=(content)=>{
    return(
        <div className="template-container">
                <Header/>
                <Intro/>
                {content}
                <Outro/>
                <Footer/>
            </div>
        );
}

