import Typography from '@material-ui/core/Typography'
import React from 'react'
import NavBar from '../../Components/NavBar/navbar'
import Background from '../../Images/background.png'
import { makeStyles } from '@material-ui/core'
import { Subheader } from 'material-ui'
import { Element} from 'react-scroll'

const useStyles = makeStyles(theme => ({
   Header : {
       fontSize : 52,
       fontWeight : 'bold',
       marginTop : '2em',
       fontVariant : 'h6',
       color : 'white'
   },
   Subheader : {
       fontSize : 32,
       fontWeight : 'bold',
       marginTop : '1em', 
       fontVariant : 'h4',
       color : 'white'
   },
   normalText : {
        fontSize : 28,
        marginTop : '3em',
        fontVariant : 'h4',
        color : 'white',
        maxWidth : '17em'
   },
   textBox : {
       marginLeft : '10em',
       marginBottom : '7em'
   }
}))
const About = () => {
    const classes = useStyles()
    return(
        
        <div style = {{backgroundImage : `url(${Background})`,margin : '0px',minWidth : '100%' , minHeight : '100%', backgroundSize : 'cover' , backgroundPosition : 'center'}}>
          <Element name="About">
            <NavBar labels = {['About' , 'Gallery' ,'Events', 'Contact']} clean = {true}></NavBar>
            <div className = {classes.textBox}>
                <Typography className = {classes.Header}>Hi, i am Revital</Typography>
                <Typography className = {classes.Subheader}>Event photographer</Typography>
                <Typography className = {classes.normalText}>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore 
                et dolore magna aliqua. 
                Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. </Typography>
            </div>
            </Element>
        </div>
       
        
    )
}

export default About