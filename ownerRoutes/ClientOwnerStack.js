import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Separation from "../Separation/separation";
import Login from "../screens/login";
import loginStack from "./loginStack";
import Signup from "../screens/signup";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Drawer from "./drawer";
import OwnerSignup from "../owner/signup";
import OwnerLogin from "../owner/login";
import DependentConfirmation from "../screens/dependentConfirmation";

const screens = {
  Separation: {
    screen: Separation,
    navigationOptions: {
      title: "Beskleta"
    }
  },
  Login: {
    screen: Login
  },
  Signup: {
    screen: Signup
  },
  DependentConfirmation: {
    screen: DependentConfirmation
  },
  OwnerLogin: {
    screen: OwnerLogin,
    navigationOptions: {
      title: "Login"
    }
  },
  OwnerSignup: {
    screen: OwnerSignup,
    navigationOptions: {
      title: "Signup"
    }
  }
};
const separation = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTitleAlign: "center",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: "#16A2DA"
    }
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Separation: separation,
      Drawer: Drawer
    },
    {
      initialRouteName: "Separation"
    }
  )
);
