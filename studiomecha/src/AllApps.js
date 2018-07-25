import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/AllApps.css'
import ErrorBoundary from './ErrorBoundary'
import PropTypes from 'prop-types';

class AllApps extends Component{
    carouselItem(itemid,title,description){
        return(
            <div className='carouselItem' key={itemid}>
                <img alt={'item'+itemid} style={{height:"300px"}} src={'./images/app'+itemid+'.png'}/>
                <div className={styles.legend}><Link to={'/apps/' + itemid} props={{id:itemid}}>{title}</Link></div>
                <div className='description'>{description}</div>
                <br/><br/>
            </div>
        )
    }
    carouselItems(){
        return(
           this.props.apps.map(app=>this.carouselItem(app.Id,app.Title,app.Description))
        )
    }

    render(){
        return(
            <div style={{maxWidth:'800px'}}>
                <ErrorBoundary>
                    <Carousel showArrows={true}  >
                        {this.carouselItems()}
                    </Carousel>
                </ErrorBoundary>
            </div>
        )
    }
}

AllApps.defaultProps={
    apps:[{
        "Reference": "DefaultAppOne",
        "Name": "D App one",
        "Description": "The default one",
        "WorkDescription": "Description of app one default",
        "TimeEstimate": "Approximate time to deliver",
        "ImageThumbnail": "app1.png",
        "Image": "app1.png",
        "Id":"1"
    },
    {
        "Reference": "DefaultAppTwo",
        "Name": "D App Two",
        "Description": "The default two",
        "WorkDescription": "Description of app two default",
        "TimeEstimate": "Approximate time to deliver",
        "ImageThumbnail": "app2.png",
        "Image": "app2.png",
        "Id":"2"
    }]
}
AllApps.propTypes={
    apps:PropTypes.array
}

export default AllApps;