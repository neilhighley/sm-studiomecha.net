import React, {Component} from 'react'
import './styles/aug.css'

class Augmented extends Component{
    render(){
        return(
            <div className="augPanel">
                <img src="./images/aug_1.png" alt="augmented reality example"/>
                <div>
                    <p>Augmented reality is a Three Dimensional overlay on real world scenes. Made famous in gaming terms by Pokemon Go,
                         but with a wide variety of applications, from interactively expanding the meaning of a sign or symbol in the workplace, 
                    and showing a customer what their purchase will look like in real life, <strong>Augmented reality can communicate concepts in a familiar and quick way</strong>.</p>
                    <p>We can produce a single function augmented application that can help your employee training, with the use of real-world overlays to show 
                        video over a particular task, 
                        or name specific parts of equipment when a phone or tablet camera is pointed at them.</p>
                    <p></p><p>In an industrial setting, AR can be used to help onboard new employees, giving them useful, context specific information to 
                        help train and integrate them into your existing workforce.AR can also be used to help organise equipment and request repairs directly 
                        from the location required.
                    Augmented Reality can be more intuitive than a full immersive experience, such as Virtual Reality, but when used well can boost 
                    productivity and educate your workforce in a comfortable way.</p>
                </div>
            </div>
        )
    }
}
export default Augmented;