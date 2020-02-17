import Login from "../screens/login";
import Signup from "../screens/signup";
import { createStackNavigator } from "react-navigation-stack";
import Drawer from "./drawer";
import Old from "./ClientOwnerStack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

const zoz = createStackNavigator({
  login: Old,
  Drawer: Drawer
});
export default createAppContainer(zoz);
