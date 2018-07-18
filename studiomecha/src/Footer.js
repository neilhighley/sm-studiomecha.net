import React,{Component} from 'react';
import TwitterLink from './TwitterLink'
import EmailLink from './EmailLink.js'
import CopyrightStrip from './CopyrightStrip'
import CreditStrip from './CreditStrip'
import {Link} from 'react-router-dom'

import './styles/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="appFooter">
                <div className="footerPanels" >
                        <ul>
                        <li><Link to="contactus">Contact</Link></li>
                        <li><Link to='apps'>Apps</Link></li>
                        <li><Link to='home'>Home</Link></li>
                        </ul>    
                    <ul>
                        <li><Link to='augmented'>AR (AugmentedReality)</Link></li>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        </ul>
                    <ul>
                        <li><Link to='virtual'>VR (VirtualReality)</Link></li>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        </ul>
                    <p><TwitterLink/>
                    <EmailLink/></p>
                </div>
                <CreditStrip StripText="Iconography provided by <FreePik/>" Symbol='0' Color="#B1B1B1"/>
                <CopyrightStrip/>
            </div>
            
        )
    }
}

export default Footer;