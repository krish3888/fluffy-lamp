import React from 'react';
import {Content, Container, Input, Button} from 'native-base';
import StoreListModal from '../components/StoreListModal';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity} from 'react-native';

class SettingsScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
    }
    render() {
        return (
            <Container style={{flex:1}} >
                <Text style={{fontFamily:'Nunito-SemiBold', fontSize:24, color:'#444', textAlign:'center',}} >Settings</Text>
                <View style={{flex:4, justifyContent:'center', flexDirection:'row', alignItems:'center'}}>
                    <View style={{flex:2, justifyContent:'center', marginTop:30, marginLeft:20 }} >
                        <TouchableOpacity onPress={()=>{alert('user profile and wallet section');}} >
                            <Image source={require('../assets/images/user-avatar.png')}
                                style={{height:120, width: 120, borderRadius: 60 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:3, alignItems:'center', justifyContent:'center', marginRight:10}}>
                        <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', flexDirection:'row', marginTop:25}} >
                            <Input
                                style={{flex:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center', height:36, borderWidth:1, borderRadius:20, borderColor:'#CCC'}}
                                defaultValue='display name'
                            />
                        </View>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center', flexDirection:'row'}} >
                            <Button style={{flex:1, borderRadius:25, justifyContent:'center', height:36, marginTop:10, backgroundColor:'#DADADA'}} >
                                <Text style={{fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center',}}>logout</Text>
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={{flex:10, alignItems:'center', justifyContent:'center' }} >
                    <View style={{flex:2, alignItems:'center', justifyContent:'center'}} >
                        <Text style={{ fontFamily:'Nunito-SemiBold', fontSize:20, color:'#44F'}} >your wallet balance is: </Text>
                        <Text style={{ fontFamily:'Nunito-SemiBold', fontSize:30, color:'#44F'}} >₹100</Text>
                    </View>
                    <View style={{flex:10, alignItems:'center', width:'100%'}}>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}} >
                            <Text style={{flex:1, flexDirection:'row', fontFamily:'Nunito-SemiBold', fontSize:20, color:'#44F', marginLeft:20}}>Add Money : </Text>
                            <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center', marginRight:20}}
                                placeholder='Amount'
                                keyboardType='numeric'
                            />
                        </View>
                        <View style={{flex:4, flexDirection:'row'}} >
                            <View style={{flex:1}} >
                                <TouchableOpacity style={{padding:10, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#CCC', marginTop:25}} >
                                    <Text style={{fontFamily:'Nunito-SemiBold', fontSize:18, color:'#44F'}} >Debit card</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{padding:10, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#CCC', marginTop:10}} >
                                    <Text style={{fontFamily:'Nunito-SemiBold', fontSize:18, color:'#44F'}} >Credit card</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{padding:10, alignItems:'center', justifyContent:'center', borderWidth:1, borderColor:'#CCC', marginTop:10}} >
                                    <Text style={{fontFamily:'Nunito-SemiBold', fontSize:16, color:'#BBB'}} >Net banking</Text>
                                </TouchableOpacity>

                            </View>
                            <View style={{flex:2}} >
                                <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row', marginHorizontal:10, marginVertical:5, marginTop:20}} >
                                    <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}}
                                        placeholder='Card number'
                                        keyboardType='numeric'
                                    />
                                </View>
                                <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row', marginHorizontal:10, marginVertical:5}} >
                                    <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}}
                                        placeholder='Name on card'
                                    />
                                </View>
                                <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row', marginHorizontal:10, marginVertical:5}} >
                                    <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}}
                                        placeholder='MM'
                                        keyboardType='numeric'
                                    />
                                    <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}}
                                        placeholder='YY'
                                        keyboardType='numeric'
                                    />
                                </View>
                                <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row', marginHorizontal:10, marginVertical:5}} >
                                    <Input style={{flex:1, flexDirection:'row', borderColor:'#CCC', borderRadius:25, height:36, borderWidth:1, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F', textAlign:'center'}}
                                        placeholder='CVV'
                                        keyboardType='numeric'
                                        secureTextEntry
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{flex:1, width:'100%'}} >
                            <Button full style={{flex:1, width:'100%', backgroundColor:'#44F'}}><Text style={{fontFamily:'Nunito-ExtraBold', fontSize:22, color:'white'}} >Add Money</Text></Button>
                        </View>
                    </View>
                </View>
            </Container>
        );
    }
}

export default SettingsScreen;