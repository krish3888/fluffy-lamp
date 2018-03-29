import React from 'react';
import {Content, Container, Item, Left, Body, Right, Icon, Button} from 'native-base';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity, FlatList} from 'react-native';
import {BarCodeScanner} from 'expo';

const list = [{name:'Big Bazaar'},{name:'D Mart'},{name:'V Mart'},{name:'Trends'},{name:'Big Bazaar'},{name:'D Mart'},{name:'V Mart'},{name:'Trends'}]

class ShopScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
    }
      renderItem(item){
    return (
      <View>
          <Item>
              <Left style={{flex:7 }} >
                <Text style={{
                    flex:5,
                    fontFamily:'Nunito-SemiBold',
                    fontSize:18,
                    color:'black',
                    margin:10,
                }}
                numberOfLines={1}
                ellipsizeMode='tail'
                >
                {item.name}
                </Text>
              </Left>
              <Body style={{flex:3, flexDirection:'row', justifyContent:'center', alignItems:'center', marginHorizontal:10 }} >
                  <TouchableOpacity style={{flex:1, borderWidth:1, alignItems:'center', borderRadius:7 }} >
                      <Icon name='ios-remove'/>
                  </TouchableOpacity>
                  <Text style={{flex:1, textAlign:'center' }} >10</Text>
                  <TouchableOpacity style={{flex:1, borderWidth:1, alignItems:'center', borderRadius:7}} >
                      <Icon name='ios-add'/>
                  </TouchableOpacity>
              </Body>
              <Right style={{flex:4, alignItems:'center'}}>
                <Text style={{flex:1, textAlignVertical:'center',fontFamily:'Nunito-Regular', fontSize:14 }} >₹10000</Text>
              </Right> 
          </Item>
      </View>
    );
  }

    render() {
        return (
            <Container style={{flex:1}} >
                <View style={{flex:1}}><BarCodeScanner style={{flex:1}} onBarCodeRead={({type, data})=>alert(data)} /></View>
                <View style={{flex:1}}  >
                    <Content style={{flex:1}} >
                        <View style={{flex:5, marginTop:10}} >
                            <FlatList
                                showsVerticalScrollIndicator={true}
                                data={list}
                                renderItem={({item})=>this.renderItem(item)}
                                keyExtractor={({index})=>index}
                            />
                        </View>
                        <View style={{flex:1, borderTopWidth:2 }} >
                            <View style={{flex:1, flexDirection:'row', padding:15}}>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F'}} >CART TOTAL : </Text>
                                </View>
                                <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                                    <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F'}}>₹100000</Text>
                                </View>
                            </View>
                            <View style={{flex:1, flexDirection:'row', backgroundColor:'#44F'}} >
                                <TouchableOpacity style={{flex:1, flexDirection:'row', padding:15}}>
                                    <View style={{flex:5, flexDirection:'row', justifyContent:'center'}}>
                                        <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:18, color:'white'}} >Proceed to checkout </Text>
                                    </View>
                                    <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                                        <Icon name="ios-arrow-forward" style={{color:'white'}} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Content>
                </View>
            </Container>
        );
    }
}

export default ShopScreen;