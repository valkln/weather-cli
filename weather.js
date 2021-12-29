#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import {
  printHelp,
  printSuccess,
  printErr,
  printWeather,
} from "./services/log.service.js";
import { getKeyValue, saveKeyValue } from "./services/store.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printErr("No token set");
    return;
  }
  try {
    await saveKeyValue("token", token);
    printSuccess("token saved");
  } catch (e) {
    printErr(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printErr("No city set");
    return;
  }
  try {
    await saveKeyValue("city", city);
    printSuccess("city saved");
  } catch (e) {
    printErr(e.message);
  }
};

const getForecast = async () => {
  try {
    const city = await getKeyValue("city");
    const weather = await getWeather(city);
    printWeather(weather);
  } catch (err) {
    if (err?.response?.status == 404) {
      printErr("City not found");
    } else if (err?.response?.status == 401) {
      printErr("Invalid token");
    } else {
      printErr(err.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return printHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForecast();
};

initCLI();
