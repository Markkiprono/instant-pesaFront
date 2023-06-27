import axios from "axios";
const user = JSON.parse(localStorage.getItem("user"));

const token = user?.token;

const Headers = {
  authorization: `Bearer ${token}`,
  "Access-Control-Allow-Origin": "*",
};
export default axios.create({
  baseURL: "https://backend.joseadmin.pro",
  headers: Headers,
});
