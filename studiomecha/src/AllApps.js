import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/AllApps.css'
import ErrorBoundary from './ErrorBoundary'
import PropTypes from 'prop-types';
import GetInTouch from './GetInTouch';

class AllApps extends Component{
    carouselItem(itemid,title,description,workDescription){
        return(
            <div className='carouselItem' key={itemid}>
                <img alt={description} style={{height:"40%"}} src={'./images/app'+itemid+'.png'}/>
                <div className={styles.legend}><Link to={'/apps/' + itemid} props={{id:itemid}}>{title}</Link></div>
                <div className='description'>{description}</div>
                <div className='work-description'>{workDescription}</div>
            </div>
        )
    }
    carouselItems(){
        return(
           this.props.apps.map(app=>this.carouselItem(app.Id,app.Title,app.Description,app.WorkDescription))
        )
    }

    render(){
        return(
            <div style={{maxWidth:'800px'}}>
                <ErrorBoundary>
                    <Carousel showArrows={true} 
                    autoPlay={true} infiniteLoop={true}
                    interval={4000} showIndicators={false}
                    showStatus={false} thumbWidth={100}
                    >
                        {this.carouselItems()}
                    </Carousel>
                </ErrorBoundary>
                <div className="appsDescription">
                    Above are a few selections of Apps that could help your business. 
                    Available styled for your companies brand and at reasonable prices, they will pay for themselves in no time. 
                </div>   
                <GetInTouch/>
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