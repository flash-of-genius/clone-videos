import axios from "axios";

const KEY = "AIzaSyCmM6BmBgJzonLvWkwR9Cp7-aswQ5jYiKQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
