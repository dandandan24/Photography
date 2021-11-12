const initialState = {
    tab : 0,
    openGallery : false,
    openEvent : false
}

const Flowreducer = (state = initialState,  action) => {
    switch(action.type){
        case "ChangeTab":
            return {
                ...initialState,
                tab : action.newTab
            }  
        case "handleClose":
            return {
                ...initialState,
                tab : 1,
                openGallery : false
            }  
        case "handleOpen":
            return {
                ...initialState,
                openGallery : true
            } 
        case "handleCloseEvent":
            return {
                ...initialState,
                tab : 2,
                openEvent : false
            }  
        case "handleOpenEvent":
            return {
                ...initialState,
                openEvent : true
            }  
    }
    return initialState     

}

export default Flowreducer