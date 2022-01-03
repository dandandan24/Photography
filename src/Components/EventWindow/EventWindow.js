import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import { PinDropSharp } from '@material-ui/icons'
import Slide from '@material-ui/core/Slide'
import {connect , dispatch} from 'react-redux'
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Close from '@material-ui/icons/Close'
import './EventWindow.css'

const EventWindow = (props) => {

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
      });

    return(
        // <div style = {{width : '100%' , height : }}></div>
        <Dialog fullScreen open = {props.open} onClose ={props.handleClose} TransitionComponent={Transition} style = {{overflow : 'visible'}}>
                <div style = {{backgroundColor : '#FFF5EC', display : 'flex'}}>
                    <img src = './Images/ChildHoodBlack.jpg' style = {{width : '33%'  , boxShadow  : '5px 0px 20px grey'}}></img>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={props.handleClose}
                        aria-label="close"
                        style= {{backgroundColor : 'white', position: 'absolute' ,marginTop : '20px' , marginLeft : '20px'}}
                        >
                        <Close />
                    </IconButton>      
                    <div style = {{width : '67%' , direction : 'rtl' , background: 'linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,0.1))'}}>
                        <span style = {{alignSelf : 'top', fontSize : '60px' , marginRight : '35px', color : '#A36329'}}>ילדות</span>     
                        <div style = {{marginRight : '35px', height : '75%', marginTop : '3%'}}>
                            <table>
                                <tr> 
                                    <td></td>
                                    <th className='col'>
                                        בסיסי
                                        <div className='borderBottom'></div>
                                    </th>
                                    <th className='col'>
                                        מורחב
                                        <div className='borderBottom'></div>
                                    </th>
                                    <th className='col'>
                                        פרמיום
                                        <div className='borderBottom'></div>
                                    </th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className='col price'>
                                        1100
                                    </td>
                                    <td className='col price'>
                                        1500                                    
                                    </td>
                                    <td className='col price'>
                                        1900                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td className='brightBack'>זמן צילום</td>
                                    <td className='col brightBack'>שעה וחצי</td>
                                    <td className='col brightBack'>ללא הגבלה</td>
                                    <td className='col brightBack'>ללא הגבלה</td>
                                </tr>
                                <tr style = {{backgroundColor : '#C4A180'}}>
                                    <td  className='darkBack'>תמונות ערוכות באיכות גבוהה</td>
                                    <td className='col darkBack'>40</td>
                                    <td className='col darkBack'>50</td>
                                    <td className='col darkBack'>60</td>
                                </tr>
                                <tr>
                                    <td className='brightBack'>תמונות ערוכות באיכות אומנותית</td>
                                    <td className='col brightBack'>X</td>
                                    <td className='col brightBack '>10</td>
                                    <td className='col brightBack'>15</td>
                                </tr>
                                <tr style = {{backgroundColor : '#C4A180'}}>
                                    <td className='darkBack'>מתנה</td>
                                    <td className='col darkBack'>                 X                 </td>
                                    <td className='col darkBack'>קופסא מהודרת עם 20 תמונות מפותחות</td>
                                    <td className='col darkBack'>קופסא מהודרת עם 20 תמונות מפותחות</td>
                                </tr>
                            </table>
                        </div>  
                        <div style = {{display : 'flex', flexDirection : 'row', color : '#A36329'}}>
                            <div style = {{display : 'flex', flexDirection : 'column',marginRight : '35px' ,width : '50%'}}>
                                <span>מגוון רחב של אביזרים לצילום</span>
                                <span>העברת התמונות הערוכות עד 30 ימי עסקים</span>
                            </div>
                            <div style = {{display : 'flex',flexDirection : 'column',marginRight : '35px' ,width : '50%'}}>
                                <span>ליווי אישי לתכנון סטיילינג טרם הצילומים</span>
                                <span>תוספת אלבום מודפס ומעוצב - 550</span>
                            </div>
                        </div>                      
                    </div>
                </div>  
                                                                 
        </Dialog>   
    )
}

const mapStateToProps = (state) => {
    return {
        open : state.flow.openEvent,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleClose : () => dispatch({type : 'handleCloseEvent'}),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EventWindow)
