import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
//import 'style!css!react-responsive-carousel/lib/styles/carousel.css';
const images = require.context('../public/images', true);

class AllApps extends Component{

    carouselItem(itemid){
        return(
            <div>
                <img alt={'item'+itemid} src={images('./app'+itemid+'.png')}/>
                <p class='legend'>App {itemid}</p>
            </div>
        )
    }
    carouselItems(){
        return(
            [this.carouselItem(1),
            this.carouselItem(2),
            this.carouselItem(3),
            this.carouselItem(2),
            this.carouselItem(1)]
        )
    }

    render(){
        return(
            <div>
                <Carousel style={[...styles,{width:'250px'}]} showArrows={true}  >
                    {this.carouselItems()}
                </Carousel>
                <hr/>
                <ul>
                    <li><Link to='/apps/1' props={{id:1}}>App one</Link></li>
                    <li><Link to='/apps/2'>App two</Link></li>
                    <li><Link to='/apps/3'>App three</Link></li>
                </ul>
            </div>
        )
    }
}

export default AllApps