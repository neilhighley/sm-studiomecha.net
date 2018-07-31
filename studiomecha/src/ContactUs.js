import React,{Component} from 'react'
import './styles/ContactUs.css'

const SelectArea=()=>{
    return(
    <select>
        <option>Stuff</option>
        <option>Nonsense</option>
    </select>)
}

class ContactUs extends Component{
    constructor(props){
        super(props);
        this.state={
            FormSenderName:''
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleSubmit(ev){
        console.log(ev.target);
        return false;   
    }
    onChange(ev){
        this.setState({FormSenderName: ev.target.value});
    }
    render(){
        return(
           
            <div className="contactUs">
                <div className="intro">Thankyou for your consideration</div>
                <div className="instruct">Please fill out the form below, or call us on {this.props.SiteData.get("PHONE")}</div>
                
                <form className="contactForm" onSubmit={this.handleSubmit}>
                    <div className="formElement"><p>Your Name</p><input type="text" value={this.state.FormSenderName} onChange={this.onChange}/></div>
                    <div className="formElement"><p>Area of Interest</p>{SelectArea()}</div>
                   <div className="formElement"> <input type="submit" value="Send Message"/></div>
                </form>
            </div>
        )
    }
}

export default ContactUs