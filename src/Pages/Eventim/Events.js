import Typography from '@material-ui/core/Typography'
import React from 'react'
import NavBar from '../../Components/NavBar/navbar'
import './Events.css'
import { makeStyles } from '@material-ui/core'
import zIndex from '@material-ui/core/styles/zIndex'
import { Element } from 'react-scroll'
import Button from '@material-ui/core/Button'
import EventWindow from '../../Components/EventWindow/EventWindow'
import {connect , dispatch} from 'react-redux'

const useStyles = makeStyles(theme => ({
    Typo : {
        position : 'relative',
        fontSize : 24,
        color : 'white',
        zIndex : 10 ,
        textAlign : 'center',
        top : '80%'
        
    },
    hoverTypo : {
        position : 'relative',
        fontSize : 24,
        color : 'white',
        zIndex : 10 ,
        textAlign : 'center',
        top : '25%'   
    },
}))

const Events = (props) => {
    const classes = useStyles()
    return(
        <Element name="Events">
        <div style = {{position : 'relative'}}>
          
            {/* <NavBar labels = {['About' , 'Gallery' ,'Events', 'Contact']} clean = {true}></NavBar> */}
            <body className = "body">
                <div className = "box">
                   
                    <span className = 'span1'>
                        <img src = './Images/1.png'/>
                        <Typography className = {classes.Typo}>ChildHood</Typography> 
                        <p className = "hoverTypo">Click To More Info</p> 
                        <Button onClick = {() => {props.handleOpen()}} 
                                style = {{height: '100%', width : '100%' , bottom : '30%'}}
                                event = 'childhood'>            
                        </Button>
                    </span>
                    <span  className = 'span2'>
                        <img src = './Images/2.png'/>
                        <Typography className = {classes.Typo}>Pregnancy</Typography>
                        <p className = "hoverTypo">Click To More Info</p> 
                        <Button onClick = {() => {props.handleOpen()}} 
                                style = {{height: '100%', width : '100%' , bottom : '30%'}}
                                event = 'Pregnancy'>            
                        </Button>
                    </span>
                    <span  className = 'span3'>
                        <img src = './Images/3.png'/>
                        <Typography className = {classes.Typo}>Bat Mitzva</Typography>
                        <p className = "hoverTypo">Click To More Info</p> 
                        <Button onClick = {() => {props.handleOpen()}} 
                                style = {{height: '100%', width : '100%' , bottom : '30%'}}
                                event = 'Bat Mitzva'>            
                        </Button>
                    </span>
                    <span  className = 'span4'>
                        <img src = './Images/4.png'/>
                        <Typography className = {classes.Typo}>Couples</Typography>
                        <p className = "hoverTypo">Click To More Info</p> 
                        <Button onClick = {() => {props.handleOpen()}} 
                                style = {{height: '100%', width : '100%' , bottom : '30%'}}
                                event = 'Couples'>            
                        </Button>
                    </span>
                    <span  className = 'span5'>
                        <img src = './Images/5.png'/>
                        <Typography className = {classes.Typo}>Save The Date</Typography>
                        <p className = "hoverTypo">Click To More Info</p> 
                        <Button onClick = {() => {props.handleOpen()}} 
                                style = {{height: '100%', width : '100%' , bottom : '30%'}}
                                event = 'Save The Date'>            
                        </Button>
                    </span>
                    <span  className = 'span6'>
                        <img src = './Images/6.png'/>
                        <Typography className = {classes.Typo}>New Born</Typography>
                        <p className = "hoverTypo">Click To More Info</p> 
                        <Button onClick = {() => {props.handleOpen()}} 
                                style = {{height: '100%', width : '100%' , bottom : '30%'}}
                                event = 'New Born'>            
                        </Button>
                    </span>
                    <span  className = 'span7'>
                        <img src = './Images/7.png'/>
                        <Typography className = {classes.Typo}>Family</Typography>
                        <p className = "hoverTypo">Click To More Info</p> 
                        <Button onClick = {() => {props.handleOpen()}} 
                                style = {{height: '100%', width : '100%' , bottom : '30%'}}
                                event = 'Family'>            
                        </Button>
                    </span>
                    <span  className = 'span8'>
                        <img src = './Images/8.png'/>
                        <Typography className = {classes.Typo}>ChildHood</Typography>
                        <p className = "hoverTypo">Click To More Info</p> 
                        <Button onClick = {() => {props.handleOpen()}} 
                                style = {{height: '100%', width : '100%' , bottom : '30%'}}
                                event = 'ChildHood'>            
                        </Button>
                    </span>
                </div>
            </body>
           
           
           
        </div>
        {props.open?
            <EventWindow>
            </EventWindow>  
            : <></>
        }
          
        </Element>
    )
}

const mapStateToProps = (state) => {
    return {
        open : state.flow.openEvent,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClose : () => dispatch({type : 'handleCloseEvent'}),
        handleOpen : () => dispatch({type : 'handleOpenEvent'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Events)