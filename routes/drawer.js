import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import Edit from "./editProfileStack";
import Payment from "./paymentStack";
import Help from "./helpStack";
import PromoCodes from "./promoCodesStack";
import History from "./rideHistoryStack";
import Home from "./homeStack";
import Notification from "./notificationStack";

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
  PromoCodes: {
    screen: PromoCodes
  },
  History: {
    screen: History
  },
  Help: {
    screen: Help
  },
  Notification: {
    screen: Notification
  }
};
const rootDrawer = createDrawerNavigator(screens);
export default rootDrawer;
