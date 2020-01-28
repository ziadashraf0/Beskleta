import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  Icon,
  TouchableOpacity
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";

export default function Login({ navigation }) {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <View style={globalStyles.icon}>
          <FontAwesome name="bicycle" color="#16A2DA" size={100}></FontAwesome>
        </View>
        <Text style={globalStyles.logoText}>Beskleta</Text>
        <Text style={globalStyles.outlineText}>username</Text>
        <TextInput
          style={globalStyles.textInput}
          placeholder="enter your username"
        ></TextInput>
        <Text style={globalStyles.outlineText}>Password</Text>
        <TextInput
          secureTextEntry={true}
          style={globalStyles.textInput}
          placeholder="enter your Password"
        ></TextInput>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => {}}
        >
          <View style={globalStyles.button}>
            <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 80 }}>
          <Text>you don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={{ color: "#16A2DA", marginLeft: 5 }}>
              Create account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
