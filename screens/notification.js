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
import { confirmingDependent } from "../services/clientServices";
import { deleteNotification } from "../services/clientServices";

import { AntDesign } from "@expo/vector-icons";

class Notification extends React.Component {
  state = {
    Notifications: [],
    show: true
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
  async confirmDependent(client, item) {
    try {
      reqBody = { email: client.email, dependentEmail: item.dependentEmail };
      const result = await confirmingDependent(reqBody);
      alert("confirmed!");
    } catch (error) {
      if (error.response.status === 404) {
        alert("error");
      }
    }
  }
  async deleteNoti(client, item) {
    reqBody = { userName: client.username, notificationID: item._id };
    try {
      const result = await deleteNotification(reqBody);
    } catch (error) {
      if (error.response.status == 404) {
        console.log(error.response);
      }
    }
  }

  render() {
    const { navigation } = this.props;
    const { client } = this.props;
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
              {this.state.show && (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("NotificationDetails", item);
                    console.log("aaaaaaa");
                  }}
                >
                  <View style={styles.notific}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.notificText}>{item.type}</Text>
                      <View style={{ marginLeft: 50, marginTop: 20 }}>
                        <TouchableOpacity
                          onPress={() => this.deleteNoti(client, item)}
                        >
                          <AntDesign
                            name="delete"
                            color="black"
                            size={hp("5%")}
                          ></AntDesign>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <Text style={styles.subText}>{item.message}</Text>
                  </View>
                </TouchableOpacity>
              )}
              {item.type == "Dependent Request" && this.state.show && (
                <View style={styles.button}>
                  <View>
                    <Button
                      title="     yes      "
                      onPress={() => this.confirmDependent(client, item)}
                    ></Button>
                  </View>
                  <View style={{ paddingLeft: wp("20%") }}>
                    <Button
                      title="           no         "
                      onPress={() => {
                        console.log(item);
                        //this.deleteNotification(client, item);
                      }}
                    ></Button>
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
    backgroundColor: "#16A2DA",
    borderColor: "#16A2DA",
    borderWidth: 1
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
    color: "black"
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
  return {};
};

export default connect(mapStateToProps)(Notification);
// for (
//   var i = 0;
//   i < this.state.Notifications.length;
//   i++
// ) {
//   if (
//     this.state.Notifications[i].message == item.message
//   ) {
//     this.state.Notifications.splice(i, 1);
//   }
// }
// this.setState({
//   Notifications: this.state.Notifications
// });
