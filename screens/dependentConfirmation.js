import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/globalStyles";
export function validateEmail(state) {
  var regex = /\S+@\S+\.\S+/;
  if (regex.test(state.email) == 0) {
    alert("validation error");
    return false;
  }
  return true;
}
export default function DependentConfirmation() {
  const [email, setEmail] = useState("");

  const state = {
    email: ""
  };
  return (
    <View style={styles.hint}>
      <Text
        style={{ fontSize: 20, fontFamily: "nunitoBold", color: "#16A2DA" }}
      >
        in order to access Beskleta you need to verify your parent account!
      </Text>
      <View>
        <TextInput
          style={{
            marginTop: hp("7%"),

            borderWidth: hp("0.2%"),
            borderStyle: "solid",
            borderRadius: 10,
            borderColor: "#16A2DA",
            //paddingLeft: wp("15%")
            width: wp("80%"),
            height: hp("7%"),
            textAlign: "center"
          }}
          placeholder="please enter your parent email"
          onChangeText={email => setEmail(email)}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
        onPress={() => {
          state.email = email;
          if (validateEmail(state)) {
            alert("Confirmation Pending");
          }
        }}
      >
        <View style={globalStyles.button}>
          <Text
            style={{ color: "white", fontSize: 20, fontFamily: "nunitoBold" }}
          >
            Confirm email
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hint: {
    //textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: wp("2%"),
    marginBottom: hp("17%")
  }
});
