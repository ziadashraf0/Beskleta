import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

export default class Station extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Button
        title="Request Ride"
        onPress={() => navigation.navigate("Bike")}
      ></Button>
    );
  }
}
