import React from 'react'
import './Events.css'
import { Element } from 'react-scroll'
import Grid from '@material-ui/core/Grid'
import Slide from 'react-reveal'
import Fade from 'react-reveal'
const Events = () => {
    return(
        <Element name="Events">
            <div className = "container-Events">
                <div className = "heading">
                    <h1>What Can I Capture For You</h1>
                </div>
                <div className = "box3">
                    <div className =  "dream2">
                        <Slide style = {{overflow : 'hidden'}} top>
                            <div>
                                <img src = './Images/Save.png'/>                             
                            <div className = 'Card-overlay'>
                                    <h2 style = {{fontWeight : 'normal'}}>Save The Date</h2>
                                </div>                                
                            </div>    
                        </Slide>   
                        <Slide top>
                            <div>
                                <img src = './Images/ChildHood.png'/> 
                                <div className = 'Card-overlay'>
                                    <h2 style = {{fontWeight : 'normal'}}>ChildHood</h2>
                                </div>
                            </div>              
                        </Slide>   
                    </div>
                    <div className =  "dream2">      
                        <Slide top>
                            <div>
                                <img src = './Images/Figure.png'/>
                                <div className = 'Card-overlay'>
                                    <h2 style = {{fontWeight : 'normal'}}>Figure</h2>
                                </div>
                            </div>                        
                        </Slide>   
                        <Slide top>
                            <div>
                            <img src = './Images/NewBorn.png'/> 
                            <div className = 'Card-overlay'>
                                    <h2 style = {{fontWeight : 'normal'}}>New Born</h2>
                                </div>
                            </div>                       
                        </Slide>               
                    </div>      
                    <div className =  "dream2">      
                        <Slide top>
                            <div>
                            <img src = './Images/BatMitzva.png'/>
                            <div className = 'Card-overlay'>
                                    <h2 style = {{fontWeight : 'normal'}}>Bat Mitzva</h2>
                                </div>
                            </div>      
                        </Slide>   
                        <Slide top>
                            <div>
                                <img src = './Images/Couple.png'/> 
                                
                                <div className = 'Card-overlay'>
                                    <h2 style = {{fontWeight : 'normal'}}>Couple</h2>
                                </div>
                            </div>              
                        </Slide>                    
                    </div>          
                </div>
            </div>     
        </Element>

       
       
    )
    
}

export default Events