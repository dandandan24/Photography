import { useEffect, useState} from "react"
import React from 'react'
import { fade } from "material-ui/utils/colorManipulator"
import './SwitchingImage.css';


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const getRandomIntRange = (min , max) => {
    return Math.floor(Math.random() * (max-min)) + min
}


const SwitchingImage = (props) => {
    const [randomNumber , setrandomNumber] = useState(getRandomInt(8))
   
    useEffect( () => {
        let randomInterval = getRandomIntRange(10,20)
        let GalleryImage = document.getElementById('GalleryImage'+props.index)
        GalleryImage.style.setProperty('--animation-time',(randomInterval + "s"))
        GalleryImage.style.setProperty('--url_num', '5')
    })
    return(
        // <div id = {'GalleryImage'+props.index} className = 'image_box'>

        // </div>
        <img id = {'GalleryImage'+props.index}  style={{position : props.overlay? 'absolute' : 'unset' , minHeight : '100%' , minWidth : '100%' , maxWidth : '100%'}}
             src = {props.imageData ? props.imageData[props.index-1] : ''}>
        </img>
    )   
}
export default SwitchingImage