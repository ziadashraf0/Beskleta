import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { render } from "react-dom";
//import { FlatList } from "react-native-gesture-handler";

export default function searchstation({ navigation }) {
  //const { navigation } = this.props;
  const [searchstation, setsearchstation] = useState([
    { name: "station1", numberBikes: 5, numberRides: 10, key: "1" },
    { name: "station2", numberBikes: 6, numberRides: 30, key: "2" }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {searchstation.map(item => {
          return (
            <View key={item.key}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SearchBike", item);
                  console.log("aaaaaaa");
                }}
              >
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
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
