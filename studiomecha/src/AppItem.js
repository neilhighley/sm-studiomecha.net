import React,{Component} from 'react'
import AppFAQ from './AppFAQ'
import AppPrivacyPolicy from 'AppPrivacyPolicy'

class AppItem extends Component{

    constructor(props){
        super(props)
        let item=props.data;
        this.state={item:item}
        console.log(this.state.item)
    }
    getImage(img){
        return './'+img;

    }
    render(){
        return(
            <div className='app-view'>
                <img src={'/images/' + this.state.item.Image} height="80%" alt={this.state.item.Description}/>
                <h1 className='title'>{this.state.item.Name}</h1>
                <p className='description'>{this.state.item.Description}</p>
                <p className='workDescription'>{this.state.item.WorkDescription}</p>
                <p className='timeEstimate'>{this.state.item.TimeEstimate}</p>
                <p><AppPrivacyPolicy AppName={this.item.Name}/></p>
                <p><AppFAQ qa={this.state.item.Faq}/></p>
            </div>
        )
    }
}

export default AppItem