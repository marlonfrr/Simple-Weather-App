import React from "react";
import {
  Button,
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import LogoTitle from "../components/LogoTitle";
import {connect} from "react-redux";
import {TextInput} from "react-native-gesture-handler";
import {LocationInput} from "../components/LocationInput";

//Actions
import {fetchWeatherAction} from "../store/actions";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.updateLocationn = this.updateLocationn.bind(this);
    this.state = {
      country: "",
      city: "",
    };
  }
  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: "Select location",
      // headerLeft: () => (
      //   <Button
      //     onPress={() => navigation.navigate("MyModal")}
      //     title="Info"
      //     color={Platform.OS === "ios" ? "#fff" : null}
      //   />
      // ),
      // headerRight: () => (
      //   <Button
      //     onPress={navigation.getParam("increaseCount")}
      //     title="+1"
      //     color={Platform.OS === "ios" ? "#fff" : null}
      //   />
      // ),
    };
  };

  // UNSAFE_componentWillMount() {
  //   this.props.navigation.setParams({
  //     increaseCount: this.props.counterIncrement,
  //   });
  // }

  handleSearchLocation() {
    this.props.fetchWeather();
  }

  render() {
    var {country, city} = this.state;
    return (
      <View style={{flex: 1, alignItems: "center"}}>
        {/* These both inputs may be a separate form component later */}

        {/* <Text style={{alignSelf: "flex-start"}}>Introduce el país</Text> */}
        <LocationInput
          updateLocation={location => this.setState({country: location})}
          value={country}
          placeholder={"Country"}
        />

        <LocationInput
          updateLocation={location => this.setState({city: location})}
          value={city}
          placeholder={"City"}
        />
        <View style={styles.underButtons}>
          <View
            style={{
              shadowColor: "black", //ios
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowRadius: 2, //ios
              shadowOpacity: 0.6, //ios
              elevation: 5, //android
            }}>
            <View
              // useAngle={true}
              // angle={90}
              style={{
                ...styles.simpleCenteredRow,
                borderRadius: 25,
                paddingVertical: 10,
                paddingHorizontal: 20,
                justifyContent: "center",
                alignSelf: "center",
                backgroundColor: "#f4511e",
              }}
              // colors={["#501980", "#501980", "#210D4E"]}
            >
              <TouchableOpacity
                hitSlop={{top: 10, bottom: 10, right: 20, left: 20}}
                onPress={() => this.handleSearchLocation()}>
                <Text
                  style={{
                    // fontFamily: "Montserrat-Regular",
                    color: "#eeeeee",
                    fontSize: 16,
                  }}>
                  {"Continuar"}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter,
    hello: state.hello,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWeather: () => {
      dispatch(fetchWeatherAction());
    },
  };
}

const styles = StyleSheet.create({
  underButtons: {
    // alignSelf: "center",
    // position: "absolute",
    marginBottom: Platform.OS === "android" ? 10 : 20,
    // bottom: 0,
  },
  simpleCenteredRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
