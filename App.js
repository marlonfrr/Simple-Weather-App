import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  AppRegistry,
} from "react-native";

import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducers from "./src/store/reducers";
import HomeScreen from "./src/screens/HomeScreen";
//import NavigationService from './navigation/NavigationService';
import DetailsScreen from "./src/screens/DetailsScreen";
import ModalScreen from "./src/screens/ModalScreen";

const store = createStore(reducers);

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: "modal",
    headerMode: "none",
  },
);

const AppContainer = createAppContainer(RootStack);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: 'white',
//   },
// });

AppRegistry.registerComponent("simpleWeatherApp", () => App);
