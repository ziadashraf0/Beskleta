import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import MapView from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

export default class Home extends React.Component {
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
  gotToMyLocation() {
    console.log("gotToMyLocation is called");
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log("curent location: ", coords);
        console.log(this.map);
        if (this.map) {
          console.log("curent location: ", coords);
          this.map.animateToRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          });
        }
      },
      error => alert("Error: Are location services on?"),
      { enableHighAccuracy: true }
    );
  }

  render() {
    // const userName = this.props.navigation.getParam("userName");
    // console.log("PROPS " + userName);
    if (this.state.loaded == 1) {
      return (
        <View style={styles.container}>
          <MapView
            followsUserLocation={true}
            showsPointsOfInterest={false}
            showsCompass={false}
            style={styles.mapStyle}
            initialRegion={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01
            }}
            showsMyLocationButton={true}
            showsUserLocation={true}
            ref={ref => (this.map = ref)}
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
          <View style={styles.locateMe}>
            <TouchableOpacity
              onPress={() =>
                this.map.animateToRegion({
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005
                })
              }
            >
              <Entypo name="location" color="#16A2DA" size={40} />
            </TouchableOpacity>
          </View>
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
    height: hp("80%"),
    position: "absolute"
  },
  locateMe: {
    position: "relative",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginTop: hp("87%"),
    marginLeft: wp("70%")
  }
});
