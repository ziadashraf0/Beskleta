import Axios from "axios";
export async function getStations() {
  let url = "https://beskletab.herokuapp.com/station/stations";
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
