import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { getStations } from "../services/stationServices"; //import { FlatList } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default class searchstation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { stations: [] };
  }

  async componentDidMount() {
    try {
      const stations = await getStations();
      var z = 0;
      for (x in stations) {
        this.setState({
          stations: [
            ...this.state.stations,
            {
              key: z + 1,

              name: stations[z]["name"],
            },
          ],
        });
        z = z + 1;
      }
    } catch (error) {
      console.log(error.message);
      if (error.response.status == 404) {
        alert("No stations found");
      }
    }
  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.stations}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                iconLeft
                transparent
                primary
                onPress={() => {
                  navigation.push("StationDetails", item);
                }}
              >
                <View style={{ paddingLeft: 10 }}>
                  <FontAwesome name="bicycle" size={hp("5%")}></FontAwesome>
                </View>
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>

              <View
                style={{
                  height: 1,
                  width: "100%",
                  backgroundColor: "#C0C0C0",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  flex: 1,
                  flexDirection: "column",
                }}
              ></View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 4,
  },
  item: {
    marginTop: 2,
    marginBottom: 2,
    padding: 15,
    fontSize: 30,
    // marginHorizontal:10,
  },
});
