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
import RetailerHomeScreen from "./container/RetailerHomeScreen";
import InventoryScreen from "./container/InventoryScreen";
const NavigationDetails = StackNavigator(
  {
    Login: { screen: LoginScreen },
    Register : {screen: RegisterScreen},
    Home: {screen: HomeScreen },
    Shop: {screen: ShopScreen},
    Review: {screen: ReviewScreen},
    Checkout: {screen: CheckoutScreen},
    Invoice: {screen: InvoiceScreen},
    Settings :{screen: SettingsScreen},
    RetailerHome: {screen: RetailerHomeScreen},
    Inventory: {screen: InventoryScreen},
    SplashScreen: { screen: Splash },
  },
  { initialRouteName: "SplashScreen", headerMode: "none" }
);
export default NavigationDetails;
