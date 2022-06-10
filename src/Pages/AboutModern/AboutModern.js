import Typography from '@material-ui/core/Typography'
import React from 'react'
import NavBar from '../../Components/NavBar/navbar'
import Background from '../../Images/background.png'
import { makeStyles, Zoom } from '@material-ui/core'
import { Subheader } from 'material-ui'
import { Element} from 'react-scroll'
import Fade from 'react-reveal'
import Reveal from 'react-reveal'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import Image from '../AboutModern/RevitalFamlilyWithEdges.jpg'
import Button from '@material-ui/core/Button'
import CameraAlt from '@material-ui/icons/CameraAlt'
import  Brush  from '@material-ui/icons/Brush'
import  Palette  from '@material-ui/icons/Palette'
import Skill from './Components/Skill/Skill'

const useStyles = makeStyles(theme => ({
    HeaderContainer: {
        display: 'flex',
        gap: '1.0em'
    },
   Header : {
       fontSize : 52,
       fontFamily : 'Quicksand',
       fontWeight : 'bold',
       marginTop : '2em',
       fontVariant : 'h6',
       color : 'black',
       display: 'inline-block',

   },
   SpecialHeader : {
    fontSize : 52,
    fontFamily : 'Quicksand',
    fontWeight : 'bold',
    marginTop : '2em',
    fontVariant : 'h6',
    color : '#F1BDAF',
    display: 'inline-block',

    },
   Subheader : {
       fontSize : 32,
       fontWeight : 'normal',
       fontFamily : 'Quicksand',
       marginTop : '1em', 
       fontVariant : 'h4',
       width : '80%',
       color : 'black'
   },
   normalText : {
        fontSize : 22,
        fontVariant : 'h4',
        fontFamily : 'Quicksand',
        fontWeight : 'bold',
        color : 'black',
   },
   textBox : {
       marginLeft : '10em',
       marginBottom : '7em',
       height : '100vh'
   }
   ,
   Skills: {
    alignItems : 'center',
    justifyContent : 'center',
    display : 'flex'
   },
   SkillesHeader:{
    alignItems : 'center',
    justifyContent : 'center',
    display : 'flex',
    marginTop: '0.5em'
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
   SkillIcon : {
       color: '#F1BDAF',
       fontSize : '32px'
   }
}))
const AboutModern = () => {
    const classes = useStyles()
    return(
        
       
        <Element name="About">
            <NavBar labels = {['Home', 'About' , 'Gallery' ,'Events', 'Contact']} clean = {true}></NavBar>
            <div className = {classes.textBox}>
            <Grid container>
                <Grid item xs = {5}>
                    <div className = {classes.HeaderContainer}>
                        <Fade top distance = '130px' ><p className = {classes.Header}>About</p><p className = {classes.SpecialHeader}>Me</p></Fade>
                    </div>
                    <Fade top distance = '75px'><Typography className = {classes.Subheader}>I've have been working as a proffessional photographer for 3 years, I am married to Ran and have two lovely kids - Yeal and Guy</Typography></Fade>
                    <Divider style = {{marginTop : '1.5em' , marginBottom : '1em' , width : '100%'}}></Divider>
                    <Grid container style = {{marginTop : '2em', marginLeft : "-1em"}}>
                        <Grid item xs = {4} >
                            <Skill Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit thouas"
                                    Header = "Photography" Icon ={<CameraAlt className= {classes.SkillIcon}></CameraAlt>}></Skill>
                        </Grid>
                        <Grid item xs = {4}>
                            <Skill Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit thouas"
                                    Header = "Accessories" Icon ={<Palette className= {classes.SkillIcon}></Palette>}></Skill>
                        </Grid>
                        <Grid item xs = {4}>
                            <Grid container >
                            <Skill Text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit thouas"
                                    Header = "Editing" Icon ={<Brush className= {classes.SkillIcon}></Brush>}></Skill>        
                            </Grid>
                        </Grid>
                    </Grid>
                
                    <Fade bottom distance = '130px'>
                        <Button variant='outlined' style = {{color : '#F1BDAF', borderColor : '#F1BDAF',borderWidth : '3px',marginTop : '3.5em', textTransform : 'none', fontSize : '18px', fontWeight : 'bold'}}>Book A Shooting</Button>
                    </Fade>
                </Grid>
               
                <Grid item xs = {7}>
                    <div style = {{marginLeft : '4.5em',height: '69vh', width: '90%', marginTop: '7em'}}>
                        <img src = {Image} alt="" style = {{height: '100%', width:'100%'}} ></img>
                    </div>        
                </Grid>
            </Grid>
            </div>
            
        </Element>
       
       
        
    )
}

export default AboutModern