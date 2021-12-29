import axios from "axios";
import https from "https";
import { getKeyValue } from "./store.service.js";
const getWeather = async (city) => {
  const token = await getKeyValue("token");
  if (!token) {
    throw new Error("API KEY not defined! Define with -t [API-KEY]");
  }
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        units: "metric",
      },
    }
  );
  return data;
};
export { getWeather };
