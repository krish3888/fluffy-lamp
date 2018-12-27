import React from "react";
import { Provider } from "react-redux";
import { Root } from "native-base";
import NavigationDetails from "./src/Navigator";
import { NetInfo,View } from "react-native";
import createStore from './src/redux';
import {Font, AppLoading} from 'expo';
import {setNavigator} from './src/components/NavigationServices';

console.ignoredYellowBox = ["Setting a timer"];
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      store: createStore(()=>this.configureStoreCallBack.bind(this)()),
      fontsLoaded: false
    };
  }

  configureStoreCallBack() {}

  async componentWillMount(){
    await Font.loadAsync({
      'Nunito-ExtraBold': require('./src/assets/Fonts/Nunito/Nunito-ExtraBold.ttf'),
      'Nunito-ExtraBoldItalic': require('./src/assets/Fonts/Nunito/Nunito-ExtraBoldItalic.ttf'),
      'Nunito-Regular': require('./src/assets/Fonts/Nunito/Nunito-Regular.ttf'),
      'Nunito-SemiBold': require('./src/assets/Fonts/Nunito/Nunito-SemiBold.ttf'),
      'Nunito-SemiBoldItalic': require('./src/assets/Fonts/Nunito/Nunito-SemiBoldItalic.ttf'),
    });
    this.setState({fontsLoaded: true});
  }

  componentDidMount() {
    setTimeout(()=>{
      setNavigator(this.navigator);
    },1000);
  }

  render() {
    if (this.state.fontsLoaded) {
      return (
        <View style={{ flex: 1 }}>
          <Root>
            <Provider store={this.state.store}>
              <NavigationDetails ref={nav => { this.navigator = nav; }} />
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
