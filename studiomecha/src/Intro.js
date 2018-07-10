import React,{Component} from 'react'

import "./styles/intro.css"
class Intro extends Component{
    render(){
        return(
        <div className="intro">
           
           <div className="introPanel introBox1">
            <img src="./images/app1.png" alt="intro item"/>
            <p> Some text about this image should be displayed.  Some text about this image should be displayed.
                  Some text about this image should be displayed.  Some text about this image should be displayed.
                    Some text about this image should be displayed.  Some text about this image should be displayed.
                      Some text about this image should be displayed.  Some text about this image should be displayed.
                        Some text about this image should be displayed. 
            </p>

           </div>
           <div className="introPanel introBox2">
           <img src="./images/app2.png" alt="intro item"/>
            <p> Some text about this image should be displayed.  Some text about this image should be displayed.
                  Some text about this image should be displayed.  Some text about this image should be displayed.
                    Some text about this image should be displayed.  Some text about this image should be displayed.
                      Some text about this image should be displayed.  Some text about this image should be displayed.
                        Some text about this image should be displayed. 
            </p>
           </div>
        </div>)
    }
}

export default Intro