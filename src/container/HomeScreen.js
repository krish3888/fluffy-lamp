import React from 'react';
import {Content, Container} from 'native-base';
import StoreListModal from '../components/StoreListModal';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity} from 'react-native';

class HomeScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
    }
    render() {
        return (
            <Container style={{flex:1}} >
                {this.state.showModal && <StoreListModal onClose={()=>this.setState({showModal:false})} onSelectStore={()=>{this.setState({showModal:false}); this.props.navigation.navigate('Shop')}} />}
                <View style={{flex:7, alignItems:'center', justifyContent:'center', marginTop:30 }} >
                    <TouchableOpacity onPress={()=>{alert('user profile and wallet section');}} >
                        <Image source={require('../assets/images/user-avatar.png')}
                            style={{height:200, width: 200, borderRadius: 100 }} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems:'center', justifyContent:'center'}} >
                    <Text style={{padding:5, fontFamily:'Nunito-SemiBold', fontSize:16, color:'#44F'}} >Display name</Text>
                </View>
                <View style={{flex:10, alignItems:'center', justifyContent:'center' }} >
                    <View style={{flex:3, alignItems:'center', justifyContent:'center'}} >
                        <Text style={{padding:5, fontFamily:'Nunito-SemiBold', fontSize:20, color:'#44F'}} >your wallet balance is: </Text>
                        <Text style={{padding:5, fontFamily:'Nunito-SemiBold', fontSize:40, color:'#44F'}} >₹100</Text>
                    </View>
                    <View style={{flex:3}}>
                        <TouchableOpacity 
                            onPress={()=>{this.setState({showModal:true})}}
                            style={{borderColor:'#44F', borderWidth:2, height:100, width:100, alignItems:'center', justifyContent:'center', borderRadius:50 }}
                        >
                            <Text style={{padding:5, fontFamily:'Nunito-SemiBold', fontSize:18, color:'#44F'}} >Shop</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        );
    }
}

export default HomeScreen;