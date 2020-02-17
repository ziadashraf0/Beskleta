import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
export default class Test extends React.Component {
  state = {};
  componentDidMount() {
    this.findCoordinates();
  }
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const longitude = position.coords.longitude;
      const latitude = position.coords.latitude;
      const loaded = 1;
      this.setState({
        longitude,
        latitude,
        loaded
      });
    });
  };
  render() {
    if (this.state.loaded == 1) {
      return (
        <View style={styles.container}>
          <MapView
            followsUserLocation={true}
            showsPointsOfInterest={true}
            showsCompass={true}
            style={styles.mapStyle}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            showsMyLocationButton={true}
            showsUserLocation={true}
          >
            <MapView.Marker
              coordinate={{
                latitude: this.state.latitude,
                longitude: this.state.longitude
              }}
              title={"ورشة الزوز لتاجير العجل"}
              description={"بسكلتات جميع الانواع"}
            />
          </MapView>
        </View>
      );
    } else
      return (
        <View style={styles.container}>
          <Text>loading ...</Text>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5
  },
  mapStyle: {
    width: wp("100%"),
    height: hp("100%")
  }
});
