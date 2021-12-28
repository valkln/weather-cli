import chalk from "chalk";
import dedent from "dedent-js";

const printErr = (err) => {
  console.error(err);
};
const printSuccess = (msg) => {
  console.log(chalk.bgGreen("Success ") + msg);
};
const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("Help ")}
  no params - weather log
  -s [CITY] - sets city
  -h help
  -t [API-KEY] sets token
  `
  );
};
export { printErr, printSuccess, printHelp };
