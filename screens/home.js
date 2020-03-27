import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { getStations } from "../services/stationServices";
import { connect } from "react-redux";
import { viewProfile } from "../services/clientServices";

class Home extends React.Component {
  state = {
    stations: []
  };
  fillStations(stations) {
    console.log(stations);
    var z = 0;
    for (x in stations) {
      this.setState({
        stations: [
          ...this.state.stations,
          {
            key: z + 1,
            coordinate: {
              latitude: parseFloat(
                stations[z]["latitude"]["$numberDecimal"].replace(",", ".")
              ),
              longitude: parseFloat(
                stations[z]["longitude"]["$numberDecimal"].replace(",", ".")
              )
            },
            title: stations[z]["name"]
          }
        ]
      });
      z = z + 1;
    }
  }
  async componentDidMount() {
    try {
      const { client } = this.props;
      reqBody = { userName: client.username };
      const clientProfile = await viewProfile(reqBody);
      const { setEmailRedux, setSSN } = this.props;
      this.setState({ email: clientProfile.email });
      this.setState({ SSN: clientProfile.SSN });
      setEmailRedux(this.state.email);
      setSSN(this.state.SSN);
      console.log(client);
    } catch (error) {
      if (error.response.status === 404) {
        alert("UserName or Password is Incorrect");
      }
    }
    this.findCoordinates();
    try {
      const stations = await getStations();
      this.fillStations(stations);
    } catch (error) {
      if (error.response.status === 404) {
        alert("UserName or Password is Incorrect");
      }
    }
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
      const { client } = this.props;
      console.log("--------------------------------", client.username);
      //setSSN();

      const stationView = this.state.stations.map((stations, i) => {
        return (
          <View key={i}>
            <MapView.Marker {...stations} key={i}>
              <View>
                <FontAwesome
                  name="bicycle"
                  color="black"
                  size={50}
                ></FontAwesome>
              </View>
            </MapView.Marker>
          </View>
        );
      });
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
            {stationView}
          </MapView>
          <View style={styles.locateMe}>
            <TouchableOpacity
              onPress={() =>
                // this.map.animateToRegion({
                //   latitude: this.state.latitude,
                //   longitude: this.state.longitude,
                //   latitudeDelta: 0.005,
                //   longitudeDelta: 0.005
                // })
                this.getStations.bind(this)
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
const mapStateToProps = state => {
  return {
    client: state.client
  };
};
const mapDispatchToState = dispatch => {
  return {
    setEmailRedux: email => {
      dispatch({ type: "setEmail", email: email });
    },
    setSSN: SSN => {
      dispatch({ type: "setSSN", SSN: SSN });
    }
  };
};
export default connect(mapStateToProps, mapDispatchToState)(Home);
