import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions,Image } from 'react-native';
import { Button } from 'native-base';

const WIDTH = Dimensions.get('window').width;
export default class GalleryImage extends Component {
  render() {
    const { uri, index,onLongPress,image } = this.props;
    return (
      <Button
        onPress={() => this.props.onPress(index,image)}
        // onLongPress={()=>onLongPress(index)}
        style={{
          backgroundColor: 'transparent',
          borderRadius: 0,
          height: 100,
          width: WIDTH / 3,
          padding:5
        }}
      >
        <Image
          source={ {uri} }
          style={{
            height: 90,
            left: 0,
            position: 'absolute',
            resizeMode: 'cover',
            top: 0,
            width: WIDTH / 2,
          }}
        />
      </Button>
    );
  }
}
GalleryImage.propTypes = {
  uri: PropTypes.string,
  index: PropTypes.number,
  onPress: PropTypes.func,
};