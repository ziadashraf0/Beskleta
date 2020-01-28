import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

const screens = {
  Home: {
    screen: homeStack
  },
  About: {
    screen: aboutStack
  }
};
const rootDrawer = createDrawerNavigator(screens);
export default createAppContainer(rootDrawer);
