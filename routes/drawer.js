import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Edit from "./editProfileStack";
import Payment from "./paymentStack";
import Help from "./helpStack";
import PromoCodes from "./promoCodesStack";
//import History from "./rideHistoryStack";
import Home from "./homeStack";
import Notification from "./notificationStack";
import RideHistory from "../screens/rideHistory";
import SignOut from "../screens/signOut";
const screens = {
  Home: {
    screen: Home,
  },
  EditProfile: {
    screen: Edit,
  },
  Payment: {
    screen: Payment,
  },
  PromoCodes: {
    screen: PromoCodes,
  },
  RideHistory: {
    screen: RideHistory,
  },
  Help: {
    screen: Help,
  },
  Notification: {
    screen: Notification,
  },
  SignOut: {
    screen: SignOut,
  },
};
const rootDrawer = createDrawerNavigator(screens);
export default rootDrawer;
