import axios from "axios";

const wikipedia = axios.create({
  baseURL: "https://en.wikipedia.org/w"
});

export default wikipedia;
