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

// Store creating
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/sagas/rootSaga";
// Reducers
import reducers from "./src/store/reducers";
// Containers
import HomeScreen from "./src/screens/HomeScreen";
// import NavigationService from './navigation/NavigationService';
import DetailsScreen from "./src/screens/DetailsScreen";
import ModalScreen from "./src/screens/ModalScreen";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

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

sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent("simpleWeatherApp", () => App);
