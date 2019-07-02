import React, { Component } from 'react';
import { Dimensions, View,ScrollView,Image,Text,TextInput,ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import GalleryImage from '../components/GalleryImage';
import { connect } from 'react-redux';
import { userActions } from '../store/actions';
import DialogBox from '../components/DialogBox';
const WIDTH = Dimensions.get('window').width;
class Gallery extends Component {
  constructor(props) {
    super(props);
 
  }
  state = {
    index: 0,
    shown: false,
    urls:[]
  };
  componentDidMount(){
    this.props.dispatch(userActions.getImages())
  }
  showLightbox = (index,uri) => {
    // let imgurls=this.props.images.map((image)=>{
    //   return image.download_url;
    // })
    this.setState({
      urls:uri,
      index,
      shown: true,
    });
  };
  hideLightbox = () => {
    this.setState({
      index: 0,
      shown: false,
    });
  };

  addComment=(ind,text)=>{
    let imagesList=[...this.props.images];
    let img=imagesList[ind];
    img.comments=img.comments?[...img.comments,text]:[text];
    this.props.dispatch(userActions.addComments(imagesList))
    
  }


  render() {
    const { images } = this.props;
    const { index, shown } = this.state;
    if(images.length<1){
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <ActivityIndicator/>
        </View>
      )
    }
    return (
      <ScrollView style={{flex:1}} indicatorStyle="black" windowSize={3}>
       <DialogBox images={images} shown={shown} addComment={this.addComment} uri={this.state.urls} index={index} hide={this.hideLightbox}/>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {images && images.map((image, idx) =>
            <GalleryImage
              index={idx}
              key={idx}
              onPress={this.showLightbox}
              uri={image.download_url}
            />
        )}
      </View>

      </ScrollView>
    );
  }
}

Gallery.propTypes = {
    images: PropTypes.array,
  };

  const mapStateToProps=(state)=>{
    return{
     images:state.images
    }
  }
  export default connect(mapStateToProps)(Gallery);