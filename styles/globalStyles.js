import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  logoText: {
    fontFamily: "nunitoBold",
    fontSize: 40,
    color: "#333",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 80
  },
  outlineText: {
    marginTop: 10,
    marginLeft: 20,
    fontFamily: "nunitoRegular",
    fontSize: 20
  },
  textInput: {
    marginTop: 10,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 50,
    borderColor: "#eee",
    padding: 20
  },
  icon: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#16A2DA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    padding: 20,
    marginTop: 50,
    width: "60%"
  }
});
