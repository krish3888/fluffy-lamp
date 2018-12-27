import React from 'react';
import {Content, Container, Card, CardItem } from 'native-base';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo';

class CheckoutScreen extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Container style={{flex:1}} >
            <LinearGradient
                colors={['#DDD', '#999', '#555', '#CCC']}
                style={{flex:1, paddingHorizontal:40, paddingVertical:90}}
            >

                <Card style={{flex:1, borderRadius:10}} >
                    <LinearGradient
                        colors={['#4c669f', '#3b5998', '#052f6a']}
                        style={{flex:1, borderRadius:10}}
                    >
                        <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}}
                            onPress={()=>this.props.navigation.navigate('Invoice', {orderTotal:this.props.navigation.state.params.orderTotal, cartList:this.props.navigation.state.params.cartList})}
                        >
                                <View>
                                    <Text style={{fontFamily:'Nunito-SemiBold', textAlign:'center', fontSize:20, color:'#EEE'}} >
                                        Pay <Text  style={{textAlign:'center', fontSize:24, color:'#4AF'}} ></Text>  with wallet
                                    </Text>
                                </View>
                                <View>
                                    {/* <Text style={{fontFamily:'Nunito-SemiBold', textAlign:'center', fontSize:20, color:'#EEE'}} >
                                    available wallet balance
                                    </Text> */}
                                    <Text style={{fontFamily:'Nunito-SemiBold', textAlign:'center', fontSize:24, color:'#4AF'}} ></Text>
                                </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </Card>
                <Card style={{flex:1, borderRadius:10}} >
                    <LinearGradient
                        colors={['#4c669f', '#3b5998', '#052f6a']}
                        style={{flex:1, borderRadius:10}}
                    >
                        <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}} onPress={()=>alert('feature coming soon!!')}>
                            <View>
                                <Text style={{fontFamily:'Nunito-SemiBold', textAlign:'center', fontSize:20, color:'#EEE'}} >
                                    Pay <Text style={{textAlign:'center', fontSize:24, color:'#4AF'}} ></Text> cash
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </LinearGradient>
                </Card>
            </LinearGradient>
            </Container>
        );
    }
}

export default CheckoutScreen;