import React from "react";
import {View, TextInput, StyleSheet} from "react-native";

const LocationInput = ({value, updateLocation, placeholder}) => (
  <View style={{flexDirection: "row"}}>
    <TextInput
      style={styles.input}
      autoCorrect={false}
      onChangeText={location => updateLocation(location)}
      value={value}
      placeholder={placeholder}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    flex: 0.8,
    borderRadius: 12,
    // marginBottom: 8,
  },
});

export {LocationInput};
