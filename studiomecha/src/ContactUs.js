import React,{Component} from 'react'
import './styles/ContactUs.css'

const SelectArea=(ch)=>{
    let areas=["Please Select...",
    "We would like consultancy on AI in my business",
    "We might need a Mobile Application",
    "I am interested in Augmented Reality",
    "Tell me more about Small Apps",
    "Can you help us with Training Materials",
    "What can I do with Virtual Reality",
    "Do you have more info on Mixed Reality",
    "Just a General Enquiry"
    ];
    return(
    <select title="What is your enquiry?" name="query" onChange={ch}>
        {areas.map(e=><option key={e}>{e}</option>)}       
    </select>)
}

class ContactUs extends Component{
    constructor(props){
        super(props);
        this.state={
            FormSenderName:'',
            Area:'',
            FormMessage:''
        }
        this.formAction='https://www.briskforms.com/go/07f6b605e5794f0aa79530213049f2e6'
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        
        this.onChangeArea=this.onChangeArea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(ev){
        return true;
    }
    onChangeMessage(ev){
        this.setState({FormMessage:ev.target.value});
    }
    onChangeFullName(ev){
        this.setState({FormSenderName: ev.target.value});
    }
    onChangeArea(ev){
        this.setState({Area:ev.target.value});
    }
    render(){
        return(
           
            <div className="contactUs">
                <div className="contactUsIntro">Thankyou for your consideration</div>
                <div className="instruct">Please fill out the form below, or {this.props.SiteData.get("PHONE")}</div>
                <div className="contactForm">
                    <form onSubmit={this.handleSubmit} action={this.formAction} method="POST">
                        <div className="formElement">{SelectArea(this.onChangeArea)}</div>
                        <div className="formElement"><textarea name="request" title="Don't forget to add your contact details" rows="5" cols="59" 
                        type="text" 
                        value={this.state.FormMessage} 
                        onChange={this.onChangeMessage}/></div>
                        
                    <div className="formElement"> <input type="submit" value="Send Message"/></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ContactUs