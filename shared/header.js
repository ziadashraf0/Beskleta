import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default function Header({ Navigation, title }) {
  const openMenu = () => {
    Navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.icon}
      ></MaterialIcons>
      <View>
        <Text style={styles.headerText}> {title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginLeft: wp("5%")
  },
  icon: {
    width: 40
  }
});
