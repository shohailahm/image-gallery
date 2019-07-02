import axios from 'axios';
import {ToastAndroid} from 'react-native';

export const getData=()=>{
    return axios({
        method: 'get',
        url: 'https://api.myjson.com/bins/142jkr'
      })
      .then((res)=>{
        let images=res.data.pics;
        ToastAndroid.show( 'Images Fetched!',ToastAndroid.LONG)
        return images;
      })
      .catch((err)=>{
        ToastAndroid.show('Error',ToastAndroid.SHORT)
      });
}