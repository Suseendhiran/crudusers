import axios from "axios";

export default axios.create({
  baseURL: "https://fav-celebs.herokuapp.com/",
  responseType: "json",
  headers: { Authorization: localStorage.getItem("token") },
});
