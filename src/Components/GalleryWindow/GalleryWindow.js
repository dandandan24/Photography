import React from 'react'
import './GalleryWindow.css'
import Dialog from '@material-ui/core/Dialog'
import { PinDropSharp } from '@material-ui/icons'
import Slide from '@material-ui/core/Slide'
import {connect , dispatch} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'


const GalleryWindow = (props) => {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    

    return(
        <Dialog fullScreen open = {props.open} onClose ={props.handleClose} TransitionComponent={Transition}>
             <AppBar sx={{ position: 'relative'}} style= {{background : 'none' , color : 'black' , boxShadow : 'none'}}>
                <ToolBar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    onClick={props.handleClose}
                    aria-label="close"
                    style= {{backgroundColor : 'white' , marginLeft : '20px'}}
                    >
                    <Close />
                    </IconButton>
                </ToolBar>
            </AppBar>
            <div className = "container">
                <div className = "heading">
                    <h3>Photo <span>Gallery</span></h3>
                </div>
                <div className = "box2">
                    <div className =  "dream">
                        <img src = "./images2/1.jpg"></img>                                                                 
                        <img src = "./images2/2.jpg"></img>
                        <img src = "./images2/3.jpg"></img>
                        <img src = "./images2/4.jpg"></img>
                        <img src = "./images2/5.jpg"></img>
                    </div>
                    <div className =  "dream">
                        <img src = "./images2/6.jpg"></img>
                        <img src = "./images2/7.jpg"></img>
                        <img src = "./images2/8.jpg"></img>
                        <img src = "./images2/9.jpg"></img>
                        <img src = "./images2/10.jpg"></img>
                    </div>
                    <div className =  "dream">
                        <img src = "./images2/11.jpg"></img>
                        <img src = "./images2/12.jpg"></img>
                        <img src = "./images2/13.jpg"></img>
                        <img src = "./images2/14.jpg"></img>
                        <img src = "./images2/15.jpg"></img>
                    </div>
                </div>
            </div>
        </Dialog>
        

    )
}

const mapStateToProps = (state) => {
    return {
        open : state.flow.openGallery,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClose : () => dispatch({type : 'handleClose'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GalleryWindow)
