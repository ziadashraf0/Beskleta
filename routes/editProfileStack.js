import Edit from "../screens/editProfile";
import Header from "../shared/header";
import React from "react";
import { createStackNavigator } from "react-navigation-stack";

const screens = {
  EditProfile: {
    screen: Edit,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="Edit Profile "></Header>
        )
      };
    }
  }
};
const editStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16A2DA"
    }
  }
});
export default editStack;
