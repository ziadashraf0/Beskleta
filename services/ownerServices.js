import { stringify } from "querystring";
import http from "./httpService";

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
