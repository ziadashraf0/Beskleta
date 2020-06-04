import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { withNavigation } from "react-navigation";
import { globalStyles } from "../styles/globalStyles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { viewRides } from "../services/clientServices";
import { connect } from "react-redux";

class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Ridehistory: [] };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const { client } = this.props;
    try {
      reqBody = { userName: client.username };
      console.log(reqBody);
      const result = await viewRides(reqBody);
      this.fillHistoryrides(result);
      this.setState({
        Ridehistory: [
          ...this.state.Ridehistory,
          {
            key: Ridehistory[z]["rideNumber"],
            duration: Ridehistory[z]["duration"],
            date: Ridehistory[z]["date"],
            date: Ridehistory[z]["bikeID"],
            stationName: Ridehistory[z]["departureStation"],
            price: Ridehistory[z]["price"],
          },
        ],
      });
    } catch (error) {
      if (error.response.status === 404) {
        alert("No rides were found");
      } else error.response.status === 400;
      {
        alert("BAD REQUEST");
      }
    }
  }

  fillHistoryrides(Ridehistory) {
    Ridehistory.forEach((Element) => {
      this.setState({ Ridehistory: [...this.state.Ridehistory, Element] });
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.Ridehistory}
          renderItem={({ item }) => (
            <TouchableOpacity
            // onPress={() => {
            //   // navigation.push("RideDetails", item)}}
            >
              <Text style={styles.text}>Date:{item.date.substring(0, 10)}</Text>
              <Text style={styles.text}>Duration:{item.duration}</Text>
              <Text style={styles.text}>RideNumber:{item.rideNumber}</Text>
              <Text style={styles.text}>{item.departureStation}</Text>
              <Text style={styles.text1}>price:{item.price}</Text>
              <Text style={styles.item}></Text>
              <Text>
                ________________________________________________________
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    marginBottom: 0,
    padding: 0,
    backgroundColor: "white",
    fontSize: 0,
  },
  text: {
    fontFamily: "nunitoBold",
    fontSize: hp("4%"),
    color: "#333",
    textAlign: "left",
    backgroundColor: "white",
  },
  text1: {
    fontFamily: "nunitoBold",
    fontSize: hp("4%"),
    color: "#333",
    textAlign: "right",
    backgroundColor: "white",
  },
});
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
export default connect(mapStateToProps, mapDispatchToState)(History);
