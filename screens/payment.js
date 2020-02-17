import React from "react";
import { CreditCardInput } from "react-native-credit-card-input";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default function Payment() {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: hp("5%") }}>
        <CreditCardInput></CreditCardInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
