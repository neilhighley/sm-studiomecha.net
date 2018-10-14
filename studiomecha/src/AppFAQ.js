import React,{Component} from 'react'
import "./styles/qa.css"

class AppFAQ extends Component{
    render(){
        return(<div className="faqcomponent">
                <p className="faqheader">Frequently Asked Questions</p>
               <ul className="qalist">
                   {this.props.qa.map(m=>
        <li><p className="question">{m.question}</p>
        <p className="answer">{m.answer}</p>
        </li>)}
               </ul>
            </div>)
    }
}
export default AppFAQ;