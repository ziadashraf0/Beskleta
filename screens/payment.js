import React, { Component } from "react";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";
import { activateAccount, viewProfile } from "../services/clientServices";
import { connect } from "react-redux";

import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";

const s = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
});

const USE_LITE_CREDIT_CARD_INPUT = true;

class payment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardValidityDate: "",
      cardVerificationCode: "",
      cardNumber: "",
      birthDate: "",
    };
  }
  async activateAccount() {
    const { client } = this.props;
    reqBody = {
      cardValidityDate: "",
      cardVerificationCode: "",
      cardNumber: "",
      SSN: client.SSN,
    };

    var str = this.state.cardValidityDate;

    var start = str.substring(0, 2);
    var end = str.substring(3, 5);
    try {
      reqBody.cardValidityDate = "20" + end + "/" + start;
      reqBody.cardVerificationCode = this.state.cardVerificationCode;
      reqBody.cardNumber = this.state.cardNumber;

      console.log("result is here " + reqBody.cardValidityDate);
      console.log("result is here " + reqBody.cardVerificationCode);
      console.log("result is here " + reqBody.cardNumber);
      console.log("result is here " + reqBody.SSN);

      const result = await activateAccount();
      alert("Account activated ");
    } catch (error) {
      console.log(error.message);
      if (error.response.status == 404) {
        alert("Card is UNauthorized");
      } else if (error.response.status == 400) {
        alert("Failed to Activate Account");
      }
    }
  }

  _onChange = (formData) => {
    /* eslint no-console: 0 */
    var body = formData;

    this.setState({ cardVerificationCode: body.values.cvc });
    this.setState({ cardValidityDate: body.values.expiry });
    this.setState({ cardNumber: body.values.number });
    // console.log(this.state);
    // console.log(JSON.stringify(formData, null, " ").values);
  };

  _onFocus = (field) => {
    /* eslint no-console: 0 */
    console.log(field);
  };
  async componentDidMount() {
    var x = new Date("2002-01-1");
    const { client } = this.props;
    reqBody = {
      userName: client.username,
    };
    try {
      const result = await viewProfile(reqBody);

      this.setState({
        birthDate: result["birthDate"].slice(0, 10),
      });
      if (this.state.birthDate > x) {
        console.log("shater enta kber");
      } else {
        const { navigation } = this.props;
        navigation.navigate("dependent");
        console.log("yalla y tfl mn hena");
      }
    } catch (error) {
      if (error.response.status == 404) {
        alert("client was not found");
      } else if (error.response.status == 400) {
        alert("bad req");
      }
    }
  }
  render() {
    return (
      <View style={s.container}>
        {USE_LITE_CREDIT_CARD_INPUT ? (
          <LiteCreditCardInput
            autoFocus
            inputStyle={s.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            //onFocus={this._onFocus}
            onChange={this._onChange}
          />
        ) : (
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            requiresPostalCode
            labelStyle={s.label}
            inputStyle={s.input}
            validColor={"black"}
            invalidColor={"red"}
            placeholderColor={"darkgray"}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
        )}
        <TouchableHighlight
          onPress={() => this.activateAccount()}
          style={[styles.touchableHighlight, { backgroundColor: "#16A2DA" }]}
          underlayColor={"#f1f1f1"}
        >
          <Text style={styles.text}>Submit</Text>
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
    marginLeft: 20,
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
export default connect(mapStateToProps, mapDispatchToState)(payment);
