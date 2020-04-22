import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { globalStyles } from "../styles/globalStyles";
import { ScrollView, FlatList } from "react-native-gesture-handler";
import { viewNotifications } from "../services/clientServices";
class Notification extends React.Component {
  state = {
    Notifications: []
  };
  async componentDidMount() {
    const { client } = this.props;
    console.log("------------" + client.email);
    try {
      reqBody = { userName: client.username };
      const result = await viewNotifications(reqBody);
      this.fillNotifications(result);
    } catch (error) {
      if (error.response.status === 404) {
        alert("error");
      }
    }
  }
  fillNotifications(Notifications) {
    Notifications.forEach(Element => {
      this.setState({ Notifications: [...this.state.Notifications, Element] });
    });
  }
  async confirmDependent(client) {}

  render() {
    const { navigation } = this.props;
    //return this.state.Notifications.map(item => {
    return (
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={this.state.Notifications}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#",
              marginBottom: wp("5%")
            }}
          >
            <ScrollView>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("NotificationDetails", item);
                  console.log("aaaaaaa");
                }}
              >
                <View style={styles.notific}>
                  <Text style={styles.notificText}>{item.type}</Text>
                  <Text style={styles.subText}>{item.message}</Text>
                </View>
              </TouchableOpacity>
              {item.type == "Dependent Request" && (
                <View style={styles.button}>
                  <View>
                    <Button
                      title="     yes      "
                      onPress={() => alert("aaa")}
                    ></Button>
                  </View>
                  <View style={{ paddingLeft: wp("20%") }}>
                    <Button title="           no         "></Button>
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        )}
      ></FlatList>
    );
  }
}

const styles = StyleSheet.create({
  notific: {
    width: wp("100%"),
    height: hp("10%"),
    fontWeight: "bold",
    //marginTop: hp("1%"),
    marginBottom: hp("7%"),
    backgroundColor: "black"
    //borderColor: "#16A2DA",
    // borderRadius: 50,
  },
  button: {
    width: wp("50%"),
    marginBottom: hp("2%"),
    marginLeft: hp("5%"),
    flexDirection: "row"
  },
  notificText: {
    marginTop: hp("2%"),
    marginLeft: wp("5%"),
    fontFamily: "nunitoRegular",
    fontSize: hp("4%"),
    fontWeight: "bold",
    color: "white"
  },
  subText: {
    marginTop: hp("4%"),
    marginLeft: wp("5%"),
    fontFamily: "nunitoRegular",
    fontSize: hp("2%")
  }
});
const mapStateToProps = state => {
  return {
    client: state.client
  };
};
const mapDispatchToState = dispatch => {
  return {
    setUserNameRedux: userName => {
      dispatch({ type: "setUserName", userName: userName });
    }
  };
};
export default connect(mapStateToProps)(Notification);
