import chalk from "chalk";
import dedent from "dedent-js";

const printErr = (err) => {
  console.log(chalk.bgRed(err));
};
const printSuccess = (msg) => {
  console.log(chalk.bgGreen("Success ") + msg);
};
const printHelp = () => {
  console.log(dedent`${chalk.bgCyan("Help ")}
  no params - weather log
  -s [CITY] - sets city
  -h help
  -t [API-KEY] sets token
  `);
};
const printWeather = (data) => {
  console.log(dedent`
  ${chalk.bgBlue("Weather")} in ${data.name} city:
  ${data.weather[0].description}
  Temperature: ${data.main.temp}
  Feels like: ${data.main.feels_like}
  wind speed: ${data.wind.speed}
  `);
};
export { printErr, printSuccess, printHelp, printWeather };
