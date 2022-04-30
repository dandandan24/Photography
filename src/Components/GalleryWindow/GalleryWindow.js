import React from 'react'
import {useEffect} from 'react'
import './GalleryWindow.css'
import Dialog from '@material-ui/core/Dialog'
import { PinDropSharp } from '@material-ui/icons'
import SlideUp from '@material-ui/core/Slide'
import {connect , dispatch} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import  {makeStyles} from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import Fade from 'react-reveal'
import {styled} from '@material-ui/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Toolbar from '@material-ui/core/Toolbar'

const useStyles = makeStyles(theme => ({
    cleanappBar : {
      
        position : 'fixed',
        zIndex : 10,
        boxShadow : 'none',
        background : 'none',
        color : 'white',
      
    },
    tabContainer : {
        marginLeft : 'auto',

    },
    toolbarMargin : {
        ...theme.mixins.toolbar
    }

}))

const GalleryWindow = (props) => {
    const classes = useStyles()
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <SlideUp direction="up" ref={ref} {...props} />;
      });

      const StyledTabs = styled((props) => (
        <Tabs
          {...props}
          TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
      ))({
        '& .MuiTabs-indicator': {
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        },
        '& .MuiTabs-indicatorSpan': {
          maxWidth : 40,
          width: '100%',
          backgroundColor: '#F1BDAF',
          
        },
      });
    
    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
          textTransform: 'none',
          fontWeight: theme.typography.fontWeightRegular,
          fontSize: theme.typography.pxToRem(17),
          marginRight: theme.spacing(1),
          color: '#000',
          '&.Mui-selected': {
            color: '#000',
          },
        
        }),
      );

    return(
        <Dialog fullScreen open = {props.open} onClose ={props.handleClose} TransitionComponent={Transition} style = {{  overflow : 'visible'}}>
             {/* <AppBar sx={{ position: 'relative'}} style= {{background : 'none' , color : 'black' , boxShadow : 'none'}}>
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
            </AppBar> */}
          
            <div className = "gallery-container">
                <div className = "heading">                 
                    <div className = 'GalleryHeadline'>
                        <p>Photo Gallery</p>
                    </div>
                </div>
                <div style = {{marginBottom : '7%'}}>
                    <StyledTabs value = {props.tab} className = {classes.tabContainer}>
                        {/* {props.labels.map( (label) => {
                            return(
                                <StyledTab onClick = {()=> {changeTab(label)}} label = {label} className = {props.tab === 0 ? classes.tab : props.tab === 1 ? classes.tab : props.tab === 2 ? classes.blackTab : props.tab === 3 ? classes.tab : classes.blackTab}></StyledTab>
                            )
                        })
                        } */}                 
                        <StyledTab label = 'Figure'></StyledTab>
                        <StyledTab label = 'New Born'></StyledTab>
                        <StyledTab label = 'Couples'></StyledTab>
                        <StyledTab label = 'Bat Mitzva'></StyledTab>
                    </StyledTabs>
                </div>
                <div className = "box2">
                    <div className =  "dream">
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/1.jpg"></img>
                        </Fade>                                                                                
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/2.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/3.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/4.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/5.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/1.jpg"></img>
                        </Fade>                                                                                
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/2.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/3.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/4.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/5.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/1.jpg"></img>
                        </Fade>                                                                                
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/2.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/3.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/4.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/5.jpg"></img>
                        </Fade> 
                    </div>
                    <div className =  "dream">                            
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/6.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/7.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/8.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/9.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/10.jpg"></img>
                        </Fade>     
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/6.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/7.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/8.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/9.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/10.jpg"></img>
                        </Fade>                          
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/6.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/7.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/8.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/9.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/10.jpg"></img>
                        </Fade>    
                    </div>    
                    <div  className =  "dream">
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/11.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/12.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/13.jpg"></img>
                        </Fade>
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/14.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/15.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/11.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/12.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/13.jpg"></img>
                        </Fade>
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/14.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/15.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/11.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/12.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/13.jpg"></img>
                        </Fade>
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/14.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/15.jpg"></img>
                        </Fade> 
                    </div>          
                    <div  className =  "dream">
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/11.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/12.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/13.jpg"></img>
                        </Fade>
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/14.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/15.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/11.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/12.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/13.jpg"></img>
                        </Fade>
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/14.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/15.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/11.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/12.jpg"></img>
                        </Fade> 
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/13.jpg"></img>
                        </Fade>
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/14.jpg"></img>
                        </Fade>                      
                        <Fade bottom distance = '85px'>
                            <img src = "./images2/15.jpg"></img>
                        </Fade> 
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
