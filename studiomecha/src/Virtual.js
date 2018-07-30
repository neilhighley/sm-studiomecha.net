import React,{Component} from 'react'
import './styles/vr.css'

class Virtual extends Component{
    render(){
        return(
            <div className="vrPanel">
                <div className="panelImage">
                    <img src="./images/vr_1.png" alt="augmented reality example"/>
                </div>
                <div className="panelContent">
                    <p>
                        There is no other more immersive way to experience a scenario than in Virtual Reality. 
                        There are no interruptions or distractions when the experience is completely surrounding the participant.
                    </p>
                    <p>We can offer bespoke experiences to aid in Employee training or relaxation.</p>
                    <p>For more complex environments, we will work with partners to deliver the most immersive environments tailored to your business</p>
                </div>
            </div>
        )
    }
}

export default Virtual