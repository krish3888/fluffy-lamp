import React from 'react';
import {Content, Container} from 'native-base';
import {View, Text, StatusBar, Platform, Image, TouchableOpacity} from 'react-native';
import {BarCodeScanner} from 'expo';

class ShopScreen extends React.Component {
    constructor(props){
        super(props);
        this.state={
            showModal:false
        }
    }
    render() {
        return (
            <Container style={{flex:1}} >
                <View style={{flex:1}}><BarCodeScanner style={{flex:1}} onBarCodeRead={({type, data})=>alert(data)} /></View>
                <View style={{flex:1, backgroundColor:'#44F' }}  ><Text>ShopList Here</Text></View>
            </Container>
        );
    }
}

export default ShopScreen;