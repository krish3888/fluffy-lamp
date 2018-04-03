import React from "react";
import { StackNavigator } from "react-navigation";
import Splash from "./container/SplashScreen";
import LoginScreen from "./container/LoginScreen";
import RegisterScreen from "./container/RegisterScreen";
import HomeScreen from "./container/HomeScreen";
import ShopScreen from "./container/ShopScreen";
import ReviewScreen from "./container/ReviewOrder";
import CheckoutScreen from "./container/CheckoutScreen";
import InvoiceScreen from "./container/InvoiceScreen";
import SettingsScreen from "./container/SettingsScreen";
// import ConsentScreen from "./screens/ConsentScreen";
// import SignUpScreen from "./screens/SignUpScreen";
// import AlmostThereScreen from "./screens/AlmostThereScreen";
// import WelcomeScreen from "./screens/WelcomeScreen";
// import ParentDrawerScreen from "./screens/ParentDrawerScreen";
// import LoginAsScreen from "./screens/LoginAsScreen";
// import DrawerChild from "./screens/ChildDrawerScreen";
// import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
const NavigationDetails = StackNavigator(
  {
    // AlmostThere: { screen: AlmostThereScreen },
    // Consent: { screen: ConsentScreen },
    // ForgotPassword: { screen: ForgotPasswordScreen },
    Login: { screen: LoginScreen },
    Register : {screen: RegisterScreen},
    Home: {screen: HomeScreen },
    Shop: {screen: ShopScreen},
    Review: {screen: ReviewScreen},
    Checkout: {screen: CheckoutScreen},
    Invoice: {screen: InvoiceScreen},
    Settings :{screen: SettingsScreen},
    // LoginAs: { screen: LoginAsScreen },
    // SignUp: { screen: SignUpScreen },
    SplashScreen: { screen: Splash },
    // Welcome: { screen: WelcomeScreen }
  },
  { initialRouteName: "SplashScreen", headerMode: "none" }
);
export default NavigationDetails;
