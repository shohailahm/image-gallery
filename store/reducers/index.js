import {IMAGES,ADDCOMMENT} from '../constants'
const initialState = {
       images:[]
};

export default (state = initialState, action) => {

    switch (action.type) {
        case IMAGES:
            return {...state,images:action.data}
        case ADDCOMMENT:
            return {...state,images:action.data}    
         default:
            return state;
    }
};