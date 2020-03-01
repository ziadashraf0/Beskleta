import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import DatePicker from "react-native-datepicker";
import Modal from "react-native-modal";
import { viewProfile, editEmail } from "../services/clientServices";
export default class edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal01: false,
      modal02: false,
      modal03: false,
      modal04: false,
      modal05: false,
      modal06: false,
      // birthDate: "",
      // userName: "",
      // phoneNumber: "",
      // email: "",
      // password: "",
      SSN: 75756566957
    };
  }
  async viewProfile(z) {
    reqBody = {
      SSN: ""
    };
    reqBody = z;
    try {
      console.log("aa");
      result = await viewProfile(reqBody);
      console.log("aa2");
      console.log(result);
      this.state.name;
    } catch (error) {
      if (error.response.status == 404) {
        alert("client was not found");
      }
    }
  }
  async viewProfile() {
    reqBody = {
      SSN: 56565665
    };
    try {
      const result = await viewProfile(reqBody);
      console.log(result);
      this.setState({
        userName: result["userName"],
        password: "********",
        email: result["email"],
        phoneNumber: result["phoneNumber"],
        birthDate: result["birthDate"].slice(0, 10)
      });
    } catch (error) {
      if (error.response.status == 404) {
        alert("client was not found");
      } else if (error.response.status == 400) {
        alert("bad req");
      }
    }
  }
  async editEmail() {
    reqBody = {
      SSN: 56565665
    };
    try {
      const result = await editEmail();
      console.log(result);
      this.setState({
        userName: result["userName"],
        password: "********",
        email: result["email"],
        phoneNumber: result["phoneNumber"],
        birthDate: result["birthDate"].slice(0, 10)
      });
    } catch (error) {
      if (error.response.status == 404) {
        alert("client was not found");
      } else if (error.response.status == 400) {
        alert("bad req");
      }
    }
  }
  async componentDidMount() {
    this.viewProfile();
  }
  render() {
    return (
      <View style={styles.contentContainer}>
        <Modal
          style={{ margin: 0 }}
          onRequestClose={() => this.setState({ modal01: false })}
          animationType="fade"
          isVisible={this.state.modal01}
          transparent={true}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => {
                this.setState({ Name: text });
              }}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TouchableHighlight
              onPress={() => this.setState({ modal01: false })}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Update Name</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <Modal
          style={{ margin: 0 }}
          animationType="fade"
          isVisible={this.state.modal02}
          transparent={true}
          onRequestClose={() => this.setState({ modal02: false })}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => {
                this.setState({ phoneNumb: text });
                console.log("state ", this.state.inputText);
              }}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TouchableHighlight
              onPress={() => this.setState({ modal02: false })}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Update Mobile Number</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          isVisible={this.state.modal03}
          transparent={true}
          style={{ margin: 0 }}
          onRequestClose={() => this.setState({ modal03: false })}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => {
                this.setState({ Email: text });
                console.log("state ", this.state.inputText);
              }}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TouchableHighlight
              onPress={() => this.setState({ modal03: false })}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Update Email</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          isVisible={this.state.modal04}
          transparent={true}
          style={{ margin: 0 }}
          onRequestClose={() => this.setState({ modal04: false })}
        >
          <View style={styles.modalView}>
            <TextInput
              style={styles.textInput}
              onChangeText={text => {
                this.setState({ Password: text });
                console.log("state ", this.state.inputText);
              }}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TouchableHighlight
              onPress={() => this.setState({ modal04: false })}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Update Password</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <Modal
          animationType="fade"
          isVisible={this.state.modal05}
          transparent={true}
          style={{ margin: 0 }}
          onRequestClose={() => this.setState({ modal05: false })}
        >
          <View style={styles.modalView}>
            <DatePicker
              style={{ width: 200 }}
              date={this.state.date}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: "absolute",
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36
                }
                // ... You can check the source to find the other keys.
              }}
              onDateChange={date => {
                this.setState({ date: date });
              }}
            />
            <TouchableHighlight
              onPress={() => this.setState({ modal05: false })}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Update BD</Text>
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableOpacity onPress={() => this.setState({ modal01: true })}>
          <Text style={styles.text}>Name</Text>
          <Text style={{ color: "gray", marginLeft: 10 }}>
            {this.state.userName}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ modal02: true })}>
          <Text style={styles.text}>Mobile number</Text>
          <Text style={{ color: "gray", marginLeft: 10 }}>
            {this.state.phoneNumber}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ modal03: true })}>
          <Text style={styles.text}>Email</Text>
          <Text style={{ color: "gray", marginLeft: 10 }}>
            {" "}
            {this.state.email}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ modal04: true })}>
          <Text style={styles.text}>Password</Text>
          <Text style={{ color: "gray", marginLeft: 10 }}>
            {" "}
            {this.state.password}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ modal05: true })}>
          <Text style={styles.text}>Birth date</Text>
          <Text style={{ color: "gray", marginLeft: 10 }}>
            {" "}
            {this.state.birthDate}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    flex: 1
  },
  item: {
    flexDirection: "row",

    borderBottomColor: "grey",
    alignItems: "center"
  },
  marginLeft: {
    marginLeft: 5
  },
  menu: {
    width: 20,
    height: 2,
    backgroundColor: "#111",
    margin: 2,
    borderRadius: 3
  },
  text: {
    marginVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10
  },

  textInput: {
    width: "90%",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 30,
    borderColor: "gray",
    borderBottomWidth: 2,
    fontSize: 16
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  touchableHighlight: {
    backgroundColor: "#16A2DA",
    alignItems: "center",
    justifyContent: "center",

    padding: 20,
    marginTop: 50,
    width: "90%",
    height: "10%"
  }
});
