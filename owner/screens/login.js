import React, { useState } from "react";
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
import { globalStyles } from "../../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { ownerLogin } from "../../services/ownerServices";
import { ScrollView } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export function validateEmail(state) {
  var regex = /\S+@\S+\.\S+/;
  var regexname = /\S+/;

  if (
    regexname.test(state.userName) == 0 ||
    regexname.test(state.password) == 0
  ) {
    alert("validation error");
    return false;
  }
  console.log("good login validation");
  return true;
}
export async function onClick(state, { navigation }) {
  reqBody = {
    email: "",
    password: "",
    userName: ""
  };
  if (validateEmail(state)) {
    reqBody.email = state.email;
    reqBody.password = state.password;
    reqBody.userName = state.userName;
    console.log(reqBody);
    try {
      await ownerLogin(reqBody);
      navigation.navigate("Drawer");
    } catch (error) {
      if (error.response.status === 404) {
        alert("email or Password is Incorrect");
      }
    }
  }
}

export default function OwnerLogin({ navigation }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");

  const state = {
    email: "",
    password: "",
    auth: "",
    userName: ""
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView>
        <View style={globalStyles.container}>
          <View style={globalStyles.icon}>
            <FontAwesome
              name="bicycle"
              color="#16A2DA"
              size={hp("15%")}
            ></FontAwesome>
          </View>
          <Text style={globalStyles.logoText}>Beskleta</Text>
          <Text style={globalStyles.outlineText}>username</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="enter your username"
            onChangeText={userName => setUserName(userName)}
          ></TextInput>
          <Text style={globalStyles.outlineText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={globalStyles.textInput}
            placeholder="enter your Password"
            onChangeText={password => setPassword(password)}
          ></TextInput>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              state.email = email;
              state.password = password;
              state.userName = userName;
              onClick(state, { navigation });
            }}
          >
            <View style={globalStyles.button}>
              <Text style={{ color: "white", fontSize: hp("3%") }}>Login</Text>
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              marginTop: hp("4.7%"),
              marginLeft: wp("5%")
            }}
          >
            <Text>you don't have an account ?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("OwnerSignup")}
            >
              <Text style={{ color: "#16A2DA", marginLeft: wp("5") }}>
                Create account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
