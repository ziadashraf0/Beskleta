import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  TouchableHighlightBase,
} from "react-native";

import { viewStationBikes } from "../services/stationServices";
import { FontAwesome } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { connect } from "react-redux";
import { requestRide } from "../services/clientServices";

class stationdetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bikes: [] };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    reqBody = { stationName: "" };

    try {
      reqBody.stationName = navigation.getParam("name");
      console.log(reqBody.stationName);
      const bikes = await viewStationBikes();
      console.log("hi");
      var z = 0;
      for (x in bikes) {
        this.setState({
          bikes: [
            ...this.state.bikes,
            {
              key: bikes[z]["_id"],
              category: bikes[z]["category"],
              colour: bikes[z]["colour"],
              size: bikes[z]["size"],
              condition: bikes[z]["condition"],
              rate: bikes[z]["rate"],
              stationName: bikes[z]["stationName"],
            },
          ],
        });
        z = z + 1;
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.status == 404) {
        alert("No bike found");
      }
    }
  }
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

      alert("Requesting Ride !");
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
      <View style={{ flex: 1, backgroundColor: "white", paddingTop: 4 }}>
        <FlatList
          data={this.state.bikes}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                iconLeft
                onPress={() => {
                  this.requestRide();
                  navigation.push("SearchBikes");
                }}
              >
                <View
                  style={{
                    marginTop: 2,
                    marginBottom: 2,
                    padding: 20,
                    fontSize: 20,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome name="bicycle" size={hp("5%")}></FontAwesome>
                    <Text
                      style={{
                        marginTop: 2,
                        marginBottom: 2,
                        padding: 15,
                        fontSize: 30,
                      }}
                    >
                      Bike category : {item.category}
                    </Text>
                  </View>

                  <Text>Bike size: {item.size}</Text>
                  <Text>Rate: {item.rate}</Text>
                  <Text>condition: {item.condition}</Text>
                </View>
              </TouchableOpacity>
              <View
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "#C0C0C0",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  flex: 1,
                  flexDirection: "column",
                }}
              ></View>
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  item: {
    marginBottom: 24,
    padding: 30,

    fontSize: 24,
    // marginHorizontal:10,
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
export default connect(mapStateToProps, mapDispatchToState)(stationdetails);
