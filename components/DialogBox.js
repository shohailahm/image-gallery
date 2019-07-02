import React from 'react';
import { Dimensions, View,ScrollView,Image,Text,TextInput,TouchableOpacity } from 'react-native';
import Dialog, { SlideAnimation, DialogContent,DialogFooter,DialogButton } from 'react-native-popup-dialog';
const WIDTH = Dimensions.get('window').width;

export default class DialogBox extends React.Component{
    state={text:''}
    render(){
        const {images}=this.props;
        return(
       <View>
        <Dialog
        width={0.9}
        height={0.9}
        containerStyle={{flex:1,justifyContent:'center'}}
        visible={this.props.shown}
        dialogAnimation={new SlideAnimation({
        slideFrom: 'bottom',
        })}>
      <DialogContent style={{height:"80%",width:'100%'}}>
     
      <Image source={{uri:this.props.uri}}         
        style={{
            height:'80%',
            width:'100%',
            resizeMode: 'cover',
            borderRadius:4,
            marginTop:8
          }}/>
            <Text style={{color:'black',fontSize:24}}>Comments</Text>
          <View style={{marginTop:8,flexDirection:'row',alignItems:'center'}}>
        
          <TextInput
              multiline={true}
              numberOfLines={2}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              style={{borderWidth:0.5,width:'80%',borderRadius:8}}
         />
         {!!this.state.text && 
         <TouchableOpacity onPress={()=>{ 
             this.props.addComment(this.props.index,this.state.text)
            this.setState({text:''})
            }
             }>
           <Text style={{color:'blue',marginLeft:8}}>Submit</Text>
         </TouchableOpacity>
        }
          </View>
          <View>
            {images && images[this.props.index] &&images[this.props.index].comments && images[this.props.index].comments.map((item,ind)=>(
              <Text style={{color:'#000'}}>{item}</Text>
            ))}
          </View>
        <DialogButton
          text="Close"
          onPress={() => this.props.hide()}
        />
    </DialogContent>

  </Dialog>
            </View>
        )
    }
}