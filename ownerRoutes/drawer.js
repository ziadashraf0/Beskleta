import { createDrawerNavigator } from "react-navigation-drawer";
import Edit from "./editProfileStack";
import Payment from "./paymentStack";
import Help from "./helpStack";
import Home from "./homeStack";
import Notification from "./notificationStack";
import SignOut from "../screens/signOut";
const screens = {
  Home: {
    screen: Home
  },
  EditProfile: {
    screen: Edit
  },
  Payment: {
    screen: Payment
  },

  Help: {
    screen: Help
  },
  Notification: {
    screen: Notification
  },
  SignOut: {
    screen: SignOut
  }
};
const rootDrawer = createDrawerNavigator(screens);
export default rootDrawer;
