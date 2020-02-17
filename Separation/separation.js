import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Button,
  TouchableOpacity
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";

export default function Separation({ navigation }) {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => navigation.navigate("OwnerLogin")}
      >
        <View style={globalStyles.button}>
          <Text style={{ color: "white", fontSize: 20 }}>Owner</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={globalStyles.button}>
          <Text style={{ color: "white", fontSize: 20 }}>Client</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});
