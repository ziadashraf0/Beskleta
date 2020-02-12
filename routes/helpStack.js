import Help from "../screens/help";
import Header from "../shared/header";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

const screens = {
  Help: {
    screen: Help,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="Help "></Header>
        )
      };
    }
  }
};
const helpStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16A2DA"
    }
  }
});
export default helpStack;
