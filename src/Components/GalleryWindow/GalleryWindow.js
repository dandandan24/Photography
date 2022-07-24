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
import ToolBar from '@material-ui/core/Toolbar'
import {useState} from 'react'
import ImageContainer from './ImageContainer'

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
  
const importAll = (r) => {
return r.keys().map(r);
}


const FigureImages = importAll(require.context( '../../images2/SortedImages/FigureComp' , false, /\.(png|jpe?g|svg)$/))
const NewBornImages = importAll(require.context( '../../images2/SortedImages/NewBornComp' , false, /\.(png|jpe?g|svg)$/))
const CoupleImages = importAll(require.context( '../../images2/SortedImages/CoupleComp' , false, /\.(png|jpe?g|svg)$/))
const BatMitzvaImages = importAll(require.context( '../../images2/SortedImages/BatMitzvaComp' , false, /\.(png|jpe?g|svg)$/))
const GeneralImages = importAll(require.context( '../../images2/SortedImages/GeneralComp' , false, /\.(png|jpe?g|svg)$/))
const FamilyImages = importAll(require.context( '../../images2/SortedImages/FamilyComp' , false, /\.(png|jpe?g|svg)$/))
const PregnancyImages = importAll(require.context( '../../images2/SortedImages/PregnancyComp' , false, /\.(png|jpe?g|svg)$/))
const ChildHoodImages = importAll(require.context( '../../images2/SortedImages/ChildHoodComp' , false, /\.(png|jpe?g|svg)$/))
const AllImages = [FigureImages, NewBornImages , CoupleImages, BatMitzvaImages , GeneralImages , FamilyImages, PregnancyImages, ChildHoodImages]
console.log('wopw')

const GalleryWindow = (props) => {
    const [GalleryTab, ChangeGalleryTab] = useState(2)
    const GalleryTabs = {'Figure' : 0, 'New Born' : 1, 'Couples' : 2, 'Bat Mitzva': 3, 'General' : 4, 'Family' : 5, 'Pregnancy' : 6, 'ChildHood' : 7}


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
        <Dialog fullScreen open = {props.open} onClose ={props.handleClose}  style = {{  overflow : 'visible'}}>
             <AppBar sx={{ position: 'relative'}} style= {{background : 'none' , color : 'black' , boxShadow : 'none'}}>
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
            </AppBar>
          
            <div className = "gallery-container">
                <div className = "heading">                 
                    <div className = 'GalleryHeadline'>
                        <p>Photo Gallery</p>
                    </div>
                </div>
                <div style = {{marginBottom : '7%'}}>
                    <StyledTabs value = {GalleryTab}>
                        {Object.keys(GalleryTabs).map((label) => {
                            return(
                                <StyledTab onClick = {()=> {
                                    ChangeGalleryTab(GalleryTabs[label]);                              
                                }} label = {label}></StyledTab>
                            )
                        })
                        }                
                    </StyledTabs>
                </div>
                <div>
               
                    <div className = "box2">
                        <div className =  "dream">                            
                        {                       
                                AllImages[GalleryTab].slice(0,AllImages[GalleryTab].length / 3).map((image , index) => {                           
                                    return(
                                        <Fade>
                                             <img src = {image['default']}></img>    
                                        </Fade>                     
                                    )
                                
                            })
                        }
                        </div>    
                        <div className =  "dream">                            
                        {
                             AllImages[GalleryTab].slice(AllImages[GalleryTab].length / 3,AllImages[GalleryTab].length / 3 * 2).map((image , index) => {
                               
                                    return(
                                        <Fade>
                                        <img src = {image['default']}></img>    
                                        </Fade>    
                                    )
                                
                            })
                        }
                        </div>           
                        <div className =  "dream">                            
                        {
                                AllImages[GalleryTab].slice(AllImages[GalleryTab].length / 3 * 2,AllImages[GalleryTab].length).map((image , index) => {           
                                        return(
                                            <Fade>
                                            <img src = {image['default']}></img>    
                                       </Fade>    
                                        )                     
                                })
                        }
                        </div>  
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
