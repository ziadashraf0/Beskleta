import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { terminateRide } from "../services/clientServices";
import { onClick } from "./login";
import { TextInput } from "react-native-gesture-handler";
import { globalStyles } from "../styles/globalStyles";
import VirtualKeyboard from "react-native-virtual-keyboard";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";


class TerminateRide extends React.Component {
  state = {};
  componentDidMount(){
    const {client}=this.props
    this.setState({userName:client.username})
    }
  async terminateRideHandler(state) {
    reqBody = {
      userName: this.state.userName,
    };
    console.log(reqBody.userName);
    try {
      result = await terminateRide(reqBody);
      console.log("hamjmo")
    } catch (error) {
      if (error.response.status == 400) {
        alert("Bad request");
      } else if(error.response.status==404){
        console.log(error.response.data)
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
        
        </View>
      
        <View>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => this.terminateRideHandler(this.state)}
          >
            <View>
              <Text style={{ color: "white", fontSize: 30 }}>Terminate</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    backgroundColor: "#16A2DA",
    marginTop: hp("5%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#16A2DA",
    padding: hp("5%"),
    width: wp("60%")
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
const mapStateToProps = state => {
        return {
          client: state.client
        };
      };
      const mapDispatchToState = dispatch => {
        return {
          setUserNameRedux: userName => {
            dispatch({ type: "setUserName", userName: userName });
          }
        };
      };
      export default connect(mapStateToProps, mapDispatchToState)(TerminateRide);


