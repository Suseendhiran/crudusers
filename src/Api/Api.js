import axios from "axios";

export default axios.create({
  baseURL: "https://619502cf74c1bd00176c6acc.mockapi.io/",
  responseType: "json",
});
