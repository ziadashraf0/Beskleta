import React, { useState } from "react";
import { Text, View } from "react-native";
import CodePush from "react-native-code-push";
import { NativeModules } from "react-native";
class SignOut extends React.Component {
  componentDidMount() {
    NativeModules.DevSettings.reload();
  }
  render() {
    return <Text>GoodByeee......</Text>;
  }
}

export default SignOut;
