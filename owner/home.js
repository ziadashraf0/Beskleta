import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import MapView from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getStations } from "../services/stationServices";
import { connect } from "react-redux";
import { viewProfile } from "../services/clientServices";
import { globalStyles } from "../styles/globalStyles";

class Home extends React.Component {
  async componentDidMount() {
    try {
      const { client } = this.props;
      reqBody = { userName: client.username };
      const clientProfile = await viewProfile(reqBody);
      const { setEmailRedux, setSSN } = this.props;
      this.setState({ email: clientProfile.email });
      this.setState({ SSN: clientProfile.SSN });
      setEmailRedux(this.state.email);
      setSSN(this.state.SSN);
      console.log(client);
    } catch (error) {
      if (error.response.status === 404) {
        alert("UserName or Password is Incorrect");
      }
    }
  }
  render() {
    return (
      <View style={globalStyles.outlineText}>
        <Text>Profit</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5
  },
  mapStyle: {
    width: wp("100%"),
    height: hp("80%"),
    position: "absolute"
  },
  locateMe: {
    position: "relative",
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: hp("87%"),
    marginLeft: wp("70%")
  }
});
const mapStateToProps = state => {
  return {
    client: state.client
  };
};
const mapDispatchToState = dispatch => {
  return {
    setEmailRedux: email => {
      dispatch({ type: "setEmail", email: email });
    },
    setSSN: SSN => {
      dispatch({ type: "setSSN", SSN: SSN });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Home);
