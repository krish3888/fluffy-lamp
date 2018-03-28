import React from "react";
import {View, Modal, TextInput, FlatList, Text, TouchableOpacity,StatusBar } from "react-native";
import {Icon} from 'native-base';
import _ from 'lodash';
// import {connect} from 'react-redux';
const list = [{name:'Big Bazaar'},{name:'D Mart'},{name:'V Mart'},{name:'Trends'},{name:'Big Bazaar'},{name:'D Mart'},{name:'V Mart'},{name:'Trends'}]
class StoreListModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  renderItem(item){
    return (
      <TouchableOpacity
        onPress={()=>{this.props.onSelectStore();}}
        style={{
          flexDirection:'row',
          width:'90%',
          margin:5,
          alignSelf:'center',
          justifyContent:'center',
          alignItems:'center',
          borderColor:'#bbb',
          borderWidth:1,
          borderRadius:10,
          backgroundColor:'white'
        }}>
        <Text style={{
            flex:5,
            fontFamily:'Nunito-SemiBold',
            fontSize:18,
            color:'black',
            margin:10,
            textAlign:'center',
            alignSelf:'center'
          }}
          numberOfLines={1}
          ellipsizeMode='tail'
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <Modal style={{ flex: 1 }} transparent visible>
        <StatusBar hidden />
        <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.4)', alignItems: 'center', justifyContent: 'center'}} >
          <View style={{flex:1, width: '70%', marginTop:'30%', height:'30%'}} >
            <View style={{backgroundColor:'#44F', height:'80%', borderRadius:20}}>
                <View style={{alignItems:'center', padding:10, justifyContent:'center', height:'10%'}} >
                  <Text style={{color:'white', fontFamily:'Nunito-SemiBold', fontSize:20, padding:5}} >select a store</Text>
                </View>
                <TouchableOpacity onPress={()=>{this.props.onClose()}} style={{position:'absolute', right:0, top:0, backgroundColor:'white',borderWidth:1, borderRadius:20, height:30, width:30, alignItems:'center', justifyContent:'center'}} >
                    <Icon name='ios-close' style={{fontSize:30, color:'#000', fontWeight:'bold'}} />
                </TouchableOpacity>
                <View style={{height:'90%', borderBottomLeftRadius:20, borderBottomRightRadius:20, backgroundColor:'rgba(250,250,250,0.9)'}} >
                  <View style={{height:'95%', marginTop:5}} >
                    <FlatList
                      showsVerticalScrollIndicator={true}
                      data={list}
                      renderItem={({item})=>this.renderItem(item)}
                      keyExtractor={({index})=>index}
                    />
                  </View>
                </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

export default StoreListModal;
