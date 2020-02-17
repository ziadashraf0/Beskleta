import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";

import { PermissionsAndroid } from "react-native";
export default class Test extends React.Component {
  state = {
    location: null
  };
  componentDidMount() {
    this.findCoordinates();
  }
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const location = JSON.stringify(position);
      this.setState({ location });
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Find My Coords?</Text>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          followsUserLocation={true}
          showsPointsOfInterest={true}
          showsCompass={true}
          style={styles.mapStyle}
          initialRegion={{
            latitude: 30,
            longitude: 26.8206,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsMyLocationButton={true}
          showsUserLocation={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
