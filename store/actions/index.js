import {IMAGES,ADDCOMMENT} from '../constants';
import {getData} from '../../Api';
export const userActions={
    getImages,
    addComments
}


function getImages(){
return dispatch=>{
    getData()
    .then((res)=>{
      dispatch(storeImages(res))
    })
}
}

function addComments(images){
    return dispatch=>{
       dispatch({type:ADDCOMMENT,data:images})
    }
}

function storeImages(images){
    return {type:IMAGES,data:images}
}