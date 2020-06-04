import Home from "../screens/home";
import Header from "../shared/header";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import SearchStation from "../screens/searchstation";
import StationDetails from "../screens/stationdetails";
import SearchBikes from "../screens/searchbikes";
import SelectDestination from "../screens/selectdestination";
import StartRide from "../screens/startRide";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="Home "></Header>
        ),
      };
    },
  },
  SearchStation: {
    screen: SearchStation,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="SearchStation "></Header>
        ),
      };
    },
  },
  StationDetails: {
    screen: StationDetails,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="StationDetails "></Header>
        ),
      };
    },
  },

  SearchBikes: {
    screen: SearchBikes,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="SearchBikes "></Header>
        ),
      };
    },
  },
  SelectDestination: {
    screen: SelectDestination,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="SelectDestination "></Header>
        ),
      };
    },
  },
  StartRide: {
    screen: StartRide,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header Navigation={navigation} title="StartRide "></Header>
        ),
      };
    },
  },
};
const homeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16A2DA",
    },
  },
});
export default homeStack;
