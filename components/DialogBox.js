import React from 'react';
import { Dimensions, View,ScrollView,Image,Text,TextInput,TouchableOpacity,ActivityIndicator } from 'react-native';
import Dialog, { SlideAnimation, DialogContent,DialogFooter,DialogButton } from 'react-native-popup-dialog';
import { Container, Header, Content, Icon } from 'native-base';
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
      >
      <DialogContent style={{height:"80%",width:'100%'}}>
     
      <Image source={{uri:this.props.uri}}         
        style={{
            height:'70%',
            width:'100%',
            resizeMode: 'cover',
            borderRadius:4,
            marginTop:8
          }}
          onLoadStart={() => this.setState({loading: true})}
                                   onLoadEnd={() => {
                                       this.setState({loading: false})
    }}
          />
          {this.state.loading && 
          <View style={{height:'80%'}}>
              <ActivityIndicator/>
          </View>
         }
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
          <View style={{height:120,marginTop:4}}>
          <ScrollView>
          {images.comments && images.comments.map((item,ind)=>(
              <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
                 <Text style={{color:'#000',paddingLeft:8,paddingVertical:2}}>{item}</Text>
                 <Icon name="trash" fontSize={24} color={"#202020"} onPress={()=>this.props.deleteComment(this.props.index,ind)}/>
              </View>
             
            ))}
           </ScrollView>
           
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