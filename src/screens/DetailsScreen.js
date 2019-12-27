import React from "react";
import {Button, Platform, Image, View, Text} from "react-native";
import {connect} from "react-redux";

class DetailsScreen extends React.Component {
  static navigationOptions = ({navigation, navigationOptions}) => {
    const {params} = navigation.state;

    return {
      title: params ? params.otherParam : "A Nested Details Screen",
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  render() {
    console.warn(this.props);

    /* 2. Read the params from the navigation state */
    // const {params} = this.props.navigation.state;
    // const itemId = params ? params.itemId : null;
    // const otherParam = params ? params.otherParam : null;

    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Details Screen</Text>
        <Text>{JSON.stringify(this.props.weather)}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather,
    // hello: state.hello,
  };
}

export default connect(mapStateToProps, {})(DetailsScreen);
