import React from 'react';
import {Content, Container, Item, Left, Body, Right, Icon, Button, Input, Label} from 'native-base';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity, FlatList} from 'react-native';
import {BarCodeScanner} from 'expo';

class ReviewScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            cartList:[],
            cartTotal:0,
            orderTotal: 0
        }
    }

    componentWillMount() {
        this.setState({
            cartList: this.props.navigation.state.params.cartList,
            cartTotal:this.props.navigation.state.params.cartTotal,
            orderTotal: this.props.navigation.state.params.cartTotal
        });
    }

    onIncQty(item, index) {
        if (item.orderQty<item.qty) {
            let newList = this.state.cartList;
            newList[index] = {...item, orderQty: item.orderQty+1, orderPrice: item.orderPrice+item.price}
            this.setState({
                cartList: _.cloneDeep(newList),
                cartTotal: this.state.cartTotal+item.price,
                orderTotal: this.state.cartTotal+item.price
            });
        }
    }

    onDecQty(item, index) {
        if (item.orderQty>0) {
            let newList = this.state.cartList;
            newList[index] = {...item, orderQty: item.orderQty-1, orderPrice: item.orderPrice-item.price}
            this.setState({
                cartList: _.cloneDeep(newList),
                cartTotal: this.state.cartTotal-item.price,
                orderTotal: this.state.cartTotal-item.price
            });
        }
    }


    renderItem(item, index){
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
                  <TouchableOpacity
                    style={{flex:1, borderWidth:1, alignItems:'center', borderRadius:7 }}
                    onPress={()=>this.onDecQty(item, index)}
                  >
                      <Icon name='ios-remove'/>
                  </TouchableOpacity>
                  <Text style={{flex:1, textAlign:'center' }} >{item.orderQty}</Text>
                  <TouchableOpacity
                    style={{flex:1, borderWidth:1, alignItems:'center', borderRadius:7}}
                    onPress={()=>this.onIncQty(item, index)}
                  >
                      <Icon name='ios-add'/>
                  </TouchableOpacity>
              </Body>
              <Right style={{flex:4, alignItems:'center'}}>
                <Text style={{flex:1, textAlignVertical:'center',fontFamily:'Nunito-Regular', fontSize:14 }} >₹{item.orderPrice}</Text>
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
                                    data={this.state.cartList}
                                    renderItem={({item, index})=>this.renderItem(item, index)}
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
                                <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F', textAlignVertical:'center'}}>₹{this.state.cartTotal}</Text>
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
                                <Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'#44F', textAlignVertical:'center'}}>₹{this.state.orderTotal}</Text>
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