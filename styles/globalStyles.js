import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoText: {
    fontFamily: "nunitoBold",
    fontSize: hp("5%"),
    color: "#333",
    textAlign: "center",
    marginTop: hp("3%"),
    marginBottom: hp("0.1%")
  },
  outlineText: {
    marginTop: hp("2%"),
    marginLeft: wp("5%"),
    fontFamily: "nunitoRegular",
    fontSize: hp("3%")
  },
  textInput: {
    marginTop: hp("2%"),
    borderWidth: hp("0%"),
    borderStyle: "solid",
    borderRadius: 50,
    borderColor: "#eee",
    padding: wp("7%")
  },
  icon: {
    marginTop: hp("1%"),
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#16A2DA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: hp("2%"),
    width: wp("60%"),
    marginTop: hp("5%")
  }
});
