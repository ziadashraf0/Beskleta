import Home from "../owner/home";
import Header from "../shared/header";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import SearchStation from "../screens/searchstation";
import StationDetails from "../screens/stationdetails";
import SearchBike from "../screens/searchbikes";

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
  },
  SearchStation: {
    screen: SearchStation
  },
  StationDetails: {
    screen: StationDetails
  },
  SearchBike: {
    screen: SearchBike
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
