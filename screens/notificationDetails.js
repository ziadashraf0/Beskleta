import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default function NotificationDetails({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{navigation.getParam("message")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "nunitoBold",
    fontSize: hp("5%"),
    color: "#333",
    textAlign: "center",
    marginBottom: hp("50%")
  }
});
