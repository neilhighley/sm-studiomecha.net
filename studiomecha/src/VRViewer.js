import React,{Component} from 'react'

class VRViewer extends Component{
    constructor(props){
        super(props)
        let routeId=this.props.match.params.id;
         this.state={exampleId:routeId}
    }
    render(){
        return(<div>Some VR</div>)
    }
}

export default VRViewer