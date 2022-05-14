
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import  {makeStyles} from '@material-ui/styles'
import { white } from 'material-ui/styles/colors'
import { connect , dispatch } from "react-redux"
import Scroll from 'react-scroll'
import disableScroll from 'disable-scroll'
import './navbar.css'
import {styled} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    cleanappBar : {
        position : 'fixed',
        zIndex : 10,
        boxShadow : 'none',
        background : 'none',
        color : 'white',
      
    },
    blackbackGround : {
        boxShadow : 'none',
        background : 'black',
        color : 'white'
    },
    whitebackGround : {
        backgroundColor : 'white',
        color : 'black'
    },
   
    tabContainer : {
        marginLeft : 'auto',
        
    },

    tab : {
        textTransform : 'none',
        fontSize : 18,
        color : 'white', 
        fontWeight : '300',
       
    },
    blackTab : {
        textTransform : 'none',
        fontSize : 18,
        color : 'black',
        
    },
    WhiteAppBar: {
        position : 'fixed',
        zIndex : 10,
        boxShadow : 'none',
        background : 'none',
        color : 'white',
    },
    BlackAppBar: {
        position : 'fixed',
        zIndex : 10,
        boxShadow : 'none',
        background : 'none',
        color : 'black',
    },
    toolbarMargin : {
        ...theme.mixins.toolbar
    }

}))

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



const NavBar = (props) => {
    const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
        ({ theme }) => ({
          textTransform: 'none',
          fontWeight: '300',
          fontSize: theme.typography.pxToRem(17),
          marginRight: theme.spacing(1),
          color: props.tab !== 1 &&  props.tab !== 4 ? 'rgba(255, 255, 255, 0.7)' : '#000',
          '&.Mui-selected': {
            color: props.tab !== 1 &&  props.tab !== 4  ? '#fff' : '#000',
          },
        
        }),
      );
    
    const classes = useStyles()
    const changeTab = (Tab) => {
        let scroller = Scroll.scroller
        if(Tab === 'Home'){
            scroller.scrollTo('Home' , {
                duration : Math.abs(props.tab)*700,
                smooth : true
            })
            props.ChangeTab(0)
        }
        if(Tab === 'About'){
            props.ChangeTab(1)
            scroller.scrollTo('About' , {
                duration : Math.abs(1 - props.tab)*700,
                smooth : true
            })
            
        }
        if(Tab === 'Gallery'){
           props.handleOpen()
        }
        if(Tab === 'Events'){
            props.ChangeTab(3)
            scroller.scrollTo('Events' , {
                duration : Math.abs(3 - props.tab)*700,
                smooth : true
            })
        }
        if(Tab === 'Contact'){
            scroller.scrollTo('Contact' , {
                duration : Math.abs(4 - props.tab)*700,
                smooth : true
            })
            props.ChangeTab(4)
        }
       
    }

    return(
        <>
            <AppBar className = {props.tab !== 1 &&  props.tab !== 4? classes.WhiteAppBar : classes.BlackAppBar} /*{props.tab === 0 ? classes.cleanappBar : props.tab === 1 ? classes.cleanappBar : props.tab === 2? classes.whitebackGround : props.tab === 3? classes.cleanWhiteappBar : classes.whitebackGround}*/> 
                <Toolbar>
                    <p className = 'LogoMargin'>
                        Revital 
                    </p>      
                    <StyledTabs value = {props.tab} className = {classes.tabContainer}>
                        {props.labels.map( (label) => {
                            return(
                                label === 'Gallery' ? 
                                <StyledTab onClick = {()=> {changeTab(label)}} label = {label} style = {{color : '#F1BDAF'}}></StyledTab>
                                :
                                <StyledTab onClick = {()=> {changeTab(label)}} label = {label} className = {classes.blackTab}></StyledTab>
                            
                            )
                        })
                        }
                    </StyledTabs>
                </Toolbar>
            </AppBar>
            <div className = {classes.toolbarMargin}></div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        tab : state.flow.tab,
        open : state.flow.openGallery,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ChangeTab: (newTab) => dispatch({type : 'ChangeTab' , newTab : newTab}),
        handleClose : () => dispatch({type : 'handleClose'}),
        handleOpen : () => dispatch({type : 'handleOpen'}),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

