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
import {
  viewProfile,
  editEmail,
  editUserName,
  editPhoneNumber,
  editBirthDate,
  editPassword
} from "../services/clientServices";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export function validateEmail(email) {
  var regex = /\S+@\S+\.\S+/;

  if (regex.test(email) == 0) {
    alert("Email is not vailed");
    return false;
  }

  return true;
}
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
      newPassword: "",
      SSN: 16446
    };
  }

  async viewProfile() {
    reqBody = {
      SSN: 16446
    };
    try {
      const result = await viewProfile(reqBody);

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

  async editBirthDate() {
    reqBody = {
      birthDate: "",
      SSN: 16446
    };

    try {
      reqBody.birthDate = this.state.birthDate;
      this.setState({ modal05: false });

      await editBirthDate();
    } catch (error) {
      if (error.response.status == 404) {
        alert("client was not found");
      } else if (error.response.status == 400) {
        alert("Bad Request email already in use");
      }
    }
  }
  async editEmail() {
    reqBody = {
      email: "",
      SSN: 16446
    };
    if (validateEmail(this.state.email)) {
      try {
        reqBody.email = this.state.email;
        this.setState({ modal03: false });

        await editEmail();
      } catch (error) {
        if (error.response.status == 404) {
          alert("client was not found");
        } else if (error.response.status == 400) {
          alert("Bad Request email already in use");
        }
      }
    }
  }
  async editUserName() {
    reqBody = {
      userName: "",
      SSN: 16446
    };
    try {
      reqBody.userName = this.state.userName;
      this.setState({ modal01: false });
      const result = await editUserName();
      console.log(result);
    } catch (error) {
      if (error.response.status == 404) {
        alert("client was not found");
      } else if (error.response.status == 400) {
        alert("Bad Request email already in use");
      }
    }
  }
  async editPassword() {
    reqBody = {
      password: "",
      SSN: 16446,
      newPassword: ""
    };
    try {
      reqBody.password = this.state.password;
      reqBody.newPassword = this.state.newPassword;
      console.log(reqBody);
      this.setState({ modal04: false });
      await editPassword();
    } catch (error) {
      if (error.response.status == 404) {
        alert("client was not found");
      } else if (error.response.status == 400) {
        alert("Bad Request ");
      }
    }
  }

  async editPhoneNumber() {
    reqBody = {
      phoneNumber: "",
      SSN: 16446
    };
    try {
      reqBody.phoneNumber = this.state.phoneNumber;
      console.log(reqBody);
      this.setState({ modal02: false });
      await editPhoneNumber();
    } catch (error) {
      if (error.response.status == 404) {
        alert("client was not found");
      } else if (error.response.status == 400) {
        alert("Bad Request ");
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
              defaultValue={this.state.userName}
              onChangeText={text => {
                this.setState({ userName: text });
              }}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TouchableHighlight
              onPress={() => this.editUserName()}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Update Name</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.setState({ modal01: false })}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Cancel</Text>
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
              defaultValue={this.state.phoneNumber}
              onChangeText={text => {
                this.setState({ phoneNumber: text });
              }}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TouchableHighlight
              onPress={() => this.editPhoneNumber()}
              //onPress={() => this.setState({ modal02: false })}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Update Mobile Number</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.setState({ modal02: false })}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Cancel</Text>
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
              defaultValue={this.state.email}
              style={styles.textInput}
              onChangeText={text => {
                this.setState({ email: text });
                console.log("state ", this.state.inputText);
              }}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TouchableHighlight
              onPress={() => this.editEmail()}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Update Email</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.setState({ modal03: false })}
              style={[
                styles.touchableHighlight,
                { backgroundColor: "#16A2DA" }
              ]}
              underlayColor={"#f1f1f1"}
            >
              <Text style={styles.text}>Cancel</Text>
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
              placeholder="Enter your old password"
              onChangeText={text => {
                this.setState({ password: text });
                console.log("state ", this.state.inputText);
              }}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Enter your new password"
              onChangeText={text => {
                this.setState({ newPassword: text });
              }}
              editable={true}
              multiline={false}
              maxLength={200}
            />
            <TouchableHighlight
              onPress={() => this.editPassword()}
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
              date={this.state.birthDate}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
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
                this.setState({ birthDate: date });
              }}
            />
            <TouchableHighlight
              onPress={() => this.editBirthDate()}
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
          <Text style={styles.text}>User Name</Text>
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
          <Text style={{ color: "gray", marginLeft: 10 }}>*******</Text>
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
