import React, { useState } from 'react'
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
import {connect , dispatch} from 'react-redux'
import EventWindow from '../../Components/EventWindow/EventWindow'
import ChildHood from './Images/ChildHoodV.jpg'
import ChildHoodBlack from './Images/ChildHoodBlack.jpg'
import NewBorn from './Images/NewBornV.jpg'
import Couple from './Images/CoupleV.jpg'
import BatMitzva from './Images/BatMitzvaV.jpg'
import Figure from './Images/FigureV.jpg'
import Family from './Images/FamilyV.jpg'


const Events = (props) => {
    
    
    const [leftRadioChecked , setleftRadioChecked] = useState(false)
    const [RightRadioChecked , setRightRadioChecked] = useState(false)

    const ActivateLeft = () => {
        setleftRadioChecked(true)
        setRightRadioChecked(false)
    }

    const ActivateRight = () => {
        setleftRadioChecked(false)
        setRightRadioChecked(true)
    }

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

                    
                    <div className = "headline-overlay"></div>

                    <div className = 'right-button'>
                        <IconButton size="medium" color= "white" style = {{backgroundColor : 'rgba(0,0,0,0.5)' , color : 'white'}}  onClick = {() => {ActivateRight()}}>
                            <ChevronRightIcon fontSize = 'large' />
                        </IconButton>
                    </div>

                    <div className = 'left-button'>
                        <IconButton size="medium" color= "white" style = {{backgroundColor :  'rgba(0,0,0,0.5)' , color : 'white'}} onClick = {() => {ActivateLeft()}}>
                        <ChevronLeftIcon fontSize = 'large'></ChevronLeftIcon>
                        </IconButton>
                    </div> 

                    <input type = 'radio' name = "radui-btn" id = "radio1" checked = {leftRadioChecked} style = {{display : 'none'}}></input>
                    <input type = 'radio' name = "radui-btn" id = "radio2" checked = {RightRadioChecked}  style = {{display : 'none'}}></input>
             
              
                    <div className = "slide first">
                        <div className = 'img-container' onClick = {() => {props.handleOpen(ChildHoodBlack ,'ילדות' )}}>   
                            <img src = {ChildHood}/> 
                            <div className = 'text-overlay'>
                                <span>
                                    ChildHood
                                </span>
                            </div>
                        </div>
                        <div className = 'img-container' onClick = {() => {props.handleOpen(NewBorn ,'תינוק חדש' )}}> 
                            <img src = {NewBorn}/> 
                            <div className = 'text-overlay'>
                                <span>
                                    New Born
                                </span>
                            </div>
                        </div>
                        <div className = 'img-container' onClick = {() => {props.handleOpen(Couple,'זוגיות')}}>
                            <img src = {Couple}/> 
                            <div className = 'text-overlay'>
                                <span>
                                    Couples
                                </span>
                            </div>
                        </div>
                        <div className = 'img-container' onClick = {() => {props.handleOpen(BatMitzva,'בוק בת מצווה' )}}>   
                            <img src = {BatMitzva}/> 
                            <div className = 'text-overlay'>
                                <span>
                                    Bat Mitzva
                                </span>
                            </div>
                        </div>
                        </div>

                    <div className = "slide">
                        <div className = 'img-container' onClick = {() => {props.handleOpen(Figure ,'צילומי תדמית' )}}>   
                            <img src = {Figure}/> 
                            <div className = 'text-overlay'>
                                <span>
                                    Figure
                                </span>
                            </div>
                        </div>
                        <div className = 'img-container' onClick = {() => {props.handleOpen(NewBorn,'הריון' )}}>
                            <img src = {NewBorn}/> 
                            <div className = 'text-overlay'>
                                <span>
                                    Pregnancy
                                </span>
                            </div>
                        </div>
                        <div className = 'img-container' onClick = {() => {props.handleOpen(Family,'משפחה' )}}>
                            <img src = {Family}/> 
                            <div className = 'text-overlay'>
                                <span>
                                    Family
                                </span>
                            </div>
                        </div>
                        <div className = 'img-container' onClick = {() => {props.handleOpen(Couple,'תאריך חתונה' )}}>   
                            <img src = {Couple}/> 
                            <div className = 'text-overlay'>
                                <span>
                                    Save the Date
                                </span>
                            </div>
                        </div>
                        </div>
            </div>

                    {props.open?
                <EventWindow source = {props.Source} title = {props.Title}>
                </EventWindow>  
                : <></>
        }
        </Element>
    )
}

const mapStateToProps = (state) => {
    return {
        open : state.flow.openEvent,
        Source : state.flow.Source,
        Title : state.flow.Title
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClose : () => dispatch({type : 'handleCloseEvent'}),
        handleOpen : (newSource , newTitle) => dispatch({type : 'handleOpenEvent' , Source : newSource , Title : newTitle}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Events)