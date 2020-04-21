import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
//import { FlatList } from "react-native-gesture-handler";

export default function searchstation({ navigation }) {
  const [searchstation] = useState([
    { name: "station1", bike: " ", key: "1" },
    { name: "station2", key: "2" }
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {searchstation.map(item => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>

              <TouchableOpacity
                onPress={() => Navigation.navigate("searchbikes", item)}
              ></TouchableOpacity>
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
