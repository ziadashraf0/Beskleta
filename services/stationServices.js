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
export async function viewStationBikes() {
  let url = "https://beskletab.herokuapp.com/bike/viewStationBikes";
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
