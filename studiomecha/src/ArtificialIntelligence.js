import React,{Component} from 'react'
import './styles/ai.css'
import GetInTouch from './GetInTouch'
import AIImage from './AIImage'

class ArtificialIntelligence extends Component{
    render(){
        return(
            <div className="aiPanel">
                <div className="panelImage">
                    <AIImage/>
                </div>
                <div className="panelContent">
                    <p>
                       The greatest challenge for modern businesses is to keep up with the pace of technology.<br/>
                          Artificial Intelligence is a technology that can help you to do that.<br/>
                          Whether it is to automate your customer service, create marketing content, or to help you to make better decisions, AI can help you to do that.<br/><br/>
                            We can help you to understand how AI can help you to grow your business.<br/>
                            <ul>
                                <li>Using Image Creation Apps</li>
                                <li>Generating Marketing materials</li>
                                <li>Creating a local Knowledge Robot using LLMs</li>
                                <li>Automating your customer service</li>
                            </ul>
                    </p>
                </div>
                <GetInTouch/>
            </div>
        )
    }
}

export default ArtificialIntelligence