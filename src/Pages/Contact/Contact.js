import React from 'react'
import NavBar from '../../Components/NavBar/navbar'
import { Element } from 'react-scroll'
import './Contact.css'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Instagram from '@material-ui/icons/Instagram'
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
    Header : {
        fontSize : 52,
        fontWeight : 'bold',
        fontVariant : 'h6',   
    },
    Subheader : {
        fontSize : 32,
        fontWeight : 'bold',
        marginTop : '1em', 
        fontVariant : 'h4',
    
    },
    normalText : {
         fontSize : 22,
         fontVariant : 'h4',
         maxWidth : '17em'
    },
    textBox : {
        marginLeft : '10em',
        marginBottom : '7em'
    }
 }))


const Contact = (props) => {
    const classes = useStyles();
    return(
        <Element name="Contact">
            <div style = {{position : 'relative'}}>
                <div style = {{}}>
                <NavBar labels = {['Home', 'About' , 'Gallery' ,'Events', 'Contact']}></NavBar>
                </div>
                <body className = 'bodyContact'>
                    <Grid container direction='row'>
                        <Grid item xs = {1}>
                            
                        </Grid>
                        <Grid item xs = {4}>
                           <Card style = {{background : 'white' , borderRadius : '30px' ,minHeight :'70vh', padding : '3vh 3vw'}}>
                                <Grid container direction = 'column' spacing = {4}>
                                    <Grid item xs = {8}>
                                        <Typography className = {classes.Header}>Contact Me</Typography>
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography className = {classes.normalText}>Full Name</Typography>
                                        <TextField  placeholder="full name" fullWidth variant = 'outlined'>Full Name</TextField>
                                    </Grid>
                                    <Grid item xs = {9}>
                                        <Typography className = {classes.normalText}>Email</Typography>
                                        <TextField placeholder="example@gmail.com" fullWidth variant = 'outlined'>Full Name</TextField>
                                    </Grid>
                                    <Grid item xs = {12}>
                                        <Typography className = {classes.normalText}>Message</Typography>
                                        <TextField placeholder="type your message here..." fullWidth multiline rows = {4} variant = 'outlined'>Full Name</TextField>
                                    </Grid>
                                   
                                    <Grid item xs ={12}>
                                        <Grid container>
                                            <Grid item xs = {5}></Grid>
                                            <Grid item xs ={3}>
                                                <Button style = {{textTransform : 'none' , backgroundColor : '#fbe6d6'}}>Send</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                               
                           </Card>
                        </Grid>
                        <Grid item xs = {1}></Grid>               
                        <Grid item xs = {1}>      
                             
                           
                        </Grid>
                        <Grid item xs = {5}>
                            <Grid item xs = {8}>
                                <Typography className = {classes.Header}>Search Me On Social Media</Typography>
                            </Grid>
                            <Grid item xs = {8} style = {{textAlign : 'center' , marginTop : '3vh'}}>
                               <Instagram style = {{height : '72px' , width: "72px"}}></Instagram>
                            </Grid>
                            <Grid item xs = {8} style = {{textAlign : 'center' , marginTop : '3vh'}}>
                                <Facebook style = {{height : '72px' , width: "72px"}}></Facebook>
                            </Grid>
                            <Grid item xs = {8} style = {{textAlign : 'center' , marginTop : '3vh'}}>
                                <Twitter style = {{height : '72px' , width: "72px"}}></Twitter>
                            </Grid>
                            <Grid container style = {{marginTop:'6vh'}}>
                                <Grid item xs = {6}>
                                    <Typography className = {classes.Subheader}>Email:</Typography>
                                    <Typography className = {classes.normalText}>rparzelina@gmail.com</Typography>
                                </Grid>
                                <Grid item xs = {4}>
                                    <Typography className = {classes.Subheader}>Phone Number:</Typography>
                                    <Typography className = {classes.normalText}>054-2514444</Typography>
                                </Grid>
                            </Grid>
                           
                        </Grid>
                    </Grid>
                </body>
            </div>   
        </Element>
    )
}

export default Contact