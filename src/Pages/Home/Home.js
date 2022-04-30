import Typography from '@material-ui/core/Typography'
import React from 'react'
import NavBar from '../../Components/NavBar/navbar'
import { makeStyles } from '@material-ui/core'
import { Subheader } from 'material-ui'
import { Element} from 'react-scroll'
import Fade from 'react-reveal'
import Zoom from 'react-reveal'
import Reveal from 'react-reveal'
import './Home.css'
import HomeBackground from '../../Images/HomeBackGround.jpg'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
   Header : {
       fontSize : 52,
       fontFamily : 'Obliqua Sans',
       fontWeight : 'normal',
       marginTop : '4em',
       fontVariant : 'h6',
       color : 'white'
   },
   Subheader : {
       fontSize : 32,
       fontWeight : 'bold',
       fontFamily : 'Roboto',
       marginTop : '1em', 
       fontVariant : 'h4',
       color : 'white',
       maxWidth : '17em'
   },
   normalText : {
        fontSize : 28,
        marginTop : '3em',
        fontVariant : 'h4',
        fontFamily : 'Roboto',
        color : 'black',
        maxWidth : '17em'
   },
   textBox : {
       marginLeft : '10em',
       marginBottom : '7em',
        height : '100%'
   }

  
}))
const About = () => {
    const classes = useStyles()
    return(
       
        <Element name="Home">
            <div className='BackGroundImage'>
          
            <NavBar labels = {['Home', 'About' , 'Gallery' ,'Events', 'Contact']} clean = {true}></NavBar>
            <div className = 'textBox'>
            <div className = 'HeaderContainer'>
            <Fade top distance = '130px' ><p className = 'Header'>Capture</p><p className = 'HeaderSpecial'>Lasting</p><p className = 'Header'>Memories</p></Fade>
            </div>
            <Fade top distance = '70px' >  <p className = 'SubHeader'>
                    Make your events, expriences and moments to live memories for years to come</p></Fade>
            <Fade bottom distance = '130px'>
                <Button variant='outlined' style = {{color : '#F1BDAF', borderColor : '#F1BDAF',borderWidth : '3px',marginTop : '2em', textTransform : 'none', fontSize : '18px', fontWeight : 'bold'}}>Show Gallery</Button>
            </Fade>
            </div>
            </div>
           
           
        </Element>
      
        
    )
}

export default About