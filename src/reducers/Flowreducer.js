const initialState = {
    tab : 0,
    openGallery : false,
    openEvent : false,
    GalleryTabs : {'Figure' : 0, 'New Born' : 1, 'Couples' : 2, 'Bat Mitzva': 3},
    GalleryTab : 0
}

const Flowreducer = (state = initialState,  action) => {
    switch(action.type){
        case "ChangeTab":
            return {
                ...state,
                tab : action.newTab
            } 
        case "ChangeGalleryTab":
            return {
                ...state,
                GalleryTab : action.NewGalleryTab
            }
        case "handleClose":
            return {
                ...state,
               
                openGallery : false
            }  
        case "handleOpen":
            return {   
                ...state,
                openGallery : true   
            } 
        case "handleCloseEvent":
            return {
                ...state,
                tab : 2,
                openEvent : false
            }  
        case "handleOpenEvent":
            return {
                ...state,
                openEvent : true,
                Source : action.Source,    
                Title : action.Title           
            }  
    }
    return initialState     

}

export default Flowreducer