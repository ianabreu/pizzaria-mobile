import axios from "axios";

const api = axios.create({
  baseURL: "https://api-pedefacil.onrender.com/",
});

export { api };
