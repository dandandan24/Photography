import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import { Element } from 'react-scroll'
import './Events.css'
import { IconButton } from '@material-ui/core'
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ReactPlayer from 'react-player';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';




const Events = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(
        <Element name="Events">
            <div className = 'container'>
                <div className = 'headline-overlay'>
                    <span>
                        What can i capture for you?
                    </span>                 
                </div>
                 {/* <div className='headline-overlay'>
                    <ReactPlayer
                    className='react-player fixed-bottom'
                    url= './Images/handwrite.MP4'
                    width='100%'
                    height='100%'
                    controls = {true}
                    
                    />
                </div> */}
                
                <div className = 'right-button'>
                    <IconButton size="medium" color= "white" style = {{backgroundColor : 'rgba(0,0,0,0.5)' , color : 'white'}}>
                        <ChevronRightIcon fontSize = 'large' />
                    </IconButton>
                </div>

                <div className = 'left-button'>
                    <IconButton size="medium" color= "white" style = {{backgroundColor :  'rgba(0,0,0,0.5)' , color : 'white'}}>
                      <ChevronLeftIcon fontSize = 'large'></ChevronLeftIcon>
                    </IconButton>
                </div>       
                <div className = 'img-container'>   
                    <img src = './Images/ChildHood.png'/> 
                    <div className = 'text-overlay'>
                        <span>
                            ChildHood
                        </span>
                </div>
                </div>
                <div className = 'img-container'>
                    <img src = './Images/NewBorn.png'/> 
                    <div className = 'text-overlay'>
                        <span>
                            New Born
                        </span>
                    </div>
                </div>
               <div className = 'img-container'>
                    <img src = './Images/Couple.png'/> 
                    <div className = 'text-overlay'>
                        <span>
                            Couples
                        </span>
                    </div>
                </div>
           
            </div>
        </Element>
    )
}

export default Events