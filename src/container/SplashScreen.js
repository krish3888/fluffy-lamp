import React from 'react';
import {} from 'native-base';
import {View, Text, StatusBar} from 'react-native';
import {DangerZone} from 'expo';

const {Lottie} = DangerZone;

class SplashScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.animation.play();
        setTimeout(()=>this.props.navigation.navigate('Login'), 3000);
    }

    render() {
        return (
            <View style={{backgroundColor:'#44F',  flex:1, alignItems: 'center', justifyContent:'center'}} >
                <StatusBar hidden />
                <View style={{height:400, width:400}} >
                    <Lottie
                        ref={animation => {
                        this.animation = animation;
                        }}
                        style={{height: 400, width: 400, transform:[{scale:3}]  }}
                        source={require('../assets/animation/soda_loader.json')}
                    />
                </View>
                <Text style={{fontFamily:'Nunito-ExtraBold', color:'white', fontSize:28}} >Fluffy Lamp</Text>
            </View>
        );
    }
}

export default SplashScreen;