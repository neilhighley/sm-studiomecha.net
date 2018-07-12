import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/AllApps.css'
const images = require.context('../public/images', true);

class AllApps extends Component{
    carouselItem(itemid,title){
        return(
            <div  key={itemid}>
                <img alt={'item'+itemid} style={{height:"300px"}} src={images('./app'+itemid+'.png')}/>
                <p className={styles.legend}><Link to={'/apps/' + itemid} props={{id:itemid}}>{title}</Link></p>
                
            </div>
        )
    }
    carouselItems(){
        return(
           
            [this.carouselItem(1,'app1'),
            this.carouselItem(2,'app2'),
            this.carouselItem(3,'app3'),
            this.carouselItem(2,'app2'),
            this.carouselItem(1,'app1')]
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