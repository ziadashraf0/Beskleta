import Login from "../owner/login";
import Signup from "../screens/signup";
import { createStackNavigator } from "react-navigation-stack";
import Drawer from "./drawer";
import Home from "../screens/home";

const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },

  Signup: {
    screen: Signup
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
