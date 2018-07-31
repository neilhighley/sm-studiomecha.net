import React,{Component} from 'react'
import './styles/ContactUs.css'

const SelectArea=(ch)=>{
    return(
    <select onChange={ch}>
        <option value="1">Mobile Applications</option>
        <option value="2">Augmented Reality</option>
        <option value="3">Small Apps</option>
        <option value="4">Virtual Reality</option>
        <option value="5">General Enquiry</option>        
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
        console.log(ev.target);
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
                <div className="intro">Thankyou for your consideration</div>
                <div className="instruct">Please fill out the form below, or call us on {this.props.SiteData.get("PHONE")}</div>
                
                <form className="contactForm" onSubmit={this.handleSubmit}>
                <div className="formElement"><p>Your Name</p><input type="text" value={this.state.FormSenderName} onChange={this.onChangeFullName}/></div>
                    <div className="formElement"><p>Area of Interest</p>{SelectArea(this.onChangeArea)}</div>
                    <div className="formElement"><p>Message</p><input type="text" value={this.state.FormMessage} onChange={this.onChangeMessage}/></div>
                    
                   <div className="formElement"> <input type="submit" value="Send Message"/></div>
                </form>
            </div>
        )
    }
}

export default ContactUs