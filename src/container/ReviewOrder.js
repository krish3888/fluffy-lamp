import React from 'react';
import {Content, Container, Item, Left, Body, Right, Icon, Button, Input, Label} from 'native-base';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity, FlatList} from 'react-native';
import {BarCodeScanner} from 'expo';

const list = [{name:'Big Bazaar'},{name:'D Mart'},{name:'V Mart'},{name:'Trends'},{name:'Big Bazaar'},{name:'D Mart'},{name:'V Mart'},{name:'Trends'},{name:'Big Bazaar'},{name:'D Mart'},{name:'V Mart'},{name:'Trends'}]

class ReviewScreen extends React.Component {
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
                <View style={{flex:1}}  >
                    <View style={{flex:0.8, borderBottomWidth:1, borderColor:'#AAA'}}>
                        <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:20, color:'#444', textAlign:'center', padding:5}} >Review your order</Text>
                    </View>
                    <View style={{flex:7}}>
                        <Content style={{flex:1}} >
                            <View style={{flex:5}} >
                                <FlatList
                                    showsVerticalScrollIndicator={true}
                                    data={list}
                                    renderItem={({item})=>this.renderItem(item)}
                                    keyExtractor={({index})=>index}
                                />
                            </View>
                        </Content>
                    </View>

                    <View style={{flex:1, borderTopWidth:2 }} >
                        <View style={{flex:1, flexDirection:'row', paddingHorizontal:10}}>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F', textAlignVertical:'center'}} >Cart Total : </Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                                <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F', textAlignVertical:'center'}}>₹100000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flex:1}} >
                        <View style={{flex:1, flexDirection:'row', paddingHorizontal:10}}>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <Text style={{fontFamily:'Nunito-SemiBold', fontSize:20, color:'#999', textAlignVertical:'center' }} >got a coupon ? </Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <Input placeholder="coupon code" placeholderTextColor="#BBB" style={{flex:1}} />
                            </View>
                        </View>
                    </View>

                    <View style={{flex:1, borderTopWidth:2 }} >
                        <View style={{flex:1, flexDirection:'row', paddingHorizontal:10}}>
                            <View style={{flex:1, flexDirection:'row'}}>
                                <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F', textAlignVertical:'center'}} >Order Total </Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}>
                                <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F', textAlignVertical:'center'}}>₹100000</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{flex:1, flexDirection:'row', backgroundColor:'#44F'}} >
                        <TouchableOpacity style={{flex:1, flexDirection:'row', padding:15}}
                            onPress={()=>this.props.navigation.navigate('Checkout')}
                        >
                            <View style={{flex:5, flexDirection:'row', justifyContent:'center'}}>
                                <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:18, color:'white'}} >Proceed to checkout </Text>
                            </View>
                            <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
                                <Icon name="ios-arrow-forward" style={{color:'white'}} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}

export default ReviewScreen;