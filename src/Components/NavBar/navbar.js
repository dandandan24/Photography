
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
    LogoMargin : {
        marginLeft: '3.7em',
        fontSize : 36,
        fontFamily : 'Grey Qo',
    },
    tabContainer : {
        marginLeft : 'auto'
    },
    tab : {
        textTransform : 'none',
        fontSize : 18,
        color : 'white',
        
    },
    blackTab : {
        textTransform : 'none',
        fontSize : 18,
        color : 'black',
        
    },
    cleanWhiteappBar: {
        position : 'fixed',
        zIndex : 10,
        boxShadow : 'none',
        background : 'none',
        color : 'white',
    },
    toolbarMargin : {
        ...theme.mixins.toolbar
    }

}))



const NavBar = (props) => {
    const classes = useStyles()
    const changeTab = (Tab) => {
        let scroller = Scroll.scroller
        if(Tab === 'About'){
            props.ChangeTab(0)
            scroller.scrollTo('About' , {
                duration : Math.abs(props.tab)*700,
                smooth : true
            })
            
        }
        if(Tab === 'Gallery'){
            props.ChangeTab(1)
            scroller.scrollTo('Gallery' , {
                duration : Math.abs(1 - props.tab)*700,
                smooth : true
            })
            
        }
        if(Tab === 'Events'){
            props.ChangeTab(2)
            scroller.scrollTo('Events' , {
                duration : Math.abs(2 - props.tab)*700,
                smooth : true
            })
        }
        if(Tab === 'Contact'){
            scroller.scrollTo('Contact' , {
                duration : Math.abs(3 - props.tab)*700,
                smooth : true
            })
            props.ChangeTab(3)
        }
    }

    return(
        <>
            <AppBar className = {props.tab === 0 ? classes.cleanappBar : props.tab === 1? classes.whitebackGround : props.tab === 2? classes.cleanWhiteappBar : classes.whitebackGround}>
                <Toolbar>
                   
                    <Typography variant="h6" className = {classes.LogoMargin}>
                        Revital
                    </Typography>      
                    <Tabs value = {props.tab} className = {classes.tabContainer}>
                        {props.labels.map( (label) => {
                            return(
                                <Tab onClick = {()=> {changeTab(label)}} label = {label} className = {props.tab === 0 ? classes.tab : props.tab === 1 ? classes.blackTab : props.tab === 2 ? classes.tab : classes.blackTab}></Tab>
                            )
                        })
                        }
                    </Tabs>
                </Toolbar>
            </AppBar>
            <div className = {classes.toolbarMargin}></div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        tab : state.flow.tab,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ChangeTab: (newTab) => dispatch({type : 'ChangeTab' , newTab : newTab}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)

