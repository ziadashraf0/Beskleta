import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { startRide } from "../services/clientServices";
import { TextInput } from "react-native-gesture-handler";
import { globalStyles } from "../styles/globalStyles";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";

export default class Test extends React.Component {
  state = {};
  async startRideHandler(state) {
    reqBody = {
      userName: "ziad",
      PIN: state.PIN,
    };
    try {
      result = await startRide(reqBody);
    } catch (error) {
      if (error.response.status == 404) {
        alert(error.response.data);
      } else if (error.response.status == 400) {
        alert(error.response.data);
      }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={globalStyles.icon}>
          <FontAwesome
            name="bicycle"
            color="#16A2DA"
            size={hp("20%")}
          ></FontAwesome>
          <Text style={globalStyles.logoText}>Enjoy the Ride</Text>
        </View>
        <View style={styles.PIN}>
          <TextInput
            placeholder="enter the PIN"
            keyboardType="numeric"
            onChangeText={(val) => this.setState({ PIN: val })}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.PINHandler}
            onPress={() => this.startRideHandler(this.state)}
          >
            <View>
              <Text style={{ color: "white", fontSize: 30 }}>start ride</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  PINHandler: {
    backgroundColor: "#16A2DA",
    marginTop: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#16A2DA",
    padding: hp("5%"),
    width: wp("60%"),
  },
  PIN: {
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#16A2DA",
    padding: hp("5%"),
    width: wp("100%"),
    marginTop: hp("5%"),
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: wp("100%"),
    height: hp("80%"),
    position: "absolute",
  },
  locateMe: {
    position: "relative",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: hp("87%"),
    marginLeft: wp("70%"),
  },
});
