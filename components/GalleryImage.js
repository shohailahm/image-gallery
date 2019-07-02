import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { Button } from 'native-base';
import { Image } from 'react-native-animatable';
const WIDTH = Dimensions.get('window').width;
export default class GalleryImage extends Component {
  render() {
    const { uri, index,onLongPress } = this.props;
    return (
      <Button
        onPress={() => this.props.onPress(index,uri)}
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
          animation={'bounceIn'}
          delay={100 * index}
          duration={500}
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