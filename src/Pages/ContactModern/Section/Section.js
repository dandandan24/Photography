import React from 'react'
import Divider from '@material-ui/core/Divider'

const Section = (props) => {
    return(
    <div style = {{width : '70%'}}>
        <p>{props.label}</p>
        <Divider style = {{width : '20%', backgroundColor : '#F1BDAF', height : '2px'}}></Divider>
        <Divider style = {{width : '70%'}}></Divider>
    </div>
    )
}

export default Section