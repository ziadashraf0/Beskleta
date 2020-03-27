import Help from "../screens/help";
import Header from "../shared/header";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import SignOut from "../screens/signOut";

const screens = {
  SignOut: {
    screen: SignOut,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="SignOut "></Header>
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
