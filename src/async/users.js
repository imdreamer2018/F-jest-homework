import axios from "axios";

export function getUsers() {
  return axios.get("/users.json").then((response) => response.data);
}
