import Header from "../shared/header";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import SignOut from "../screens/signOut";
const screens = {
  Notification: {
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
const NotificationStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16A2DA"
    }
  }
});
export default SignOut;
