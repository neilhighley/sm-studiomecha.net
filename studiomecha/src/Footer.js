import React,{Component} from 'react';
import TwitterLink from './TwitterLink'
import EmailLink from './EmailLink.js'
import CopyrightStrip from './CopyrightStrip'

import {Link,BrowserRouter} from 'react-router-dom'

import './styles/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="appFooter">
            <BrowserRouter>
                <div className="footerPanels" >
                        <ul>
                        <li><Link to="/contactus">Contact</Link></li>
                        <li><Link to='/apps'>Apps</Link></li>
                        <li><Link to='./home'>Home</Link></li>
                        </ul>    
                    <ul>
                        <li><Link to='/augmented'>AR (AugmentedReality)</Link></li>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        </ul>
                    <ul>
                        <li><Link to='/virtual'>VR (VirtualReality)</Link></li>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        </ul>
                    <p><TwitterLink/>
                    <EmailLink/></p>
                </div>
                </BrowserRouter>
                <CopyrightStrip/>
            </div>
            
        )
    }
}

export default Footer;