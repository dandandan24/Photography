import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from '../../Components/NavBar/navbar'
import { Element} from 'react-scroll'
import { makeStyles} from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Section from './Section/Section'
import FaceBook from '@material-ui/icons/Facebook'
import Instagram from '@material-ui/icons/Instagram'
import Pinterest from '@material-ui/icons/Pinterest'
import Twitter from '@material-ui/icons/Twitter'
import Phone from '@material-ui/icons/Phone'
import LocationOn from '@material-ui/icons/LocationOn'
import AccessTime from '@material-ui/icons/AccessTime'
import Fade from 'react-reveal'

const useStyles = makeStyles(theme => ({
    textBox : {
        height : '100vh'
    },
    Header: {
        fontSize : 36,
        marginTop : '1em',
        fontFamily : 'Quicksand',
        fontWeight : 'bold',
        color : 'black',
        display: 'inline-block',
    },
    SpecialHeader : {
        fontSize : 36,
        marginTop : '1em',
        fontFamily : 'Quicksand',
        fontWeight : 'bold',
        color : '#F1BDAF',
        display: 'inline-block',
    },
    SubHeader: {
        fontSize : 18,
        fontWeight : 'normal',
        fontFamily : 'Quicksand',
        marginTop : '1em', 
        fontVariant : 'h4',
        width : '50%',
        color : 'black'
    },
    HeaderContainer: {
        display: 'flex',
        gap: '0.5em'
    },
    ContactPaper: {  
         marginTop: '4em',
         marginLeft : '0em',
         display : 'flex',
         alignText : 'center',
         height: '55vh',
         width : '50%',
    },
    ContactWays: {  
        marginTop: '4em',
        marginLeft : '6em',
        display : 'flex',
        alignText : 'center',
        height: '47vh',
        width : '50%',
   },
    FieldsContainer : {
        paddingLeft : '3em',
        paddingTop : '2em',
        paddingRight : '3em',
        width : '100%',
    },
    Field : {
        marginTop : '1.5em'
    },
    Icon : {
        marginTop: '0.5em',
        marginRight : '0.5em'
    }
}))

const ContactModern = () => {
    const classes = useStyles()
    return(
    <Element name="Contact">
        <NavBar labels = {['Home', 'About' , 'Gallery' ,'Events', 'Contact']} clean = {true}></NavBar>
        <div className = {classes.textBox}>
        <Grid container>
            <Grid item xs = {12} style = {{display : 'flex' , justifyContent : 'center', alignText : 'center'}}>
                <div className = {classes.HeaderContainer}>
                    <Fade top distance = '130px' ><p className = {classes.Header}>Get In</p><p className = {classes.SpecialHeader}>Touch</p></Fade>
                </div>          
            </Grid>
            <Grid item xs = {12} style = {{display : 'flex' , justifyContent : 'center', textAlign : 'center'}}>
                <Fade top distance = '75px' >
                    <p className={classes.SubHeader} >I am available by email, whatsapp, Instagram or by phone. you can also use our quick start form to ask a question about my services and projects</p>
                </Fade>
            </Grid>
            <Grid item xs = {12} style = {{display : 'flex', justifyContent : 'center',height : '70vh'}}>      
                <Paper elevation={3} className = {classes.ContactPaper}>
                    <div className= {classes.FieldsContainer}>
                       
                            <TextField className = {classes.Field} fullWidth variant= "standard" label = "Event Date"></TextField>
                            <TextField className = {classes.Field} fullWidth variant= "standard" label = "Your Name"></TextField>
                            <TextField className = {classes.Field} fullWidth variant= "standard" label = "E-mail"></TextField>              
                            <TextField className = {classes.Field} fullWidth multiline rows={3} variant= "standard" label = "Your Message"></TextField>
                     
        
                        <Button variant='outlined' style = {{color : '#F1BDAF', borderColor : '#F1BDAF',borderWidth : '3px', width : '100%',marginTop : '3em', textTransform : 'none', fontSize : '18px', fontWeight : 'bold'}}>Send a Message</Button>
                    </div>
                 
                <Grid container>
                    <Grid item xs = {12}>
                        <div className= {classes.ContactWays}>
                            <Grid container>
                                <Grid item xs = {12}>
                                    <Section label = "Socials"></Section>
                                    <Instagram className= {classes.Icon}></Instagram>
                                    <FaceBook className= {classes.Icon}></FaceBook>
                                    <Pinterest className= {classes.Icon}></Pinterest>
                                    <Twitter className= {classes.Icon}></Twitter>
                                </Grid>
                                <Grid item xs = {12}>
                                    <Section label = "Phone"></Section>
                                    <div style = {{display : 'flex', alignItems : 'center', marginTop : '0.5em'}}>
                                        <Phone style = {{marginRight: '0.5em', color : '#F1BDAF'}}></Phone>
                                        <span>054-3329697</span>
                                    </div>                                
                                </Grid>
                                <Grid item xs = {12}>
                                    <Section label = "Address"></Section>
                                    <div style = {{display : 'flex', alignItems : 'center', marginTop : '0.5em'}}>
                                        <LocationOn style = {{marginRight: '0.5em', color : '#F1BDAF'}}></LocationOn>
                                        <span>צנובר 2 - יהוד</span>
                                    </div>
                                </Grid>   
                                <Grid item xs = {12}>
                                    <Section label = "Working Hours"></Section>
                                    <div style = {{display : 'flex', alignItems : 'center', marginTop : '0.5em'}}>
                                        <AccessTime style = {{marginRight: '0.5em', color : '#F1BDAF'}}></AccessTime>
                                        <span>ימים א' - ה' : 8:00 - 17:00</span>    
                                    </div>
                                
                                </Grid>                         
                            </Grid>              
                        </div>
                    </Grid>            
                </Grid>  
                </Paper>                                    
            </Grid>  
            <Grid item xs = {4} style = {{display : 'flex'}}>
              
            </Grid>    
        </Grid>
        </div>
    </Element>
    )
}

export default ContactModern