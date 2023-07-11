import axios from "axios";
const BASEURL = "https://www.googleapis.com/customsearch/v1";
const API_KEY = "AIzaSyCSTphnwrs5TwlthgdgKjZXvQ-nlPxCldU";
const cx = "7646049190fa34691";
export const getApi = async (query) => {
  const fullURL = `${BASEURL}?key=${API_KEY}&cx=${cx}&q=${query}`;
  const response = await axios.get(fullURL);
  return response.data;
};
