import React,{Component} from 'react'



class AppPageTemplate extends Componnet{
    render(){
        return(
            <div class="template-container">
                <Header/>
                <Intro/>
                {this.children}
                <Outro/>
                <Footer/>
            </div>
        )
    }
}