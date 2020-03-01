import { stringify } from "querystring";
import http from "./httpService";
import Axios from "axios";

export function clientRegister(reqBody) {
  return http.post(
    "http://192.168.43.3:4000/client/signup",
    stringify(reqBody)
  );
}
export async function clientLogin(reqBody) {
  console.log(reqBody);

  return await http.post(
    "http://192.168.43.3:4000/client/login",
    stringify(reqBody)
  );
}
export async function emailCheck(reqBody) {
  console.log(reqBody);

  return await http.post(
    "http://192.168.43.3:4000/client/emailCheck",
    stringify(reqBody)
  );
}
export async function editEmail() {
  let url = "http://192.168.43.3:4000/client/editEmail";
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
  let url = "http://192.168.43.3:4000/client/editUserName";
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
  let url = "http://192.168.43.3:4000/client/editBirthDate";
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
  let url = "http://192.168.43.3:4000/client/editPassword";
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
  let url = "http://192.168.43.3:4000/client/editPhoneNumber";
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
  let url = "http://192.168.43.3:4000/client/viewProfile";
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
