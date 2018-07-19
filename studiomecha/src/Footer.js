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
                        <li><Link to='augmented'>AR (AugReality)</Link></li>
                        <li><Link to='virtual'>VR (VirReality)</Link></li>
                        <li><TwitterLink/></li>
                        <li><EmailLink/></li>
                    </ul>
                </div>
                <CreditStrip StripText="Iconography provided by FreePik, visit their website for more cool icons" Symbol={0} Color="#818181" BgColor='#211'/>
                <CopyrightStrip/>
            </div>
            
        )
    }
}

export default Footer;