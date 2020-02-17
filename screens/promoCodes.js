import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from "react-native";

export default function App() {
  return (
    <View style={styles.View}>
      <TextInput
        style={styles.textInput}
        // onChangeText={text => {
        //   this.setState({ inputText: text });

        // }}

        editable={true}
        multiline={false}
        maxLength={20}
      />
      <TouchableHighlight
        style={[styles.touchableHighlight, { backgroundColor: "#16A2DA" }]}
        underlayColor={"#f1f1f1"}
      >
        <Text style={styles.text}>Go </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  },

  textInput: {
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    borderColor: "gray",
    borderBottomWidth: 2,
    fontSize: 16
  },
  View: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  touchableHighlight: {
    backgroundColor: "#16A2DA",
    alignItems: "center",
    justifyContent: "center",

    padding: 20,
    marginTop: 50,
    width: "90%",
    height: "10%"
  }
});
