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
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";

export default function Login() {
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
              size={100}
            ></FontAwesome>
          </View>
          <Text style={globalStyles.logoText}>Beskleta</Text>
          <Text style={globalStyles.outlineText}>username</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="enter your username"
          ></TextInput>
          <Text style={globalStyles.outlineText}>email</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="enter your email"
          ></TextInput>
          <Text style={globalStyles.outlineText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={globalStyles.textInput}
            placeholder="enter your Password"
          ></TextInput>
          <Text style={globalStyles.outlineText}>Confirm password</Text>
          <TextInput
            secureTextEntry={true}
            style={globalStyles.textInput}
            placeholder="confirm your Password"
          ></TextInput>
          <Text style={globalStyles.outlineText}>BirthDate</Text>

          <DatePicker
            style={{ width: 200, marginLeft: 20, marginTop: 15 }}
            mode="datetime"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2002-05-01"
            maxDate={new Date().getDate()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36
              }
            }}
          />
          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => {}}
          >
            <View style={globalStyles.button}>
              <Text style={{ color: "white", fontSize: 20 }}>Sign up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
