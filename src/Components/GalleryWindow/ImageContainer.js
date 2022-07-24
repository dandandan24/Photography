import React from 'react'


const ImageContainer = (props) => {
    return(
        props.AllImages[props.GalleryTab].map((image , index) => {   
            if(index < props.AllImages[props.GalleryTab].length/3){
                return(                                         
                        <img src = {image['default']}></img>
                )
            }
        })
    )
}

export default ImageContainer