import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  Button,
} from "react-native";
import { requestRide } from "../services/clientServices";
import { connect } from "react-redux";

class searchbikes extends React.Component {
  async requestRide() {
    const { client } = this.props;
    const { navigation } = this.props;

    reqBody = {
      SSN: "",
      userName: "",
      stationName: "",
      bikeID: "",
    };

    try {
      reqBody.SSN = client.SSN;
      reqBody.userName = client.username;
      reqBody.stationName = navigation.getParam("stationName");
      reqBody.bikeID = navigation.getParam("key").toString();

      const result = await requestRide();
      navigation.push("SelectDestination");
    } catch (error) {
      console.log(error.message);
      if (error.response.status == 404) {
        alert(
          "Bike was not found or It was found NOT AVAILABLE at the moment "
        );
      } else if (error.response.status == 400) {
        alert("Client was not found or is NOT AVAILABLE");
      }
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{ marginTop: 2, marginBottom: 2, padding: 15, fontSize: 30 }}
      >
        <Text>category: {navigation.getParam("category")}</Text>
        <Text>colour: {navigation.getParam("color")}</Text>
        <Text>size: {navigation.getParam("size")}</Text>
        <Text>condition: {navigation.getParam("condition")}</Text>
        <Text>rate: {navigation.getParam("rate")}</Text>
        <TouchableHighlight
          style={[styles.touchableHighlight, { backgroundColor: "#16A2DA" }]}
          underlayColor={"#f1f1f1"}
          onPress={() => {
            this.requestRide();
          }}
        >
          <Text style={styles.text}>Request Ride </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  touchableHighlight: {
    backgroundColor: "#16A2DA",
    alignItems: "center",
    justifyContent: "center",

    padding: 20,
    marginTop: 50,
    width: "90%",
    height: "10%",
  },
});
const mapStateToProps = (state) => {
  return {
    client: state.client,
  };
};
const mapDispatchToState = (dispatch) => {
  return {
    setEmailRedux: (email) => {
      dispatch({ type: "setEmail", email: email });
    },

    setUserName: (userName) => {
      dispatch({ type: "setUserName", userName: userName });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToState)(searchbikes);
