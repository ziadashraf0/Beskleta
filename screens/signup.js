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
import { globalStyles } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { clientRegister } from "../services/clientServices";
import { emailCheck } from "../services/clientServices";

export function validateEmail(state) {
  var regex = /\S+@\S+\.\S+/;
  var regexname = /\S+/;

  if (
    regex.test(state.email) == 0 ||
    regexname.test(state.firstName) == 0 ||
    regexname.test(state.birthDate) == 0 ||
    regexname.test(state.lastName) == 0 ||
    regexname.test(state.phoneNumber) == 0 ||
    regexname.test(state.password) == 0 ||
    regexname.test(state.userName) == 0 ||
    regexname.test(state.SSN) == 0
  ) {
    alert("validation error");
    return false;
  } else if (state.password != state.confirmPassword) {
    alert("passwords don't match");
    return false;
  }
  return true;
}
export async function onClick(state, { navigation }) {
  reqBody = {
    firstName: "",
    lastName: "",
    password: " ",
    email: "",
    SSN: "",
    phoneNumber: "",
    birthDate: "",
    userName: ""
  };
  if (validateEmail(state)) {
    reqBody.firstName = state.firstName;
    reqBody.lastName = state.lastName;
    reqBody.phoneNumber = state.phoneNumber;
    reqBody.email = state.email;
    reqBody.password = state.password;
    reqBody.SSN = state.SSN;
    reqBody.birthDate = state.birthDate;
    reqBody.userName = state.userName;
    //const dateee = new Date(2002, 1, 1);
    console.log(reqBody);
    try {
      await clientRegister(reqBody);
      alert("Registerd!");
    } catch (error) {
      if (error.response.status === 400) {
        alert("already exists");
      }
    }
  }
}

export default function Signup({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");

  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [SSN, setSSN] = useState("");
  const [date, setDate] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [dateobject, setDateObject] = useState("");

  const state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    SSN: "",
    phoneNumber: "",
    birthDate: "",
    timestamp: "",
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
              size={100}
            ></FontAwesome>
          </View>
          <Text style={globalStyles.logoText}>Beskleta</Text>
          <Text style={globalStyles.outlineText}>User Name</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="enter your username"
            id="userName"
            onChangeText={userName => setUserName(userName)}
            required
          ></TextInput>
          <Text style={globalStyles.outlineText}>First Name</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="enter your first name"
            id="firstName"
            onChangeText={firstName => setFirstName(firstName)}
            required
          ></TextInput>
          <Text style={globalStyles.outlineText}>Last name</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="enter your Last Name"
            id="secondName"
            onChangeText={lastName => setLastName(lastName)}
            required
          ></TextInput>
          <Text style={globalStyles.outlineText}>email</Text>
          <TextInput
            style={globalStyles.textInput}
            placeholder="enter your email"
            onChangeText={email => setEmail(email)}
          ></TextInput>
          <Text style={globalStyles.outlineText}>SSN</Text>
          <TextInput
            keyboardType="numeric"
            style={globalStyles.textInput}
            placeholder="enter your SSN"
            onChangeText={SSN => setSSN(SSN)}
          ></TextInput>
          <Text style={globalStyles.outlineText}>Phone Number</Text>
          <TextInput
            keyboardType="numeric"
            style={globalStyles.textInput}
            placeholder="enter your SSN"
            onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
          ></TextInput>
          <Text style={globalStyles.outlineText}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={globalStyles.textInput}
            placeholder="enter your Password"
            onChangeText={password => setPassword(password)}
          ></TextInput>
          <Text style={globalStyles.outlineText}>Confirm password</Text>
          <TextInput
            secureTextEntry={true}
            style={globalStyles.textInput}
            placeholder="confirm your Password"
            onChangeText={confirmPassword =>
              setconfirmPassword(confirmPassword)
            }
          ></TextInput>
          <Text style={globalStyles.outlineText}>BirthDate</Text>

          <TouchableOpacity
            style={{ marginBottom: 10, flexDirection: "row" }}
            onPress={() => setShowDate(true)}
          >
            <View style={{ marginTop: 10, marginLeft: 20 }}>
              <MaterialIcons name="date-range" color="#16A2DA" size={40} />
            </View>
            <View
              style={{
                height: 30,
                width: 150,
                borderRadius: 10,
                borderColor: "grey",
                borderWidth: 1,
                marginLeft: 10,
                marginTop: 15
              }}
            >
              <Text
                style={{ color: "#777", fontSize: 15, textAlign: "center" }}
              >
                Select Date
              </Text>
            </View>
          </TouchableOpacity>
          {showDate && (
            <DateTimePicker
              value={new Date()}
              mode={date}
              is24Hour={true}
              display="default"
              onChange={date => {
                setShowDate(false);
                setDate(date);
                setDateObject(date.nativeEvent);
              }}
            />
          )}

          <TouchableOpacity
            style={{ alignItems: "center", justifyContent: "center" }}
            onPress={() => {
              const dates = new Date(dateobject.timestamp).toLocaleDateString();
              state.firstName = firstName;
              state.lastName = lastName;
              state.email = email;
              state.SSN = SSN;
              state.password = password;
              state.confirmPassword = confirmPassword;
              state.phoneNumber = phoneNumber;
              state.birthDate = dates;
              state.timestamp = dateobject.timestamp;
              state.userName = userName;

              onClick(state, { navigation });
            }}
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
