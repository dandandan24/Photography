import React , {useEffect} from 'react'
import NavBar from '../../Components/NavBar/navbar'
import ImageList from '@material-ui/core/ImageList'
import  ImageListItem  from '@material-ui/core/ImageListItem'
import SwitchingImage from '../../Components/SwitchingImage/SwitchingImage'
import Grid from '@material-ui/core/Grid'
import './Gallery.css'
import { Button } from '@material-ui/core'
import GalleryWindow from '../../Components/GalleryWindow/GalleryWindow'
import {connect, dispatch} from 'react-redux'
import Aos from "aos"

const imgData = ['./images2/1.jpg',
                './images2/2.jpg',
                './images2/3.jpg',
                './images2/4.jpg',
                './images2/5.jpg',
                './images2/6.jpg',
                './images2/7.jpg',
                './images2/8.jpg']
   

const Gallery = (props) => {
  

    return(
        <div id = 'Gallery' style = {{marginTop: '1.4em' , marginBottom : '1.0em'}}>
            <Grid container spacing = {1}>
                <Grid item xs = {12}>           
                    <NavBar id = "navbar" labels = {['About' , 'Gallery' ,'Events', 'Contact']}></NavBar>
                </Grid>
                <Grid item xs = {8}>       
                    <ImageList  cols={4} rowHeight = {(window.innerHeight - 92)/3.036}>  
                        <ImageListItem cols={2} rows = {1}>                   
                            <SwitchingImage imageData = {imgData} index = '1'/>   
                        </ImageListItem>
                        <ImageListItem cols={1} rows = {1}>
                            <SwitchingImage imageData = {imgData} index = '2'/>
                        </ImageListItem>
                        <ImageListItem cols={1} rows = {1}>
                            <SwitchingImage imageData = {imgData} index = '3'/>                                        
                        </ImageListItem>
                        <ImageListItem cols={1} rows = {1}>
                            <SwitchingImage imageData = {imgData} index = '4' />                      
                        </ImageListItem>
                        <ImageListItem cols={1} rows = {1} >
                            <SwitchingImage imageData = {imgData} index = '5'/>                                       
                        </ImageListItem>
                        <ImageListItem cols={2} rows = {1} >
                            <SwitchingImage imageData = {imgData} index = '6'/>                       
                        </ImageListItem>
                        <ImageListItem cols={4} rows = {1}>         
                            <SwitchingImage  index = '7' imageData = {imgData} overlay = {true}/>        
                            <Button variant = 'outlined'
                                style = {{position : 'absolute' , zIndex: 10 , width : '150px' , 
                                height : '50px', color : 'white', borderRadius : '15px' , 
                                borderWidth : 3, borderColor : 'white', textTransform :'none',
                                right:'18.5%', top:'70%' , fontWeight : 600}} onClick = {() => {props.handleOpen()}}>                                       
                            Show All</Button> 
                        </ImageListItem>                 
                    </ImageList>               
                </Grid>
                <Grid item xs = {4}>
                    <SwitchingImage imageData = {imgData} index = '8'/> 
                </Grid>
            </Grid>
            {props.open ?
            <GalleryWindow></GalleryWindow> : 
            <></>
            }
            
        </div>
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
        handleOpen : () => dispatch({type : 'handleOpen'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery)