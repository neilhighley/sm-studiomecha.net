import React,{Component} from 'react';
import TwitterLink from './TwitterLink'
import EmailLink from './EmailLink.js'
import CopyrightStrip from './CopyrightStrip'
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
                <CopyrightStrip/>
            </div>
        )
    }
}

export default Footer;