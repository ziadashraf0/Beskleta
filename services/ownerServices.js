import { stringify } from "querystring";
import http from "./httpService";

export function ownerRegister(reqBody) {
  return http.post("http://192.168.43.3:4000/owner/signup", stringify(reqBody));
}
export async function ownerLogin(reqBody) {
  console.log(reqBody);

  return await http.post(
    "http://192.168.43.3:4000/owner/login",
    stringify(reqBody)
  );
}
