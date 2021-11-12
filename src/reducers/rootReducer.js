import { combineReducers } from 'redux';


import Flowreducer from './Flowreducer';


const rootReducer = combineReducers({
    flow : Flowreducer,
});

export default rootReducer;