import Notification from "../owner/notification";
import Header from "../shared/header";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import NotificationDetails from "../screens/notificationDetails";
const screens = {
  Notification: {
    screen: Notification,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="Notification "></Header>
        )
      };
    }
  },
  NotificationDetails: {
    screen: NotificationDetails
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
export default NotificationStack;
