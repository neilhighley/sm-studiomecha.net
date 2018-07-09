import React,{Component} from 'react';
import TwitterLink from './TwitterLink'
import EmailLink from './EmailLink.js'
import './styles/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="appFooter">
                <p>
                    <ul>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    </ul>    
                </p>
                <p>
                <ul>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    </ul>
                </p>
                <p>
                <ul>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    <li>Some stuff</li>
                    </ul>
                </p>
                <p><TwitterLink/>
                <EmailLink/></p>
                <div class="copyright">&copy; studiomecha 2018 <EmailLink type="text"/></div>
            </div>
        )
    }
}

export default Footer;