import React from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import NavigationDetails from "./src/Navigator";
import { NetInfo,View } from "react-native";
import store from "./src/store";
import {Font, AppLoading} from 'expo';

console.ignoredYellowBox = ["Setting a timer"];
class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      fontsLoaded:false
    };
  }

  async componentWillMount(){
    await Font.loadAsync({
      'Nunito-ExtraBold': require('./src/assets/Fonts/Nunito/Nunito-ExtraBold.ttf'),
      'Nunito-ExtraBoldItalic': require('./src/assets/Fonts/Nunito/Nunito-ExtraBoldItalic.ttf'),
      'Nunito-Light': require('./src/assets/Fonts/Nunito/Nunito-Light.ttf'),
      'Nunito-LightItalic': require('./src/assets/Fonts/Nunito/Nunito-LightItalic.ttf'),
      'Nunito-Regular': require('./src/assets/Fonts/Nunito/Nunito-Regular.ttf'),
      'Nunito-SemiBold': require('./src/assets/Fonts/Nunito/Nunito-SemiBold.ttf'),
      'Nunito-SemiBoldItalic': require('./src/assets/Fonts/Nunito/Nunito-SemiBoldItalic.ttf'),
    });
    this.setState({fontsLoaded: true});
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={{ flex: 1 }}>
          <Root>
            <Provider store={store}>
              <NavigationDetails />
            </Provider>
          </Root>
        </View>
      );
    } else {
      return (
        <AppLoading />
      )
    }
  }
}
export default App;
