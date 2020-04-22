import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { activateAccount } from "../services/clientServices";
import {
  CreditCardInput,
  LiteCreditCardInput
} from "react-native-credit-card-input";

const s = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60
  },
  label: {
    color: "black",
    fontSize: 12
  },
  input: {
    fontSize: 16,
    color: "black"
  }
});

const USE_LITE_CREDIT_CARD_INPUT = true;

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardValidityDate: "",
      cardVerificationCode: "",
      cardNumber: ""
    };
  }
  async activateAccount() {
    reqBody = {
      cardValidityDate: "",
      cardVerificationCode: "",
      cardNumber: "",
      SSN: "1234567"
    };
    try {
      var str = this.state.cardValidityDate;

      var start = str.substring(0, 2);
      var end = str.substring(3, 4);
      reqBody.cardValidityDate = start + "20" + end;
      reqBody.cardVerificationCode = this.state.cardVerificationCode;
      reqBody.cardNumber = this.state.cardNumber;
      reqBody.SSN = this.state.SSN;

      console.log("result is here " + reqBody);

      const result = await activateAccount();
    } catch (error) {
      if (error.response.status == 404) {
        alert("Card is UNauthorized");
      } else if (error.response.status == 400) {
        alert("Failed to Activate Account");
      }
    }
  }

  _onFocus = field => {
    /* eslint no-console: 0 */
    console.log(field);
  };

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
      </View>
    );
  }
}
