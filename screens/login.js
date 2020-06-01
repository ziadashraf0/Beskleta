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
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { globalStyles } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { clientLogin } from "../services/clientServices";
import { ScrollView } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Drawer from "../routes/drawer";
import Home from "../screens/home";
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
    //    email: "",
    password: "",
    userName: "",
  };
  if (validateEmail(state)) {
    reqBody.userName = state.userName;
    reqBody.password = state.password;
    console.log(reqBody);
    try {
      await clientLogin(reqBody);
      navigation.navigate("Drawer", { userName: state.userName });
    } catch (error) {
      if (error.response.status === 404) {
        alert("UserName or Password is Incorrect");
      }
    }
  }
}

function Login({ navigation, client, setUserNameRedux }) {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("");

  const state = {
    password: "",
    auth: "",
    userName: "",
  };
  // console.log(client);
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
            onChangeText={(userName) => setUserName(userName)}
          ></TextInput>
          <Text style={globalStyles.outlineText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={globalStyles.textInput}
            placeholder="enter your Password"
            onChangeText={(password) => setPassword(password)}
          ></TextInput>
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              state.userName = userName;
              state.password = password;
              setUserNameRedux(userName);
              onClick(state, { navigation });
              console.log("hhhhhhhh" + auth);
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
              marginLeft: wp("5%"),
            }}
          >
            <Text>you don't have an account ?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Signup");
              }}
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
const mapStateToProps = (state) => {
  return {
    client: state.client,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    setUserNameRedux: (userName) => {
      dispatch({ type: "setUserName", userName: userName });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Login);
