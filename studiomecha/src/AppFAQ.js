import React,{Component} from 'react'
import "./styles/qa.css"
// function FAQList(props){
//     //console.log({"list":props.list})
//     const listItems=()=>props.list.map((m)=>{
//         <li><p style={{color:"white"}}>{m.question}</p>
//         <p>{m.answer}</p>
//         </li>})

//     return( <ul>{listItems()}</ul>)
// }
class AppFAQ extends Component{
    constructor(props){
        super(props);
    }
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