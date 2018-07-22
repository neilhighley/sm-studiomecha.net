import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/AllApps.css'

class AllApps extends Component{
    carouselItem(itemid,title,description){
        return(
            <div className='carouselItem' key={itemid}>
                <img alt={'item'+itemid} style={{height:"300px"}} src={'./images/app'+itemid+'.png')}/>
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
            <Carousel style={[...styles,{}]} showArrows={true}  >
                {this.carouselItems()}
            </Carousel>
            </div>
        )
    }
}

export default AllApps