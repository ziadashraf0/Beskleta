import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { globalStyles } from "../styles/globalStyles";
import { activateDependentAccount } from "../services/clientServices";
// export function validateEmail() {
//   var regex = /\S+@\S+\.\S+/;
//   if (regex.test(this.state.email) == 0) {
//     alert("validation error");
//     return false;
//   }
//   return true;
// }
class dependentConf extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SSN: "",
      email: ""
    };
  }
  async activateDependentAccount() {
    const { client } = this.props;

    reqBody = {
      parentSSN: "",
      parentEmail: "",
      dependentUserName: client.username,
      dependentEmail: client.email
    };

    try {
      reqBody.parentEmail = this.state.email;
      reqBody.parentSSN = this.state.SSN;
      console.log(reqBody.parentEmail);
      console.log(reqBody.parentSSN);
      console.log(reqBody.dependentEmail);
      console.log(reqBody.dependentUserName);
      const result = await activateDependentAccount();
      alert("we will email your parent and get back to you");
    } catch (error) {
      console.log(error.message);
      if (error.response.status == 404) {
        alert("Parent was not found");
      } else if (error.response.status == 400) {
        alert("Your Parent is Underaged Or Not Activated");
      }
    }
  }
  render() {
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
            placeholder="please enter your parent SSN"
            onChangeText={text => this.setState({ SSN: text })}
          ></TextInput>
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
            onChangeText={text => this.setState({ email: text })}
          ></TextInput>
        </View>
        <TouchableOpacity
          style={{ alignItems: "center", justifyContent: "center" }}
          onPress={() => this.activateDependentAccount()}
        >
          <View style={globalStyles.button}>
            <Text
              style={{ color: "white", fontSize: 20, fontFamily: "nunitoBold" }}
            >
              Confirm Parent Infromation
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
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

    setUserName: userName => {
      dispatch({ type: "setUserName", userName: userName });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToState)(dependentConf);
