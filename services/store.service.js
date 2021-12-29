import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { promises } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = join(__dirname, "../weather-data.json");
const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (e) {
    return false;
  }
};
export { saveKeyValue, getKeyValue };
