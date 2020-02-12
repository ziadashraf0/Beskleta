import PromoCodes from "../screens/promoCodes";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Header from "../shared/header";

const screens = {
  PromoCodes: {
    screen: PromoCodes,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="Promo Codes "></Header>
        )
      };
    }
  }
};
const promoStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16A2DA"
    }
  }
});
export default promoStack;
