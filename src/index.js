import _ from "lodash";
// import _ from "prettier";

const greeting = () => {
  return console.log("Hello, Hexlet!");
}

const getTheLastElement = () => {
  return console.log(_.last(['one', 'two']));
}

export {greeting, getTheLastElement};