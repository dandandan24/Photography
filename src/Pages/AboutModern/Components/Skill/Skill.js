import React from 'react'
import Grid from '@material-ui/core/Grid'
import Fade from 'react-reveal'
import Typography from '@material-ui/core/Typography'
import Icon  from '@material-ui/core/Icon'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    Skills: {
        alignItems : 'center',
        justifyContent : 'center',
        display : 'flex'
    },
    SkillesHeader:{
        alignItems : 'center',
        justifyContent : 'center',
        display : 'flex',
        marginTop: '0.5em',
    },
    SkillesSubText:{
        alignItems : 'center',
        justifyContent : 'center',   
        display : 'flex',
        marginTop: '0.5em',
        textAlign : 'center', 
    },
    SkillsSubText:{
        fontSize: '16px',
        color:'grey',
    },
    normalText : {
        fontSize : 22,
        fontVariant : 'h4',
        fontFamily : 'Quicksand',
        fontWeight : 'bold',
        color : 'black',
   },
}))



const Skill = (props) => {
    const classes = useStyles()

    return(
    <Grid container>
        <Grid item xs = {12} className = {classes.Skills}>
            {props.Icon}
        </Grid>
        <Grid item xs = {12} className = {classes.SkillesHeader} >
            <Fade bottom distance = '75px'>       
                <Typography className = {classes.normalText}>{props.Header}</Typography>
            </Fade>
        </Grid>       
        <Grid item xs = {12} className = {classes.SkillesSubText} >
            <Fade bottom distance = '75px'>       
                <Typography className = {classes.SkillsSubText}>{props.Text}</Typography>
            </Fade>
        </Grid>              
    </Grid>
    )
}

export default Skill