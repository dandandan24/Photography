import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { PinDropSharp } from '@material-ui/icons'
import Slide from '@material-ui/core/Slide'
import {connect , dispatch} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'


const EventWindow = (props) => {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    

    return(
        <Dialog fullScreen open = {props.open} onClose ={props.handleClose} TransitionComponent={Transition} style = {{  overflow : 'visible'}}>
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
        </Dialog>   
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventWindow)
