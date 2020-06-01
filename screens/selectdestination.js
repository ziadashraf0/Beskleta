import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
  } from "react-native-responsive-screen";
import { connect } from "react-redux";
import { getStations } from "../services/stationServices";
//import { selectDestinationStation } from "../services/clientServices";
import { selectDestinationStation } from "../services/clientServices";

class Selectdestination extends React.Component {
     constructor(props) {
        super(props);
       // this.state = { stations: [] };
      }
      state={stations:[]};
      
    
      async componentDidMount() {
          
        const {client}=this.props
        this.setState({userName:client.username})
        this.setState({stationName:client.stationName})

        const { navigation } = this.props;
        try {
          const stations = await getStations();
          var z = 0;
          for (x in stations) {
            this.setState({
              stations: [
                ...this.state.stations,
                {
                  key: z + 1,
    
                  name: stations[z]["name"]
                }
              ]
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
  
  async selectDestination(state,stationName) {
        reqBody = {
        userName: this.state.userName,
      destinationStationName: stationName
         
    };
    
    console.log(reqBody.destinationStationName)
    console.log(this.state.userName)

    try {
      result = await selectDestinationStation(reqBody);
      alert("destination selected")
    } catch (error) {
      if (error.response.status == 400) {
        alert("Bad Request");
      } else if(error.response.status==404){
        console.log(error.response.data)
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
                <TouchableOpacity
                onPress={() => this.selectDestination(this.state,item.name)}
              >
                <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
              )}
            />
          </View>
        );
      }
    }
    const styles = StyleSheet.create({
    item: {
        backgroundColor: "#16A2DA",
        marginTop: hp("5%"),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#16A2DA",
        padding: hp("5%"),
        width: wp("60%")
      },
      container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
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
          export default connect(mapStateToProps, mapDispatchToState)(Selectdestination);
    
    