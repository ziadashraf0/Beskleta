import Home from "../screens/home";
import Header from "../shared/header";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="Home "></Header>
        )
      };
    }
  }
};
const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16A2DA"
    }
  }
});
export default homeStack;