import React,{Component} from 'react';
import TwitterLink from './TwitterLink'
import EmailLink from './EmailLink.js'
import './styles/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="appFooter">
                <div className="footerPanels" >
                        <ul>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        </ul>    
                    <ul>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        </ul>
                    <ul>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        <li>Some stuff</li>
                        </ul>
                    <p><TwitterLink/>
                    <EmailLink/></p>
                </div>
                <div className="base">
                 <span className="baseContent">&copy; STUDIOMECHA 2018 </span>
                    <span className="baseContent">&copy; STUDIOMECHA 2018 </span>
                    <span className="baseContent">&copy; STUDIOMECHA 2018 </span>
                    <span className="baseContent">&copy; STUDIOMECHA 2018 </span>
                    <span className="baseContent">&copy; STUDIOMECHA 2018 </span>
                    <span className="baseContent">&copy; STUDIOMECHA 2018 </span>
                    <span className="baseContent">&copy; STUDIOMECHA 2018 </span>
                    <span className="baseContent">&copy; STUDIOMECHA 2018 </span>
                    <span className="baseContent">&copy; STUDIOMECHA 2018 </span>
                </div>
            </div>
        )
    }
}

export default Footer;