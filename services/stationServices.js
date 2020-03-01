import Axios from "axios";
export async function getStations() {
  let url = "http://192.168.43.3:4000/station/stations";
  let options = {
    method: "GET",
    url: url
  };
  let response = await Axios(options);

  if (response) {
    let info = await response.data;
    return info;
  }
}
