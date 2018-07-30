import React,{Component} from 'react';
import TwitterLink from './TwitterLink'
import EmailLink from './EmailLink.js'
import CopyrightStrip from './CopyrightStrip'
import CreditStrip from './CreditStrip'
import {Link} from 'react-router-dom'
import CurrentTime from './CurrentTime'
import './styles/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="appFooter">
                <div className="topFooter">
                    <CurrentTime/> 
                    <div className="footerContent"> 
                        <ul className="footerPanels">
                            <li style={{backgroundColor:'rgba(100,100,10,0.4)'}}><Link to='home'>Home</Link></li>
                            <li><Link to="contactus">Contact</Link></li>
                            <li><Link to='apps'>Apps</Link></li>
                            <li><Link to='augmented'>AR (Aug-Reality)</Link></li>
                            <li><Link to='virtual'>VR (Vir-Reality)</Link></li>
                        </ul>
                        <div className="creditStrip">
                            <CreditStrip StripText="Iconography provided by FreePik, visit their website for more cool icons" Symbol={0} Color="#818181" BgColor='#211'/>
                        </div>
                    </div>
                    <TwitterLink/>
                    <EmailLink/>                
                </div>
                <CopyrightStrip/>
            </div>
            
        )
    }
}

export default Footer;