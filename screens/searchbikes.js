import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";

export default class SearchBike extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <view>
        <Text>{navigation.getparam("name")} </Text>
        <Text>{navigation.getparam("category")}</Text>
        <Text>{navigation.getparam("color")}</Text>
        <Text>{navigation.getparam("size")}</Text>
        <Text>{navigation.getparam("condition")}</Text>
        <Text>{navigation.getparam("rate")}</Text>
      </view>
    );
  }
}
