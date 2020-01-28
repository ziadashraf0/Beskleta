import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./screens/login";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/loginStack";

export default function App() {
  const getFonts = () => {
    return Font.loadAsync({
      nunitoRegular: require("./assets/Fonts/regular.ttf"),
      nunitoBold: require("./assets/Fonts/bold.ttf")
    });
  };
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator></Navigator>;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
