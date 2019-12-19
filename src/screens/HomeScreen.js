import React from "react";
import {Button, Platform, Image, View, Text} from "react-native";
import LogoTitle from "../components/LogoTitle";
import {connect} from "react-redux";
import {counterIncrement, counterDecrement} from "../store/actions";

class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: () => <LogoTitle />,
      headerLeft: () => (
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Info"
          color={Platform.OS === "ios" ? "#fff" : null}
        />
      ),
      headerRight: () => (
        <Button
          onPress={navigation.getParam("increaseCount")}
          title="+1"
          color={Platform.OS === "ios" ? "#fff" : null}
        />
      ),
    };
  };

  UNSAFE_componentWillMount() {
    this.props.navigation.setParams({
      increaseCount: this.props.counterIncrement,
    });
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
        <Text>Home Screen</Text>
        <Text>Count: {this.props.count}</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            // console.warn(this.props);
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate("Details", {
              itemId: 86,
              otherParam: "First Details",
            });
          }}
        />
        <Button title="Sumar" onPress={this.props.counterIncrement} />
        <Button title="Restar" onPress={this.props.counterDecrement} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state,
  };
}

export default connect(mapStateToProps, {counterIncrement, counterDecrement})(
  HomeScreen,
);
