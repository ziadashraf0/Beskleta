import { stringify } from "querystring";
import http from "./httpService";

export function clientRegister(reqBody) {
  return http.post(
    "http://192.168.1.158:4000/client/signup",
    stringify(reqBody)
  );
}
export async function clientLogin(reqBody) {
  console.log(reqBody);

  return await http.post(
    "http://192.168.1.158:4000/client/login",
    stringify(reqBody)
  );
}
export async function emailCheck(reqBody) {
  console.log(reqBody);

  return await http.post(
    "http://192.168.1.158:4000/client/emailCheck",
    stringify(reqBody)
  );
}
