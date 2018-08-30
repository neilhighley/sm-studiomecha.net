import React,{Component} from 'react'
import './styles/ContactUs.css'

const SelectArea=(ch)=>{
    let areas=["Please Select...",
    "We might need a Mobile Application",
    "I am interested in Augmented Reality",
    "Tell me more about Small Apps",
    "Can you help us with Training Materials",
    "What can I do with Virtual Reality",
    "Do you have more info on Mixed Reality",
    "Just a General Enquiry"
    ];
    return(
    <select title="What is your enquiry?" onChange={ch}>
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
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
        
        this.onChangeArea=this.onChangeArea.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(ev){
        console.log("Form submitted");
        var obj={name:this.state.FormSenderName,
            area:this.state.Area,
            message:this.state.FormMessage        }
        console.log(obj);
       ev.preventDefault();   
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
                <div className="intro">Thankyou for your consideration</div>
                <div className="instruct">Please fill out the form below, or call us on {this.props.SiteData.get("PHONE")}</div>
                
                <form className="contactForm" onSubmit={this.handleSubmit}>
                    <div className="formElement">{SelectArea(this.onChangeArea)}</div>
                    <div className="formElement"><textarea title="Don't forget to add your contact details" rows="5" cols="59" type="text" value={this.state.FormMessage} onChange={this.onChangeMessage}/></div>
                    
                   <div className="formElement"> <input type="submit" value="Send Message"/></div>
                </form>
            </div>
        )
    }
}

export default ContactUs