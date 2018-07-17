import React,{Component} from 'react'
import './styles/ContactUs.css'

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
                <div className="intro">Thankyou for your consideration<br/>
                Please fill out the form below, or call us on {this.props.SiteData.get("PHONE")}</div>
                <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.FormSenderName} onChange={this.onChange}/>
                <input type="submit" value="send"/>
                </form>
            </div>
        )
    }
}

export default ContactUs