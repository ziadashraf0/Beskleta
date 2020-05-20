import { stringify } from "querystring";
import http from "./httpService";
export async function viewNotifications(reqBody) {
  let url = "https://beskletab.herokuapp.com/owner/viewNotifications";
  let options = {
    method: "POST",
    url: url,
    data: reqBody
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export function ownerRegister(reqBody) {
  return http.post(
    "https://beskletab.herokuapp.com/owner/signup",
    stringify(reqBody)
  );
}
export async function ownerLogin(reqBody) {
  console.log(reqBody);

  return await http.post(
    "https://beskletab.herokuapp.com/owner/login",
    stringify(reqBody)
  );
}

export async function emailCheck(reqBody) {
  console.log(reqBody);

  return await http.post(
    "https://beskletab.herokuapp.com/owner/emailCheck",
    stringify(reqBody)
  );
}
export async function editEmail() {
  let url = "https://beskletab.herokuapp.com/owner/editEmail";
  let options = {
    method: "PUT",
    url: url
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function editUserName() {
  let url = "https://beskletab.herokuapp.com/owner/editUserName";
  let options = {
    method: "PUT",
    url: url
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function editBirthDate() {
  let url = "https://beskletab.herokuapp.com/owner/editBirthDate";
  let options = {
    method: "PUT",
    url: url
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function editPassword() {
  let url = "https://beskletab.herokuapp.com/owner/editPassword";
  let options = {
    method: "PUT",
    url: url
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function editPhoneNumber(reqBody) {
  let url = "https://beskletab.herokuapp.com/owner/editPhoneNumber";
  let options = {
    method: "PUT",
    url: url,
    data: reqBody
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
export async function viewProfile(reqBody) {
  let url = "https://beskletab.herokuapp.com/owner/viewProfile";
  let options = {
    method: "POST",
    url: url,
    data: reqBody
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
