import React,{Component} from 'react'

class AppItem extends Component{

    constructor(props){
        super(props)
        let item=props.data;
        this.state={item:item}
    }
    getImage(img){
        return {'./'+img+".png");

    }
    render(){
        return(
            <div className='app-view'>
                <img src={this.getImage(this.state.item.Image)} alt={this.state.item.Description}/>
                <h1 className='title'>{this.state.item.Name}</h1>
                <p className='description'>{this.state.item.Description}</p>
                <p className='workDescription'>{this.state.item.WorkDescription}</p>
                <p className='timeEstimate'>{this.state.item.TimeEstimate}</p>
            </div>
        )
    }
}

export default AppItem