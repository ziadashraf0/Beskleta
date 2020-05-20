import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import { withNavigation } from "react-navigation";
import { render } from "react-dom";

export default function StationDetails() {
  const [searchBikes, setsearchbikes] = useState([
    {
      name: "Bike1",
      category: "A",
      colour: "red",
      size: 5,
      condition: "s",
      rate: 3,
      key: "1"
    },
    {
      name: "Bike2",
      category: "B",
      colour: "blue",
      size: 7,
      condition: "m",
      rate: 5,
      key: "2"
    },
    {
      name: "Bike3",
      category: "C",
      colour: "white",
      size: 6,
      condition: "s",
      rate: 3,
      key: "3"
    },
    {
      name: "Bike4",
      category: "D",
      colour: "red",
      size: 5,
      condition: "m",
      rate: 2,
      key: "4"
    }
  ]);
  const { navigation } = this.props;
  return (
    <View style={styles.container}>
      <FlatList
        data={searchstation}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("SearchBike", item)}
          >
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  item: {
    marginBottom: 24,
    padding: 30,
    backgroundColor: "#16A2DA",
    fontSize: 24
    // marginHorizontal:10,
  }
});
