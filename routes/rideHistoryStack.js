import History from "../screens/rideHistory";
import Header from "../shared/header";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  History: {
    screen: History,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="Ride History"></Header>
        )
      };
    }
  }
};
const historyStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16A2DA"
    }
  }
});
export default historyStack;
