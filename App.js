import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./screens/login";
import * as Font from "expo-font";
import { AppLoading } from "expo";
//import Navigator from "./routes/loginStack";
import Navigator from "./routes/ClientOwnerStack";
import { Provider } from "react-redux";
import { createStore } from "redux";
//import Navigator from "./routes/test";
import DependentConfirmation from "./screens/dependentConfirmation";
//import Home from "./screens/home";
import Home from "./screens/editProfile";
import rootReducer from "./reducers/rootReducer";
const store = createStore(rootReducer);
export default function App() {
  const getFonts = () => {
    return Font.loadAsync({
      nunitoRegular: require("./assets/Fonts/regular.ttf"),
      nunitoBold: require("./assets/Fonts/bold.ttf")
    });
  };
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <Navigator></Navigator>
      </Provider>
    );
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)}>
        {" "}
      </AppLoading>
    );
  }
}
