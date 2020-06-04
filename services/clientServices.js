import { stringify } from "querystring";
import http from "./httpService";
import Axios from "axios";

export function clientRegister(reqBody) {
  return http.post(
    "https://beskletab.herokuapp.com/client/signup",
    stringify(reqBody)
  );
}
export async function clientLogin(reqBody) {
  console.log(reqBody);

  return await http.post(
    "https://beskletab.herokuapp.com/client/login",
    stringify(reqBody)
  );
}
export async function emailCheck(reqBody) {
  console.log(reqBody);

  return await http.post(
    "https://beskletab.herokuapp.com/client/emailCheck",
    stringify(reqBody)
  );
}
export async function editEmail() {
  let url = "https://beskletab.herokuapp.com/client/editEmail";
  let options = {
    method: "PUT",
    url: url,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function editUserName() {
  let url = "https://beskletab.herokuapp.com/client/editUserName";
  let options = {
    method: "PUT",
    url: url,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function editBirthDate() {
  let url = "https://beskletab.herokuapp.com/client/editBirthDate";
  let options = {
    method: "PUT",
    url: url,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function editPassword() {
  let url = "https://beskletab.herokuapp.com/client/editPassword";
  let options = {
    method: "PUT",
    url: url,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function editPhoneNumber(reqBody) {
  let url = "https://beskletab.herokuapp.com/client/editPhoneNumber";
  let options = {
    method: "PUT",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function viewProfile(reqBody) {
  let url = "https://beskletab.herokuapp.com/client/viewProfile";
  let options = {
    method: "POST",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function viewNotifications(reqBody) {
  let url = "https://beskletab.herokuapp.com/client/viewNotifications";
  let options = {
    method: "POST",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}

export async function startRide(reqBody) {
  let url = "https://beskletab.herokuapp.com/client/startRide";
  let options = {
    method: "POST",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function deleteNotification(reqBody) {
  let url = "https://beskletab.herokuapp.com/client/deleteNotification";
  let options = {
    method: "POST",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function rejectDependent(reqBody) {
  let url = "https://beskletab.herokuapp.com/client/rejectDependentRequest";
  let options = {
    method: "PUT",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function requestRide() {
  console.log(reqBody);
  let url = "https://beskletab.herokuapp.com/client/requestRide";
  let options = {
    method: "POST",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function activateAccount() {
  let url = "https://beskletab.herokuapp.com/client/activateAccount";
  let options = {
    method: "PUT",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function confirmingDependent(reqBody) {
  alert("hammo");
  let url = "https://beskletab.herokuapp.com/client/confirmingDependent";
  let options = {
    method: "PUT",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function activateDependentAccount() {
  let url = "https://beskletab.herokuapp.com/client/activateDependentAccount";
  let options = {
    method: "PUT",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function viewRides() {
  let url = "https://beskletab.herokuapp.com/client/viewRides";
  let options = {
    method: "POST",
    url: url,
    data: reqBody,
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
