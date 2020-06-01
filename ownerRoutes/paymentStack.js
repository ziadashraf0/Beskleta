import Payment from "../owner/payment";
import Header from "../shared/header";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  Payment: {
    screen: Payment,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="Payment"></Header>
        )
      };
    }
  }
};
const paymentStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16A2DA"
    }
  }
});
export default paymentStack;
